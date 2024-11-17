"use client"
import React, { useEffect, useState } from 'react';

export default function Page() {
    const [images, setImages] = useState<string[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchImages = async () => {
            try {
                const response = await fetch("http://nksw44kswkc8sswkg8sgcck4.135.236.104.194.sslip.io/gallery/images");
                if (!response.ok) throw new Error("Failed to fetch images");
                
                const data = await response.json();
                setImages(data.images || []);
                setLoading(false);
            } catch (err) {
                setError(err instanceof Error ? err.message : "Unknown error");
                setLoading(false);
            }
        };

        fetchImages();
    }, []);

    if (loading) return <p className="text-center text-gray-500">Loading images...</p>;
    if (error) return <p className="text-center text-red-500">Error: {error}</p>;

    return (
        <div className="container mx-auto px-4 py-40">
            <h2 className="text-2xl font-semibold text-center mb-6">Image Gallery</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {images.map((image, index) => (
                    <div key={index} className="border rounded-lg overflow-hidden shadow-lg">
                        <img
                            src={image}
                            alt={`Image ${index + 1}`}
                            className="w-full h-48 object-cover"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};