'use client'
import { createContext, useContext, useState } from "react";
const appContext = createContext();

export function appProvider({ children }) {
  const [crossRouteData, setCrossRouteData] = useState(0);
  <appContext.Provider value={{ crossRouteData, setCrossRouteData }}>
    {children}
  </appContext.Provider>;
}

export function useAppContext() {
  return useContext(appContext);
}


