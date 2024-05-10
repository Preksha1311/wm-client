'use client'
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

interface IRequest {
    _id: string;
    name: string;
    address: string;
    contactNumber: string;
}

const UpdateRequestPage: React.FC = () => {
    const router = useRouter();
    const { id } = router.query;
    const [formData, setFormData] = useState<IRequest | null>(null);

    useEffect(() => {
        if (id) {
            fetch(`http://localhost:5050/api/req/wasteCollection/collectWaste/${id}`, { method: 'GET' })
                .then(response => response.json())
                .then(data => setFormData(data))
                .catch(error => console.error('Error fetching data:', error));
        }
    }, [id]);
    console.log(id)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => prev ? { ...prev, [name]: value } : null);
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!formData) return;

        try {
            const response = await fetch(`http://localhost:5050/api/req/wasteCollection/updateRequest/${id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (!response.ok) {
                throw new Error('Failed to update the request');
            }

            alert('Request updated successfully!');
            router.push('/requests');  // Or wherever you list all requests
        } catch (error: any) {
            console.error('Error updating request:', error);
            alert('Error updating request');
        }
    };

    if (!formData) return <div>Loading...</div>;

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-xl font-bold text-center">Update Request</h1>
            <form onSubmit={handleSubmit} className="max-w-lg mx-auto mt-4">
                <div className="mb-4">
                    <label htmlFor="name" className="block text-sm font-medium">Name</label>
                    <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="w-full p-2 border rounded" />
                </div>
                <div className="mb-4">
                    <label htmlFor="address" className="block text-sm font-medium">Address</label>
                    <input type="text" id="address" name="address" value={formData.address} onChange={handleChange} className="w-full p-2 border rounded" />
                </div>
                <div className="mb-4">
                    <label htmlFor="contactNumber" className="block text-sm font-medium">Contact Number</label>
                    <input type="text" id="contactNumber" name="contactNumber" value={formData.contactNumber} onChange={handleChange} className="w-full p-2 border rounded" />
                </div>
                <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Update Request</button>
            </form>
        </div>
    );
};

export default UpdateRequestPage;
