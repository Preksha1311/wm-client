// 'use client'
// import React, { useState, useEffect } from 'react';
// import { useRouter } from 'next/navigation';
// import { RecycleRequest } from './recyclecomp/recyclecomptype';

// interface RequestItem {
//     _id: string;
//     name: string;
//     // other fields...
//   }
// interface Props {
//     request: RequestItem;
//     onDeleteSuccess: () => void; // A callback function to trigger after successful deletion.
//   }
  
// const Recycle: React.FC = () => {
//   const [formData, setFormData] = useState<RecycleRequest>({
//     name: '',
//     address: '',
//     contactNumber: '',
//     wasteType: '',
//     uploadImg: ''
//   });
//   const [file, setFile] = useState<File | null>(null);
//   const router = useRouter();

//   // Handle form data changes
//   const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     const { name, value } = event.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   // Handle image file
//   const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     if (event.target.files?.length) {
//       setFile(event.target.files[0]);
//     }
//   };

//   // Submit form data
//   const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     const formDataToSend = new FormData();
//     Object.entries(formData).forEach(([key, value]) => {
//       if (value) formDataToSend.append(key, value);
//     });
//     if (file) formDataToSend.append('uploadImg', file);

//     try {
//       const response = await fetch('http://localhost:5050/req/recycleWaste/create', {
//         method: 'POST',
//         body: formDataToSend
//       });

//       if (!response.ok) {
//         throw new Error('Failed to create recycle request');
//       }

//       const responseData = await response.json();
//       alert('Recycle request created successfully!');
//       router.push('/recycle-detail/' + responseData._id);
//     } catch (error: any) {
//       alert(error.message || 'Failed to submit request');
//     }
//   };

//   // Function to update a request
//   const handleUpdate = async (id: string) => {
//     try {
//       const response = await fetch(`http://localhost:5050/req/recycleWaste/update/${id}`, {
//         method: 'PATCH',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(formData)
//       });

//       if (!response.ok) {
//         throw new Error('Failed to update request');
//       }

//       alert('Request updated successfully!');
//     } catch (error: any) {
//       alert(error.message || 'Failed to update request');
//     }
//   };
// }
//   // Function to delete a request
//   const RequestListItem: React.FC<Props> = ({ request, onDeleteSuccess }) => {
//     const handleDelete = async () => {
//       if (confirm('Are you sure you want to delete this request?')) {
//         try {
//           const response = await fetch(`http://localhost:5050/api/requests/delete/${request._id}`, {
//             method: 'DELETE',
//           });
  
//           if (!response.ok) {
//             throw new Error('Failed to delete the request');
//           }
  
//           console.log('Request deleted successfully');
//           onDeleteSuccess(); // Call the success callback
//         } catch (error: any) {
//           console.error('Error deleting request:', error.message);
//           alert('Failed to delete request.');
//         }
//       }
      
//     };
//   return (
//     <div className="container mx-auto px-4">
//       <h1 className="text-xl font-bold text-center my-4">Recycle Request Form</h1>
//       <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
//         <div className="mb-4">
//           <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
//           <input type="text" name="name" required value={formData.name} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"  />
//         </div>
//         <div className="mb-4">
//           <label htmlFor="address" className="block text-sm font-medium text-gray-700">Address</label>
//           <input type="text" name="address" required value={formData.address} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"  />
//         </div>
//         <div className="mb-4">
//           <label htmlFor="contactNumber" className="block text-sm font-medium text-gray-700">Contact Number</label>
//           <input type="tel" name="contactNumber" required  value={formData.contactNumber} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"  />
//         </div>
//         <div className="mb-4">
//           <label htmlFor="wasteType" className="block text-sm font-medium text-gray-700">Waste Type</label>
//           <input type="text" name="wasteType" required value={formData.wasteType} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"  />
//         </div>
//         <div className="mb-4">
//           <label htmlFor="uploadImg" className="block text-sm font-medium text-gray-700">Upload Image</label>
//           <input type="file" name="uploadImg" required  onChange={handleFileChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
//         </div>
//         <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Submit</button>
//       </form>
//       <button onClick = {handleDelete} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded "> Delete Request </button>
//       <button onClick = { }className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" >Update Request</button>
//     </div>
//   );
// };

// export default Recycle;



