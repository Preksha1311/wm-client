// pages/recycle.tsx
import React from 'react';
import Head from 'next/head';

const RecyclePage: React.FC = () => {
    return (
        <>
            <Head>
                <title>Recycling Services</title>
            </Head>
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-3xl font-bold text-center mb-6">Recycling Services</h1>
                <p className="text-lg">
                    Recycling is vital for maintaining sustainability. It reduces the need for extracting, refining,
                    and processing raw materials all of which create substantial air and water pollution. As we save
                    on energy consumption, we help combat climate change.
                </p>
                {/* Add more content or images about recycling */}
            </div>
        </>
    );
};

export default RecyclePage;
