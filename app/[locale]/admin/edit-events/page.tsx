'use client';

import { useState, useEffect } from 'react';

type EventType = {
    _id: string;
    name: string;
    description: string;
    data: string; // Base64 encoded image
    isInProgress: boolean;
};

export default function EventsPage() {
    const [events, setEvents] = useState<EventType[]>([]);
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        data: '', // Image as Base64
        isInProgress: false,
    });
    const [imagePreview, setImagePreview] = useState<string | null>(null);
    const [isEditing, setIsEditing] = useState<boolean>(false);
    const [editId, setEditId] = useState<string | null>(null);

    useEffect(() => {
        fetch('/api/events')
            .then((response) => response.json())
            .then((data) => setEvents(data))
            .catch((error) => console.error('Error fetching events:', error));
    }, []);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked, files } = e.target;
        if (name === 'data' && files && files[0]) {
            const reader = new FileReader();
            reader.onloadend = () => {
                const base64String = reader.result as string;
                setFormData({ ...formData, data: base64String });
                setImagePreview(base64String);
            };
            reader.readAsDataURL(files[0]);
        } else {
            setFormData({
                ...formData,
                [name]: type === 'checkbox' ? checked : value,
            });
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (isEditing && editId) {
            fetch(`/api/events/${editId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            })
                .then((response) => response.json())
                .then((updatedEvent) => {
                    setEvents(events.map((event) => (event._id === editId ? updatedEvent : event)));
                    resetForm();
                })
                .catch((error) => console.error('Error updating event:', error));
        } else {
            fetch('/api/events', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            })
                .then((response) => response.json())
                .then((newEvent) => {
                    setEvents([...events, newEvent]);
                    resetForm();
                })
                .catch((error) => console.error('Error adding event:', error));
        }
    };

    const handleEdit = (event: EventType) => {
        setFormData({
            name: event.name,
            description: event.description,
            data: event.data,
            isInProgress: event.isInProgress,
        });
        setImagePreview(event.data);
        setIsEditing(true);
        setEditId(event._id);
    };

    const handleDelete = (id: string) => {
        fetch(`/api/events/${id}`, {
            method: 'DELETE',
        })
            .then((response) => {
                if (response.ok) {
                    setEvents(events.filter((event) => event._id !== id));
                }
            })
            .catch((error) => console.error('Error deleting event:', error));
    };

    const resetForm = () => {
        setFormData({ name: '', description: '', data: '', isInProgress: false });
        setImagePreview(null);
        setIsEditing(false);
        setEditId(null);
    };

    return (
        <div className="min-h-screen bg-gray-100 py-36 px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-md">
                <h1 className="text-2xl font-semibold text-gray-800 mb-6">{isEditing ? 'Edit Event' : 'Add Event'}</h1>
                <form onSubmit={handleSubmit} className="mb-8 space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Event Name</label>
                        <input
                            type="text"
                            name="name"
                            placeholder="Event Name"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Description</label>
                        <input
                            type="text"
                            name="description"
                            placeholder="Description"
                            value={formData.description}
                            onChange={handleInputChange}
                            required
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Image</label>
                        <input
                            type="file"
                            name="data"
                            accept="image/*"
                            onChange={handleInputChange}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                        {imagePreview && (
                            <img
                                src={imagePreview}
                                alt="Image Preview"
                                className="mt-2 w-full h-auto rounded-md shadow-md"
                            />
                        )}
                    </div>
                    <div className="flex items-center">
                        <input
                            type="checkbox"
                            name="isInProgress"
                            checked={formData.isInProgress}
                            onChange={handleInputChange}
                            className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                        />
                        <label className="ml-2 block text-sm text-gray-900">In Progress</label>
                    </div>
                    <button
                        type="submit"
                        className="w-full inline-flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        {isEditing ? 'Update Event' : 'Add Event'}
                    </button>
                    {isEditing && (
                        <button
                            type="button"
                            onClick={resetForm}
                            className="mt-2 w-full inline-flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-gray-700 bg-gray-200 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Cancel
                        </button>
                    )}
                </form>

                <ul className="space-y-4">
                    {events.map((event) => (
                        <li
                            key={event._id}
                            className="p-4 bg-gray-50 rounded-lg shadow flex flex-col sm:flex-row justify-between items-center"
                        >
                            <div className="flex items-center space-x-4">
                                <img
                                    src={event.data}
                                    alt={event.name}
                                    className="w-20 h-20 object-cover rounded-md shadow-md"
                                />
                                <div>
                                    <h2 className="text-lg font-semibold text-gray-800">{event.name}</h2>
                                    <p className="text-sm text-gray-600">{event.description}</p>
                                </div>
                            </div>
                            <div className="mt-4 sm:mt-0 flex space-x-2">
                                <button
                                    onClick={() => handleEdit(event)}
                                    className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                                >
                                    Edit
                                </button>
                                <button
                                    onClick={() => handleDelete(event._id)}
                                    className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                                >
                                    Delete
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
