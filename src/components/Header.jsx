import React, { useState } from "react";
import AddNewModal from "./AddNewModal";
import EditModal from "./EditModal";

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const [isAddNewGateOpen, setIsAddNewGateModalOpen] = useState(false);
  const openAddNewGateModal = () => setIsAddNewGateModalOpen(true);
  const closeAddNewGateModal = () => setIsAddNewGateModalOpen(false);

  const [isEditOpen, setIsEditModalOpen] = useState(false);
  const openEditModal = () => setIsEditModalOpen(true);
  const closeEditModal = () => setIsEditModalOpen(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="flex justify-between items-center p-4 bg-white  border-2">
      <h1 className="text-4xl font-bold text-gray-800">Gates</h1>
      <div className="flex space-x-4">
        <button
          onClick={openAddNewGateModal}
          className="flex items-center px-4 py-2 bg-blue-700 text-white rounded-lg hover:bg-blue-900"
        >
          <span className="mr-2">+</span>
          Add New Gate
        </button>
        {isAddNewGateOpen && (
          <AddNewModal
            isOpen={isAddNewGateOpen}
            onClose={closeAddNewGateModal}
          />
        )}
        <div className="div">
          <button
            onClick={toggleDropdown}
            className="flex items-center px-4 py-2 border rounded-lg border-blue-700 text-[#3944BC]"
          >
            <svg
              width="16"
              height="14"
              viewBox="0 0 16 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 mr-2"
            >
              <path
                d="M14.6668 1H1.3335L6.66683 7.30667V11.6667L9.3335 13V7.30667L14.6668 1Z"
                stroke="#3944BC"
                stroke-width="1.6"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            Filter
            <svg
              width="10"
              height="6"
              viewBox="0 0 10 6"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-3 h-3 ml-2"
            >
              <path
                d="M1 1L5 5L9 1"
                stroke="#3944BC"
                stroke-width="1.6"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>

          {isDropdownOpen && (
            <div className="absolute right-20 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg">
              <ul>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Filter
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Recently Added
                </li>
              </ul>
            </div>
          )}
        </div>

        <button
          onClick={openEditModal}
          className="flex items-center px-4 py-2 border rounded-lg border-blue-700 text-blue-700"
        >
          <svg
            width="16"
            className="w-4 h-4 mr-2"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14 10V12.6667C14 13.0203 13.8595 13.3594 13.6095 13.6095C13.3594 13.8595 13.0203 14 12.6667 14H3.33333C2.97971 14 2.64057 13.8595 2.39052 13.6095C2.14048 13.3594 2 13.0203 2 12.6667V10M4.66667 6.66667L8 10M8 10L11.3333 6.66667M8 10V2"
              stroke="#3944BC"
              stroke-width="1.6"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          Download Table
        </button>
        {isEditOpen && (
          <EditModal isOpen={isEditOpen} onClose={closeEditModal} />
        )}
      </div>
    </div>
  );
};

export default Header;
