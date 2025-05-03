
import React, { useEffect } from 'react';
import { useLocation } from "react-router-dom";
import Header from '../components/Header';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col font-roboto">
      <Header />
      
      <div className="flex-1 flex items-center justify-center bg-gray-100">
        <div className="text-center p-8 max-w-md">
          <div className="text-6xl font-bold text-navyDark mb-4">404</div>
          <h1 className="text-2xl font-medium text-gray-800 mb-4">Page Not Found</h1>
          <p className="text-gray-600 mb-8">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <a
            href="/"
            className="inline-flex items-center justify-center px-5 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
          >
            <i className="fas fa-home mr-2"></i> Return to Home
          </a>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
