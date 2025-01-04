'use client';

import { useEffect, useState } from 'react';

interface ArticleData {
    title: string;
    slug: string;
    seoDescription: string;
    seoTitle: string;
    contentPageId: string;
    id: string;
    lastUpdated: string;
}

const API_URL = 'https://best-lviv-web-api.azurewebsites.net';

export default function Page() {
    const [error, setError] = useState<string | null>(null);
    const [articles, setArticles] = useState<ArticleData[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        fetch(`${API_URL}/api/blog/articles-preview`)
            .then(res => res.json())
            .then(data => {
                setArticles(data);
                setLoading(false);
            })
            .catch((error) => {
                console.error('Error fetching articles:', error);
                setError('Failed to fetch articles.');
                setLoading(false);
            });
    }, []);

    const handleDeleteArticle = async (articleId: string) => {
        if (!confirm("Are you sure you want to delete this article?")) return;

        try {
            const response = await fetch(`${API_URL}/api/blog/articles/${articleId}`, {
                method: 'DELETE',
            });

            if (!response.ok) {
                throw new Error(`Failed to delete article: ${response.statusText}`);
            }

            setArticles(articles.filter(article => article.id !== articleId));
        } catch (err: any) {
            setError(err.message || "Error deleting article.");
            console.error("Error deleting article:", err);
        }
    };

    const handleArticlesSync = async () => {
        setError(null);
        try {
            const response = await fetch(`${API_URL}/api/blog/sync-articles`, {
                method: 'POST',
            });

            if (!response.ok) {
                throw new Error(`Error syncing data: ${response.statusText}`);
            }

            alert("Статті успішно оновлено! Перезавантаж сторінку щоб побачити оновлення.");
        } catch (err: any) {
            setError(err.message || 'An unexpected error occurred');
            console.error("Error syncing Notion data:", err);
        }
    };

    return (
        <div className="min-h-screen py-40 bg-gray-100">
            <div className="max-w-7xl mx-auto">
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-3xl font-bold text-gray-800">Articles</h1>
                    <button
                        onClick={handleArticlesSync}
                        className="px-4 py-2 text-white bg-red-600 hover:bg-red-700 rounded-lg shadow transition"
                    >
                        Fetch Data
                    </button>
                </div>

                {error && (
                    <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
                        {error}
                    </div>
                )}

                {loading ? (
                    <p className="text-center text-gray-500">Loading articles...</p>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {articles.map((article) => (
                            <div key={article.id} className="relative p-5 bg-white shadow-md rounded-lg transition hover:shadow-lg">
                                <a href={`/blog/${article.contentPageId}`}>
                                    <h2 className="text-xl font-semibold text-gray-800">{article.title}</h2>
                                    <p className="text-gray-600 mt-2">{article.seoDescription}</p>
                                    <div className="mt-3 text-sm text-gray-500">
                                        Last updated: {new Date(article.lastUpdated).toLocaleDateString()}
                                    </div>
                                </a>
                                <button
                                    onClick={() => handleDeleteArticle(article.id)}
                                    className="absolute top-3 right-3 px-2 py-1 text-xs text-white bg-red-500 hover:bg-red-600 rounded transition"
                                >
                                    Delete
                                </button>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
