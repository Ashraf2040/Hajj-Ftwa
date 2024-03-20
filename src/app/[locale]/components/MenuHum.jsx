"use client";

import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import Link from "next/link";

const MenuHum = ({ handleButtonClick }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className={`flex w-full ${
        isOpen ? "bg-white" : "bg-transparent"
      }  flex-col justify-between flex-wrap bg-transparent p-6 px-8 z-30 rounded-lg `}
    >
      <div className="block lg:hidden ">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex  items-center   rounded "
        >
          {isOpen ? (
            <XIcon className="h-6 w-6" aria-hidden="true" />
          ) : (
            <MenuIcon className="h-10 w-10 text-white" aria-hidden="true" />
          )}
        </button>
      </div>
      <Transition
        show={isOpen}
        enter="transition duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition duration-200 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        {(ref) => (
          <div
            ref={ref}
            className="w-full block flex-grow lg:flex  lg:items-center lg:w-auto"
          >
            <div className="text-sm lg:flex-grow self-center justify-center items-center  ">
              <Link
                href="#target"
                onClick={() => handleButtonClick(0)}
                className="block mt-4 text-xl  lg:inline-block lg:mt-0  mr-4 w-full font-bold  my-1  rounded-lg p-1 hover:bg-gray-100 hover:text-red-600"
              >
                Grand Mosque
              </Link>
              <Link
                href="#target"
                onClick={() => handleButtonClick(1)}
                className="block mt-4 text-xl   lg:inline-block lg:mt-0   mr-4 w-full font-bold  my-1  rounded-lg p-1 hover:bg-gray-100 hover:text-red-600"
              >
                Makkah
              </Link>
              <Link
                href="#target"
                onClick={() => handleButtonClick(2)}
                className="block mt-4 text-xl  lg:inline-block lg:mt-0   mr-4 w-full font-bold  my-1  rounded-lg p-1 hover:bg-gray-100 hover:text-red-600"
              >
                Al Kaaba
              </Link>
              <Link
                href="#target"
                onClick={() => handleButtonClick(3)}
               
                className="block mt-4 text-xl   lg:inline-block lg:mt-0   mr-4 w-full font-bold  my-1 hover:bg-gray-100 hover:text-red-600  rounded-lg p-1"
              >
                Fatwas
              </Link>
              <Link
                href="#target"
                className=" mt-4 text-xl flex justify-center lg:inline-block lg:mt-0   mr-4 w-full font-bold  my-1  rounded-lg p-1 hover:bg-gray-100 hover:text-red-600"
              >
                About US
              </Link>
            </div>
          </div>
        )}
      </Transition>
    </nav>
  );
};

export default MenuHum;
