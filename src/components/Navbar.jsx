import React, { useState } from "react";
import pic from "../../public/photo.avif";
import { AiOutlineMenu } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";
import { Link } from "react-scroll";
function Navbar() {
  const [menu, setMenu] = useState(false);
  const navItems = [
    {
      id: 1,
      text: "Home",
    },
    {
      id: 2,
      text: "About",
    },
    {
      id: 3,
      text: "Portfolio",
    },
    {
      id: 4,
      text: "Experiance",
    },
    {
      id: 5,
      text: "Contact",
    },
  ];
  return (
    <>
      <div className="max-w-full bg-white shadow-lg fixed top-0 left-0 right-0 z-50 backdrop-blur-sm bg-opacity-95">
        <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 h-16">
          <div className="flex justify-between items-center h-16">
            {/* Logo & Brand */}
            <div className="flex space-x-3 items-center group cursor-pointer">
              <div className="relative">
                <div className="absolute inset-0 bg-blue-500 rounded-full blur opacity-50 group-hover:opacity-75 transition duration-300"></div>
                <img src={pic} className="relative h-12 w-12 rounded-full border-2 border-blue-500" alt="Profile" />
              </div>
              <div>
                <h1 className="font-bold text-lg text-gray-900 tracking-tight">
                  Shivanshu <span className="text-blue-600">Gupta</span>
                </h1>
                <p className="text-xs text-gray-600 font-medium">Full Stack Developer</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center">
              <ul className="flex space-x-1">
                {navItems.map(({ id, text }) => (
                  <li key={id}>
                    <Link
                      to={text}
                      smooth={true}
                      duration={500}
                      offset={-70}
                      className="px-4 py-2 rounded-lg text-gray-700 font-medium text-sm hover:text-blue-600 hover:bg-blue-50 transition-all duration-300 cursor-pointer relative after:content-[''] after:absolute after:bottom-1 after:left-4 after:right-4 after:h-0.5 after:bg-blue-600 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300"
                    >
                      {text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setMenu(!menu)}
                className="p-2 rounded-lg hover:bg-gray-100 transition-colors duration-300"
                aria-label="Toggle menu"
              >
                {menu ? (
                  <IoCloseSharp size={28} className="text-gray-900" />
                ) : (
                  <AiOutlineMenu size={28} className="text-gray-900" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {menu && (
          <div className="md:hidden border-t border-gray-200 bg-white animate-in fade-in duration-300">
            <ul className="flex flex-col space-y-2 px-4 py-4">
              {navItems.map(({ id, text }) => (
                <li key={id}>
                  <Link
                    onClick={() => setMenu(!menu)}
                    to={text}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    className="block px-4 py-2.5 rounded-lg text-gray-700 font-medium hover:text-blue-600 hover:bg-blue-50 transition-all duration-300 cursor-pointer"
                  >
                    {text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
}

export default Navbar;
