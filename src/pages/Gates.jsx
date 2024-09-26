import React from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import StatusTable from "../components/Table"

export default function Gate() {
  return (
      <div className='flex'>
          <Sidebar />
          <div className="flex flex-col w-full bg-gray-100"> 
              <Navbar/>
        <Header />
        <StatusTable/>
          </div>
    </div>
  )
}
