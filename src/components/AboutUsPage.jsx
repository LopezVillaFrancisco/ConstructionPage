import React from 'react';
import ContactForm from './ContactForm';

const AboutUs = () => {
  return (
    <div className="w-full">
      <section className="flex flex-wrap items-center p-6 text-black border border-gray-200 w-full">
        <div className="w-full md:w-1/2">
          <img
            src="https://media.smallbiztrends.com/2022/01/how-to-start-a-construction-company.png"
            alt="Construction Team"
            className="w-full h-[300px] object-cover rounded-lg" // Cambié h-auto a un valor fijo
          />
        </div>
        <div className="w-full md:w-1/2 md:pl-8 mt-4 md:mt-0">
          <h2 className="text-2xl font-bold mb-4 text-center md:text-left">Welcome to Our Construction Company</h2>
          <p className="text-center md:text-left">
            At Our Construction Company, we are dedicated to bringing your vision to life. 
            Our team of experts is here to guide you through every step of the building process, 
            ensuring quality and precision in every project.
          </p>
        </div>
      </section>

      <section className="flex flex-wrap items-center p-6 text-black border border-gray-200 w-full">
        <div className="w-full md:w-1/2 md:order-2">
          <img
            src="https://usercontent.one/wp/roberthurstgroup.co.uk/wp-content/uploads/2024/02/Tips-for-Successful-Teamwork.webp?media=1720690659"
            alt="Construction Project"
            className="w-full h-[300px] object-cover rounded-lg" // Cambié h-auto a un valor fijo
          />
        </div>
        <div className="w-full md:w-1/2 md:pr-8 mt-4 md:mt-0">
          <h2 className="text-2xl font-bold mb-4 text-center md:text-left">Our Vision</h2>
          <p className="text-center md:text-left">
            Our vision is to be the leading construction firm known for our commitment to excellence 
            and our unmatched service. We strive to exceed your expectations and help you build your dreams.
          </p>
        </div>
      </section>

      <section className="flex flex-wrap items-center p-6 text-black border border-gray-200 w-full">
        <div className="w-full md:w-1/2">
          <img
            src="https://onekeyresources.milwaukeetool.com/hs-fs/hubfs/customers-consulting-with-construction-managers.jpg?width=724&name=customers-consulting-with-construction-managers.jpg"
            alt="Happy Family in Front of House"
            className="w-full h-[400px] object-cover rounded-lg" 
          />
        </div>
        <div className="w-full md:w-1/2 md:pl-8 mt-4 md:mt-0">
          <h2 className="text-2xl font-bold mb-4 text-center md:text-left">Our Commitment</h2>
          <p className="text-center md:text-left">
            We are committed to providing exceptional service to every client. Whether you're 
            building your first home or undertaking a large commercial project, we offer personalized 
            assistance to ensure your needs are met.
          </p>
        </div>
      </section>

      <section className="text-center my-10 w-full">
        <h2 className="text-2xl font-bold mb-6">Our Team</h2>
        <div className="flex flex-wrap justify-center gap-8 w-full">
          <div className="w-1/2 sm:w-1/3 md:w-1/5">
            <img
              src="https://via.placeholder.com/150x150?text=John+Doe"
              alt="John Doe"
              className="w-full h-auto rounded-full mx-auto"
            />
            <h3 className="text-lg font-semibold mt-2">John Doe</h3>
            <p className="text-gray-600">Founder</p>
          </div>
          <div className="w-1/2 sm:w-1/3 md:w-1/5">
            <img
              src="https://via.placeholder.com/150x150?text=Jane+Smith"
              alt="Jane Smith"
              className="w-full h-auto rounded-full mx-auto"
            />
            <h3 className="text-lg font-semibold mt-2">Jane Smith</h3>
            <p className="text-gray-600">Project Manager</p>
          </div>
          <div className="w-1/2 sm:w-1/3 md:w-1/5">
            <img
              src="https://via.placeholder.com/150x150?text=Emily+Johnson"
              alt="Emily Johnson"
              className="w-full h-auto rounded-full mx-auto"
            />
            <h3 className="text-lg font-semibold mt-2">Emily Johnson</h3>
            <p className="text-gray-600">Design Engineer</p>
          </div>
        </div>
      </section>
      
      <ContactForm title={"Get in touch with us"} />
    </div>
  );
};

export default AboutUs;
