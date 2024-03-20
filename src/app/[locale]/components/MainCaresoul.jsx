import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { ChevronDown, ChevronsDown } from "lucide-react";
import { useBuildId } from "next/config";
import "swiper/css";
import "swiper/css/pagination";

import "./mainSwiper.module.css";

import { Navigation, Pagination } from "swiper/modules";
import Link from "next/link";
import MenuHum from "./MenuHum";
import { useLocale, useTranslations } from "next-intl";
import LocalSwitcher from "./LocalSwitcher";
import Image from "next/image";

export default function MainSwiper({
  handleButtonClick,
  typeIndex,
  setTypeIndex,
}) {
  const t = useTranslations("Main");

  const locale = useLocale();
  const url = `/${locale}/fatwa`;

  const handleTouch = (index) => {
    handleButtonClick(index);
  };

  return (
    <>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper h-full relative  "
      >
        {MainCards.map((item, index) => {
          return (
            <SwiperSlide
              key={index}
              // style={{
              //   backgroundImage: `url(${item.src})`,
              //   width: "100%",
              //   height: "100%",
              //   backgroundSize: "cover",
              //   backgroundPosition: "center",

              // }}
            >
              <Image
                src={item.src}
                alt="Background Imag"
                layout="fill" // Fills the entire container
                objectFit="cover" // Optionally adjust how the image fits (e.g., 'cover', 'contain')
              />

              {index === 3 ? (
                <div className="flex min-h-[30%] flex-col gap-4 absolute bottom-0 pt-1 pb-1  w-full  justify-around items-center bg-gradient-to-tr text-yellow-300 from-black to-transparent  ">
                  <h1 className=" font-bold italic text-3xl ">
                    {t(`item${index + 1}`)}
                  </h1>
                  <Link href={url}>
                    <ChevronDown
                      strokeWidth={4}
                      spacing={2}
                      className="text-yellow-300  animate-bounce  "
                      onClick={() => handleButtonClick(index)}
                      onDrag={handleTouch}
                    />
                  </Link>
                </div>
              ) : (
                <div className="flex min-h-[30%] flex-col gap-4 absolute bottom-0 pt-1 pb-1  w-full  justify-around items-center bg-gradient-to-tr text-yellow-300 from-black to-transparent    ">
                  <h1 className=" font-semibold italic text-3xl mt-2">
                    {t(`item${index + 1}`)}
                  </h1>
                  <Link href="#target" className="mb-10 animate-bounce">
                    {/* <ChevronsDown
              strokeWidth={4}
              spacing={2}
              className="text-red-900  animate-bounce  "
              onClick={() => handleButtonClick(index)}
              onDrag={() => handleButtonClick(index)}
            /> */}
                    {/* <ChevronDown
                      strokeWidth={4}
                      spacing={2}
                      className="text-yellow-300 animate-bounce  "
                      onClick={() => handleButtonClick(index)}
                      onDrag={() => handleButtonClick(index)}
                    /> */}
                    <button
                      // onClick={() => handleButtonClick(index)}
                      // // onMouseEnter={() => handleButtonClick(index)}
                      // // onTouchMove={() => handleButtonClick(index)}
                      onClick={() => handleButtonClick(index)}
                      className="animate-ease-in"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="2"
                        stroke="currentColor"
                        class="w-6 h-6"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5"
                          className="h-12"
                        />
                      </svg>
                    </button>
                  </Link>
                </div>
              )}
            </SwiperSlide>
          );
        })}
      </Swiper>
      <div className="absolute w-full top-0 z-20">
        <MenuHum handleButtonClick={handleButtonClick} typeIndex={typeIndex} />
        <div className="absolute     top-8 z-20 right-4">
          <LocalSwitcher />
        </div>
      </div>
    </>
  );
}

const MainCards = [
  {
    src: "/1.jpeg",
  },
  {
    src: "/2.jpg",
  },
  {
    src: "/5.png",
  },
  {
    src: "/4.png",
  },
];
