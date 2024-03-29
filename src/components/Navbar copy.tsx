"use client"
import React, { useState } from 'react';
import Image from "next/image";

type Props = {
  colorChange: boolean
}

export default function Navbar(props: Props) {
  // const [colorChange, setColorchange] = useState(false);
    // const changeNavbarColor = () => {
    //     if (window.scrollY >= 80) {
    //         setColorchange(true);
    //     }
    //     else {
    //         setColorchange(false);
    //     }
    // };
    // if (typeof window !== "undefined") {
    //   window.addEventListener('scroll', changeNavbarColor);
    // }
  return (
    <nav className={`${props.colorChange ? 'bg-primaryBlack/70 backdrop-blur-md' : 'bg-transparent'} fixed w-full border-gray-200 z-50 `}>
      <div className={`max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 ${props.colorChange && 'border-b-2 border-primaryOrange'}`}>
        <a href="/" className="flex items-center">
          <Image
            className="w-[100px]"
            src={"/images/logo.png"}
            alt=""
            width={0}
            height={0}
          />
        </a>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-inherit">
            <li>
              <a
                href="#"
                className="block py-2 pl-3 pr-4 text-white hover:text-gray-400 rounded bg-transparent md:p-0"
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 pl-3 pr-4 text-white hover:text-gray-400 rounded bg-transparent md:p-0"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 pl-3 pr-4 text-white hover:text-gray-400 rounded bg-transparent md:p-0"
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
