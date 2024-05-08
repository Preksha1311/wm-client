export default function AboutSection() {
  return (
    <div className="bg-green-100 py-12 px-4">
      <div className="max-w-4xl mx-auto grid grid-cols-2 gap-4">
        <h2 className="col-span-2 text-3xl font-bold text-gray-800 mb-4">
          About Waste Management Inc.
        </h2>
        <div className="flex flex-col justify-start">
          <h3 className="text-2xl text-gray-700 mb-6">Our Mission</h3>
        </div>
        <div className="flex flex-col justify-start text-right">
          <p className="text-gray-600 text-lg">
            At Waste Management Inc., we are dedicated to providing sustainable waste management solutions to preserve the environment for future generations. We believe in reducing waste, promoting recycling, and minimizing our ecological footprint.

            <span className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition ease-in duration-200">
              <a href='/blog' >
                Read More
              </a>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
