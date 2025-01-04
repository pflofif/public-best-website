'use client';

import { useEffect, useState, useRef } from 'react';
import { useParams } from 'next/navigation';

const API_URL = 'http://localhost:5175';

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
        <div className="min-h-screen pt-24 flex justify-center">
            {articleContent && (
                <iframe
                    ref={iframeRef}
                    className="w-full max-w-4xl border-none overflow-hidden"
                    sandbox="allow-scripts allow-same-origin"
                    srcDoc={`
                        <html>
                            <head>
                                <style>
                                    html, body {
                                        margin: 0;
                                        padding: 0;
                                        overflow: hidden;
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
