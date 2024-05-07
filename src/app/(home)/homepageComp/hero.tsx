// Import necessary components
import Image from 'next/image';
import heroImage from '../../../../public/bg-image.jpg'; // Update the path according to your project structure

export default function HeroSection() {
    return (
        <div className="relative h-screen flex items-center justify-center">
            <Image
                src={heroImage}
                layout="fill"
                objectFit="cover"
                alt="Background"
                className="absolute z-0"
                priority // Preloads the image for better performance
            />
            <div className="relative z-10 text-center p-4 bg-black bg-opacity-50">
                <h1 className="text-4xl font-bold text-white mb-2">
                    Welcome to Our World
                </h1>
                <p className="text-xl text-gray-300 mb-4">
                    Discover the innovative solutions that define the future.
                </p>
                {/* <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Get Started
        </button> */}
                <button className="inline-flex h-12 animate-shimmer items-center justify-self-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 mx-auto">
                    Explore
                </button>
            </div>
        </div>
    );
}

