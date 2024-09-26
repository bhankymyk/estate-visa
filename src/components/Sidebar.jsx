import React from 'react';
import { useSidebar } from './SidebarContext';
import { useLocation } from 'react-router-dom';

const Sidebar = () => {
  const location = useLocation();
  const { isOpen, toggleSidebar } = useSidebar();

  const menuItems = [
    { name: 'Overview', path: '/overview', icon: '/assets/icons/overview.svg' },
    { name: 'Occupants', path: '/occupants', icon: '/assets/icons/occupants.svg' },
    { name: 'Sub-Occupants', path: '/sub-occupants', icon: '/assets/icons/sub-occupants.svg' },
    { name: 'Houses', path: '/houses', icon: '/assets/icons/houses.svg' },
    { name: 'Gates', path: '/gates', icon: '/assets/icons/gate.svg' },
    { name: 'Messages', path: '/messages', icon: '/assets/icons/message.svg' },
    { name: 'Meetings', path: '/meetings', icon: '/assets/icons/meetings.svg' },
    { name: 'Service Request', path: '/service-request', icon: '/assets/icons/service.svg' },
  ];

  return (
    <div className={`fixed top-0 left-0 w-64 h-screen bg-white transition-transform ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
       <button onClick={toggleSidebar} className="absolute top-4 right-4 hidden">
        <img src="/assets/icons/close.svg" alt="Close" className="w-6 h-6" />
      </button>
      <div className="flex flex-col items-center py-6">
        <img src="/assets/icons/logo.svg" alt="Logo" className="mb-8" />
        <ul className="flex flex-col w-full">
          {menuItems.map((item) => (
            <li key={item.name}>
              <a
                href={item.path}
                className={`flex items-center px-4 py-4 text-gray-700 hover:bg-[#E3DBFF] hover:text-[#3944BC] font-medium text-base ${
                  location.pathname === item.path ? 'bg-[#E3DBFF] text-blue-800' : ''
                }`}
              >
                <img src={item.icon} alt={`${item.name} icon`} className="w-6 h-6 mr-3" />
                <span>{item.name}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
