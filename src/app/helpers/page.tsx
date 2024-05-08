'use client'
import React from 'react';
import Link from 'next/link';
import Head from 'next/head';

const VolunteersPage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Volunteers for a Green World</title>
      </Head>
      <div className="container mx-auto px-4 py-8 flex flex-col items-center justify-center min-h-screen">
        <div className="hero text-center mb-8">
          <h1 className="text-4xl font-bold text-green-700 mb-8">Join Us in Making a Greener World</h1>
          <div className="text-center space-y-4">
            <p className="text-lg text-gray-700 leading-relaxed">
              Every year, millions of tons of waste end up in landfills, much of which could be recycled or reused. This has a devastating impact on our environment.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              By volunteering with us, you can be a part of the solution! We offer a variety of opportunities to make a difference, regardless of your experience level.
            </p>
          </div>
          <Link href="helpers/recycledItems">
            <button className="btn btn-green mt-8">Learn About Recycling</button>
          </Link>
        </div>

        <div className="benefits mb-8">
          <h2 className="text-2xl text-green-800 font-semibold mb-6">Why Volunteer With Us?</h2>
          <ul className="list-disc pl-5 space-y-4">
            <li className="text-lg text-gray-700">
              Help reduce waste and prevent pollution, creating a healthier planet for all.
            </li>
            {/* Add more list items */}
          </ul>
        </div>

        <div className="impact mb-8">
          <h2 className="text-2xl text-green-800 font-semibold mb-6">The Impact of Your Volunteering</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="text-center">
              <p className="text-3xl text-green-700 font-bold mb-2">Reduced Waste</p>
              <p className="text-lg text-gray-700">
                By volunteering in waste collection or sorting, you directly contribute to reducing the amount of waste going to landfills.
              </p>
            </div>
            {/* Add more impact items */}
          </div>
        </div>

        <div className="call-to-action mb-8">
          <Link href="helpers/wasteCollection">
            <button className="btn btn-blue">Join Waste Collection</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default VolunteersPage;
