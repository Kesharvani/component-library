import React, { createContext, useContext, useState } from "react";
export const ComponentContext = createContext();
export const ComponentContextProvider = ({ children }) => {
  const [selectedComponent, setSelectedComponent] = useState(null);
  return (
    <ComponentContext.Provider
      value={{ selectedComponent, setSelectedComponent }}
    >
      {children}
    </ComponentContext.Provider>
  );
};

export const useComponent = () => useContext(ComponentContext);
