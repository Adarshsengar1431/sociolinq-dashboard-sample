
import React from 'react';
import { Card } from './ui/card';

const ProfileBanner = () => {
  return (
    <Card className="relative h-64 rounded-xl overflow-hidden mb-6 shadow-md border-0">
      {/* Background Image - using a more appropriate office/corporate image */}
      <div className="absolute inset-0">
        <img 
          // src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1760&q=80" 
          alt="Banner" 
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Overlay Gradient - improved gradient for better text contrast */}
      <div className="absolute inset-0 bg-gradient-to-r from-navyDark to-transparent opacity-80"></div>
      
      <div className="absolute inset-0 flex items-center px-8">
        <div className="flex items-center space-x-6">
          <div className="relative rounded-full h-24 w-24 overflow-hidden border-4 border-white shadow-lg hover:scale-105 transition-transform duration-300">
            <img
              src="https://media.licdn.com/dms/image/v2/D5635AQHovURc3Tuyzg/profile-framedphoto-shrink_400_400/profile-framedphoto-shrink_400_400/0/1719441387642?e=1746856800&v=beta&t=o07lhpoRhmXXXe2m86AiHR0Z0QyGN1xvrELq52U7qfk"
              alt="Profile"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="text-white">
            <h2 className="text-2xl font-bold">Adarsh S Sengar</h2>
            <p className="text-gray-100">Full Stack Developer</p>
            <div className="flex items-center mt-2">
              <p className="text-gray-200 text-sm mr-4">
                <i className="fas fa-briefcase mr-1"></i>Intern
              </p>
              <p className="text-gray-200 text-sm">
                <i className="fas fa-map-marker-alt mr-1"></i> Bangalore,India
              </p>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default ProfileBanner;
