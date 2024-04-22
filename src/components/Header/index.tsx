import React from "react";
import Logo from "assets/logo/logo.png";

const Header = () => {
  return (
    <div className="flex w-full px-6 py-4 items-center justify-between flex-row">
      <div className="flex flex-row">
        <div className="w-20 ">
          <img
            src={Logo}
            alt="Daniel's Logo"
            className="hover:cursor-pointer"
          />
        </div>
      </div>
      <div className="flex items-center space-x-6 font-bold ">
        <button
          className="hover:text-white hover:cursor-pointer hover:bg-sky-900 px-3 py-2 rounded-full"
          onClick={() => {}}
        >
          Home
        </button>
        <button
          className="hover:text-white hover:cursor-pointer hover:bg-sky-900 px-3 py-2 rounded-full"
          onClick={() => {}}
        >
          About
        </button>
        <button
          className="hover:text-white hover:cursor-pointer hover:bg-sky-900 px-3 py-2 rounded-full"
          onClick={() => {}}
        >
          Work
        </button>
        <button
          className="hover:text-white hover:cursor-pointer hover:bg-sky-900 px-3 py-2 rounded-full"
          onClick={() => {}}
        >
          Projects
        </button>
        <button
          className="hover:text-white hover:cursor-pointer hover:bg-sky-900 px-3 py-2 rounded-full"
          onClick={() => {}}
        >
          Contact
        </button>
      </div>
    </div>
  );
};

export default Header;
