
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  
  return (
    <header className="bg-navyDark text-white p-4 flex items-center justify-between sticky top-0 z-10 shadow-md">
      {/* Company Logo */}
      <div className="flex items-center cursor-pointer" onClick={() => navigate('/')}>
        <div className="mr-2 h-10 w-10 bg-white rounded-md flex items-center justify-center shadow-sm">
          <img 
            src="public/CompanyIMG/d11a6092-5fa7-4813-aa48-376302a5dbb6.png" 
            alt="Sociolinq"
            className="h-8 w-8"
          />
        </div>
        <div>
          <h1 className="text-xl font-bold">SociolinQ</h1>
          <span className="text-xs block text-gray-300">Revolutionizing ERP solutions</span>
        </div>
      </div>

      {/* Mobile Menu Button */}
      <button className="md:hidden text-white p-2 rounded-full hover:bg-gray-700 transition-colors">
        <i className="fas fa-bars"></i>
      </button>

      {/* Search Bar */}
      <div className="hidden md:block max-w-md w-full">
        <div className="relative">
          <input
            type="text"
            placeholder="Search"
            className="w-full px-4 py-2 rounded-full bg-navyLight border border-gray-700 text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
          />
          <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
            <i className="fas fa-search"></i>
          </button>
        </div>
      </div>

      {/* User Actions */}
      <div className="flex items-center space-x-4">
        {/* Notifications */}
        <button 
          className="relative p-2 hover:bg-gray-700 rounded-full w-10 h-10 flex items-center justify-center transition-colors"
          onClick={() => navigate('/notifications')}
        >
          <i className="fas fa-bell"></i>
          <span className="notification-badge">3</span>
        </button>

        {/* User Profile */}
        <div className="relative">
          <button 
            onClick={() => navigate('/profile')} 
            className="flex items-center space-x-2 hover:bg-gray-700 rounded-full p-1 transition-colors"
          >
            <div className="h-8 w-8 rounded-full bg-gray-300 overflow-hidden border-2 border-gray-600">
              <img
                src="public/CompanyIMG/Main.jpg"
                alt="User"
                className="h-full w-full object-cover"
              />
            </div>
            <span className="hidden md:inline text-sm">Adarsh S Sengar</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
