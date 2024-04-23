import React from "react";
import Logo from "assets/logo/logo.png";

const Header = ({
  homeHandler,
  aboutHandler,
  workHandler,
  projectHandler,
  contactHandler,
}: any) => {
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
          onClick={homeHandler}
        >
          Home
        </button>
        <button
          className="hover:text-white hover:cursor-pointer hover:bg-sky-900 px-3 py-2 rounded-full"
          onClick={aboutHandler}
        >
          About
        </button>
        <button
          className="hover:text-white hover:cursor-pointer hover:bg-sky-900 px-3 py-2 rounded-full"
          onClick={workHandler}
        >
          Work
        </button>
        <button
          className="hover:text-white hover:cursor-pointer hover:bg-sky-900 px-3 py-2 rounded-full"
          onClick={projectHandler}
        >
          Projects
        </button>
        <button
          className="hover:text-white hover:cursor-pointer hover:bg-sky-900 px-3 py-2 rounded-full"
          onClick={contactHandler}
        >
          Contact
        </button>
      </div>
    </div>
  );
};

export default Header;
