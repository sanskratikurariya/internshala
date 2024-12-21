import React, { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-8 left-1/2 transform -translate-x-1/2 w-[75%] max-w-[1400px] h-16 md:h-20 bg-[#1c1c1c] text-white rounded-full shadow-lg z-50">
      <div className="flex justify-between items-center h-full px-4 md:px-8">
      
        <div className="flex items-center space-x-2">
          <img
            src="/assets/logo3.svg"
            alt="GymFluencer Logo"
            className="w-6 h-6 md:w-10 md:h-10"
          />
          <span className="text-sm md:text-lg font-bold font-title">
            GymFluencer
          </span>
        </div>

   
        <ul
          className={`${
            isMenuOpen ? "flex" : "hidden md:flex"
          } flex-col md:flex-row  items-center space-y-4 md:space-y-0 md:space-x-6 absolute md:relative top-20 md:top-0 left-1/2 md:left-0 transform md:transform-none -translate-x-1/2 md:translate-x-0 w-[90%] md:w-auto bg-[#1c1c1c] md:bg-transparent rounded-lg shadow-md md:shadow-none p-4 md:p-0 text-xl md:text-base font-title`}
        >
          {["Home", "About", "Our Services", "Benefits", "Blogs", "Contact"].map(
            (item) => (
              <li key={item} className="text-center md:text-left">
                <a
                  href={`#${item.toLowerCase().replace(/\s+/g, "")}`}
                  className="block hover:text-orange-700 transition-colors"
                >
                  {item}
                </a>
              </li>
            )
          )}
          <li>
            <a
              href="#join"
              className="bg-orange-700 text-white py-2 px-4 rounded-full hover:bg-orange-600 transition-colors inline-block"
            >
              Join us now
            </a>
          </li>
        </ul>

     
        <button
          className="block  md:hidden focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <div className="p-2 rounded-full bg-[#2d2d2d]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-yellow-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={
                  isMenuOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16m-7 6h7"
                }
              />
            </svg>
          </div>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
