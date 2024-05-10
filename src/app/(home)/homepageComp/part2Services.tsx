import Link from "next/link";

export default function ServicesSection() {
  return (
    <div className="bg-gray-700 py-12 px-4">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-white">Our Services</h2>
      </div>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold text-white">
            Recycling Services
          </h3>
          <p className="text-white">
            We focus on turning waste materials into new products to prevent
            waste of potentially useful materials.
          </p>
          <br/>
          <Link href="/services/recycle" passHref>
            <span className="inline-block px-4 py-2 bg-black text-white rounded hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-white-500 focus:ring-opacity-50 transition ease-in duration-200">
              Recycle
            </span>
          </Link>
        </div>
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold text-white">
            Waste Collection
          </h3>
          <p className="text-white">
            Comprehensive waste collection solutions designed for city needs,
            improving overall environmental health.
          </p>
          <br/>
          <Link href="/services/wasteCollection" passHref>
          <span className="inline-block px-4 py-2 bg-black text-white rounded hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-white-500 focus:ring-opacity-50 transition ease-in duration-200">
              Waste Collection
            </span>
          </Link>
        </div>
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold text-white">Consultancy</h3>
          <p className="text-white">
            Expert advice to help businesses reduce their waste footprint and
            comply with regulations while enhancing efficiency.
          </p>
          <br/>
          <Link href="/services" passHref>
          <span className="inline-block px-4 py-2 bg-black text-white rounded hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-white-500 focus:ring-opacity-50 transition ease-in duration-200">
              Services
              
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
