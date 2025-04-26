import React from 'react';

const Contact = () => {
  return (
    <div className='w-full h-screen px-4'>
      <div className='flex justify-between items-center'>
        <h1 className='text-white text-xl sm:text-2xl md:text-3xl mb-6'>📞 Contact</h1>
        <a 
          className='block md:hidden bg-yellow-500 hover:bg-yellow-400 transition px-4 py-1.5 mb-6 text-black font-medium rounded-full' 
          href="/"
        >
          Home
        </a>     
      </div>

      <div className='text-white mt-6 space-y-2'>
        <p className='mb-3'>
          <span className="font-semibold">Email:</span>{' '}
          <a 
            href="https://mail.google.com/mail/?view=cm&fs=1&to=belsareanuj2004@yahoo.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-400 underline"
          >
            📧 Send me an email
          </a>
        </p>
        <p>
          <span className="font-semibold">LinkedIn:</span>{' '}
          <a 
            href="https://www.linkedin.com/in/anuj-belsare" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-blue-400 underline"
          >
            linkedin.com/in/anuj-belsare
          </a>
        </p>
      </div>
    </div>
  );
};

export default Contact;
