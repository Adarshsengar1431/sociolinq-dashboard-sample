
import React from 'react';
import { Card, CardHeader, CardContent } from './ui/card';
import { Separator } from './ui/separator';

const TeamMembers = () => {
  const teamMembers = [
    {
      id: 1,
      name: 'Arindam Ghosh',
      image: 'https://randomuser.me/api/portraits/men/32.jpg',
      role: 'CEO',
      status: 'online',
    },
    {
      id: 2,
      name: 'Abhishek Ghosh',
      image: 'https://randomuser.me/api/portraits/men/33.jpg',
      role: 'HR',
      status: 'online',
    },
    {
      id: 3,
      name: 'Shrusti',
      image: 'https://randomuser.me/api/portraits/women/32.jpg',
      role: 'UIUX Designer',
      status: 'away',
    },
    {
      id: 4,
      name: 'Shreedevi',
      image: 'https://randomuser.me/api/portraits/women/33.jpg',
      role: 'HR',
      status: 'offline',
    },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'online': return 'status-online';
      case 'away': return 'status-away';
      case 'offline': return 'status-offline';
      default: return 'status-offline';
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case 'online': return 'Online';
      case 'away': return 'Away';
      case 'offline': return 'Offline';
      default: return 'Offline';
    }
  };

  return (
    <Card className="shadow-sm border border-gray-100 mb-6">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-center">
          <h3 className="flex items-center text-lg font-medium text-gray-800">
            <span className="mr-2 text-green-500">
              <i className="fas fa-users"></i>
            </span>
            My Team
          </h3>
          <button className="text-sm text-blue-500 hover:text-blue-700 flex items-center">
            View All <i className="fas fa-arrow-right ml-1"></i>
          </button>
        </div>
      </CardHeader>
      <Separator className="mb-4" />
      <CardContent className="pb-4">
        <div className="flex space-x-4 overflow-x-auto py-2">
          {teamMembers.map((member) => (
            <div 
              key={member.id} 
              className="flex flex-col items-center min-w-[120px] group bg-gray-50 p-4 rounded-xl border border-gray-100 hover:border-blue-200 transition-all duration-200 hover:shadow-md hover:-translate-y-1"
            >
              <div className="relative">
                <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-gray-200 group-hover:border-blue-300 transition-all">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div 
                  className={`absolute bottom-0 right-0 h-5 w-5 rounded-full border-2 border-white ${getStatusColor(member.status)} flex items-center justify-center`} 
                  title={getStatusText(member.status)}
                >
                </div>
              </div>
              <p className="text-sm font-medium text-gray-800 mt-3 text-center">{member.name}</p>
              <p className="text-xs text-gray-500 text-center">{member.role}</p>
              <button className="mt-2 text-xs bg-blue-500 hover:bg-blue-600 text-white rounded-full px-3 py-1 transition-colors">
                Message
              </button>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default TeamMembers;
