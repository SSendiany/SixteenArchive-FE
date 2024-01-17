"use client"
import React, { useState } from 'react';
import Image from "next/image";
import { motion } from "framer-motion"
import { TfiMenu } from 'react-icons/tfi';

export default function Navbar() {
  const variants = {
    open: { opacity: 1,  display: "block" },
    closed: { opacity: 0, display: "none" },
  }
  const [colorChange, setColorchange] = useState(false);
  const [navbarOpen, setNavbarOpen] = useState(false);
  const handleNavbar = () => {
    setNavbarOpen(!navbarOpen)
  }
    const changeNavbarColor = () => {
        if (window.scrollY >= 80) {
            setColorchange(true);
        }
        else {
            setColorchange(false);
        }
    };
    if (typeof window !== "undefined") {
      window.addEventListener('scroll', changeNavbarColor);
    }
  return (
    <nav className={`${colorChange ? 'bg-primaryBlack/70 backdrop-blur-md' : 'md:bg-transparent bg-primaryOrange'} transition ease-in duration-200 fixed w-full border-gray-200 z-50 `}>
      <div className={`max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 ${colorChange && 'border-b-2 border-primaryOrange'}`}>
        <a href="/" className="flex items-center">
          <Image
            className="md:w-[100px] w-[17vw]"
            src={"/images/logo.png"}
            alt=""
            width={0}
            height={0}
          />
        </a>
        <button
          data-collapse-toggle="navbar-default"
          onClick={handleNavbar}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white focus:text-gray-400 rounded-lg md:hidden "
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <TfiMenu size={24}/>
        </button>
      <div className={`${!navbarOpen && "hidden"} w-full md:block md:w-auto`} id="navbar-default">
          <ul className="font-medium flex flex-col md:pt-0 pt-5 mt-4 border-t-2 bg-inherit md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-inherit">
            <li>
              <a
                href="#"
                className="block py-2 md:pl-3 pr-4 text-white hover:text-gray-400 rounded bg-transparent md:p-0"
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about-us"
                className="block py-2 md:pl-3 pr-4 text-white hover:text-gray-400 rounded bg-transparent md:p-0"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#service"
                className="block py-2 md:pl-3 pr-4 text-white hover:text-gray-400 rounded bg-transparent md:p-0"
              >
                Services
              </a>
            </li>
       
            {/* <li>
              <a
                href="#"
                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Contact
              </a>
            </li> */}
          </ul>
        </div>
      </div>
    </nav>
  );
}
