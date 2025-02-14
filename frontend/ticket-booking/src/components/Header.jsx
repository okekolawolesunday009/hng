import React, { useState } from "react";
import ticz from "../assets/logoName.svg";
import logo from "../assets/logo.svg";
import arrow from "../assets/arrow.svg";
import { Menu, X } from "lucide-react"; // Import icons

const Header = ({ setSelectedPage, selectedPage }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="p-4 border-primaryColor2 border-2 rounded-2xl flex justify-between items-center w-full h-[5rem] bg-gray-900">
      {/* Logo Section */}
      <div className="flex items-center gap-4">
        <div className="bg-primaryColor p-2 rounded-lg">
          <img src={logo} className="w-[1.5rem] h-[1.5rem]" alt="ticket" />
        </div>
        <img src={ticz} className="w-[2.7rem] h-[1.4rem]" alt="ticz" />
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden lg:block">
        <ul className="flex space-x-6 text-primaryFont">
          {["events", "tickets", "projects"].map((link, index) => (
            <li key={index}>
              <a
                href="#"
                className={`transition-colors duration-300 ${
                  selectedPage === link ? "text-white font-semibold" : "text-gray-300 hover:text-white"
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  setSelectedPage(link);
                }}
              >
                {link.charAt(0).toUpperCase() + link.slice(1)}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile Menu Button */}
      <button
        className="lg:hidden text-white"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Navigation */}
      <div
        className={`fixed top-0 right-0 w-2/3 h-full z-[1000] bg-gray-800 text-white transition-transform transform ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        } lg:hidden flex flex-col items-center gap-6 pt-20`}
      >
        <button className="absolute top-5 right-5" onClick={() => setMenuOpen(false)}>
          <X size={28} />
        </button>

        {["events", "tickets", "projects"].map((link, index) => (
          <a
            key={index}
            href="#"
            className={`text-lg ${
              selectedPage === link ? "text-yellow-400 font-bold" : "hover:text-yellow-400"
            }`}
            onClick={(e) => {
              e.preventDefault();
              setSelectedPage(link);
              setMenuOpen(false);
            }}
          >
            {link.charAt(0).toUpperCase() + link.slice(1)}
          </a>
        ))}
      </div>

      {/* My Ticket Button */}
      <button
        onClick={(e) => {
          e.preventDefault();
          setSelectedPage("profile");
        }}
        className="hidden lg:flex bg-tetiaryColor text-white px-4 py-2 rounded-lg shadow-md hover:bg-yellow-500 transition-all duration-300"
      >
        My Ticket
        <img src={arrow} className="w-[1.5rem] h-[1.4rem] ml-2" alt="ticz" />
      </button>
    </header>
  );
};

export default Header;
