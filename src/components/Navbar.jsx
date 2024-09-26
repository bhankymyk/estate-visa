import React, { useState } from "react";
import { useSidebar } from "./SidebarContext";

const Navbar = () => {
  const { toggleSidebar } = useSidebar();
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

  const toggleProfileDropdown = () => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  };

  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-white  border-b-2 border-l-2">
            <button
        onClick={toggleSidebar}
        className="text-white bg-gray-200 rounded lg:hidden sm:block mr-5"
      >
<svg xmlns="http://www.w3.org/2000/svg" width="30" height="" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
  <path   
 d="M3.5 2a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h9a.5.5 0 0 1 .5-.5v-1a.5.5 0 0 1-.5-.5h-9zm0 5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h9a.5.5 0 0 1 .5-.5v-1a.5.5 0 0 1-.5-.5h-9zm0 5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h9a.5.5 0 0 1 .5-.5v-1a.5.5 0 0 1-.5-.5h-9z"/>
</svg>
      </button>

      {/* Search Bar */}
      <div className="flex items-center bg-gray-100 rounded-lg p-2 w-1/3">
        <svg
          className="w-5 h-5 text-gray-400 mr-2"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
        <input
          type="text"
          placeholder="Search"
          className="bg-transparent focus:outline-none w-full"
        />
      </div>

      <div className="flex gap-5">
        <div className="relative">
          <div className="p-3 rounded-full bg-purple-100 cursor-pointer lg:mt-0 mt-3 lg:ml-0 ml-3">
            <svg
              className="w-6 h-6  text-black"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 8a6 6 0 00-12 0v4a6 6 0 01-1.1 3.3l-1.6 2.3h17.4l-1.6-2.3A6 6 0 0118 12V8z"></path>
              <path d="M13.73 21a2 2 0 01-3.46 0"></path>
            </svg>

            <span className="absolute top-0 right-1 block h-2 w-2 bg-red-500 rounded-full"></span>
          </div>
        </div>

        <div className="relative">
          <button
            onClick={toggleProfileDropdown}
            className="flex items-center space-x-3 cursor-pointer focus:outline-none"
          >
            <img
              src="/assets/images/profile-pic.png"
              alt="User Avatar"
              className="w-10 h-10 rounded-full"
            />
            <div className="text-left">
              <p className="text-sm font-medium">Mide Martins</p>
              <p className="text-xs text-gray-500">Estate Owner</p>
            </div>
            <svg
              className="w-4 h-4 text-gray-600"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.292 7.707a1 1 0 011.415 0L10 10.586l3.293-2.879a1 1 0 111.414 1.415l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.415z"
                clipRule="evenodd"
              />
            </svg>
          </button>

          {/* Profile Dropdown */}
          {isProfileDropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg">
              <ul className="py-1">
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Profile
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Settings
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Logout
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
