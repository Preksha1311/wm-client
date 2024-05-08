'use client'
import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
interface RecyclingRequest {
    _id: string;
    name: string;
    address: string;
    contactNumber: string;
    uploadImg: string; // Field to store the image URL
}
interface VisibilityMap {
    [key: string]: boolean;
}
const BuyerPage: React.FC = () => {
    const [requests, setRequests] = useState<RecyclingRequest[]>([]);
    const [visibleDetails, setVisibleDetails] = useState<{ [key: string]: boolean }>({});

    useEffect(() => {
        const fetchRequests = async () => {
            try {
                const response = await fetch('http://localhost:5050/req/recycleWaste/list');
                if (!response.ok) throw new Error('Failed to fetch recycling requests');
                const data: RecyclingRequest[] = await response.json();
                setRequests(data);
                // Initialize visibility state for each request
                const visibility: VisibilityMap = {};
                data.forEach(request => {
                    visibility[request._id] = false;
                });
                setVisibleDetails(visibility);
            } catch (error) {
                console.error(error);
            }
        };
        fetchRequests();
    }, []);

    const toggleDetails = (id: string) => {
        setVisibleDetails(prev => ({
            ...prev,
            [id]: !prev[id]
        }));
    };

    return (
        <>
            <Head>
                <title>Recycling Requests - Buyer Page</title>
            </Head>
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-3xl font-semibold mb-4">Recycling Requests</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {requests.map((request) => (
                        <div key={request._id} className="bg-white p-4 rounded-md shadow-md">
                            <h2 className="text-xl font-semibold mb-2 cursor-pointer" onClick={() => toggleDetails(request._id)}>
                                {request.name}
                            </h2>
                            <p className="text-gray-700 mb-2">{request.address}</p>
                            <p className="text-gray-700 mb-4">{request.contactNumber}</p>
                            {visibleDetails[request._id] && (
                                <div>
                                    <Image
                                        src={request.uploadImg}
                                        width={50}
                                        height={50}
                                        alt={`Image for ${request.name}`}
                                        className="w-[5] h-auto mb-2"
                                        layout="" // Recommended for responsive layouts
                                    />
                                </div>
                            )}
                            <div className="flex justify-between">
                                <button
                                    className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
                                    onClick={() => console.log('Accepting request:', request._id)}
                                >
                                    Accept
                                </button>
                                <button
                                    className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
                                    onClick={() => console.log('Rejecting request:', request._id)}
                                >
                                    Reject
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default BuyerPage;
