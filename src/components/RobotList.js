import React from 'react';
import { Link } from 'react-router-dom';

// Helper function to format date
const formatDate = (date) => {
  return new Date(date).toLocaleString();
};

function RobotList({ robots }) {
  return (
    <div className="overflow-x-auto bg-blue-300 ">
      <table className="min-w-full table-auto border-collapse border border-gray-300">
        <thead>
          <tr>
            <th className="border-b px-4 py-2 text-left">ID</th>
            <th className="border-b px-4 py-2 text-left">Status</th>
            <th className="border-b px-4 py-2 text-left">Battery</th>
            <th className="border-b px-4 py-2 text-left">CPU</th>
            <th className="border-b px-4 py-2 text-left">RAM</th>
            <th className="border-b px-4 py-2 text-left">Last Updated</th>
          </tr>
        </thead>
        <tbody>
          {robots.map((robot) => {
            const isOffline = !robot.online;
            const isLowBattery = robot.battery < 20;
            return (
              <tr
                key={robot.id}
                className={`${
                  isOffline ? 'bg-red-300' : isLowBattery ? 'bg-yellow-200' : 'bg-white'
                }`}
              >
                <td className="border-b px-4 py-2">{robot.id}</td>
                <td className={`border-b px-4 py-2 ${isOffline ? 'text-red-600' : 'text-green-600'}`}>
                  {robot.online ? 'Online' : 'Offline'}
                </td>
                <td className={`border-b px-4 py-2 ${isLowBattery ? 'text-yellow-600' : ''}`}>
                  {robot.battery}%
                </td>
                <td className="border-b px-4 py-2">{robot.cpu}%</td>
                <td className="border-b px-4 py-2">{robot.ram}MB</td>
                <td className="border-b px-4 py-2">{formatDate(robot.lastUpdated)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default RobotList;
