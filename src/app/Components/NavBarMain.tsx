import React from "react";
import Image from "next/image";
import { FaHome, FaSearch, FaUser } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";
import Link from "next/link";

const NavBarMain = () => {
  return (
    <div className="navbar absolute z-10 justify-between flex p-0 border-0">
      <div className="navbar-start w-fit relative h-auto">
        <a className="btn btn-ghost text-xl p-0 m-0">
          <Image
            width={400}
            height={200}
            className="lg:mt-10 md:mt-10 mt-9 w-full max-w-full h-auto"
            src="/LOGO with Silver dude.png"
            alt="Logo"
          />
        </a>
      </div>
      <div className="dropdown navbar-end lg:hidden">
        <div tabIndex={0} role="button" className="btn btn-ghost ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {" "}
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />{" "}
          </svg>
        </div>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow mt-55 mr-2"
        >
          <li className="">
            <Link className="text-[16px] " href="/">
              <FaHome className="" /> Home
            </Link>
          </li>
          <li>
            <Link href={"/about"} className="text-[16px] ">
              {" "}
              <FiPhoneCall />
              Contact
            </Link>
          </li>
          <li>
            <Link href={"/signin"} className="text-[16px] ">
              <FaUser />
              Sign In
            </Link>
          </li>
          <li>
            <Link href={"/sport"} className="text-[16px] ">
              <FaUser />
              Sport
            </Link>
          </li>
          <li>
            <Link href={"/score"} className="text-[16px] ">
              <FaUser />
              Score
            </Link>
          </li>
          <li>
            <Link href={"/event"} className="text-[16px] ">
              <FaUser />
              Event
            </Link>
          </li>
          <li>
            <Link
              href={"/stream/6824d2bce12118d3208567e5"}
              className="text-[16px] "
            >
              <FaUser />
              Stream
            </Link>
          </li>

          <li>
            <div className="join p-[3px] gap-0.5 bg-white rounded-4xl">
              <input
                className="input join-item border-0 rounded-l-full p-2 h-[30px] bg-white text-black"
                placeholder="Search"
              />
              <button className="btn join-item shadow-none h-[30px]  rounded-4xl bg-back ">
                <FaSearch color="white" />
              </button>
            </div>
          </li>
        </ul>
      </div>
      <div className=" hidden navbar-end w-full lg:flex">
        <ul className="menu menu-horizontal px-1 flex justify-center items-center">
          <li className="">
            <Link className="text-[16px] " href="/">
              <FaHome className="" /> Home
            </Link>
          </li>
          <li>
            <Link href={"/about"} className="text-[16px] ">
              {" "}
              <FiPhoneCall />
              Contact
            </Link>
          </li>
          <li>
            <Link href={"/signin"} className="text-[16px] ">
              <FaUser />
              Sign In
            </Link>
          </li>
          <li>
            <Link href={"/sport"} className="text-[16px] ">
              <FaUser />
              Sport
            </Link>
          </li>
          <li>
            <Link href={"/score"} className="text-[16px] ">
              <FaUser />
              Score
            </Link>
          </li>
          <li>
            <Link href={"/event"} className="text-[16px] ">
              <FaUser />
              Event
            </Link>
          </li>
          <li>
            <Link
              href={"/stream/6824d2bce12118d3208567e5"}
              className="text-[16px] "
            >
              <FaUser />
              Stream
            </Link>
          </li>

          <li>
            <div className="join p-[3px] gap-0.5 bg-white rounded-4xl">
              <input
                className="input join-item border-0 rounded-l-full p-2 h-[30px] bg-white text-black"
                placeholder="Search"
              />
              <button className="btn join-item shadow-none h-[30px]  rounded-4xl bg-back ">
                <FaSearch color="white" />
              </button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBarMain;
