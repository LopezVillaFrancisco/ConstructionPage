import React from 'react';
import ContactForm from './ContactForm';

const ConstructionManagementPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center text-blue-500 md:text-left md:mb-8">Construction Management</h1>
      <div className="flex flex-col md:flex-row items-center mb-8">
        <div className="md:w-1/2 mb-6 md:mb-0 md:pr-8">
          <p className="text-lg leading-relaxed">
            Our Construction Management services focus on overseeing construction projects from inception to completion. We ensure that projects are completed on time, within budget, and to the highest quality standards. Our team provides expert guidance in project planning, coordination, and execution to help you achieve your construction goals.
          </p>
        </div>
        <div className="md:w-1/2">
          <img
            src="https://www.procore.com/library/wp-content/uploads/2023/06/Ultimate-Guide-to-Construction-Management-Procore-Blog-Hero.png"
            alt="Construction Management"
            className="w-full h-auto object-cover rounded-lg shadow-md"
          />
        </div>
      </div>
      <ContactForm title={"Are you interested? Don't hesitate to contact us"} />
    </div>
  );
};

export default ConstructionManagementPage;
