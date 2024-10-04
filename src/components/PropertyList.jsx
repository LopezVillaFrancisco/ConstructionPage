import React from 'react';
import { Link } from 'react-router-dom';
import { FaHammer, FaBuilding } from 'react-icons/fa'; 
import properties from '../propertiesData'; 

const PropertyList = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Featured Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {properties.slice(0, 3).map((property) => (
          <div key={property.id} className="border rounded-lg overflow-hidden shadow-lg">
            <img src={property.imageUrl[0]} alt={property.name} className="w-full h-48 object-cover" />
            <div className="p-4 flex flex-col">
              <div className="flex justify-between items-center mb-2">
                <h2 className="text-xl font-semibold">{property.name}</h2>
              </div>
              <div className="flex items-center text-gray-600 mb-2">
                <FaBuilding className="mr-2" color='#D97706' /> {property.rooms} rooms
              </div>
              <div className="flex items-center text-gray-600 mb-4">
                <FaHammer className="mr-2" color='#D97706' /> {property.size} built
              </div>
              <div className="text-gray-600 mb-4">
                <strong className='text-yellow-600'>Year Built:</strong> {property.year_built}
              </div>
              <div className="text-gray-600 mb-4">
                <strong className='text-yellow-600'>Features:</strong> {property.features.join(', ')}
              </div>
            </div>
            <div className="p-4">
              <Link to={`/portfolio/${property.id}`}>
                <button className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 px-4 rounded">
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

export default PropertyList;
