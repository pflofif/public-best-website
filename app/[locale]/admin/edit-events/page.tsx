'use client';

import { useState, useEffect } from 'react';

// Define the API URL for testing
const API_URL = 'https://localhost:44355';

type EventType = {
    _id: string;
    name: string;
    description: string;
    imageUrl: string; // Presigned URL from MinIO
    isInProgress: boolean;
    sectionColor: string;
    link: string;
};

export default function EventsPage() {
    const [events, setEvents] = useState<EventType[]>([]);
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        imageUrl: '',
        isInProgress: false,
        sectionColor: '',
        link: ''
    });
    const [imagePreview, setImagePreview] = useState<string | null>(null);
    const [imageFile, setImageFile] = useState<File | null>(null);
    const [isEditing, setIsEditing] = useState<boolean>(false);
    const [editId, setEditId] = useState<string | null>(null);

    useEffect(() => {
        fetch(`${API_URL}/api/events`)
            .then((response) => response.json())
            .then((data) => setEvents(data))
            .catch((error) => console.error('Error fetching events:', error));
    }, []);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked, files } = e.target;
        if (name === 'imageFile' && files && files[0]) {
            const file = files[0];
            setImageFile(file);
            const reader = new FileReader();
            reader.onloadend = () => {
                const previewUrl = reader.result as string;
                setImagePreview(previewUrl);
            };
            reader.readAsDataURL(file);
        } else {
            setFormData({
                ...formData,
                [name]: type === 'checkbox' ? checked : value,
            });
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            let imageUrl = formData.imageUrl;

            // Upload image to MinIO if a new file is selected
            if (imageFile) {
                const uploadFormData = new FormData();
                uploadFormData.append('file', imageFile);

                const uploadResponse = await fetch(`${API_URL}/api/events/upload`, {
                    method: 'POST',
                    body: uploadFormData,
                });

                if (!uploadResponse.ok) throw new Error('Error uploading image');

                const uploadData = await uploadResponse.json();
                imageUrl = uploadData.url; // Use the returned URL
            }

            // Prepare the payload (DTO structure)
            const eventPayload = {
                name: formData.name,
                description: formData.description,
                imageUrl, // Use the uploaded image URL
                isInProgress: formData.isInProgress,
                sectionColor: formData.sectionColor,
                link: formData.link,
            };

            console.log(isEditing)
            console.log(editId)
            if (isEditing && editId) {
                console.log("Hre")
                // Use PUT for editing an existing event
                const response = await fetch(`${API_URL}/api/events/${editId}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(eventPayload),
                });

                if (!response.ok) throw new Error('Error updating event');

                // Update the event in the local state
                const updatedEvent = await response.json();
                setEvents(events.map((event) => (event._id === editId ? updatedEvent : event)));
            } else {
                // Use POST for creating a new event
                const response = await fetch(`${API_URL}/api/events`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(eventPayload),
                });

                if (!response.ok) throw new Error('Error adding event');

                const newEvent = await response.json();
                setEvents([...events, newEvent]);
            }

            resetForm();
        } catch (error) {
            console.error(error);
        }
    };

    const handleEdit = (event: EventType) => {
        setFormData({
            name: event.name,
            description: event.description,
            imageUrl: event.imageUrl,
            isInProgress: event.isInProgress,
            sectionColor: event.sectionColor,
            link: event.link
        });
        console.log(event)
        setImagePreview(event.imageUrl);
        setImageFile(null); // Reset file input
        setIsEditing(true);
        setEditId(event.id!);
    };

    const handleDelete = async (id: string) => {
        try {
            const response = await fetch(`${API_URL}/api/events/${id}`, {
                method: 'DELETE',
            });

            if (!response.ok) throw new Error('Error deleting event');

            setEvents(events.filter((event) => event._id !== id));
        } catch (error) {
            console.error(error);
        }
    };

    const resetForm = () => {
        setFormData({ name: '', description: '', imageUrl: '', isInProgress: false, sectionColor: '', link: '' });
        setImagePreview(null);
        setImageFile(null);
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
                        <label className="block text-sm font-medium text-gray-700">Section Color</label>
                        <input
                            type="text"
                            name="sectionColor"
                            placeholder="Section Color"
                            value={formData.sectionColor}
                            onChange={handleInputChange}
                            required
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Link to website</label>
                        <input
                            type="text"
                            name="link"
                            placeholder="Link to website"
                            value={formData.link}
                            onChange={handleInputChange}
                            required
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Image</label>
                        <input
                            type="file"
                            name="imageFile"
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
                            key={event.id}
                            className="p-4 bg-gray-50 rounded-lg shadow flex flex-col sm:flex-row justify-between items-center"
                        >
                            <div className="flex items-center space-x-4">
                                <img
                                    src={event.imageUrl}
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
                                    onClick={() => handleDelete(event.id)}
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
