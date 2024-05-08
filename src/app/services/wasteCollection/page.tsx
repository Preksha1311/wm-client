'use client'
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
  TableHead,
} from "@/components/ui/table";

interface IRequest {
  _id: string;
  name: string;
  address: string;
  contactNumber: string;
}

const RequestsPage: React.FC = () => {
  const [requests, setRequests] = useState<IRequest[]>([]);
  const router = useRouter();

  useEffect(() => {
    fetchRequests();
  }, []);

  const fetchRequests = async () => {
    const response = await fetch('http://localhost:5050/req/wasteCollection/getAll', { method: 'GET' });
    const data = await response.json();
    setRequests(data);
  };

  const handleDelete = async (_id: string) => {
    if (confirm('Are you sure you want to delete this request?')) {
      await fetch(`http://localhost:5050/req/wasteCollection/deleteRequest/${_id}`, { method: 'DELETE' });
      fetchRequests(); // Refresh the list after deletion
    }
  };

  const handleUpdate = (_id: string) => {
    router.push(`/services/wasteCollection/updatereq/${_id}`); // Assuming you have a page to handle updates
  };

 return (
  <>
  <h1 className="text-4xl font-bold text-center my-4 text-white">Manage Requests</h1>
  <div className="my-4 text-right text-white">
        <Link href="/services/wasteCollection/addreq">
          <span className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Add Request
          </span>
        </Link>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Address</TableHead>
            <TableHead>Contact Number</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {requests.map((request) => (
            <TableRow key={request._id}>
              <TableCell>{request.name}</TableCell>
              <TableCell>{request.address}</TableCell>
              <TableCell>{request.contactNumber}</TableCell>
              <TableCell>
                <button onClick={() => handleUpdate(request._id)}
                  className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded mx-2">
                  Update
                </button>
                <button onClick={() => handleDelete(request._id)}
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                  Delete
                </button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    
    </>
  );
};

export default RequestsPage;
