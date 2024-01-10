"use client";

import React, { useState, useEffect } from "react";
import ThemeSwitcher from "./ThemeSwitcher";

const Navbar = () => {
  const [shadowNavbar, setShadowNavbar] = useState("");
  const listenScrollEvent = () => {
    window.scrollY > 10
      ? setShadowNavbar("shadow-lg backdrop-blur-lg bg-white/30")
      : setShadowNavbar("shadow-none bg-transparent");
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
  }, []);

  return (
    <div className={`fixed w-full h-16 duration-500 z-10 ${shadowNavbar}`}>
      <div className="lg:max-w-3xl mx-auto h-full flex justify-between items-center">
        <p className="dark:text-red-500">AgusMade</p>
        <ThemeSwitcher />
      </div>
    </div>
  );
};

export default Navbar;
