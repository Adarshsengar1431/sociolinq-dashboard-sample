
import React, { useEffect } from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Navigation from '../components/Navigation';
import ProfileBanner from '../components/ProfileBanner';
import Updates from '../components/Updates';
import TeamMembers from '../components/TeamMembers';

const Profile = () => {
  useEffect(() => {
    // Load Font Awesome from CDN
    const script = document.createElement('script');
    script.src = 'https://kit.fontawesome.com/a076d05399.js';
    script.crossOrigin = 'anonymous';
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col font-roboto">
      <Header />
      
      <div className="flex flex-1">
        <Sidebar />
        
        <div className="flex-1 overflow-auto">
          <div className="container mx-auto">
            <Navigation />
            
            <div className="px-4 py-6">
              <ProfileBanner />
              
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 space-y-6">
                  <div className="bg-white rounded-lg shadow-sm p-6">
                    <h3 className="text-lg font-medium mb-4 text-black">Profile Information</h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="text-sm font-medium text-gray-500">Full Name</h4>
                        <p className="mt-1 text-black " >Adarsh S Sengar</p>
                      </div>
                      
                      <div>
                        <h4 className="text-sm font-medium text-gray-500">Email</h4>
                        <p className="mt-1 text-black">adarshsengar@sociolinq.com</p>
                      </div>
                      
                      <div>
                        <h4 className="text-sm font-medium text-gray-500">Phone</h4>
                        <p className="mt-1 text-black">+91-9513270508</p>
                      </div>
                      
                      <div>
                        <h4 className="text-sm font-medium text-gray-500">Department</h4>
                        <p className="mt-1 text-black">Development</p>
                      </div>
                      
                      <div>
                        <h4 className="text-sm font-medium text-gray-500">Role</h4>
                        <p className="mt-1 text-black">Full Stack Developer / Intern</p>
                      </div>
                      
                      <div>
                        <h4 className="text-sm font-medium text-gray-500">Joined</h4>
                        <p className="mt-1 text-black">May 22, 2025</p>
                      </div>
                    </div>
                    
                    <div className="mt-6 flex space-x-4">
                      <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors">
                        Edit Profile
                      </button>
                      <button className="px-4 py-2 border bg-blue-500 border-gray-300 rounded hover:bg-gray-50 transition-colors">
                        Change Password
                      </button>
                    </div>
                  </div>
                  
                  <Updates />
                </div>
                
                <div className="space-y-6">
                  <TeamMembers />
                  
                  <div className="bg-white rounded-lg shadow-sm p-6">
                    <h3 className="text-lg font-medium mb-4 bg-blue text-black">Skills</h3>
                    
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-blue-50 text-blue-700 text-xs font-medium px-3 py-1 rounded-full">Leadership</span>
                      <span className="bg-purple-50 text-purple-700 text-xs font-medium px-3 py-1 rounded-full">Management</span>
                      <span className="bg-green-50 text-green-700 text-xs font-medium px-3 py-1 rounded-full">Communication</span>
                      <span className="bg-orange-50 text-orange-700 text-xs font-medium px-3 py-1 rounded-full">Problem Solving</span>
                      <span className="bg-red-50 text-red-700 text-xs font-medium px-3 py-1 rounded-full">Decision Making</span>
                      <span className="bg-yellow-50 text-yellow-700 text-xs font-medium px-3 py-1 rounded-full">Team Building</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <footer className="bg-white py-4 border-t text-center text-sm text-gray-600">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center items-center space-x-4">
            <a href="#" className="hover:text-gray-900">About Us</a>
            <span className="text-gray-300">|</span>
            <a href="#" className="hover:text-gray-900">Support</a>
            <span className="text-gray-300">|</span>
            <a href="#" className="hover:text-gray-900">Privacy Policy</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Profile;
