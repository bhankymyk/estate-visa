import React, { useState } from "react";
import AddedGate from "./AddedGate";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export default function AddNewModal({ isOpen, onClose }) {
  const [isAddedGateOpen, setIsAddedGateModalOpen] = useState(false);

  const handleAddGate = () => {
    // Show the toast
    toast.success("Gate added successfully!", {
      onClose: () => {
        // Open the AddedGate modal after the toast finishes
        setIsAddedGateModalOpen(true);
      }
    });
  };

  const closeAddedGateModal = () => {
    setIsAddedGateModalOpen(false);
  };

  return (
    <>
      
      {isOpen && (
        <div
          aria-hidden="true"
          className="fixed top-0 right-0 z-50 flex justify-center items-center w-full h-full overflow-y-auto overflow-x-hidden bg-black bg-opacity-50"
        >
          <div className="relative p-4 max-w-[40rem] max-h-full ">
            <div className="relative bg-white rounded-lg shadow p-5">
              <div className="flex items-center justify-between rounded">
                <h2 className="text-xl font-bold">Add New Gate</h2>
                <button
                  type="button"
                  onClick={onClose} 
                  className="border-2 rounded-full text-sm w-8 h-8 ms-auto inline-flex justify-center items-center "
                >
                  <svg
                    className="w-3 h-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 14"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                    />
                  </svg>
                  <span className="sr-only">Close modal</span>
                </button>
              </div>
              <div>
                <div className="mt-5">
                  <label className="font-medium text-base">Gates Name</label>
                  <input type="text" className="w-full rounded-lg border-2 border-gray-500 py-2" />
                </div>
                <div className="mt-5">
                  <label className="font-medium text-base">Gates Location</label>
                  <input type="text" className="w-full rounded-lg border-2 border-gray-500 py-2" />
                </div>
                <div className="mt-5">
                  <label className="font-medium text-base">Gates Status</label>
                  <input type="text" className="w-full rounded-lg border-2 border-gray-500 py-2" />
                </div>
                <div className="mt-5">
                  <button
                    onClick={handleAddGate}
                    className="bg-blue-800 text-white w-full py-2 rounded-lg hover:bg-blue-900"
                  >
                    Add Gate
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      
      {isAddedGateOpen && (
        <AddedGate isOpen={isAddedGateOpen} onClose={closeAddedGateModal} />
      )}

      
      <ToastContainer />
    </>
  );
}
