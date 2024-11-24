'use client';

import { ApiError } from 'next/dist/server/api-utils';
import { useState, useEffect } from 'react';

type RegistrationType = {
    _id?: string;
    isActive: boolean;
    urlToForm: string;
};

const API_URL = 'https://localhost:44355';

export default function RegistrationPage() {
    const [registration, setRegistration] = useState<RegistrationType | null>(null);
    const [formData, setFormData] = useState<RegistrationType>({
        isActive: false,
        urlToForm: '',
    });

    useEffect(() => {
        fetch(`${API_URL}/api/registration`)
            .then((response) => response.json())
            .then((data) => {
                setRegistration(data);
                setFormData({
                    isActive: data.isActive,
                    urlToForm: data.urlToForm,
                });
            })
            .catch((error) => console.error('Error fetching registration:', error));
    }, []);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        fetch(`${API_URL}/api/registration`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
            .then((response) => response.json())
            .then((updatedRegistration) => {
                setRegistration(updatedRegistration);
                alert("Дані про реєстрацію оновлено!")
            })
            .catch((error) => console.error('Error updating registration:', error));
    };

    if (!registration) {
        return <div>Loading...</div>;
    }

    return (
        <div className="min-h-screen bg-gray-100 py-36 px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-md">
                <h1 className="text-2xl font-semibold text-gray-800 mb-6">Manage Registration</h1>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Form URL</label>
                        <input
                            type="text"
                            name="urlToForm"
                            placeholder="URL to Form"
                            value={formData.urlToForm}
                            onChange={handleInputChange}
                            required
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                    </div>
                    <div className="flex items-center">
                        <input
                            type="checkbox"
                            name="isActive"
                            checked={formData.isActive}
                            onChange={handleInputChange}
                            className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                        />
                        <label className="ml-2 block text-sm text-gray-900">Is Active</label>
                    </div>
                    <button
                        type="submit"
                        className="w-full inline-flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        Save Changes
                    </button>
                </form>
            </div>
        </div>
    );
}
