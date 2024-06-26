import React from 'react';
import Image from 'next/image';
import recyclingImg from "../../../public/logo.jpg"; // Make sure the path is correct

interface Service {
    title: string;
    description: string;
    icon: string; // Tailwind utility class for icon
    link: string;
    btn: string; // Text for the button
}

const services: Service[] = [
    {
        title: 'Recycle Right',
        description:
            'Learn what goes where and become a recycling pro! Access our comprehensive guide for responsible waste disposal.',
        icon: 'fas fa-recycle text-green-500 text-3xl',
        link: '/services/recycle',
        btn: 'Recycle Now'
    },
    {
        title: 'Schedule Waste Collection',
        description:
            'Never miss a pickup again! Schedule convenient waste collection directly through our portal.',
        icon: 'fas fa-trash-alt text-gray-700 text-3xl',
        link: '/services/wasteCollection',
        btn: 'Waste Collection'
    },
    // Add more services as needed
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
                <div className="relative w-full h-64 md:h-auto">
                    <Image
                        src={recyclingImg}
                        alt="Global Waste Challenge"
                        layout="fill" // Adjust the layout as needed
                        objectFit="cover"
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
                    <div key={service.title} className="shadow-md rounded-lg p-6 flex flex-col items-center bg-white text-center">
                        <i className={service.icon}></i>
                        <h3 className="text-xl font-bold mt-4">{service.title}</h3>
                        <p className="text-gray-700 mt-2">{service.description}</p>
                        <a href={service.link} className="mt-4 inline-block px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-700">
                            {service.btn}
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
