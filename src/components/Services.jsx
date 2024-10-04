import React from 'react';
import { FaHammer, FaBuilding, FaClipboardCheck } from 'react-icons/fa';

const services = [
  {
    id: 1,
    icon: <FaHammer className="text-4xl text-yellow-600" />, // Adjusted color
    title: 'Construction Management',
    description: 'Comprehensive management of construction projects from start to finish.',
  },
  {
    id: 2,
    icon: <FaBuilding className="text-4xl text-yellow-600" />, // Adjusted color
    title: 'Building Design',
    description: 'Innovative designs tailored to meet your construction needs and vision.',
  },
  {
    id: 3,
    icon: <FaClipboardCheck className="text-4xl text-yellow-600" />, // Adjusted color
    title: 'Quality Assurance',
    description: 'Ensuring the highest standards of quality and safety throughout the project.',
  },
];

const Services = () => {
  return (
    <div className="py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map(service => (
            <div key={service.id} className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="flex justify-center items-center mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-sm text-gray-600 mb-4">{service.description}</p>
              <a href="/" className="inline-block bg-yellow-600 text-white py-2 px-4 rounded hover:bg-yellow-700">
                View More
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
