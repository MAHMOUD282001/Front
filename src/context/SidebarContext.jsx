import React, { createContext, useEffect, useState } from "react";

export let sidebarContext = createContext();

function SidebarContext({ children }) {
  const [open, setOpen] = useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <sidebarContext.Provider
      value={{ open, handleDrawerOpen, handleDrawerClose }}
    >
      {children}
    </sidebarContext.Provider>
  );
}

export default SidebarContext;
