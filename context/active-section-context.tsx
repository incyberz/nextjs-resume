"use client";

import React, { useState, createContext, useContext } from "react";
import { links } from "@/app/lib/data";

type SectionName = (typeof links)[number]["name"];
type ActiveSectionContextProviderProps = {
  children: React.ReactNode;
};
type activeSectionContextType = {
  activeSection: SectionName;
  setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>;
};

export const activeSectionContext =
  createContext<activeSectionContextType | null>(null);

export default function ActiveSectionContextProvider({
  children,
}: ActiveSectionContextProviderProps) {
  const [activeSection, setActiveSection] = useState<SectionName>("Home");
  return (
    <activeSectionContext.Provider value={{ activeSection, setActiveSection }}>
      {children}
    </activeSectionContext.Provider>
  );
}

export function useActiveSectionContext() {
  const context = useContext(activeSectionContext);
  if (context === null) {
    throw new Error(
      "useActiveSectionContext must be used within an ActiveSectionContextProvider"
    );
  }
  return context;
}
