import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { ChevronDown, ChevronsDown } from "lucide-react";
import { useBuildId } from "next/config";
import "swiper/css";
import "swiper/css/pagination";
import Cardsss from "./cards/Cardsss";
import "./mainSwiper.module.css";

import { Navigation, Pagination } from "swiper/modules";
import Link from "next/link";
import MenuHum from "./MenuHum";
import { useLocale, useTranslations } from "next-intl";
import LocalSwitcher from "./LocalSwitcher";
import Image from "next/image";

export default function MainSwiper({ handleButtonClick, typeIndex }) {
  const t = useTranslations("Main");

  const locale = useLocale();
  const url = `/${locale}/fatwa`;

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
            <SwiperSlide key={index}>
              <Image
                src={item.src}
                alt="Background Imag"
                fill
                className="object-cover"
              />

              {index === 3 ? (
                <div className="absolute flex justify-center flex-col items-center bottom-0 left-0 right-0 h-40 bg-black bg-opacity-50 backdrop-blur text-white p-4 rounded-b-lg transform-scale-100 gap-8  ">
                  <h1 className=" font-bold  text-3xl ">
                    {t(`item${index + 1}`)}
                  </h1>
                  <Link href={url}>
                    <ChevronDown
                      strokeWidth={4}
                      spacing={2}
                      className="text-white  animate-bounce  "
                    />
                  </Link>
                </div>
              ) : (
                <div className="absolute flex justify-center flex-col items-center bottom-0 left-0 right-0 h-40  text-white p-4 rounded-b-lg transform-scale-100 gap-8  ">
                  <h1 className=" font-semibold tracking-widest text-red-500 px-4 py-2 rounded-lg text-4xl   backdrop-blur mt-2">
                    {t(`item${index + 1}`)}
                  </h1>
                  <Link href="#target" className="mb-10 animate-bounce">
                    <button
                      onClick={() => handleButtonClick(index)}
                      className="animate-ease-in"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        className="w-6 h-6 text-red-500"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
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
    src: "/6.jpg",
  },
  {
    src: "/9.jpg",
  },
  {
    src: "/5.jpg",
  },
  {
    src: "/123.jpg",
  },
];
