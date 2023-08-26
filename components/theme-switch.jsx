"use client";

import { useTheme } from "@/context/theme-context";
import React, { useState, useEffect } from "react";
import { BsMoon, BsSun } from "react-icons/bs";

export default function ThemeSwitch() {
  const { theme, toggleTheme } = useTheme();
  return (
    <button
      className="fixed bottom-5 right-5 bg-white w-12 h-12 rounded-full border border-gray-400 p-2 opacity-80 backdrop-blur-md hover:scale-[1.15] active:scale-105 transition-all dark:bg-gray-900"
      onClick={toggleTheme}
    >
      {theme === "light" ? (
        <BsSun className="h-full w-full " />
      ) : (
        <BsMoon className="h-full w-full " />
      )}
    </button>
  );
}
