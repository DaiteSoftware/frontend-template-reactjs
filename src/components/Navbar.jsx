import React from "react";
import DLogo from "../assets/images/daite.png";
export const Navbar = () => {
  return (
    <nav className="bg-blue-600 w-full h-8">
      <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
        <div className="flex flex-shrink-0 items-center">
          <img src={DLogo} alt="Daite Logo" className="h-8 w-auto"></img>
        </div>
      </div>
    </nav>
  );
};
