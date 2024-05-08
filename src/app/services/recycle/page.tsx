'use client'
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

interface IRequest  {
    _id : string;
    name : string;
    address : string;
    contactNumber : string;
    wasteType : string;
    uploadImg : string;
}


const RequestsPage: React.FC = () => {
  const [requests, setRequests] = useState<IRequest[]>([]);
  const router = useRouter();

  useEffect(() => {
    fetchRequests();
  }, []);

  const fetchRequests = async () => {
    const response = await fetch('http://localhost:5050/req/recycleWaste/list',{ method: 'GET' });
    const data = await response.json();
    setRequests(data);
  };

  const handleDelete = async (_id: string) => {
    const confirmDelete = confirm('Are you sure you want to delete this request?');
    if (confirmDelete) {
      await fetch(`http://localhost:5050/req/recycleWaste/del/${_id}`, { method: 'DELETE' });
      fetchRequests(); // Refresh the list after deletion
    }
  };

  const handleUpdate = (_id: string) => {
    router.push(`/services/wasteCollection/${_id}`); // Assuming you have a page to handle updates
  };

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-2xl font-bold text-center my-4">Manage Requests</h1>
      <div className="my-4 text-right">
        <Link href="/services/recycle/addreq">
          <span className="bg-blue-500 hover:bg-blue-700 text-teal-500 font-bold py-2 px-4 rounded">
            
         Add Request
          </span>
        </Link>
      </div>
      <div>
        {requests.map((request) => (
          <div key={request._id} className="flex justify-between text-teal-500 items-center bg-white p-4 shadow rounded mb-2">
            <div>
              <p><strong>Name:</strong> {request.name}</p>
              <p><strong>Address:</strong> {request.address}</p>
              <p><strong>Contact Number:</strong> {request.contactNumber}</p>
              <p><strong>wasteType:</strong> {request.contactNumber}</p>
              
            </div>
            <div>
              <button onClick={() => handleUpdate(request._id)}
                className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded mx-2">
                Update
              </button>
              <button onClick={() => handleDelete(request._id)}
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RequestsPage;
