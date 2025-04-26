import React from 'react';
import { User } from 'lucide-react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <header className="w-full px-4 md:px-8 py-3 flex justify-between items-center bg-transparent">
      {/* Left: Name */}
      <Link to="/" className="mainText">
        <h1 className="text-lg sm:text-xl md:text-2xl text-white">
          Anuj Belsare
        </h1>
      </Link>

      {/* Right: Contact Icon */}
      <Link to="/contact" className="contact">
        <User
          className="text-white"
          size={24}          
          strokeWidth={1.8}
        />
      </Link>
    </header>
  );
};

export default NavBar;
