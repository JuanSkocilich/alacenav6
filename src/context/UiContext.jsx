"use client";

import useScreenSize from "@/hooks/UseScreenSize";
import { createContext, useContext, useEffect, useState } from "react";

const UiContext = createContext();

export const useUi = () => {
  const context = useContext(UiContext);

  if (!context) {
    throw new Error("useContext must be used within a UiProvider");
  }

  return context;
};

export function UiProvider({ children }) {
  const [width] = useScreenSize();
  const [menu, setMenu] = useState(width > 600 ? false : true);

  return (
    <UiContext.Provider
      value={{
        menu,

        setMenu,
      }}
    >
      {children}
    </UiContext.Provider>
  );
}
