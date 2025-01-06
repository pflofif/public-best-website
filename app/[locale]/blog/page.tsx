import FailedMessage from "../components/FailedMessage";

export default function Page() {
    return (
        <FailedMessage headerText="Робота над цим розділом ще триває😢" text="" />
    )
}

// 'use client';

// import { useEffect, useState } from "react";
// import { maruipol_bold } from '../../fonts/fonts';
// import Link from "next/link";

// interface ArticleData {
//     title: string;
//     slug: string;
//     seoDescription: string;
//     seoTitle: string;
//     contentPageId: string;
//     id: string;
//     lastUpdated: string;
// }

// const API_URL = 'https://best-lviv-web-api.azurewebsites.net';

// export default function Page() {
//     const [error, setError] = useState<string | null>(null);
//     const [articles, setArticles] = useState<ArticleData[]>([]);
//     const [loading, setLoading] = useState<boolean>(true);

//     useEffect(() => {
//         fetch(`${API_URL}/api/blog/articles-preview`)
//             .then(res => res.json())
//             .then(data => {
//                 setArticles(data);
//                 setLoading(false);
//             })
//             .catch((error) => {
//                 console.error('Error fetching articles:', error);
//                 setError('Failed to fetch articles.');
//                 setLoading(false);
//             });
//     }, []);

//     if (loading) {
//         return (
//             <div className="flex justify-center items-center min-h-screen">
//                 <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500 border-solid"></div>
//             </div>
//         );
//     }

//     if (error) {
//         return <p className="py-40 text-red-500 text-center">{error}</p>;
//     }

//     return (
//         <div className="min-h-screen bg-gray-100 py-40 px-4 lg:px-20">
//             <h1 className={`${maruipol_bold.className} text-3xl lg:text-5xl lg:font-bold font-bold lg:mb-24 mb-6 text-center relative`}>
//                 <span className="text-best-blue">Блог</span>
//             </h1>

//             {articles.length === 0 ? (
//                 <p className="text-center text-gray-500 text-lg">Наразі немає доступних статей.</p>
//             ) : (
//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//                     {articles.map((article) => (
//                         <Link key={article.contentPageId} href={`/blog/${article.contentPageId}`}>
//                             <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer">
//                                 <div className="p-6">
//                                     <h2 className="text-2xl font-semibold text-gray-900">{article.title}</h2>
//                                     <p className="text-gray-600 mt-2">{article.seoDescription}</p>
//                                 </div>
//                                 <div className="px-6 pb-4">
//                                     <p className="text-sm text-gray-500">
//                                         Оновлено: {new Date(article.lastUpdated).toLocaleDateString()}
//                                     </p>
//                                 </div>
//                             </div>
//                         </Link>
//                     ))}
//                 </div>
//             )}
//         </div>
//     );
// }
