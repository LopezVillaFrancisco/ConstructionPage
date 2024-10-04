import React from 'react';
import { FaCheckCircle, FaClipboardCheck, FaRegFileAlt, FaHammer, FaTools } from 'react-icons/fa';
import ContactForm from './ContactForm';

const QualityAssurancePage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6 text-gray-900">Quality Assurance</h1>
      <div className="flex flex-col md:flex-row mb-8">
        <div className="md:w-1/2">
          <p className="text-lg leading-relaxed mb-4">
            Our Quality Assurance services are designed to ensure that your construction projects meet the highest standards of quality and safety. We implement rigorous testing and inspection processes to identify and resolve any issues before they become significant problems.
          </p>
          <p className="text-lg leading-relaxed mb-4">
            Our dedicated team works closely with you to understand your specific requirements and establish a comprehensive quality plan. We believe that quality assurance is not just about meeting standards; it's about delivering peace of mind to our clients.
          </p>
        </div>
        <div className="md:w-1/2 mb-6 md:mb-0 md:pl-8">
          <img
            src="https://planradar-website.s3.amazonaws.com/production/uploads/2024/01/inspection-site-management-tablet-iStock-1405772906.jpg"
            alt="Quality Assurance"
            className="w-full h-auto object-cover rounded-lg shadow-md"
          />
        </div>
      </div>
      <div className="flex justify-around mb-6">
        <div className="flex flex-col items-center border border-gray-400 rounded-lg shadow-lg p-3 mx-2 bg-white transition-shadow duration-300 hover:shadow-2xl hover:shadow-yellow-300">
          <FaCheckCircle className="text-yellow-500 mb-2 text-3xl" />
          <span className="text-md leading-relaxed text-center font-semibold">Comprehensive site inspections</span>
        </div>
        <div className="flex flex-col items-center border border-gray-400 rounded-lg shadow-lg p-3 mx-2 bg-white transition-shadow duration-300 hover:shadow-2xl hover:shadow-yellow-300">
          <FaClipboardCheck className="text-yellow-500 mb-2 text-3xl" />
          <span className="text-md leading-relaxed text-center font-semibold">Testing of materials and workmanship</span>
        </div>
        <div className="flex flex-col items-center border border-gray-400 rounded-lg shadow-lg p-3 mx-2 bg-white transition-shadow duration-300 hover:shadow-2xl hover:shadow-yellow-300">
          <FaRegFileAlt className="text-yellow-500 mb-2 text-3xl" />
          <span className="text-md leading-relaxed text-center font-semibold">Compliance checks with industry regulations</span>
        </div>
        <div className="flex flex-col items-center border border-gray-400 rounded-lg shadow-lg p-3 mx-2 bg-white transition-shadow duration-300 hover:shadow-2xl hover:shadow-yellow-300">
          <FaHammer className="text-yellow-500 mb-2 text-3xl" />
          <span className="text-md leading-relaxed text-center font-semibold">Detailed documentation of findings</span>
        </div>
        <div className="flex flex-col items-center border border-gray-400 rounded-lg shadow-lg p-3 mx-2 bg-white transition-shadow duration-300 hover:shadow-2xl hover:shadow-yellow-300">
          <FaTools className="text-yellow-500 mb-2 text-3xl" />
          <span className="text-md leading-relaxed text-center font-semibold">Recommendations for improvement</span>
        </div>
      </div>
      <ContactForm title={"Are you interested? Don't hesitate to contact us"} />
    </div>
  );
};

export default QualityAssurancePage;
