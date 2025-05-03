
import React from 'react';
import { Card, CardHeader, CardContent } from './ui/card';
import { Separator } from './ui/separator';

const Events = () => {
  const events = [
    {
      id: 1,
      title: 'Annual Sports Day',
      date: '3rd Dec, 2023',
      time: '09:30 AM',
      days: 'In 3 days',
      type: 'sports',
      image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      color: 'bg-blue-50'
    },
    {
      id: 2,
      title: 'Annual Function Day',
      date: '10th Dec, 2023',
      time: '10:00 AM',
      days: 'In 10 days',
      type: 'function',
      image: 'https://images.unsplash.com/photo-1540317580384-e5d43616b9aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      color: 'bg-green-50'
    },
    {
      id: 3,
      title: 'Science Exhibition',
      date: '15th Dec, 2023',
      time: '11:30 AM',
      days: 'In 15 days',
      type: 'exhibition',
      image: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      color: 'bg-purple-50'
    },
  ];

  return (
    <Card className="shadow-sm border border-gray-100">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-center">
          <h3 className="flex items-center text-lg font-medium text-gray-800">
            <span className="mr-2 text-orange-500">
              <i className="fas fa-calendar-alt"></i>
            </span>
            Upcoming Events
          </h3>
          <button className="text-sm text-blue-500 hover:text-blue-700 transition-colors">
            View Calendar
          </button>
        </div>
      </CardHeader>
      <Separator className="mb-4" />
      <CardContent>
        <div className="space-y-4">
          {events.map((event) => (
            <div 
              key={event.id} 
              className={`flex items-center space-x-3 p-3 rounded-xl ${event.color} border border-opacity-50 hover:shadow-md transition-all duration-200 hover:-translate-y-0.5`}
            >
              <div className="flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden shadow-sm">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-grow">
                <div className="flex justify-between items-center">
                  <h4 className="text-sm font-medium text-gray-800">{event.title}</h4>
                  <span className="text-xs bg-white px-2 py-1 rounded-full shadow-sm text-blue-500 font-medium">
                    {event.days}
                  </span>
                </div>
                <div className="flex items-center mt-2">
                  <span className="text-xs text-gray-500 mr-4 flex items-center">
                    <i className="far fa-calendar-alt mr-1"></i> {event.date}
                  </span>
                  <span className="text-xs text-gray-500 flex items-center">
                    <i className="far fa-clock mr-1"></i> {event.time}
                  </span>
                </div>
                <button className="mt-2 text-xs bg-white border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white rounded-full px-3 py-1 transition-colors">
                  Add to Calendar
                </button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default Events;
