
import React from 'react';
import { useNavigate } from 'react-router-dom';

const SidebarProfile = () => {
  const navigate = useNavigate();
  
  return (
    <div className="p-4 border-b border-gray-200">
      {/* User Profile */}
      <button 
        onClick={() => navigate('/profile')} 
        className="flex items-center space-x-4 w-full hover:bg-gray-100 p-2 rounded-lg transition-colors"
      >
        <div className="relative rounded-full h-16 w-16 overflow-hidden border-2 border-blue-500">
          <img
            src="public/CompanyIMG/Main.jpg"
            alt="Profile"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="flex flex-col">
          <h3 className="font-medium text-gray-800">Adarsh S Sengar</h3>
          <div className="bg-blue-500 text-white text-xs py-0.5 px-2 rounded-sm mb-1">Full Stack Developer</div>
          <p className="text-xs text-gray-600">Intern</p>
        </div>
      </button>
    </div>
  );
};

export default SidebarProfile;
