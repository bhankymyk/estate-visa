import React from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import Navbar from '../components/Navbar';

export default function Gate() {
  return (
      <div className='flex'>
          <Sidebar />
          <div className="flex flex-col w-full bg-[#E3DBFF]"> 
              <Navbar/>
              <Header />
          </div>
    </div>
  )
}
