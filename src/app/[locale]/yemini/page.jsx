"use client";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./swiper.module.css";

import { Pagination, Navigation } from "swiper/modules";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useNavigation } from "react-router-dom";
import Card from "../components/Card";
import { useLocale, useMessages, useTranslations } from "next-intl";

export default function Yemini() {
  function getLinkHref() {
    // Logic to determine the URL
    return "/#target";
  }

  // const t = useTranslations("Kaaba1");
  const t = useTranslations("Kaaba1");
  const locale = useLocale();
  console.log(locale);

  const lang = locale === "en" ? "en" : "ar";
  return (
    <>
      <div className=" ">
        <img src="/sub/blackstone.jpg" alt="item" />
        <div className="justify-center flex py-4 px-4">
          <Link href={getLinkHref()}>
            <svg
              height="30"
              viewBox="0 0 16 16"
              width="20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="m16 8c0-5-4.9-5-4.9-5h-5.1v-3l-6 6 6 6v-3h5.2c3.5 0 1.8 7 1.8 7s3-4.1 3-8z"
                fill="#246499"
              />
            </svg>
          </Link>
          <p className="w-full text-center text-3xl font-bold">
            {locale === "en" ? "The Yemeni Corners" : "الركنان "}
          </p>
        </div>
      </div>
      <Swiper
        pagination={{
          type: "fraction",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper "
      >
        {SubCards[lang].map((item, index) => (
          <SwiperSlide key={index}>
            <Card
              head={item.title}
              subHeader={item.subTitle}
              parag={item.parag}
              parag1={item.parag1}
              ul={item.list}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

const SubCards = {
  ar: [
    {
      title: "",
      subTitle: "",
      parag:"الركن اليماني هو أحد أركان البيت يقع في الركن الجنوبي الغربي من الكعبة الشريفة.      ",
      parag1: "",
      list: [],
    },
    {
      title: "",
      subTitle: "",
      parag:"يقال للركن اليماني وللحجر الأسود الركنان اليمانيان. ",
      parag1: "",
      list: [],
    },
    {
      title: "",
      subTitle: "",
      parag:"المسح على الركن اليماني  مكفرٌ للخطايا.",
      parag1: "",
      list: [],
    },
    {
      title: "",
      subTitle: "",
      parag:"يستحب استلام الركن اليماني والحجر الأسود في جميع الطواف إن استطاع.      ",
      parag1: "",
      list: [],
    },
    {
      title: "",
      subTitle: "ما يقال بين الركن اليماني والحجر الأسود في الطواف:  ",
      parag:"عن عبد الله بن السائب قال: سمعت رسول الله صلى الله عليه وسلم يقرأ بين الركن اليماني والحجر (ربنا آتنا في الدنيا حسنة وفي الآخرة حسنة وقنا عذاب النار)      ",
      parag1: "",
      list: [],
    },
   
   
  ],
  en: [
    {
      subTitle: " ",
      parag: "The Yemeni Corner is one of the corners of the Kaaba, located in the southwestern corner of the Sacred House. ",
      parag1: "",
      list: [],
    },
    {
      subTitle: " ",
      parag: "The Yemeni Corner and the Black Stone are collectively known as The Yemeni Corners.",
      parag1: "",
      list: [],
    },
    
    {
      subTitle: " ",
      parag: "Touching the Yemeni Corner expiates sins.      ",
      parag1: "",
      list: [],
    },
    {
      subTitle: " ",
      parag: "It is recommended to touch both the Yemeni Corner and the Black Stone during all circuits of Tawaf if possible. ",
      parag1: "",
      list: [],
    },
    {
      subTitle: "What is recited between the Yemeni Corner and the Black Stone during Tawaf:  ",
      parag: "Abdullah bin Al-Sa'ib said: I heard the Messenger of Allah (peace be upon him) reciting between the Yemeni Corner and the Black Stone, Our Lord, give us good in this world and good in the Hereafter, and protect us from the torment of the Fire.      ",
      parag1: "",
      list: [],
    },
   
  ],
};
