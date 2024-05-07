// components/FAQSection.tsx
import React, { useState } from 'react';
import { FAQ } from '../faq';

interface Props {
    faqs: FAQ[];
}

const FAQSection: React.FC<Props> = ({ faqs }) => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="bg-white py-12 px-4">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h1>
                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div key={index} className="border rounded-lg overflow-hidden shadow-lg">
                            <button className="w-full flex justify-between items-center px-5 py-3 text-left text-lg font-semibold bg-gray-100 hover:bg-gray-200"
                                    onClick={() => toggleFAQ(index)}>
                                <span>{faq.question}</span>
                                <span className="text-xl">
                                    {openIndex === index ? '-' : '+'}
                                </span>
                            </button>
                            {openIndex === index && (
                                <div className="accordion__content px-5 py-3 text-gray-600">
                                    <p>{faq.answer}</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default FAQSection;
