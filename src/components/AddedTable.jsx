import React from "react";

export default function GateTable() {
  const estates = [
    {
      estateName: "Meed Estate",
      owner: "Azeez Rasheed",
      houses: 100,
      location: "Wuse",
      interest: "Access Req...",
    },
  ];

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border-collapse text-left text-sm">
        <thead className="bg-white">
          <tr className="font-bold text-sm">
            <th className="p-2"></th>
            <th className="p-2 ">Estate Name</th>
            <th className="p-2 ">Owner</th>
            <th className="p-2 ">No of Houses</th>
            <th className="p-2 ">Location</th>
            <th className="p-2 ">Interest</th>
            <th className="p-2"></th>
          </tr>
        </thead>
        <tbody>
          {estates.map((estate, index) => (
            <tr
              key={index}
              className="bg-[#E3DBFF] border-b transition duration-300"
            >
              <td className="p-4">
                <input type="checkbox" className="form-checkbox h-4 w-4" />
              </td>
              <td className="p-2">{estate.estateName}</td>
              <td className="p-2">{estate.owner}</td>
              <td className="p-2">{estate.houses}</td>
              <td className="p-2">{estate.location}</td>
              <td className="p-2">{estate.interest}</td>
              <td className="p-2 text-right">
                <button className="text-gray-500 hover:text-gray-700">
                  <svg
                    width="24"
                    height="20"
                    viewBox="0 0 24 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.9999 16.6666C11.5416 16.6666 11.1492 16.5034 10.8228 16.177C10.4964 15.8506 10.3333 15.4583 10.3333 14.9999C10.3333 14.5416 10.4964 14.1492 10.8228 13.8228C11.1492 13.4964 11.5416 13.3333 11.9999 13.3333C12.4583 13.3333 12.8506 13.4964 13.177 13.8228C13.5034 14.1492 13.6666 14.5416 13.6666 14.9999C13.6666 15.4583 13.5034 15.8506 13.177 16.177C12.8506 16.5034 12.4583 16.6666 11.9999 16.6666ZM11.9999 11.6666C11.5416 11.6666 11.1492 11.5034 10.8228 11.177C10.4964 10.8506 10.3333 10.4583 10.3333 9.99992C10.3333 9.54158 10.4964 9.14922 10.8228 8.82284C11.1492 8.49645 11.5416 8.33325 11.9999 8.33325C12.4583 8.33325 12.8506 8.49645 13.177 8.82284C13.5034 9.14922 13.6666 9.54158 13.6666 9.99992C13.6666 10.4583 13.5034 10.8506 13.177 11.177C12.8506 11.5034 12.4583 11.6666 11.9999 11.6666ZM11.9999 6.66659C11.5416 6.66659 11.1492 6.50339 10.8228 6.177C10.4964 5.85061 10.3333 5.45825 10.3333 4.99992C10.3333 4.54159 10.4964 4.14922 10.8228 3.82284C11.1492 3.49645 11.5416 3.33325 11.9999 3.33325C12.4583 3.33325 12.8506 3.49645 13.177 3.82284C13.5034 4.14922 13.6666 4.54159 13.6666 4.99992C13.6666 5.45825 13.5034 5.85061 13.177 6.177C12.8506 6.50339 12.4583 6.66659 11.9999 6.66659Z"
                      fill="#383838"
                    />
                  </svg>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
