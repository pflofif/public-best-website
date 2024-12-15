"use client"
import React, { useEffect, useState } from 'react';
import { maruipol_bold } from '../../fonts/fonts';
import Image from 'next/image';

const API_URL = 'https://best-lviv-web-api.azurewebsites.net';

export default function Page() {
    const [images, setImages] = useState<string[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchImages = async () => {
            try {
                const response = await fetch(`${API_URL}/api/gallery/get-all-images-urls`);
                if (!response.ok) throw new Error("Failed to fetch images");

                const data = await response.json();
                setImages(data || []);
                setLoading(false);
            } catch (err) {
                setError(err instanceof Error ? err.message : "Unknown error");
                setLoading(false);
            }
        };

        fetchImages();
    }, []);

    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500 border-solid"></div>
            </div>
        );
    }

    if (error) return <p className="text-center text-red-500">Error: {error}</p>;

    return (
        <div className="py-40">
            <h1 className={`${maruipol_bold.className} text-3xl lg:text-5xl lg:font-bold font-bold lg:mb-24 mb-6 text-center relative`}>
                <span className="text-best-blue">Галерея</span>
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-8">
                {images.map((image, index) => (
                    <div key={index} className="border rounded-lg overflow-hidden shadow-lg">
                        <img
                            src={image}
                            alt={`Image ${index + 1}`}
                            className="w-full object-cover"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};