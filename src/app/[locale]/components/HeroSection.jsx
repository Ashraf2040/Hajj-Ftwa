"use client"

import react, { useState } from "react";
const Index = () => {
  const [menu, setMenu] = useState(false);
  return (
    <div>
      <section>
        <div className="w-full relative pb-10 px-6 xl:px-0">
          <img
            className="absolute w-full inset-0 h-full object-cover object-center"
            src="https://cdn.tuk.dev/assets/templates/weCare/hero2-bg.png"
            alt="we care family"
          />
          <nav className="lg:hidden relative z-40">
            <div className="flex py-6 justify-between items-center px-4">
              <div>
                <img
                  src="/logo.png"
                  alt="logo"
                  className="w-16 h-16"
                />
              </div>
              <div className="flex items-center">
                <ul
                  id="list"
                  className={`${
                    menu ? "" : "hidden"
                  } p-2 border-r bg-white absolute  rounded top-0 left-0 right-0 shadow mt-16 md:mt-16`}
                >
                  <li className="flex cursor-pointer text-gray-600 text-xl leading-3 tracking-normal mt-2 py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none">
                    <a href="javascript:void(0)">
                      <span className="ml-2 font-bold">Al Omrah</span>
                    </a>
                  </li>
                  <li
                    className=" flex-col cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none flex justify-center"
                    onclick="dropdownHandler(this)"
                  >
                    <a href="javascript:void(0)">
                      <span className="ml-2 font-bold">Al-Hajj</span>
                    </a>
                  </li>
                  <li className="flex cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-2 hover:text-indigo-700 flex items-center focus:text-indigo-700 focus:outline-none">
                    <a href="javascript:void(0)">
                      <span className="ml-2 font-bold">Places</span>
                    </a>
                  </li>
                  <li
                    className="flex flex-col cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none flex justify-center"
                    onclick="dropdownHandler(this)"
                  >
                    <a href="javascript:void(0)">
                      <span className="ml-2 font-bold">Al-Fatwa</span>
                    </a>
                  </li>
                </ul>
                <div className="xl:hidden">
                  <img
                    id="open"
                    className={` ${menu ? "hidden" : ""} close-m-menu`}
                    onClick={() => setMenu(!menu)}
                    src="https://tuk-cdn.s3.amazonaws.com/can-uploader/right_aligned_with_searchbar_Svg1.svg"
                    alt="menu"
                  />
                  <div
                    id="close"
                    className={` ${menu ? "" : "hidden"} close-m-menu`}
                    onClick={() => setMenu(!menu)}
                  >
                    <img
                      src="https://tuk-cdn.s3.amazonaws.com/can-uploader/right_aligned_with_searchbar_Svg2.svg"
                      alt="cross"
                    />
                  </div>
                </div>
              </div>
            </div>
          </nav>
          <nav
            role="navigation"
            aria-label="Main"
            tabIndex="0"
            className="hidden relative z-10 w-full lg:flex justify-between items-center p-20"
          >
            <div className="w-1/6">
              <a
                tabIndex="0"
                aria-label="we care company logo"
                href="javascript:void(0)"
              >
                <img
                  src="/logo.png"
                  alt="logo"
                  className="h-20 w-20"
                />
              </a>
            </div>
            <div className="w-5/6">
              <div className="flex items-center justify-end">
                <ul className="text-gray-800 lg:space-x-8 flex items-center leading-none">
                  <li>
                    <a
                      className="hover:text-indigo-500 text-lg focus:text-indigo-500"
                      href="#"
                    >
                      Al Omrah
                    </a>
                  </li>
                  <li className="ml-4 hover:text-indigo-500 ">
                    <a
                      className="focus:text-indigo-500 text-lg"
                      href="javascript:void(0)"
                    >
                      Al Hajj
                    </a>
                  </li>
                  <li className="ml-4 hover:text-indigo-500 focus:text-indigo-500">
                    <a
                      className="focus:text-indigo-500 text-lg"
                      href="javascript:void(0)"
                    >
                      Places
                    </a>
                  </li>
                  <li className="ml-4 hover:text-indigo-500 focus:text-indigo-500">
                    <a
                      className="focus:text-indigo-500 text-lg"
                      href="javascript:void(0)"
                    >
                      Al-Fatwa
                    </a>
                  </li>
                </ul>
                <div className="pl-40">
                  <button
                    role="button"
                    aria-label="live chat"
                    className="focus:bg-indigo-600 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 bg-indigo-700 hover:bg-indigo-600 text-white px-6 py-2 font-semibold rounded focus:outline-none"
                  >
                    Live Chat
                  </button>
                </div>
              </div>
            </div>
          </nav>
          <div className="pt-32 lg:flex items-center gap-4 px-4 relative z-10 container mx-auto">
            <div className="w-full lg:w-1/2 h-full lg:pr-10 xl:pr-0">
              <img
                tabIndex="0"
                role="img"
                aria-label="people smiling"
                className="mx-auto"
                src="/1.png"
                alt="people smiling"
              />
            </div>
            <div role="contentinfo" className="w-full lg:w-1/2 h-full">
              <p
                tabIndex="0"
                className="text-indigo-700 uppercase text-2xl mb-4"
              >
                Explore our
              </p>
              <h1
                tabIndex="0"
                className="text-indigo-700 text-4xl lg:text-6xl font-black mb-8"
              >
                Al-Hajj & Omrah Guide
              </h1>
              <p tabIndex="0" className="text-gray-800 font-regular mb-8">
                The Hajj and Umrah guide is a free service for God’s guests. We
                also provide the service of fatwas and all questions related to
                rituals and reviewing the holy places.
              </p>
            </div>
          </div>
        </div>
      </section>

      <style>
        {`
            /* Top menu */
            .top-100 {
                animation: slideDown 0.5s ease-in-out;
            }
            @keyframes slideDown {
                0% {
                    top: -50%;
                }
                100% {
                    top: 0;
                }
            }
            * {
                outline: none !important;
                -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
                -webkit-tap-highlight-color: transparent;
            }`}
      </style>
    </div>
  );
};
export default Index;
