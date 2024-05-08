'use client'
import { useRouter } from "next/navigation";
import { useState } from "react";

interface RecycleType {

    name: string;
    address: string;
    contactNumber: string;
    wasteType: string;
    uploadImg: string;
}
const RecycleReq: React.FC = () => {
    const [formData, setFormData] = useState<RecycleType>({
        name: '',
        address: '',
        contactNumber: '',
        wasteType: '',
        uploadImg: '',
    });
    const [submissionStatus, setSubmissionStatus] = useState<string | null>(null);
    const router = useRouter();

    const [file, setFile] = useState<File | null>(null);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    // const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    //     event.preventDefault();
    //     try {
    //         const response = await fetch('http://localhost:5050/req/recycleWaste', {
    //             method: 'POST',
    //             headers: { 'Content-Type': 'application/json' },
    //             body: JSON.stringify(formData),
    //         });

    //         if (!response.ok) {
    //             throw new Error(`Error adding request: ${response.statusText}`);
    //         }

    //         const responseData = await response.json();
    //         console.log('Request added:', responseData);
    //         alert('Request submitted successfully!');
    //         setSubmissionStatus(responseData._id);
    //         router.push('/services/recycle')
    //     } catch (error) {
    //         console.error('Error:', error);
    //         alert('Failed to submit request. Please try again.');
    //     }
    // };
    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files?.length) {
          setFile(event.target.files[0]);
        }
      };
    
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formDataToSend = new FormData();
        Object.entries(formData).forEach(([key, value]) => {
          if (value) formDataToSend.append(key, value);
        });
        if (file) formDataToSend.append('uploadImg', file);
    
        try {
          const response = await fetch('http://localhost:5050/req/recycleWaste/create', {
            method: 'POST',
            body: formDataToSend
          });
    
          if (!response.ok) {
            throw new Error('Failed to create recycle request');
          }
    
          const responseData = await response.json();
          alert('Recycle request created successfully!');
          alert('Navigating back to Home')
          router.push('/');

        } catch (error: any) {
          alert(error.message || 'Failed to submit request');
        }
      };
    
    
    return (
        <div className="max-w-4xl mx-auto p-5">
            <h1 className="text-2xl font-bold text-center mb-5 text-slate-200">Recycle Collection Request</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex justify-self-center flex-col">
                    <label htmlFor="name" className="font-semibold text-white">Name:</label>
                    <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className="mt-1 p-2 justify-self-center max-w-96 border border-gray-300 rounded-md min-w-[300px]" />
                </div>
                <div className="flex justify-self-center flex-col">
                    <label htmlFor="address" className="font-semibold text-white">Address:</label>
                    <input type="text" id="address" name="address" value={formData.address} onChange={handleChange} required className="mt-1justify-self-center p-2 max-w-96 border border-gray-300 rounded-md min-w-[300px]" />
                </div>
                <div className="flex justify-self-center flex-col">
                    <label htmlFor="contactNumber" className="font-semibold text-white">Mobile Number:</label>
                    <input type="tel" id="contactNumber" name="contactNumber" value={formData.contactNumber} onChange={handleChange} required className="mt-1 max-w-96 justify-self-center p-2 border border-gray-300 rounded-md min-w-[300px]" />
                </div>
                <div className="flex justify-self-center flex-col">
                    <label htmlFor="wasteType" className="font-semibold text-white">Waste Types</label>
                    <input type="text" placeholder="cloth, paper, iron" id="wasteType" name="wasteType" value={formData.wasteType} onChange={handleChange} required className="mt-1 max-w-96 justify-self-center p-2 border border-gray-300 rounded-md min-w-[300px]" />
                </div>
                <div className="mb-4">
          <label htmlFor="uploadImg" className="block text-sm font-medium text-gray-700">Upload Image</label>
          <input type="file" name="uploadImg" onChange={handleFileChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
        </div>
                <button type="submit" className="w-full bg-blue-500 hover:bg-blue-700 text-white max-w-96 font-bold py-2 px-4 rounded">Submit Request</button>
            </form>
            {submissionStatus && (
                <div className="mt-5 p-4 border border-green-500 rounded-md bg-green-50">
                    <h3 className="text-lg font-semibold text-gray-800">Request Submitted Successfully!</h3>
                    <p className="text-gray-600">Your request ID is: {submissionStatus}</p>
                </div>
            )}
        </div>
    );
};

export default RecycleReq;



