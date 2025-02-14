import React from "react";
import ticz from "../assets/logoName.svg";
import logo from "../assets/logo.svg";
import arrow from "../assets/arrow.svg";

const Header = ({ setSelectedPage, selectedPage }) => {
  return (
    <header className="header">
      <section className="p-2 header border-primaryColor2 border-2 rounded-2xl flex justify-between w-full h-[5rem] items-center">
        <div className="logo flex gap-4 w-fit">
          <div className="bg-primaryColor">
            <img src={logo} className="w-[1.5rem] h-[1.5rem]" alt="ticket" />
          </div>
          <img src={ticz} className="w-[2.7rem] h-[1.4rem]" alt="ticz" />
        </div>
        <nav className="navMenu hidden lg:block">
          <ul className="flex space-x-4 text-primaryFont">
            {["events", "tickets", "projects"].map((link, index) => (
              <li key={index}>
                <a
                  href="#"
                  className={
                    selectedPage === link ? "text-white" : "text-primaryFont"
                  }
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
        <div className="ticker-action">
          <button 
          onClick={(e) => {
            e.preventDefault();
            setSelectedPage('profile');
          }}
          className="btn flex bg-tetiaryColor gap-2">
            My Ticket
            <img src={arrow} className="w-[1.5rem] h-[1.4rem]" alt="ticz" />
          </button>
        </div>
      </section>
    </header>
  );
};

export default Header;
