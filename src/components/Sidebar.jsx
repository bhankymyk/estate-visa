import { useLocation } from 'react-router-dom';

const Sidebar = () => {
  const location = useLocation();

  const menuItems = [
    { name: 'Overview',  icon: '/assets/icons/overview.svg' },
    { name: 'Occupants',  icon: '/assets/icons/occupants.svg' },
    { name: 'Sub-Occupants',  icon: '/assets/icons/sub-occupants.svg' },
    { name: 'Houses', icon: '/assets/icons/houses.svg' },
    { name: 'Gates', path: '/gates', icon: '/assets/icons/gate.svg' },
    { name: 'Messages',  icon: '/assets/icons/message.svg' },
    { name: 'Meetings',  icon: '/assets/icons/meetings.svg' },
    { name: 'Service Request',  icon: '/assets/icons/service.svg' },
  ];

  return (
    <div className="w-64 h-screen bg-white">
      <div className="flex flex-col items-center py-6">
        {/* Logo */}
        <img src="/assets/icons/logo.svg" alt="Logo" className="mb-8" />

        {/* Menu Items */}
        <ul className="flex flex-col w-full">
          {menuItems.map((item) => (
            <li key={item.name}>
              <a
                href={item.path}
                className={`flex items-center px-4 py-4 text-gray-700 hover:bg-[#E3DBFF] hover:text-[#3944BC]  font-medium text-base ${
                  location === item.path ? 'bg-[#E3DBFF] text-[#3944BC]' : ''
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
