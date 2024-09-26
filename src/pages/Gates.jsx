import React from 'react';
// import { SidebarProvider } from '../SidebarContext'; 
import { SidebarProvider, useSidebar } from '../components/SidebarContext';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import StatusTable from '../components/Table';

const GateContent = () => {
  const { isOpen } = useSidebar(); // Get sidebar state from context

  return (
    <div className={`flex flex-col w-full bg-gray-100 transition-transform ${isOpen ? 'ml-64' : 'ml-0'}`}>
      <Navbar />
      <Header />
      <StatusTable />
    </div>
  );
};

export default function Gate() {
  return (
    <SidebarProvider>
      <div className='flex'>
        <Sidebar />
        <GateContent />
      </div>
    </SidebarProvider>
  );
}
