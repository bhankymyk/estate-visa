import React, { useState } from "react";

const gateData = [
  { id: 1, name: "Gate 1", description: "Main Entrance", status: "Open" },
  { id: 2, name: "Gate 2", description: "North Entrance", status: "Closed" },
  { id: 3, name: "Gate 3", description: "East Wing", status: "Closed" },
  { id: 4, name: "Gate 4", description: "West Wing", status: "Open" },
];

const StatusTable = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = gateData.slice(indexOfFirstItem, indexOfLastItem);
  
  const totalPages = Math.ceil(gateData.length / itemsPerPage);
  
  
  return (
    <div className="container mx-auto p-6 rounded-lg">
      <table className="w-full border-collapse ">
        <thead>
          <tr className="bg-[#E3DBFF] text-base font-bold ">
            <th className="p-5 ">
              <input type="checkbox" className="form-checkbox" />
            </th>
            <th className="p-2  ">Gate Name</th>
            <th className="p-2 ">Status</th>
            <th className="p-2 ">Actions</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((gate, index) => (
            <tr
              key={gate.id}
              className={`text-center ${index % 2 === 0 ? "bg-white" : "bg-[#E3DBFF]"}`}
            >
              <td className="p-5">
                <input type="checkbox" className="form-checkbox" />
              </td>
              <td className="p-5">
                <div className="font-medium text-lg">{gate.name}</div>
                <div className="text-base font-normal">{gate.description}</div>
              </td>
              <td className="p-5">
                <span
                  className={`px-2 py-1 text-sm font-bold ${
                    gate.status === "Open" ? "text-green-800" : "text-red-800"
                  }`}
                >
                  {gate.status}
                </span>
              </td>
              <td className="p-5 flex justify-center">
                <div className="flex space-x-5 ">
                  <button className="text-blue-600 hover:text-blue-800">
                    <svg
                      width="21"
                      height="16"
                      viewBox="0 0 21 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1.6665 7.99992C1.6665 7.99992 4.99984 1.33325 10.8332 1.33325C16.6665 1.33325 19.9998 7.99992 19.9998 7.99992C19.9998 7.99992 16.6665 14.6666 10.8332 14.6666C4.99984 14.6666 1.6665 7.99992 1.6665 7.99992Z"
                        stroke="#3944BC"
                        stroke-width="2.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M10.8332 10.4999C12.2139 10.4999 13.3332 9.38063 13.3332 7.99992C13.3332 6.61921 12.2139 5.49992 10.8332 5.49992C9.45246 5.49992 8.33317 6.61921 8.33317 7.99992C8.33317 9.38063 9.45246 10.4999 10.8332 10.4999Z"
                        stroke="#3944BC"
                        stroke-width="2.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </button>
                  <button
                    className="">
                    <svg
                      width="21"
                      height="20"
                      viewBox="0 0 21 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_960_44213)">
                        <path
                          d="M9.99951 3.33325H4.16618C3.72415 3.33325 3.30023 3.50885 2.98767 3.82141C2.67511 4.13397 2.49951 4.55789 2.49951 4.99992V16.6666C2.49951 17.1086 2.67511 17.5325 2.98767 17.8451C3.30023 18.1577 3.72415 18.3333 4.16618 18.3333H15.8328C16.2749 18.3333 16.6988 18.1577 17.0114 17.8451C17.3239 17.5325 17.4995 17.1086 17.4995 16.6666V10.8333"
                          stroke="#3944BC"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M16.2495 2.08344C16.581 1.75192 17.0307 1.56567 17.4995 1.56567C17.9684 1.56567 18.418 1.75192 18.7495 2.08344C19.081 2.41496 19.2673 2.8646 19.2673 3.33344C19.2673 3.80228 19.081 4.25192 18.7495 4.58344L10.8328 12.5001L7.49951 13.3334L8.33285 10.0001L16.2495 2.08344Z"
                          stroke="#3944BC"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_960_44213">
                          <rect
                            width="20"
                            height="20"
                            fill="white"
                            transform="translate(0.833008)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </button>
                  <button className="text-red-600 hover:text-red-800">
                    <svg
                      width="21"
                      height="20"
                      viewBox="0 0 21 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3.33301 5H4.99967H18.333"
                        stroke="#CC0404"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M7.49951 5.00008V3.33341C7.49951 2.89139 7.67511 2.46746 7.98767 2.1549C8.30023 1.84234 8.72415 1.66675 9.16618 1.66675H12.4995C12.9415 1.66675 13.3655 1.84234 13.678 2.1549C13.9906 2.46746 14.1662 2.89139 14.1662 3.33341V5.00008M16.6662 5.00008V16.6667C16.6662 17.1088 16.4906 17.5327 16.178 17.8453C15.8655 18.1578 15.4415 18.3334 14.9995 18.3334H6.66618C6.22415 18.3334 5.80023 18.1578 5.48767 17.8453C5.17511 17.5327 4.99951 17.1088 4.99951 16.6667V5.00008H16.6662Z"
                        stroke="#CC0404"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M9.1665 9.16675V14.1667"
                        stroke="#CC0404"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M12.4995 9.16675V14.1667"
                        stroke="#CC0404"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="flex items-center justify-between bg-white p-5">
        <div className="flex space-x-2">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            className="px-3 py-1 text-gray-250 rounded hover:bg-blue-600"
            disabled={currentPage === 1}
          >
            Previous
          </button>
          {[1, 2, 3].map(number => (
            <button
              key={number}
              onClick={() => setCurrentPage(number)}
              className={`px-3 py-1 text-sm font-medium rounded-md ${
                currentPage === number 
                  ? 'bg-blue-600 text-white' 
                  : 'text-gray-700 bg-gray-300'
              }`}
              disabled={number > totalPages}
            >
              {number}
            </button>
          ))}
          <button
            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
            className="px-3 py-1 text-sm font-medium text-gray-700 hover:bg-gray-50"
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
        <div className="flex items-center">
          <span className="mr-2">Show</span>
          <select className="border rounded px-2 py-1">
            <option>10</option>
            <option>25</option>
            <option>50</option>
          </select>
          <span className="ml-5">entries</span>
        </div>
      </div>
    </div>
  );
};

export default StatusTable;
