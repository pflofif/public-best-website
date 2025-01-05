'use client';

import { useEffect, useState, useRef } from 'react';
import { useParams } from 'next/navigation';

const API_URL = 'https://best-lviv-web-api.azurewebsites.net';

export default function ArticlePage() {
    const { id } = useParams();
    const [articleContent, setArticleContent] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const iframeRef = useRef<HTMLIFrameElement | null>(null);

    useEffect(() => {
        if (!id) return;

        const fetchArticle = async () => {
            try {
                const response = await fetch(`${API_URL}/api/blog/articles/${id}`);

                if (!response.ok) {
                    throw new Error(`Error fetching article: ${response.statusText}`);
                }

                const data = await response.json();
                setArticleContent(data.htmlContent);
            } catch (err: any) {
                setError(err.message || 'An unexpected error occurred');
            } finally {
                setLoading(false);
            }
        };

        fetchArticle();
    }, [id]);

    useEffect(() => {
        const resizeIframe = () => {
            if (iframeRef.current) {
                const iframe = iframeRef.current;
                const iframeDocument = iframe.contentDocument || iframe.contentWindow?.document;
                if (iframeDocument) {
                    iframe.style.height = `${iframeDocument.documentElement.scrollHeight}px`;
                }
            }
        };

        if (iframeRef.current) {
            iframeRef.current.onload = () => resizeIframe();
        }
    }, [articleContent]);

    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500 border-solid"></div>
            </div>
        );
    }

    if (error) {
        return <p className="py-40 text-red-500 text-center">{error}</p>
    }

    return (
        <div className="min-h-screen pt-40 pb-16 flex justify-center">
            {articleContent && (
                <iframe
                    ref={iframeRef}
                    className={`w-full max-w-4xl mx-48 border-none overflow-hidden`}
                    sandbox="allow-scripts allow-same-origin"
                    srcDoc={`
                        <html>
                            <head>
                                <meta charset="UTF-8">
                                <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap">
                                
                                <style>
                                    /* Global Styles */
                                    html, body {
                                        margin: 0;
                                        padding: 0;
                                        overflow: hidden;
                                        font-family: 'Inter', sans-serif;
                                        -webkit-print-color-adjust: exact;
                                        max-width: 900px;
                                        line-height: 1.5;
                                        color: rgb(55, 53, 47);
                                    }

                                    /* Typography */
                                    h1, h2, h3 {
                                        font-weight: 600;
                                        margin-bottom: 0.5em;
                                    }

                                    h1 {
                                        font-size: 2em;
                                        margin-top: 1em;
                                    }

                                    h2 {
                                        font-size: 1.5em;
                                        margin-top: 1em;
                                    }

                                    h3 {
                                        font-size: 1.25em;
                                        margin-top: 0.75em;
                                    }

                                    p {
                                        margin-top: 0.5em;
                                        margin-bottom: 0.5em;
                                    }

                                    blockquote {
                                        font-size: 1.25em;
                                        margin: 1em 0;
                                        padding-left: 1em;
                                        border-left: 3px solid rgb(55, 53, 47);
                                    }

                                    /* Lists */
                                    ul, ol {
                                        margin: 1em 0;
                                        padding-left: 1.5em;
                                    }

                                    li {
                                        margin-bottom: 0.5em;
                                    }

                                    /* Columns */
                                    .columns, .column-list {
                                        display: flex;
                                        flex-wrap: wrap;
                                        gap: 16px;
                                        margin: 1em 0;
                                    }

                                    .column {
                                        flex: 1;
                                        padding: 0 1em;
                                    }

                                    /* Responsive Layout */
                                    @media (max-width: 768px) {
                                        .columns {
                                            flex-direction: column;
                                            gap: 8px;
                                        }

                                        .column {
                                            max-width: 100%;
                                            padding: 0;
                                        }
                                        
                                        blockquote {
                                            font-size: 1em;
                                        }
                                    }

                                    figure {
                                        margin: 1em 0;
                                        text-align: center;
                                    }

                                    img {
                                        max-width: 100%;
                                        height: auto;
                                        display: block;
                                        margin: 1em auto;
                                    }

                                    figcaption {
                                        font-size: 0.875em;
                                        color: rgba(55, 53, 47, 0.6);
                                        margin-top: 0.5em;
                                    }
                                </style>
                            </head>
                            <body>${articleContent}</body>
                        </html>
                    `}
                />
            )}
        </div>
    );
}
