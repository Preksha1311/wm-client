// import React, { useState } from 'react';
// import { useRouter } from 'next/navigation';

// // Interface for request details based on your API response
// interface RequestDetails {
//   _id: string;
//   name: string;
//   address: string;
//   contactNumber: string;
//   // ... other fields
// }

// const UpdateRequest: React.FC = () => {
//   const [requestDetails, setRequestDetails] = useState<RequestDetails | null>(null);
//   const [updatedData, setUpdatedData] = useState<Partial<RequestDetails>>({});
//   const router = useRouter();
//   const { requestId } = router.query; // Access request ID from query parameter

//   // Fetch request details on initial render (alternative to useEffect)
//   const fetchRequestDetails = async () => {
//     if (requestId) {
//       try {
//         const response = await fetch(`http://localhost:5050/req/wasteCollection/updateRequest/${requestId}`);
//         if (!response.ok) {
//           throw new Error(`Error fetching request details: ${response.statusText}`);
//         }
//         const responseData = await response.json();
//         setRequestDetails(responseData);
//       } catch (error) {
//         console.error('Error fetching request details:', error);
//         // Handle errors (e.g., display error message)
//       }
//     }
//   };

//   fetchRequestDetails(); // Call immediately for initial data fetching

//   const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setUpdatedData({ ...updatedData, [event.target.name]: event.target.value });
//   };

//   const handleUpdateRequest = async () => {
//     if (!requestId) return; // Handle missing request ID

//     const updatedRequest = { ...requestDetails, ...updatedData }; // Merge original data with updates

//     try {
//       const response = await fetch(`http://localhost:5050/req/wasteCollection/updateRequest/${requestId}`, {
//         method: 'PATCH',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(updatedRequest),
//       });

//       if (!response.ok) {
//         throw new Error(`Error updating request: ${response.statusText}`);
//       }

//       const responseData = await response.json();
//       console.log('Request updated:', responseData);
//       alert('Request updated successfully!'); // Or display a success message
//     } catch (error) {
//       console.error('Error updating request:', error);
//       alert('Failed to update request. Please try again.'); // Or display an error message
//     }
//   };

//   return (
//     <div>
//       {requestDetails ? (
//         <>
//           <h1>Update Waste Collection Request ({requestDetails._id})</h1>
//           <form onSubmit={(e) => e.preventDefault()}> {/* Prevent form submission */}
//             <label htmlFor="name">Name:</label>
//             <input type="text" id="name" name="name" value={updatedData.name || requestDetails.name} onChange={handleChange} />
//             <br />
//             <label htmlFor="address">Address:</label>
//             <input type="address" id="address" name="address" value={updatedData.address || requestDetails.name} onChange={handleChange} />
//             <br />
//             <label htmlFor="contactNumber">Mobile Number:</label>
//             <input type="tel" id="contactNumber" name="contactNumber" value={updatedData.contactNumber || requestDetails.contactNumber} onChange={handleChange} />
//             <br />
//             <button type="button" onClick={handleUpdateRequest}>Update Request</button>
//           </form>
//         </>
//       ) : (
//         <p>Loading request details...</p>
//       )}
//     </div>
//   );
// };

// export default UpdateRequest;


// pages/update-request/[id].tsx
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

interface IRequest  {
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
            fetch(`http://localhost:5050/api/req/wasteCollection/get/${id}`)
                .then(response => response.json())
                .then(data => setFormData(data))
                .catch(error => console.error('Error fetching data:', error));
        }
    }, [id]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => prev ? { ...prev, [name]: value } : null);
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!formData) return;

        try {
            const response = await fetch(`http://localhost:5050/api/req/wasteCollection/update/${id}`, {
                method: 'PUT',
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
