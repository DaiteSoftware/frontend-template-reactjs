// Dropdown.js
import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa";

const Dropdown = ({ label, options, isMobile }) => {
  const [active, setActive] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => setActive((prev) => !prev);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setActive(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative w-full md:w-auto" ref={dropdownRef}>
      <button
        onClick={toggleDropdown}
        className="flex items-center justify-between w-full px-4 py-2 font-semibold rounded-lg hover:bg-hoverColor hover:text-textHoverColor focus:outline-none"
      >
        {label}
        <FaChevronDown
          className={`ml-1 transition-transform duration-300 ${
            active ? "rotate-180" : ""
          }`}
        />
      </button>

      <div
        className={`${
          active ? "max-h-40" : "max-h-0"
        } transition-all duration-500 ease-in-out overflow-hidden ${
          isMobile
            ? "relative w-full"
            : "md:absolute md:top-full md:left-0 md:w-48"
        } mt-2 bg-white border border-borderColor border-t-0 border-b-0 rounded-md shadow-lg`}
      >
        {options.map((option, index) => (
          <Link
            key={index}
            to={option.path}
            className="block px-4 py-2 text-colorText hover:bg-hoverColor hover:text-textHoverColor"
          >
            {option.label}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Dropdown;
