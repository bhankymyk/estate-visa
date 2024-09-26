// SidebarContext.js
import React, { createContext, useState, useContext, useEffect } from 'react';

const SidebarContext = createContext();

export const useSidebar = () => {
  return useContext(SidebarContext);
};

export const SidebarProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  // Check if the screen size is large
  const checkScreenSize = () => {
    if (window.innerWidth >= 1024) {
      setIsOpen(true); // Open sidebar on large screens
    } else {
      setIsOpen(false); // Close sidebar on small screens
    }
  };

  useEffect(() => {
    // Set the initial state based on screen size
    checkScreenSize();

    // Update the state on resize
    window.addEventListener('resize', checkScreenSize);

    return () => {
      window.removeEventListener('resize', checkScreenSize);
    };
  }, []);

  const toggleSidebar = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <SidebarContext.Provider value={{ isOpen, toggleSidebar }}>
      {children}
    </SidebarContext.Provider>
  );
};
