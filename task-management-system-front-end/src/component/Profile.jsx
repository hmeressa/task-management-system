import React, { useState } from 'react';

const ProfileComponent = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [dragY, setDragY] = useState(0);
    const handleDragStart = (e) => {
    setIsDragging(true);
    setDragY(e.clientY);
  };  
  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.href = '/login';
  };

  const handleDragEnd = () => {
    setIsDragging(false);
    setDragY(0);
  };

  return (
    <div
      className="fixed top-16 bg-gray-800 right-10 rounded text-white p-4">
        <ul className="flex flex-col items-start text-sm">
          <li className="mb-2 ">
            <button className="text-white">Update Profile</button>
          </li>
          <li className="mb-2">
            <button className="text-white">Settings</button>
          </li>
          <li>
            <button onClick={handleLogout} className="text-white">Logout</button>
          </li>
        </ul>
      </div>
  );
};

export default ProfileComponent;
