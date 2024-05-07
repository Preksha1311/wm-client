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
                    < button className="px-8 py-2 rounded-md bg-teal-500 text-white font-bold transition duration-200 hover:bg-white hover:text-black border-2 border-transparent hover:border-teal-500">
                        Learn More
                    </button>
                </div>
                <div className="space-y-4">
                    <h3 className="text-2xl font-semibold text-gray-800">Waste Collection</h3>
                    <p className="text-gray-600">Comprehensive waste collection solutions designed for city needs, improving overall environmental health.</p>
                    <button className="px-8 py-2 rounded-md bg-teal-500 text-white font-bold transition duration-200 hover:bg-white hover:text-black border-2 border-transparent hover:border-teal-500">
                        Learn More
                    </button>
                </div>
                <div className="space-y-4">
                    <h3 className="text-2xl font-semibold text-gray-800">Consultancy</h3>
                    <p className="text-gray-600">Expert advice to help businesses reduce their waste footprint and comply with regulations while enhancing efficiency.</p>
                    <button className="px-8 py-2 rounded-md bg-teal-500 text-white font-bold transition duration-200 hover:bg-white hover:text-black border-2 border-transparent hover:border-teal-500">
                        Learn More
                    </button>
                </div>
            </div>
        </div>
    );
}
