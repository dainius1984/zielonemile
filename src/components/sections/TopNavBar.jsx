import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { AiOutlineUser } from "react-icons/ai";
import { FiPhone, FiMail } from "react-icons/fi";

const TopNavBar = () => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const dropdownRef = useRef(null);

  const handleMouseEnter = () => {
    setDropdownVisible(true);
  };

  const handleMouseLeave = () => {
    setDropdownVisible(false);
  };

  return (
    <div className="bg-emerald-800 text-white py-2.5">
      <div className="flex w-full max-w-6xl mx-auto justify-between items-center px-5">
        {/* Left Side - Contact Info */}
        <div className="flex gap-5">
          <span className="flex items-center">
            <FiPhone className="mr-2 text-yellow-300" /> {/* Added accent color */}
            111 222 333
          </span>
          <span className="flex items-center">
            <FiMail className="mr-2 text-yellow-300" /> {/* Added accent color */}
            info@zielonemile.pl
          </span>
        </div>

        {/* Right Side - User Icon with Dropdown */}
        <div
          className="relative"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          ref={dropdownRef}
        >
          <div className="flex items-center">
            <AiOutlineUser className="text-white text-2xl cursor-pointer transition-all duration-300 ease-in-out hover:scale-110 hover:text-yellow-300" />
          </div>

          {/* Dropdown Menu */}
          <div
            className={`absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-100 
            transition-all duration-200 ease-in-out z-50
            ${isDropdownVisible ? "opacity-100 translate-y-0 visible" : "opacity-0 translate-y-1 invisible pointer-events-none"}`}
          >
            {/* Triangle Pointer */}
            <div className="absolute -top-2 right-4 w-4 h-4 bg-white transform rotate-45 border-l border-t border-gray-100"></div>

            {/* Menu Items */}
            <div className="relative bg-white rounded-lg overflow-hidden">
              <Link
                to="/auth"
                className="block px-4 py-3 text-sm text-gray-700 hover:bg-emerald-100 hover:text-emerald-800 transition-colors border-b border-gray-100"
              >
                Zaloguj
              </Link>
              <Link
                to="/auth"
                className="block px-4 py-3 text-sm text-gray-700 hover:bg-emerald-100 hover:text-emerald-800 transition-colors"
              >
                Zarejestruj
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNavBar;
