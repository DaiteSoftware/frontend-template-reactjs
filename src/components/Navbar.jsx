// Navbar.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Dropdown from "./Dropdown";
import Dlogo from "../assets/images/daite.png";
import Dlogotipo from "../assets/images/logotipo.png";

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const toggleMenu = () => setOpen(!open);
  const closeMenu = () => setOpen(false);

  return (
    <header className="antialiased bg-slate-300 dark-mode:bg-gray-900">
      <nav className="w-full bg-primary dark-mode:text-gray-200 dark-mode:bg-gray-800 text-colorText border border-borderColor">
        <div className="flex items-center justify-between p-4 max-w-screen-xl mx-auto">
          <Link
            to="/"
            className="text-lg font-semibold tracking-widest text-colorText uppercase rounded-lg dark-mode:text-colorText focus:outline-none focus:shadow-outline"
          >
            <img src={Dlogo} className="w-10" alt="Daite Logo" />
          </Link>

          <button
            className="rounded-lg md:hidden focus:outline-none focus:shadow-outline"
            onClick={toggleMenu}
          >
            <svg fill="currentColor" viewBox="0 0 20 20" className="w-6 h-6">
              {open ? (
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l3.293-3.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              ) : (
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              )}
            </svg>
          </button>

          <div
            className={`${
              open ? "translate-x-0" : "-translate-x-full"
            } md:translate-x-0 fixed inset-y-0 left-0 z-50 w-3/4 md:w-auto bg-primary text-colorText transform transition-transform duration-500 ease-in-out md:relative md:flex md:flex-row md:space-x-4`}
          >
            <div className=" w-full flex justify-center border-b-2 border-borderColor py-4 md:hidden lg:hidden 2xl:hidden ">
              <img
                src={Dlogotipo}
                alt="Logo"
                className="w-32  flex justify-center"
              />
            </div>

            <Link
              to="/"
              className="px-4 py-2 font-semibold rounded-lg hover:bg-hoverColor hover:text-textHoverColor focus:outline-none items-center flex"
              onClick={closeMenu}
            >
              Home
            </Link>

            <Link
              to="/about"
              className="block px-4 py-2 font-semibold rounded-lg hover:bg-hoverColor hover:text-textHoverColor focus:outline-none"
              onClick={closeMenu}
            >
              About
            </Link>

            <Dropdown
              label="Services"
              options={[
                { label: "Web Development", path: "/web-development" },
                { label: "App Development", path: "/app-development" },
                { label: "SEO Services", path: "/seo-services" },
              ]}
            />

            <Dropdown
              label="Registro"
              options={[
                { label: "Web Development", path: "/web-development" },
                { label: "App Development", path: "/app-development" },
                { label: "SEO Services", path: "/seo-services" },
              ]}
            />

            <Link
              to="/contact"
              className="block px-4 py-2 font-semibold rounded-lg hover:bg-hoverColor hover:text-textHoverColor focus:outline-none"
              onClick={closeMenu}
            >
              Contact
            </Link>
          </div>

          {open && (
            <div
              className="fixed inset-0 z-40 bg-black opacity-50 md:hidden"
              onClick={closeMenu}
            ></div>
          )}
        </div>
      </nav>
    </header>
  );
};
