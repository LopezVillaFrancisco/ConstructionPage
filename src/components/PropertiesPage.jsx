import React from 'react';
import { Link } from 'react-router-dom';
import properties from '../propertiesData';
import { FaBed, FaMapMarkerAlt } from 'react-icons/fa';

const PropertiesPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Our Completed Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {properties.map(property => (
          <div key={property.id} className="border rounded-lg overflow-hidden shadow-lg bg-white">
            <img
              src={property.imageUrl[0]}
              alt={property.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4 flex flex-col h-44">
              <div className="flex-grow">
                <h2 className="text-xl font-semibold">{property.name}</h2>
                <div className="flex items-center mt-2">
                  <FaBed className="text-yellow-600 mr-2" />
                  <p>{property.rooms} Bedrooms</p>
                </div>
                <div className="flex items-center mt-2">
                  <FaMapMarkerAlt className="text-yellow-600 mr-2" />
                  <p>{property.location}</p>
                </div>
                <div className="text-gray-600 mb-2">
                  <strong className='text-yellow-600'>Year Built:</strong> {property.year_built}
                </div>
                <div className="text-gray-600 mb-4">
                  <strong className='text-yellow-600'>Features:</strong> {property.features.join(', ')}
                </div>
              </div>
              <div>
                <p className="text-lg font-bold text-yellow-600">{property.price}</p>
              </div>
            </div>
            <div className="p-4">
              <Link to={`/portfolio/${property.id}`}>
                <button className="w-full bg-yellow-600 hover:bg-yellow-700 text-white font-semibold py-2 px-4 rounded">
                  View Details
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PropertiesPage;
