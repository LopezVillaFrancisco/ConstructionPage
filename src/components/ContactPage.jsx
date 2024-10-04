import ContactForm from './ContactForm';

const ContactPage = () => {
  return (
    <div className="relative min-h-screen bg-gray-800">
      <div className="px-6 lg:px-12 text-center py-12">
        <h1 className="text-4xl font-bold text-white mb-6">
          Contact Us
        </h1>
        <p className="text-xl text-white mb-8">
          We're here to help! Whether you have inquiries, feedback, or just want to connect, don't hesitate to reach out.
        </p>
        <div className="max-w-4xl mx-auto p-8 bg-white rounded-lg shadow-lg">
          <ContactForm title={'Reach Out'} />
        </div>
      </div>
      
      <footer className="bg-gray-900 text-white py-4 text-center mt-8">
        <p>&copy; {new Date().getFullYear()} Your Company Name. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default ContactPage;
