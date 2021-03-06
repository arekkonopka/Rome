import React from "react";
import "../styles/Navbar.css";
import { useHistory } from "react-router-dom";
import flag from "../assets/images/flags/flag.jpg";
import polandFlag from "../assets/images/flags/polandFlag.png";
import englandFlag from "../assets/images/flags/englandFlag.png";

const Navbar = ({ active, isClickedActive, polishLanguage }) => {
  const history = useHistory();

  const onClickHome = () => {
    history.push("/home");
    isClickedActive();
  };
  const onClickHistory = () => {
    history.push("/history");
    isClickedActive();
  };
  const onClickAbout = () => {
    history.push("/about");
    isClickedActive();
  };

  const onClickPolandFlag = () => {
    polishLanguage(true);
  };

  const onClickEnglandFlag = () => {
    polishLanguage(false);
  };

  return (
    <div
      id="navbar"
      className={`z-20 w-full bg-gray-100 h-screen navbar absolute top-0 p-2 flex flex-col  items-center transform transition duration-200  ${
        active ? "translate-x-0" : "-translate-x-full"
      } sm:p-10 sm:flex-row sm:justify-between sm:h-14 sm:translate-x-0  sm:bg-transparent`}
    >
      <div className="mt-20 sm:mt-0 ml-2 w-12 h-15">
        <img src={flag} alt="italy flag" />
      </div>
      <h1 className="flex-grow hidden sm:block text-5xl text-center text-gray-400">
        Rome
      </h1>
      <ul className=" mt-20 sm:mt-0 flex flex-col justify-center items-center sm:flex-row">
        <li
          className="mt-5 sm:mt-0 bg-black-5 p-2 cursor-pointer rounded hover:bg-black hover:text-white hover:rounded transition duration-200"
          onClick={onClickHome}
        >
          Home
        </li>
        <li
          className="mt-10 sm:mt-0 p-2 cursor-pointer rounded hover:bg-black hover:text-white hover:rounded  transition duration-200"
          onClick={onClickHistory}
        >
          History
        </li>
        <li
          className=" mt-5 sm:mt-0 p-2 cursor-pointer rounded hover:bg-black hover:text-white hover:rounded  transition duration-200"
          onClick={onClickAbout}
        >
          About
        </li>
      </ul>
      <div className="flex flex-col ml-3">
        <button className="" onClick={onClickPolandFlag}>
          <img src={polandFlag} alt="polandFlag" className="w-6 h-6" />
        </button>
        <button className="" onClick={onClickEnglandFlag}>
          <img src={englandFlag} alt="englandFlag" className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
