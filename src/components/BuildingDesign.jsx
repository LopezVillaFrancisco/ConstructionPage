import React from 'react';
import ContactForm from './ContactForm';

const BuildingDesignPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center text-blue-500 md:text-left md:mb-8">Building Design Solutions</h1>
      <div className="flex flex-col md:flex-row items-center mb-8">
        <div className="md:w-1/2 mb-6 md:mb-0 md:pr-8">
          <p className="text-lg leading-relaxed">
            Our Building Design Solutions focus on creating innovative and functional designs tailored to your specific needs. We collaborate with clients to develop architectural plans that maximize space, enhance aesthetics, and ensure sustainability. Let us help you bring your vision to life with our expert design services.
          </p>
        </div>
        <div className="md:w-1/2">
          <img
            src="https://images.squarespace-cdn.com/content/v1/5567598ce4b0354e4ca0cf84/1511813727047-6E00C3TSZD18TDJMBQV1/AdobeStock_91616961.jpeg"
            alt="Building Design Solutions"
            className="w-full h-auto object-cover rounded-lg shadow-md"
          />
        </div>
      </div>
      <ContactForm title={"Are you interested? Don't hesitate to contact us"} />
    </div>
  );
};

export default BuildingDesignPage;
