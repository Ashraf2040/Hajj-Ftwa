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

export default function Kaaba3() {
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
            {locale === "en" ? "The Objectives and Virtues of the Sacred House" : "مقاصد وفضائل البيت الحرام"}
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
      subTitle: "من أهم المقاصد التي وُضِعَ لأجلها البيت الحرام",
      parag: "للدلالة على الله والعلم به سبحانه.",
      list: [],
    },
    {
      // title:"",
      subTitle: "من أهم المقاصد التي وُضِعَ لأجلها البيت الحرام",
      parag: "لتحقيق عبادة الله عز وجل وإفراده بالتوحيد والعبادة.",
      parag1:
        "قال الله تعالى: {وَإِذْ بَوَّأْنَا لِإِبْرَاهِيمَ مَكَانَ الْبَيْتِ أَنْ لَا تُشْرِكْ بِي شَيْئًا} [الحج: 26]",
      list: [],
    },
    {
      // title:"",
      subTitle: "من أهم المقاصد التي وُضِعَ لأجلها البيت الحرام",
      parag: "للطواف حوله وعمارته بدوام الطاعات.",
      parag1:
        "قال تعالى: {وَطَهِّرْ بَيْتِيَ لِلطَّائِفِينَ وَالْقَائِمِينَ وَالرُّكَّعِ السُّجُودِ} [الحج: 26]",
      list: [],
    },
    {
      // title:"",
      subTitle: "من أهم المقاصد التي وُضِعَ لأجلها البيت الحرام",
      parag: "لقصده بالحج والعمرة.",
      parag1:
        "قال الله تعالى: {وَلِلَّهِ عَلَى النَّاسِ حِجُّ الْبَيْتِ مَنِ اسْتَطَاعَ إِلَيْهِ سَبِيلًا} [آل عمران: 97].",
      list: [],
    },
    {
      // title:"",
      subTitle: "من فضائل البيت الحرام",
      parag: "أنه أول بيت وُضع في الأرض لعبادة الله تعالى.",
      parag1:
        "وعن أبي ذر رضي الله عنه، قال: قلت يا رسول الله، أي مسجد وضع في الأرض أول؟ قال:المسجد الحرام",
      list: [],
    },
    {
      // title:"",
      subTitle: "من فضائل البيت الحرام",
      parag: "أن فيه آيات بينات.",
      parag1:
        "قال الله تعالى: {إِنَّ أَوَّلَ بَيْتٍ وُضِعَ لِلنَّاسِ لَلَّذِي بِبَكَّةَ مُبَارَكًا وَهُدًى لِّلْعَالَمِين * فِيهِ آيَاتٌ بَيِّنَاتٌ} [آل عمران: 96-97]",
      list: [],
    },
    {
      // title:"",
      subTitle: "من فضائل البيت الحرام  ",
      parag:
        "أن قاصده -منذ خروجه من بيته إلى وصوله إليه وطوافه به- يكتب الله تعالى له بكلِّ خطوة يخطوها حسنة؛ ويمحو عنه بها سيئة.",
      parag1: "",
      list: [],
    },
    {
      // title:"",
      subTitle: "من فضائل البيت الحرام  ",
      parag: "أن الإتيان إليه يُذهب الذنوب.",
      parag1:
        "عن أبي هريرة رضي الله عنه قال: قال رسول الله صلى الله عليه وسلم: «من حجّ هذا البيت فلم يرفث ولم يفسق رجع كما ولدته أمه»",
      list: [],
    },
    {
      // title:"",
      subTitle: "من فضائل البيت الحرام  ",
      parag: "أنه يحتضن بين جنباته الحجر الأسود، وهو حجر من أحجار الجنة.",
      parag1: "",
      list: [],
    },
    {
      // title:"",
      subTitle: "من فضائل البيت الحرام  ",
      parag:
        "أن النبي صلى الله عليه وسلم أرشد إلى الاستمتاع به؛ قبل أن يُرفع، وذلك بالإكثار من الطواف حوله.",
      parag1: "عن عبد الله بن عمر رضي الله عنهما، قال: قال رسول الله -صلى الله عليه وسلم-: «اِسْتَمْتِعُوْا بِهَذَا البَيْتِ فَقَدْ هُدِمَ مَرتين، ويُرْفَعُ في الثالثةِ",
      list: [],
    },
    {
      // title:"",
      subTitle: "من فضائل البيت الحرام  ",
      parag: "مضاعفة الحسنات عنده، وزيادة أجر العاملين بقرب هذا البيت العظيم، وأن الصلاة في المسجد الحرام أفضل من مائة ألف صلاة فيما سواه.",
      parag1: "",
      list: [],
    },
    
  ],
  en: [
    {
      subTitle:
        "One of the most important objectives for which the Sacred House was established ",
      parag: "To signify Allah and to gain knowledge of Him, the Exalted.",
      parag1: "",
      list: [],
    },
    {
      subTitle:
        "One of the most important objectives for which the Sacred House was established ",
      parag:
        "To realize the worship of Allah the Almighty and to single Him out in monotheism and worship.",
      parag1:
        "Allah the Exalted says: And [mention] when We designated for Abraham the site of the House, [saying], 'Do not associate anything with Me' [Al-Hajj: 26].",
      list: [],
    },
    {
      subTitle:
        " One of the most important objectives for which the Sacred House was established",
      parag:
        "For circumambulation around it and its upkeep with perpetual acts of obedience.",
      parag1:
        "Allah the Exalted says: And purify My House for those who perform Tawaf and those who stand [in prayer] and those who bow and prostrate. [Al-Hajj: 26].",
      list: [],
    },
    {
      subTitle:
        "One of the most important objectives for which the Sacred House was established ",
      parag: "To be aimed for pilgrimage and Umrah.",
      parag1:
        "Allah the Exalted says: And [due] to Allah from the people is a pilgrimage to the House - for whoever is able to find thereto a way [Al-Imran: 97].",
      list: [],
    },
    {
      subTitle: "From the virtues of the Sacred House ",
      parag:
        "It is the first House established on Earth for the worship of Allah the Exalted.",
      parag1:
        "Abu Dharr (may Allah be pleased with him) said: I asked, O Messenger of Allah, which mosque was established first on Earth? He replied: The Sacred Mosque (in Makkah).",
      list: [],
    },
    {
      subTitle: " From the virtues of the Sacred House",
      parag: "It contains clear signs.",
      parag1:
        "Allah the Exalted says: Indeed, the first House [of worship] established for mankind was that at Bakkah - blessed and a guidance for the worlds * In it are clear signs [Al-Imran: 96-97].",
      list: [],
    },
    {
      subTitle: "From the virtues of the Sacred House ",
      parag:
        "That whoever aims for it - from the moment they leave their home until they arrive at it and perform Tawaf - Allah the Almighty records for them with each step a good deed and erases a bad deed.",
      parag1: "",
      list: [],
    },
    {
      subTitle: "From the virtues of the Sacred House ",
      parag: "Coming to it removes sins. ",
      parag1:
        "Abu Huraira (may Allah be pleased with him) reported that the Messenger of Allah (peace be upon him) said: Whoever performs Hajj to this House and does not commit any obscenity or wrongdoing, they will return (free from sin) as the day their mother bore them.",
      list: [],
    },
    {
      subTitle: "From the virtues of the Sacred House ",
      parag: "It encompasses the Black Stone, which is a stone from Paradise.",
      parag1: "",
      list: [],
    },
    {
      subTitle: "From the virtues of the Sacred House ",
      parag: "The Prophet Muhammad (peace be upon him) guided to enjoy it; before it is lifted, by performing Tawaf around it frequently.",
      parag1: "Abdullah bin Omar (may Allah be pleased with them) reported that the Messenger of Allah - peace be upon him - said: Enjoy this House, for it has been destroyed twice and will be lifted in the third [instance].",
      list: [],
    },
    {
      subTitle: "From the virtues of the Sacred House ",
      parag: "Multiplication of good deeds near it, increasing the reward for those who work near this great House, and that prayer in the Sacred Mosque is better than a hundred thousand prayers elsewhere.",
      parag1: "",
      list: [],
    },
  ],
};
