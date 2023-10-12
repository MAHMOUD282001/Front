import React, { createContext, useEffect, useState } from "react";

export let menuContext = createContext();

function MenuContext({ children }) {
  let [menuState, setMenuState] = useState(false);

  return (
    <menuContext.Provider
      value={{ menuState, setMenuState}}
    >
      {children}
    </menuContext.Provider>
  );
}

export default MenuContext;
