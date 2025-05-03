
import React, { useEffect } from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Navigation from '../components/Navigation';
import ProfileBanner from '../components/ProfileBanner';
import Updates from '../components/Updates';
import TeamMembers from '../components/TeamMembers';
import Events from '../components/Events';

const Index = () => {
  useEffect(() => {
    // Load Font Awesome from CDN
    const script = document.createElement('script');
    script.src = 'https://kit.fontawesome.com/a076d05399.js';
    script.crossOrigin = 'anonymous';
    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-roboto">
      <Header />
      
      <div className="flex flex-1">
        <Sidebar />
        
        <div className="flex-1 overflow-auto">
          <Navigation />
            
          <div className="container mx-auto px-4 py-6">
            <ProfileBanner />
              
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                <Updates />
              </div>
                
              <div className="space-y-6">
                <TeamMembers />
                <Events />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <footer className="bg-white py-4 border-t text-center text-sm text-gray-600">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center items-center space-x-4">
            <a href="#" className="hover:text-gray-900 transition-colors">About Us</a>
            <span className="text-gray-300">|</span>
            <a href="#" className="hover:text-gray-900 transition-colors">Support</a>
            <span className="text-gray-300">|</span>
            <a href="#" className="hover:text-gray-900 transition-colors">Privacy Policy</a>
            <span className="text-gray-300">|</span>
            <a href="#" className="hover:text-gray-900 transition-colors">Report</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
