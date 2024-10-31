import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaHome, FaChevronDown } from "react-icons/fa";
import Dlogo from "../assets/images/daite.png";

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const dropdownRef = useRef(null);

  const toggleMenu = () => setOpen(!open);
  const closeMenu = () => setOpen(false);
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);
  const closeDropdown = () => setDropdownOpen(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        closeDropdown();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="antialiased bg-slate-300 dark-mode:bg-gray-900">
      <nav className="w-full bg-primary dark-mode:text-gray-200 dark-mode:bg-gray-800 text-white">
        <div className="flex items-center justify-between p-4 max-w-screen-xl mx-auto">
          <Link
            to="/"
            className="text-lg font-semibold tracking-widest text-white uppercase rounded-lg dark-mode:text-white focus:outline-none focus:shadow-outline"
          >
            Daite
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
            } md:translate-x-0 fixed inset-y-0 left-0 z-50 w-3/4 md:w-auto bg-primary text-white transform transition-transform duration-500 ease-in-out md:relative md:flex md:flex-row md:space-x-4`}
          >
            <div className="flex justify-center w-full md:hidden mt-3 mb-3">
              <img src={Dlogo} className="w-16" alt="Daite Logo" />
            </div>
            <Link
              to="/"
              className="px-4 py-2 md:text-sm sm:text-sm font-semibold rounded-lg hover:bg-hoverColor focus:outline-none items-center flex"
              onClick={closeMenu}
            >
              <FaHome /> Home
            </Link>

            <Link
              to="/about"
              className="block px-4 py-2 font-semibold rounded-lg hover:bg-hoverColor focus:outline-none"
              onClick={closeMenu}
            >
              About
            </Link>

            <div className="relative" ref={dropdownRef}>
              <Link
                onClick={toggleDropdown}
                className=" px-4 py-2 font-semibold rounded-lg hover:bg-hoverColor focus:outline-none flex items-center"
              >
                Services
                <FaChevronDown
                  className={`ml-1 transition-transform duration-300 ${
                    dropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </Link>

              {dropdownOpen && (
                <div
                  className="w-full mt-2 bg-primary rounded-md shadow-lg md:absolute md:left-0 md:w-48 transition-all duration-300 transform scale-95 origin-top"
                  style={{ opacity: dropdownOpen ? 1 : 0 }}
                >
                  <Link
                    to="/web-development"
                    className="block px-4 py-2 text-white hover:bg-hoverColor"
                    onClick={() => {
                      closeDropdown();
                      closeMenu();
                    }}
                  >
                    Web Development
                  </Link>
                  <Link
                    to="/app-development"
                    className="block px-4 py-2 text-white hover:bg-hoverColor"
                    onClick={() => {
                      closeDropdown();
                      closeMenu();
                    }}
                  >
                    App Development
                  </Link>
                  <Link
                    to="/seo"
                    className="block px-4 py-2 text-white hover:bg-hoverColor"
                    onClick={() => {
                      closeDropdown();
                      closeMenu();
                    }}
                  >
                    SEO Services
                  </Link>
                </div>
              )}
            </div>

            <Link
              to="/contact"
              className="block px-4 py-2 font-semibold rounded-lg hover:bg-hoverColor focus:outline-none"
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
