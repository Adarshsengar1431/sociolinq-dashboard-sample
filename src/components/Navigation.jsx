
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Navigation = () => {
  const navigate = useNavigate();
  
  const navItems = [
    { id: 'meeting', icon: 'video', label: 'Meeting' },
    { id: 'teammates', icon: 'users', label: 'Teammates' },
    { id: 'announcement', icon: 'bullhorn', label: 'Announcement' },
    { id: 'attendance', icon: 'calendar-check', label: 'Attendance' },
  ];

  return (
    <div className="bg-white shadow-md border-b border-gray-100 py-3 overflow-x-auto">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <nav className="flex space-x-6 md:space-x-10">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => navigate(`/${item.id}`)}
                className="flex items-center justify-center flex-col px-2 py-1 text-gray-700 hover:text-blue-600 transition-colors group"
              >
                <span className="w-10 h-10 flex items-center justify-center mb-1 rounded-full bg-blue-50 text-blue-500 group-hover:bg-blue-100 transition-colors">
                  <i className={`fas fa-${item.icon}`}></i>
                </span>
                <span className="text-xs font-medium">{item.label}</span>
              </button>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
