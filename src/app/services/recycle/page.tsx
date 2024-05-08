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
} from "@/components/ui/table";

interface IRequest {
  _id: string;
  name: string;
  address: string;
  contactNumber: string;
  wasteType: string;
  uploadImg: string; // URL to an image
}

const RequestsPage: React.FC = () => {
  const [requests, setRequests] = useState<IRequest[]>([]);
  const router = useRouter();

  useEffect(() => {
    fetchRequests();
  }, []);

  const fetchRequests = async () => {
    const response = await fetch('http://localhost:5050/req/recycleWaste/list');
    const data = await response.json();
    setRequests(data);
  };

  const handleDelete = async (_id: string) => {
    if (confirm('Are you sure you want to delete this request?')) {
      await fetch(`http://localhost:5050/req/recycleWaste/del/${_id}`, { method: 'DELETE' });
      fetchRequests();
    }
  };

  const handleUpdate = (_id: string) => {
    router.push(`/services/wasteCollection/${_id}`);
  };

  return (
    <>
      <h1 className="text-4xl font-bold text-center my-4 text-white">Manage Requests</h1>
      <div className="my-4 text-right">
        <Link href="/services/recycle/addreq">
          <span className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Add Request
          </span>
        </Link>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableCell className="text-white">Image</TableCell>
            <TableCell className="text-white">Name</TableCell>
            <TableCell className="text-white">Address</TableCell>
            <TableCell className="text-white">Contact Number</TableCell>
            <TableCell className="text-white">Waste Type</TableCell>
            <TableCell className="text-white">Actions</TableCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          {requests.map((request) => (
            <TableRow key={request._id}>
              <TableCell>
                <img src={request.uploadImg} alt="Uploaded" className="w-20 h-20 object-cover" />
              </TableCell>
              <TableCell className="text-white">{request.name}</TableCell>
              <TableCell className="text-white">{request.address}</TableCell>
              <TableCell className="text-white">{request.contactNumber}</TableCell>
              <TableCell className="text-white">{request.wasteType}</TableCell>
              <TableCell className="text-white">
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
