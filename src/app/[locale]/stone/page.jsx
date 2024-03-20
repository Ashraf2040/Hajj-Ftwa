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

export default function Stone () {
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
            {locale === "en" ? "The Black Stone " : "الحجر الأسود"}
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
      parag:
        "الحجر الأسود هو حجر من أحجار الجنة، أنزله الله تعالى ليكون في بيته الحرام، وهو مثبت في الركن الجنوبي الشرقي للكعبة.",
      parag1: "",
      list: [],
    },
    {
      title: "",
      subTitle: "",
      parag:
        "الحجر الأسود مبني على قواعد إبراهيم عليه لسلام، وكان وقت نزوله من الجنة أشدّ بياضًا من اللبن ولكن سوّدته خطايا بني آدم.",
      parag1: "",
      list: [],
    },
    {
      title: "",
      subTitle: "",
      parag:
        "يسمى الحجر الأسود أيضا الركن أو الركن الأسود، أو المُحَيّا، أما تسميته بالحجر الأسعد  فهي غير صحيحة",
      parag1: "",
      list: [],
    },
    {
      title: "",
      subTitle: "يشهد الحجر الأسود لمن يستلمه:      ",
      parag:
        "عن ابن عبّاس رضي الله عنهما، قال: قال رسول الله صلى الله عليه وسلم: (لَيَأْتِيَنَّ هَذَا الْحَجَرُ يَوْمَ الْقِيَامَةِ وَلَهُ عَيْنَانِ يُبْصِرُ بِهِمَا، وَلِسَانٌ يَنْطِقُ بِهِ، يَشْهَدُ عَلَى مَنْ يَسْتَلِمُهُ بِحَقٍّ)      ",
      parag1: "",
      list: [],
    },
    {
      title: "",
      subTitle: "",
      parag: "مسح الحجر الأسود مكفرٌ للخطايا      ",
      parag1: "",
      list: [],
    },
    {
      title: "",
      subTitle: "الحجر الأسود يستحق الإحتفاء به      ",
      parag:
        "قال عليه الصلاة والسلام بِكَ حفيًّا  أي معنياً مهتماً محتفلاً مكرماً",
      parag1: "",
      list: [],
    },
    {
      title: "",
      subTitle: "",
      parag: "تقبيل الحجر الأسود سُنة      ",
      parag1: "",
      list: [],
    },
    
  ],
  en: [
    {
      subTitle: " ",
      parag:
        "The Black Stone is a stone from Paradise, sent down by Allah to be placed in His Sacred House, fixed in the southeastern corner of the Kaaba.",
      parag1: "",
      list: [],
    },
    {
      subTitle: " ",
      parag:
        "The Black Stone was placed  upon the foundations laid by Prophet Ibrahim (peace be upon him), the Black Stone was initially whiter than milk but turned black due to the sins of the sons of Adam.",
      parag1: "",
      list: [],
    },
    {
      subTitle: " ",
      parag:
        "The Black Stone is also known as The Corner orThe Black Corner, or Al-Muhayya. However, calling it The Happier Stone is incorrect.      ",
      parag1: "",
      list: [],
    },
    {
      subTitle: "The Black Stone will bear witness for those who touch it: ",
      parag:
        "Ibn Abbas (may Allah be pleased with him) narrated that the Prophet Muhammad (peace be upon him) said: This stone will come on the Day of Resurrection with eyes to see and a tongue to speak, testifying in favor of those who touched it in truth.      ",
      parag1: "",
      list: [],
    },
    {
      subTitle: " ",
      parag: "Touching the Black Stone expiates sins.      ",
      parag1: "",
      list: [],
    },
    {
      subTitle: "The Black Stone is worthy of veneration:       ",
      parag:
        "The Prophet Muhammad (peace be upon him) said regarding it, (With great care,) meaning with attention, celebration, and honor.      ",
      parag1: "",
      list: [],
    },
    
  ],
};
