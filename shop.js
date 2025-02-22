import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-xl font-bold">Gaming Store</h1>
        <div className="flex space-x-4">
          <Link to="/login" className="text-white hover:text-gray-300">Login</Link>
          <Link to="/register" className="text-white hover:text-gray-300">Register</Link>
          <Link to="/cart" className="text-white flex items-center hover:text-gray-300">
            <ShoppingCart size={20} className="mr-1" />
            Cart
          </Link>
        </div>
      </div>
      <div className="container mx-auto mt-4 flex justify-between items-center">
        <div className="flex space-x-4">
          <Link to="/brand-deals" className="text-white hover:text-gray-300">Brand Deals</Link>
          <Link to="/keyboards" className="text-white hover:text-gray-300">Keyboards</Link>
          <Link to="/mice" className="text-white hover:text-gray-300">Mice</Link>
          <Link to="/headsets" className="text-white hover:text-gray-300">Headsets</Link>
          <Link to="/speakers" className="text-white hover:text-gray-300">Speakers</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
