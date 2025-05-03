
import React from 'react';
import { useNavigate } from 'react-router-dom';
import SidebarProfile from './SidebarProfile';

const Sidebar = () => {
  const navigate = useNavigate();
  
  // Sidebar navigation items with better icon mappings
  const navItems = [
    { id: 1, icon: 'home', label: 'Dashboard', notifications: 10, path: '/' },
    { id: 2, icon: 'users', label: 'Classmates', notifications: 2, path: '/classmates' },
    { id: 3, icon: 'clipboard', label: 'Assignments', notifications: 4, path: '/assignments' },
    { id: 4, icon: 'calendar-alt', label: 'Attendance', notifications: 1, path: '/attendance' },
    { id: 5, icon: 'bell', label: 'Announcement', notifications: 3, path: '/announcement' },
    { id: 6, icon: 'book', label: 'Learn', notifications: 5, path: '/learn' },
    { id: 7, icon: 'calendar-check', label: 'Events', notifications: 2, path: '/events' },
    { id: 8, icon: 'dollar-sign', label: 'Fees', notifications: 3, path: '/fees' },
    { id: 9, icon: 'user-friends', label: 'Clubs', notifications: 1, path: '/clubs' },
  ];

  // Bottom menu items with better icon mappings
  const bottomItems = [
    { id: 'mode', icon: 'moon', label: 'Mode', path: '/mode' },
    { id: 'logout', icon: 'sign-out-alt', label: 'Logout', path: '/logout' },
  ];

  // Get current path to highlight active item
  const currentPath = window.location.pathname;

  return (
    <div className="bg-white h-screen shadow-md overflow-y-auto w-64 flex-shrink-0 hidden md:flex md:flex-col">
      {/* Profile Section */}
      <SidebarProfile />

      <div className="flex-1 py-2">
        {/* Navigation Items */}
        <nav className="space-y-1 px-3">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => navigate(item.path)}
              className={`flex items-center justify-between w-full p-2 rounded hover:bg-gray-100 text-gray-700 ${
                currentPath === item.path ? 'bg-blue-50 text-blue-600' : ''
              }`}
            >
              <div className="flex items-center">
                <span className="w-8 h-8 flex items-center justify-center text-blue-500">
                  <i className={`fas fa-${item.icon}`}></i>
                </span>
                <span className="ml-3 text-sm font-medium">{item.label}</span>
              </div>
              {item.notifications > 0 && (
                <span className="bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {item.notifications}
                </span>
              )}
            </button>
          ))}
        </nav>
      </div>

      {/* Bottom Menu Items */}
      <div className="border-t border-gray-200 p-4">
        <nav className="space-y-1">
          {bottomItems.map((item) => (
            <button
              key={item.id}
              onClick={() => navigate(item.path)}
              className="flex items-center w-full p-2 rounded hover:bg-gray-100 text-gray-700"
            >
              <span className="w-8 h-8 flex items-center justify-center text-blue-500">
                <i className={`fas fa-${item.icon}`}></i>
              </span>
              <span className="ml-3 text-sm font-medium">{item.label}</span>
            </button>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
