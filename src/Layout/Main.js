import React from "react";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer/Footer";
import { Nav } from "../Components/Nav/Nav";

const Main = () => {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={`${darkMode && "dark"} dark:bg-[#0F172A]`}>
      <Nav darkMode={darkMode} setDarkMode={setDarkMode} />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;
