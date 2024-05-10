import { useState } from 'react';

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e:any) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e:any) => {
        e.preventDefault();
        console.log(formData);
        // Implement your submission logic, e.g., POST request to a server or email API
    };

    return (
        <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
            <form onSubmit={handleSubmit} className="w-full max-w-lg">
                <div className="mb-6">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300">Name</label>
                    <input type="text" name="name" id="name" onChange={handleChange} value={formData.name}
                           className="mt-1 block w-full px-3 py-2 bg-gray-800 text-white border border-gray-600 rounded-md shadow-sm focus:outline-none focus:border-blue-500"/>
                </div>
                <div className="mb-6">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300">Email</label>
                    <input type="email" name="email" id="email" onChange={handleChange} value={formData.email}
                           className="mt-1 block w-full px-3 py-2 bg-gray-800 text-white border border-gray-600 rounded-md shadow-sm focus:outline-none focus:border-blue-500"/>
                </div>
                <div className="mb-6">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300">Message</label>
                    <textarea name="message" id="message" rows={4} onChange={handleChange} value={formData.message}
                              className="mt-1 block w-full px-3 py-2 bg-gray-800 text-white border border-gray-600 rounded-md shadow-sm focus:outline-none focus:border-blue-500"></textarea>
                </div>
                <button type="submit" className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                    Send Message
                </button>
            </form>
        </div>
    );
}
