
import React from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Navigation from '../components/Navigation';

const Classmates = () => {
  const students = [
    {
      id: 1,
      name: 'Arindam Ghosh',
      image: 'https://randomuser.me/api/portraits/men/22.jpg',
      email: 'arindamghosh@sociolinq.com',
      phone: '+91-1234567890',
      department: 'Computer Science',
      year: '3rd Year'
    },
    {
      id: 2,
      name: 'Shrikant',
      image: 'https://randomuser.me/api/portraits/men/67.jpg',
      email: 'shrikant@sociolinq.com',
      phone: '+91-1234567890',
      department: 'Electrical Engineering',
      year: '4th Year'
    },
    {
      id: 3,
      name: 'Ganesh',
      image: 'https://randomuser.me/api/portraits/men/45.jpg',
      email: 'ganesh@sociolinq.com',
      phone: '+91-1234567890',
      department: 'Psychology',
      year: '1st Year'
    },
    {
      id: 4,
      name: 'Shrusti',
      image: 'https://randomuser.me/api/portraits/women/32.jpg',
      email: 'shrusti@sociolinq.com',
      phone: '+91-1234567890',
      department: 'Marketing',
      year: '3rd Year'
    },
    {
      id: 5,
      name: 'Shreedevi',
      image: 'https://randomuser.me/api/portraits/women/33.jpg',
      email: 'shrusti@sociolinq.com',
      phone: '+91-1234567890',
      department: 'Marketing',
      year: '3rd Year'
    },
    
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col  font-roboto">
      <Header />
      
      <div className="flex flex-1">
        <Sidebar />
        
        <div className="flex-1 overflow-auto">
          <Navigation />
          
          <div className="container mx-auto px-4 py-6">
            <h1 className="text-2xl font-bold mb-6 text-gray-800  ">Classmates</h1>
            
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-medium text-gray-800">Student Directory</h2>
                <div className="flex space-x-2">
                  <button className="px-2 py-2 bg-blue-500  text-white rounded-md hover:bg-blue-600">
                    <i className="fas fa-plus mr-2"></i>Add
                  </button>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Search students..."
                      className="px-4 py-2 border rounded-md w-64"
                    />
                    <i className="fas fa-search absolute right-3 top-3  text-gray-400"></i>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {students.map(student => (
                  <div key={student.id} className="border  rounded-xl p-4 hover:shadow-md  transition-shadow">
                    <div className="flex items-center space-x-4">
                      <img
                        src={student.image}
                        alt={student.name}
                        className="w-16 h-16 rounded-full object-cover border-2  border-gray-200"
                      />
                      <div>
                        <h3 className="font-medium text-gray-800">{student.name}</h3>
                        <p className="text-sm text-gray-500">{student.department}</p>
                        <p className="text-xs text-gray-500">{student.year}</p>
                      </div>
                    </div>
                    <div className="mt-4 space-y-2">
                      <div className="flex items-center text-sm">
                        <i className="fas fa-envelope w-5 text-gray-400"></i>
                        <span className="text-gray-600">{student.email}</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <i className="fas fa-phone w-5 text-gray-400"></i>
                        <span className="text-gray-600">{student.phone}</span>
                      </div>
                    </div>
                    <div className="mt-4 flex justify-end">
                      <button className="text-blue-500 hover:text-blue-700 text-sm">
                        View Profile <i className="fas fa-arrow-right ml-1"></i>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Classmates;
