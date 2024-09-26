import React from "react";
import GateTable from "./AddedTable";

export default function AddedGate({ isOpen, onClose }) {
  if (!isOpen) return null;
  return (
    <div
      aria-hidden="true"
      className="fixed top-0 right-0 z-50 flex justify-center items-center w-full h-full overflow-y-auto overflow-x-hidden bg-black bg-opacity-50"
    >
      <div className="relative p-4  max-w-[50rem] max-h-full w-[900px]">
        {/* <!-- Modal content --> */}
        <div className="relative bg-white rounded-lg shadow p-5">
          {/* <!-- Modal header --> */}
          <div className="flex items-center justify-between  rounded">
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
          {/* <!-- Modal body --> */}
         <GateTable/>
        </div>
      </div>
    </div>
  );
}
