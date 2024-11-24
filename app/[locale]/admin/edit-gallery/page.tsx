"use client"
import React, { useEffect, useState } from 'react';

const API_URL = 'https://localhost:44355';

type AdminImage = {
    id: string;
    imageUrl: string;
}

export default function Page() {
    const [images, setImages] = useState<AdminImage[]>([]);

    useEffect(() => {
        const fetchImages = async () => {
            const response = await fetch(`${API_URL}/api/gallery/admin-images`);
            if (!response.ok) throw new Error("Failed to fetch images");

            const data = await response.json();
            setImages(data || []);
        };

        fetchImages();
    }, []);

    return (
        <div className="py-40">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 px-8">
                {images.map((image, index) => (
                    <div key={index} className="border rounded-lg overflow-hidden shadow-lg">
                        <img
                            src={image.imageUrl}
                            alt={`Image ${index + 1}`}
                            className="w-full object-cover"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};