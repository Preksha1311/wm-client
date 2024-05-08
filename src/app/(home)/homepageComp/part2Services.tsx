// components/ServicesSection.js
export default function ServicesSection() {
    return (
        <div className="bg-teal-200 py-12 px-4">
            <div className="text-center mb-10">
                <h2 className="text-3xl font-bold text-gray-800">Our Services</h2>
            </div>
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div className="space-y-4">
                    <h3 className="text-2xl font-semibold text-gray-800">Recycling Services</h3>
                    <p className="text-gray-600">We focus on turning waste materials into new products to prevent waste of potentially useful materials.</p>
                    <span className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition ease-in duration-200">
                                <a href='/services/recycle' >Recycle
                                </a>
                            </span>
                </div>
                <div className="space-y-4">
                    <h3 className="text-2xl font-semibold text-gray-800">Waste Collection</h3>
                    <p className="text-gray-600">Comprehensive waste collection solutions designed for city needs, improving overall environmental health.</p>
                    <span className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition ease-in duration-200">
                                <a href='/services/wasteCollection' >Waste Collection
                                </a>
                            </span>
                </div>
                <div className="space-y-4">
                    <h3 className="text-2xl font-semibold text-gray-800">Consultancy</h3>
                    <p className="text-gray-600">Expert advice to help businesses reduce their waste footprint and comply with regulations while enhancing efficiency.</p>
                    <span className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition ease-in duration-200">
                                <a href='/services' >Services
                                </a>
                            </span>
                </div>
            </div>
        </div>
    );
}
