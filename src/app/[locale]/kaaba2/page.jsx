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

export default function Kaaba2() {
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
    <div className="">
      <div className="">
        
        <div className="justify-center  flex py-4 px-4">
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
            {locale === "en" ? "Parts and Components of the Sacred House “Kaaba”" : "أجزاء الكعبة المشرَّفة ومكوناتها"}
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
              id={index}
              src={item.imgSrc}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      </div>
  );
}

const SubCards = {
  ar: [
    {
      subTitle: "أهم أجزاء الكعبة المشرفة الخارجية",
      imgSrc: "/2.png",
      parag: "",
      list: [
        "الباب الخارجي للكعبة",
        "الحجر الأسود",
        "القفل",
        "الركن اليماني",
        "المفتاح",
        "الملتزَم",
        "سطح الكعبة",
        "الحِجر",
        "الكسوة الخارجية",
        "الميزاب",
        "الجدار",
        "الشاذروان",
      ],
    },
    {
      // title:"",
      subTitle: "أهم أجزاء الكعبة المشرفة الداخلية",
      imgSrc: "/2.png",
      parag: "",
      list: [
        "الأرضية",
        "الباب الداخلي (باب التوبة)",
        "السقف",
        "الدرج المؤدي إلى السطح",
        "ثلاثة أعمدة",
      ],
    },
    {
      subTitle: "الملتزم",
      imgSrc: "/sub/kaaba2.jpg",
      parag:
        "الملتزم هو مكان الالتزام من الكعبة فيما بين الحجر الأسود، وباب الكعبة المشرفة، ويبلغ مقداره نحو 2م.",
      list: [],
    },
    {
      subTitle: "الملتزم",
      imgSrc: "/sub/kaaba2.jpg",
      parag:
        "الملتزم موضع إجابة للدعاء، ويسن وضع الخدِّ وبسط اليد وإلصاق الوجه والصدر عليه والدعاء عنده.",
      list: [],
    },
    {
      subTitle: "الملتزم",
      imgSrc: "/sub/kaaba2.jpg",
      parag:
        "عن ابن عباس رضي الله عنهما قال: إن ما بين الحجر والباب لا يقوم فيه إنسان فيدعو الله تعالى بشيء إلا رأى في حاجته بعض الذي يحب.",
      list: [],
    },

    {
      subTitle: " الشَّاذَرْوَان",
      imgSrc: "/sub/sh.jpg",
      parag:
        " الشَّاذَرْوَان هو البناء المُسَنَّم المحيط بجدار الكعبة المشرَّفة من أسفلها مما يلي أرض المطاف من الجهات الثلاث الشرقية والغربية والجنوبية.",
      list: [],
    },
    {
      subTitle: " الشَّاذَرْوَان",
      imgSrc: "/sub/sh.jpg",
      parag:
        "حجارة الشَّاذَرْوَان من الرخام القوي الصلب من أنفس حجارة المرمر. ",
      parag1: "يبلغ عدد أحجار الشَّاذَرْوَان 68 حجرًا في الجوانب الثلاثة.",
      list: [],
    },
    {
      subTitle: " يبلغ طول الشَّاذَرْوَان ",
      imgSrc: "/sub/sh.jpg",
      parag: " ",
      parag1: "",
      list: [
        "من جهة الحطيم: 12,84م",
        "بين الركنين: 11,52م",
        "بين الركن اليماني والحطيم: 12,11م.",
        "من جهة عتبة الحطيم: 11,28م.",
      ],
    },
  ],

  en: [
    {
      subTitle: "Key External Parts of the Kaaba ",
      imgSrc: "/2.png",
      parag: "",
      list: [
        "The Black Stone",
        "The Yemeni Corner",
        "The Multazam",
        "The Hajr (The Station of Ibrahim)",
        "The Spout (Mizab)",
        "The Shadharwan (The Water Spout Base)",
        "The Outer Door of Kabaa",
        "The Lock of Kabaa",
        "The Key of Kabaa",
        "The Roof of Kabaa", // Assuming a hyphen was missed
        "The External Covering (Kiswa)",
        "The Wall of Kabaa",
      ],
    },
    {
      subTitle: "Key Internal Parts of the Kaaba: ",
      imgSrc: "/2.png",
      parag: "",
      list: [
        // Replace these placeholders with the lines you want to convert
        "The Inner Door (Door of Repentance)",
        "The Staircase Leading to the Roof",
        "Three Pillars",
        "The Floor of Kaaba",
        "The Ceiling of Kaaba",
      ],
    },
    {
      subTitle: "The Multazam ",
      imgSrc: "/sub/kaaba2.jpg",

      parag:
        "The Multazam is the area of adherence on the Kaaba between the Black Stone and the door of the Kaaba, measuring about 2 meters. ",
      list: [],
    },
    {
      subTitle: "The Multazam ",
      imgSrc: "/sub/kaaba2.jpg",
      parag:
        "The Multazam is a place where supplications are answered. It is recommended to place one's cheek, stretch out one's hands, attach one's face and chest to it, and supplicate there.",
      list: [],
    },
    {
      subTitle: "The Multazam ",
      imgSrc: "/sub/kaaba2.jpg",
      parag:
        "According to Ibn Abbas, may Allah be pleased with them, no one stands between the Stone and the door to supplicate to Allah Almighty for anything except that they see in their need some of what they love.",
      list: [],
    },
    {
      subTitle: "The Shadharwan  ",
      imgSrc: "/sub/sh.jpg",
      parag:
        "The Shadharwan is the sloped base surrounding the bottom of the Kaaba's wall, facing the ground of the Mataf from the east, west, and south sides.",
      list: [],
    },
    {
      subTitle: "The Shadharwan  ",
      imgSrc: "/sub/sh.jpg",
      parag:
        "The stones of the Shadharwan are made of strong, solid marble, considered among the finest marble stones.",
      parag1: "There are 68 stones of the Shadharwan on the three sides.",
      list: [],
    },
    {
      subTitle: "The length of the Shadharwan",
      imgSrc: "/sub/sh.jpg",
      parag: "",
      list: [
        "From the Hatim side: 1284m",
        "Between the corners: 1152m",
        "Between the Yemeni corner and the Hatim: 1211m.",
        "From the side of Hatim's threshold: 1128m.",
      ],
    },
  ],
};
