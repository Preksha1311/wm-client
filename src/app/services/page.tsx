import React from 'react';
import recyclingImg from "../../../public/logo.jpg"
import Image from 'next/image';
interface Service {
    title: string;
    description: string;
    icon: string; // Tailwind utility class for icon
    link: string;
    btn: string; // Link to the corresponding service page
}

const services: Service[] = [
    {
        title: 'Recycle Right',
        description:
            'Learn what goes where and become a recycling pro! Access our comprehensive guide for responsible waste disposal.',
        icon: 'fas fa-recycle text-green-500',
        link: 'services/recycle', // Replace with actual Recycle page path
        btn: 'Recycle Now'
    },
    {
        title: 'Schedule Waste Collection',
        description:
            'Never miss a pickup again! Schedule convenient waste collection directly through our portal.',
        icon: 'fas fa-trash-alt text-gray-700',
        link: 'services/wasteCollection',
        btn: 'Waste Collection'
        // Replace with actual Waste Collection page path
    },
    // Add more services here
];

const ServicesPage: React.FC = () => {
    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center py-12">
            <h1 className="text-4xl font-bold text-center mb-8 text-green-500">Bin There, Done That</h1>
            <p className="text-xl text-gray-700 text-center mb-12">
                Welcome to a cleaner, greener future! Our innovative waste management portal simplifies recycling and waste collection. Let us work together for a sustainable environment.
            </p>

            {/* Global Waste Issue Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 w-full md:max-w-2xl">
                <div className="flex items-center justify-center">
                    <Image
                        src={recyclingImg}
                        objectFit="cover"
                        alt="Background"
                        className="absolute z-0 translate-y-[-10]"
                    />
                </div>
                <div className="flex flex-col space-y-4">
                    <h2 className="text-2xl font-bold text-gray-800">The Global Waste Challenge</h2>
                    <p className="text-gray-600 text-lg">
                        Waste accumulation is a pressing global issue. Landfills are overflowing, polluting our environment and harming wildlife. Recycling rates remain low, and traditional waste management methods are unsustainable.
                    </p>
                    <p className="text-gray-600 text-lg">
                        We need innovative solutions to tackle this challenge. By providing resources and services, we empower individuals to make a positive impact.
                    </p>
                </div>
            </div>

            {/* Our Solution Section */}
            <h2 className="text-2xl font-bold text-center mb-8 text-green-500">Our Waste Management Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full md:max-w-2xl">
                {services.map((service) => (
                    <div key={service.title} className="shadow-md rounded-lg p-6 flex flex-col items-center bg-white">
                        <i className={service.icon} />
                        <h3 className="text-xl font-bold text-center mt-4">{service.title}</h3>
                        <p className="text-gray-700 text-center mt-2">{service.description}</p>
                        <a href={service.link} className="mt-4 px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-700">
                            <h3>{service.btn}</h3>
                        </a>
                    </div>
                ))}
            </div>

            {/* Call to Action Section */}
            <p className="text-center mt-4 text-gray-500">
                Together, let us make waste management a positive experience for both our homes and our planet!
            </p>
        </div>
    );
};

export default ServicesPage;
