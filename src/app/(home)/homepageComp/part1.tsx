import Link from 'next/link';

export default function AboutSection() {
  return (
    <div className="bg-gray-900 py-12 px-4">
      <div className="max-w-4xl mx-auto space-y-8">
        <h2 className="text-3xl font-bold text-white">
          About Waste Management Inc.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl text-white">Our Mission</h3>
            <p className="text-gray-300 mt-4">
              At Waste Management Inc., we are dedicated to providing sustainable waste management solutions to preserve the environment for future generations. We believe in reducing waste, promoting recycling, and minimizing our ecological footprint.
            </p>
          </div>
          <div className="flex justify-end">
            <Link href="/blog" passHref>
              <span className="inline-block px-6 py-3 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition ease-in duration-200">
                Read More
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
