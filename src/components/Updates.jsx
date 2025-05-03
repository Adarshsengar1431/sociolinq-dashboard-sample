
import React from 'react';
import { Card, CardHeader, CardContent } from './ui/card';
import { Separator } from './ui/separator';

const Updates = () => {
  const updates = [
    {
      id: 1,
      type: 'award',
      title: 'ABC Public School earned the Excellence Award!',
      date: '3rd Dec, 2023',
      time: '1 h ago',
      color: 'bg-yellow-50 border-yellow-200',
      icon: 'trophy',
      iconColor: 'text-yellow-500'
    },
    {
      id: 2,
      type: 'notification',
      title: 'New course materials available for download',
      date: '2nd Dec, 2023',
      time: '5 h ago',
      color: 'bg-blue-50 border-blue-200',
      icon: 'book',
      iconColor: 'text-blue-500'
    },
    {
      id: 3,
      type: 'event',
      title: 'Annual Sports Day registration is now open!',
      date: '1st Dec, 2023',
      time: '1 d ago',
      color: 'bg-green-50 border-green-200',
      icon: 'running',
      iconColor: 'text-green-500'
    },
    {
      id: 4,
      type: 'alert',
      title: 'Campus safety drill scheduled for next week',
      date: '30th Nov, 2023',
      time: '2 d ago',
      color: 'bg-red-50 border-red-200',
      icon: 'exclamation-triangle',
      iconColor: 'text-red-500'
    },
  ];

  return (
    <Card className="shadow-sm border border-gray-100">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-medium text-gray-800 flex items-center">
            <i className="fas fa-bell mr-2 text-blue-500"></i>
            Recent Updates
          </h3>
          <button className="text-sm text-blue-500 hover:text-blue-700 transition-colors">Mark all as read</button>
        </div>
      </CardHeader>
      <Separator className="mb-4" />
      <CardContent>
        <div className="space-y-4">
          {updates.map((update) => (
            <div
              key={update.id}
              className={`border rounded-xl ${update.color} p-4 transition-all hover:shadow-md hover:translate-y-[-2px] duration-200`}
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 bg-white rounded-full shadow-sm">
                  <i className={`fas fa-${update.icon} ${update.iconColor}`}></i>
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-800">{update.title}</p>
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-xs text-gray-500">
                      <i className="far fa-calendar-alt mr-1"></i> {update.date}
                    </span>
                    <span className="text-xs text-black bg-white px-2 py-1 rounded-full shadow-sm font-medium">
                      {update.time}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default Updates;
