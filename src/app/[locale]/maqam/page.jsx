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

export default function Maqam() {
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
        <img src="/2.png" alt="item" />
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
            {locale === "en" ? "The Station of Ibrahim(Peace Be Upon Him)" : "مقام ابراهيم عليه السلام"}
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
      subTitle: "مقام إبراهيم عليه السلام      ",
      parag: "هو الحَجر الأثري الذي قام عليه إبراهيم عليه السلام عند بناء الكعبة المشرَّفة لما ارتفع البناء.وسمّي بذلك: لقيام الخليل إبراهيم عليه، فكان يرتفع عليه ويبني؛ وإسماعيل يناوله الحجارة.",
      list: [],
    },
    {
      title: "",
      subTitle: "",
      parag: "أن الله تعالى خلّد ذكر هذا المقام الكريم في آيتين عظيمتين تخليدًا لذكره الحسن، وبيانًا لشرفه وفضله، وتكرمةً لأبي الأنبياء إبراهيم الخليل  عليه الصلاة والسلام.",
      list: [],
    },
    {
      title: "",
      subTitle: "أن الله تعالى أمر باتخاذه مصلّى:      ",
      parag: "قال تعالى: {وَاتَّخِذُوا مِنْ مَقَامِ إِبْرَاهِيمَ مُصَلًّى} [البقرة: 125].      ",
      parag1:"قال ابن جرير رحمه الله: اتخذوا أيها الناس من مقام إبراهيم مصلى تصلون عنده، عبادةً منكم، وتكرمةً مني لإبراهيم عليه السلام",
      list: [],
    },
    {
      title: "",
      subTitle: "مقام إبراهيم عليه السلام       ",
      parag: "ياقوتة من يواقيت الجنة      ",
      list: [],
    },
    {
      title: "",
      subTitle: "",
      parag: "من السنة صلاة ركعتي الطواف خلف مقام إبراهيم عليه السلام.      ",
      list: [],
    },
    {
      title: "",
      subTitle: "",
      parag: "يشترط في الصلاة خلف مقام إبراهيم عليه السلام ألا تكون هناك إعاقة وإيذاء للطائفين.      ",
      list: [],
    },
 
    

   
  ],
  en: [
    {
      title: "",
      subTitle: "The Station of Ibrahim (Peace Be Upon Him)",
      parag: "It is the historical stone that Ibrahim (peace be upon him) stood on when building the Sacred Kaaba as the construction elevated. It was named for Ibrahim's standing upon it; he would stand on it to build, while Ismail passed him the stones.",
      list: [],
    },
    {
      title: "",
      subTitle: "",
      parag: "Allah the Exalted has eternalized the memory of this noble station in two magnificent verses to perpetuate its good mention, to demonstrate its honor and virtue, and to honor the father of the prophets, Ibrahim the friend (Khalil), peace be upon him.",
      list: [],
    },
    {
      title: "",
      subTitle: "Allah the Exalted has commanded to take it as a place of prayer:      ",
      parag: "Allah the Exalted says: And take, [O believers], from the standing place of Ibrahim a place of prayer [Al-Baqarah: 125].      ",
      parag1:"Ibn Jarir, may Allah have mercy on him, said: O people, take from the Station of Ibrahim a place where you pray, as a worship from you and an honor from me to Ibrahim, peace be upon him.      ",
      list: [],
    },
    {
      title: "",
      subTitle: "The Station of Ibrahim (Peace Be Upon Him)      ",
      parag: "A jewel from the jewels of Paradise      ",
      list: [],
    },
    {
      title: "",
      subTitle: "",
      parag: "It is from the Sunnah to perform two units of prayer for Tawaf behind the Station of Ibrahim (peace be upon him).",
      list: [],
    },
    {
      title: "",
      subTitle: "",
      parag: "It is required for the prayer behind the Station of Ibrahim (peace be upon him) that there is no hindrance or harm to those performing Tawaf.      ",
      list: [],
    },
    
    {
      title: "",
      subTitle: "",
      parag: "It is not permissible to rub against or seek blessings from the Station of Ibrahim (peace be upon him).",
      list: [],
    },
    
     
   
   
  ],
};
