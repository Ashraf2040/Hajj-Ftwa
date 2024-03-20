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

export default function Kaaba4() {
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
            {locale === "en" ? "Some Fiqh Rulings Related to the Sacred House" : "من الأحكام فقهية التي تتعلق بالبيت الحرام"}
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
      subTitle: "من الأحكام الفهية التي تتعلق بالبيت الحرام",
      parag: "وجوب الاعتقاد بأنه بيت الله تعالى.",
      list: [],
    },
    {
      // title:"",
      subTitle: "من الأحكام الفهية التي تتعلق بالبيت الحرام",
      parag: "وجوب الاعتقاد بأنه هو قبلة المسلمين.",
      parag1: "",
      list: [],
    },

    {
      // title:"",
      subTitle: "من الأحكام الفهية التي تتعلق بالبيت الحرام",
      parag: "أن استقباله شرط لصحة الصلاة، لا تصح الصلاة بدون ذلك إلا لعذر.",
      parag1: "",
      list: [],
    },

    {
      // title:"",
      subTitle: "من الأحكام الفهية التي تتعلق بالبيت الحرام",
      parag: "",
      parag1: "هناك أحوال لا يشترط فيها استقبال القبلة، وهي على النحو التالي:",
      list: [
        "حال المرض:",
        "المريض العاجز عن استقبال القبلة؛ ولم يجد من يساعده على التوجه؛ يصلي إلى أيّ جهة، وتصح صلاته.",
        "حال الخوف:",
        "سواء خاف من عدو أو سيل أو سبع أو حريق أو نحو ذلك.",

        "حال السفر:",
        "المسافر له أن يصلي النافلة حيث توجه، أما الفريضة فيلزمه استقبال القبلة، إلا إذا عجز عن استقبالها؛ وخاف فوات الوقت فيصلي على حسب حاله.",
      ],
    },

    {
      // title:"",
      subTitle: "من الأحكام الفهية التي تتعلق بالبيت الحرام",
      parag: "أنه سبحانه جعله مقصدًا للحج والعمرة؛ دون ما سواه.",
      parag1: "",
      list: [],
    },

    {
      // title:"",
      subTitle: "من الأحكام الفهية التي تتعلق بالبيت الحرام",
      parag: "أنه يجب قصده في كل سنة على طائفة من الناس لإقامة فريضة الحج.",
      parag1: "",
      list: [],
    },

    {
      // title:"",
      subTitle: "من الأحكام الفهية التي تتعلق بالبيت الحرام",
      parag: "اختصاص الطواف به؛ دون غيره.",
      parag1: "",
      list: [],
    },

    {
      // title:"",
      subTitle: "من الأحكام الفهية التي تتعلق بالبيت الحرام",
      parag:
        "أن الطواف لا يصحّ من داخله ولأن الحِجْر جزء من البيت، فلا يصح الطواف من خلاله.",
      parag1: "",
      list: [],
    },

    {
      // title:"",
      subTitle: "من الأحكام الفهية التي تتعلق بالبيت الحرام",
      parag:
        "وجوب تطهيره حسّاً ومعنىً من كل ما يخدش غاية وضعه؛ وهي التوحيد وعبادة الله وحده والطواف والاعتكاف، وأنّ ذلك من الملة الإبراهيمية والشريعة المحمدية الواجب اتّباعهما.",
      parag1: "",
      list: [],
    },

    {
      // title:"",
      subTitle: "من الأحكام الفهية التي تتعلق بالبيت الحرام",
      parag:
        "العناية بعمارته معنىً أن يبقى عامرًا بالطائفين والمصلين والمعتكفين.",
      parag1: "",
      list: [],
    },

    {
      // title:"",
      subTitle: "من الأحكام الفهية التي تتعلق بالبيت الحرام",
      parag: "أن دخول البيت الكعبة مستحبّ مندوب إليه.",
      parag1: "",
      list: [],
    },

    {
      // title:"",
      subTitle: "من الأحكام الفهية التي تتعلق بالبيت الحرام",
      parag: "أن الصلاة تجوز في داخله.  في داخل الكعبة.",
      parag1: "",
      list: [],
    },

    {
      // title:"",
      subTitle: "من الأحكام الفهية التي تتعلق بالبيت الحرام",
      parag: "أن الصلاة تجوز في داخله إلى أيّ جهة من جهاته الأربع.",
      parag1: "",
      list: [],
    },

    {
      // title:"",
      subTitle: "من الأحكام الفهية التي تتعلق بالبيت الحرام",
      parag: "أنه يُسنّ التوجه إليه عند الدعاء.",
      parag1: "",
      list: [],
    },

    {
      // title:"",
      subTitle: "من الأحكام الفهية التي تتعلق بالبيت الحرام",
      parag: "يُشرع توجيه الأموات إليه في قبورهم.",
      parag1: "",
      list: [],
    },

    {
      // title:"",
      subTitle: "من الأحكام الفهية التي تتعلق بالبيت الحرام",
      parag: "يُسنّ توجيه الذبيحة إليه عند ذبحها.",
      parag1: "",
      list: [],
    },

    {
      // title:"",
      subTitle: "من الأحكام الفهية التي تتعلق بالبيت الحرام",
      parag: "النهي عن استقباله واستدباره عند قضاء الحاجة.",
      parag1: "",
      list: [],
    },

    {
      // title:"",
      subTitle: "من الأحكام الفهية التي تتعلق بالبيت الحرام",
      parag: "النهي عن التَّفل والتنخّم والبصاق تجاهه.",
      parag1: "",
      list: [],
    },

   
  ],
  en: [
    {
      subTitle: "Some Fiqh Rulings Related to the Sacred House ",
      parag:
        "The obligation to believe that it is the House of Allah the Almighty.",
      parag1: "",
      list: [],
    },
    {
      subTitle: "Some Fiqh Rulings Related to the Sacred House ",
      parag: "The obligation to believe that it is the Qibla of Muslims.",
      parag1:
        "Facing it is a condition for the validity of the prayer; the prayer is not valid without it except for an excuse.",
      list: [],
    },
    {
      subTitle: "Some Fiqh Rulings Related to the Sacred House ",
      parag: "",
      parag1:
        "There are situations where facing the Qibla is not required, as follows:",
      list: [
        "In the case of illness:",
        "The patient who is unable to face the Qibla and finds no one to assist them in turning; they may pray in any direction, and their prayer is valid.",
        "In the case of fear:",
        "Whether fear from an enemy, flood, predator, fire, or the like.",
        "In the case of travel:",
        "The traveler may pray the optional prayer in whichever direction they face, but the obligatory prayer requires facing the Qibla unless they are unable to and fear missing the prayer time, then they may pray according to their situation.",
      ],
    },
    {
      subTitle: "Some Fiqh Rulings Related to the Sacred House ",
      parag:
        "That He, the Exalted, made it the destination for Hajj and Umrah, unlike any other place.",
      parag1: "",
      list: [],
    },
    {
      subTitle: "Some Fiqh Rulings Related to the Sacred House ",
      parag:
        "That it is obligatory for a group of people to aim for it every year to perform the obligation of Hajj.",
      parag1: "",
      list: [],
    },
    {
      subTitle: "Some Fiqh Rulings Related to the Sacred House ",
      parag: "Exclusive to Tawaf, unlike any other place.",
      parag1: "",
      list: [],
    },
    {
      subTitle: "Some Fiqh Rulings Related to the Sacred House ",
      parag:
        "Tawaf is not valid from inside it, and since Al-Hijr is part of the House, Tawaf through it is not valid.",
      parag1: "",
      list: [],
    },
    {
      subTitle: "Some Fiqh Rulings Related to the Sacred House ",
      parag:
        "The obligation to purify it physically and spiritually from anything that tarnishes its primary purpose; which is monotheism, worshiping Allah alone, Tawaf, and I'tikaf, and that this is part of the Abrahamic way and the Muhammadan law that must be followed.",
      parag1: "",
      list: [],
    },
    {
      subTitle: "Some Fiqh Rulings Related to the Sacred House ",
      parag:
        "The care for its maintenance means that it remains populated by those performing Tawaf, praying, and those in I'tikaf.",
      parag1: "",
      list: [],
    },
    {
      subTitle: "Some Fiqh Rulings Related to the Sacred House ",
      parag: "Entering the House “Kaaba” is recommended and encouraged.",
      parag1: "",
      list: [],
    },
    {
      subTitle: "Some Fiqh Rulings Related to the Sacred House ",
      parag: "Prayer is permissible inside it “Inside Kaaba”.",
      parag1: "",
      list: [],
    },
    {
      subTitle: "Some Fiqh Rulings Related to the Sacred House ",
      parag: "Prayer is permissible inside it in any of its four directions.",
      parag1: "",
      list: [],
    },
    {
      subTitle: "Some Fiqh Rulings Related to the Sacred House ",
      parag: "It is recommended to face it when making supplications.",
      parag1: "",
      list: [],
    },
    {
      subTitle: "Some Fiqh Rulings Related to the Sacred House ",
      parag: "It is prescribed to direct the dead towards it in their graves.",
      parag1: "",
      list: [],
    },
    {
      subTitle: "Some Fiqh Rulings Related to the Sacred House ",
      parag:
        "It is recommended to direct the sacrifice towards it when slaughtering.",
      parag1: "",
      list: [],
    },
    {
      subTitle: "Some Fiqh Rulings Related to the Sacred House ",
      parag:
        "It is prohibited to face it or turn one's back to it when relieving oneself.",
      parag1: "",
      list: [],
    },
    {
      subTitle: "Some Fiqh Rulings Related to the Sacred House ",
      parag: "It is prohibited to spit, clear the throat, or expectorate towards it.",
      parag1: "",
      list: [],
    },
    
     
   
   
  ],
};
