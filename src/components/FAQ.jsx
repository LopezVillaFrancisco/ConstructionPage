import React, { useState } from 'react';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleOpen = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
      <div className="space-y-4">
        <div className="border rounded-lg shadow-lg">
          <div 
            className="p-4 flex justify-between items-center cursor-pointer"
            onClick={() => toggleOpen(0)}
          >
            <h3 className="text-xl font-semibold">What types of construction services do you offer?</h3>
            {openIndex === 0 ? (
              <AiOutlineMinus className="text-xl text-yellow-600" />
            ) : (
              <AiOutlinePlus className="text-xl text-yellow-600" />
            )}
          </div>
          <div 
            className={`overflow-hidden transition-all duration-300 ${openIndex === 0 ? 'max-h-screen' : 'max-h-0'}`}
          >
            <p className="p-4 text-gray-600">
              We offer a range of construction services, including residential, commercial, and industrial projects.
            </p>
          </div>
        </div>
        <div className="border rounded-lg shadow-lg">
          <div 
            className="p-4 flex justify-between items-center cursor-pointer"
            onClick={() => toggleOpen(1)}
          >
            <h3 className="text-xl font-semibold">How long does a typical project take?</h3>
            {openIndex === 1 ? (
              <AiOutlineMinus className="text-xl text-yellow-600" />
            ) : (
              <AiOutlinePlus className="text-xl text-yellow-600" />
            )}
          </div>
          <div 
            className={`overflow-hidden transition-all duration-300 ${openIndex === 1 ? 'max-h-screen' : 'max-h-0'}`}
          >
            <p className="p-4 text-gray-600">
              The duration of a project depends on its complexity. On average, residential projects take between 3 to 6 months.
            </p>
          </div>
        </div>
        <div className="border rounded-lg shadow-lg">
          <div 
            className="p-4 flex justify-between items-center cursor-pointer"
            onClick={() => toggleOpen(2)}
          >
            <h3 className="text-xl font-semibold">Do you provide project management services?</h3>
            {openIndex === 2 ? (
              <AiOutlineMinus className="text-xl text-yellow-600" />
            ) : (
              <AiOutlinePlus className="text-xl text-yellow-600" />
            )}
          </div>
          <div 
            className={`overflow-hidden transition-all duration-300 ${openIndex === 2 ? 'max-h-screen' : 'max-h-0'}`}
          >
            <p className="p-4 text-gray-600">
              Yes, we offer comprehensive project management services to ensure your project runs smoothly from start to finish.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
