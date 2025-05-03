
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
            src="https://www.sociolinq.com/_next/image?url=%2Fimages%2Flogo%2Flogoo.jpeg&w=256&q=75" 
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
                src="https://media.licdn.com/dms/image/v2/D5635AQHovURc3Tuyzg/profile-framedphoto-shrink_400_400/profile-framedphoto-shrink_400_400/0/1719441387642?e=1746856800&v=beta&t=o07lhpoRhmXXXe2m86AiHR0Z0QyGN1xvrELq52U7qfk"
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
