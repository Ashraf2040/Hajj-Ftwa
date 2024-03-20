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

export default function Zamzam() {
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
            {locale === "en" ? "Zamzam" : "بئر زمزم"}
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
            src={item.imgSrc}
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
      imgSrc: "/sub/zam.jpg",
      subTitle: "",
      parag: "زمزم هو ذلك الماء المبارك الذي نبع من الأرض بمكة حين ضرب جبريل عليه السلام بجناحه الأرض. ",
      list: [],
    },
    {
      title: "",
      imgSrc: "/sub/zam.jpg",
      subTitle: "من أسماء زمزم:      ",
      parag: "",
      list: [
        "هَزْمَةُ جِبْرِيلَ عَلَيْهِ السَّلَام.",
        "سُقْيَا اللهِ إِسْمَاعِيلَ عَلَيْهِ السَّلَام.",
        "بَرَّة.",
        "حفيرة عبد المطلب؛ لأنه حفرها بعد أن ظلت مخفية مدة قرون."
      ],
    },
    {
      title: "",
      imgSrc: "/sub/zam.jpg",
      subTitle: "من أسماء زمزم:      ",
      parag: "",
      list: [
        "سقاية الحاج.",
        "شَبّاعة العيال؛ لأن ماءها يروي ويشبع.",
        "شراب الأبرار.",
        "طعام طُعم.",
        "شفاء سُقم.",
      ],
    },
    {
      title: "",
      imgSrc: "/sub/zam.jpg",
      subTitle: "",
      parag: "قدّر بعض العلماء عُمْر ظهور ماء زمزم على وجه الأرض منذ أن ظهر للسيدة هاجر أم سيدنا إسماعيل بحوالي خمسة آلاف سنة.      ",
      list: [],
    },
    {
      title: "",
      imgSrc: "/sub/zam.jpg",
      subTitle: "",
      parag: "",
      list: [
        "يقع بئر زمزم قرب الكعبة المشرفة على بعد 21م منها، جنوبي مقام إبراهيم.",
        "يبعد زمزم عن مقام إبراهيم 18 مترًا."
      ],
    },
   

    {
      title: "",
      imgSrc: "/sub/zam.jpg",
      subTitle: "",
      parag: "ماء زمزم غُسل به صدر النبي صلى الله عليه وسلم.      ",
      list: [],
    },
    {
      title: "",
      imgSrc: "/sub/zam.jpg",
      subTitle: "",
      parag: "ماء زمزم خير ماء على وجه الأرض وهو طعام وشفاء.      ",
      parag1:"عن ابن عباس رضي الله عنهما، قال: قال رسول الله صلى الله عليه وسلم: (خيرُ ماءٍ على وجْهِ الأرضِ ماءُ زمزمَ، فيه طعامٌ من الطُّعْمِ، وشِفاءٌ من السُّقْمِ)      ",
      list: [],
    },
    {
      title: "",
      imgSrc: "/sub/zam.jpg",
      subTitle: "",
      parag: "ماء زمزم لما شُرب له.      ",
      parag1:"عن جابر رضي الله عنه قال: قال رسول الله صلى الله عليه وسلم: (ماء زمزم لما شرب له)      ",
      list: [],
    },
    {
      title: "",
      imgSrc: "/sub/zam.jpg",
      subTitle: "",
      parag: "ماء زمزم يخفّف من شدة الحمى.      ",
      parag1:"عن أبي جمرة الضبعي قال: كنت أجالس ابن عباس بمكة فأخذتني الحمى فقال: أبردها عنك بماء زمزم، فإن رسول الله صلى الله عليه وسلم قال: (الحمى من فيح جهنم فأبردوها بالماء أو قال بماء زمزم)      ",
      list: [],
    },
    {
      title: "",
      imgSrc: "/sub/zam.jpg",
      subTitle: "من أحكام زمزم وآداب شربه:      ",
      parag: "",
      list: [
        "التسمية قبل الشُّرب.",
        "الشُّرب قائمًا.",
        "الشُّرب باليد اليمنى.",
        "الشُّرب ثلاثًا.",
        "عدم التنفس في الإناء."
      ],
    },
   
    {
      title: "",
      imgSrc: "/sub/zam.jpg",
      subTitle: "من أحكام زمزم وآداب شربه:      ",
      parag: "",
      list: [
        "التضلّع منه عند الشُّرب قدر المستطاع.", 
        "الصبُّ منه على الرأس والوجه.",
        "استحضار نية الانتفاع به عند شربه.",
        "اليقين بأنه قادر -بإذن الله تعالى- على شفاء الأسقام والأمراض مهما كانت مستعصية.",
      ],
    },
   

    {
      title: "",
      imgSrc: "/sub/zam.jpg",
      subTitle: "من أحكام زمزم وآداب شربه:      ",
      parag: "",
      list: [
        "دعاء الله تعالى وسؤاله من خيري الدنيا والآخرة عند شربه.",
        "حمد الله تعالى بعد الشُّرب منه.",
        "يجوز الوضوء بماء زمزم.",
        "يجوز إهداء ماء زمزم والإتحاف منه.",
        "يجوز حمل ماء زمزم إلى الديار والتزوّد به إن أمكن."
      ],
    },
   
    
    
   
  ],
  en: [
   
    {
      title: "",
      imgSrc: "/sub/zam.jpg",
      subTitle: "",
      parag: "Zamzam is that blessed water that sprang from the ground in Makkah when Gabriel (peace be upon him) struck the earth with his wing.      ",
      list: [],
    },
    {
      title: "",
      imgSrc: "/sub/zam.jpg",
      subTitle: "Among the names of Zamzam: ",
      parag: "",
      list: [
        "Hazrat Jibreel (Jibreel's Stroke)",
        "Sufficient for Ishmael by Allah",
        "Barrah",
        "The Excavation of Abdul-Muttalib; because he excavated it after it was hidden for centuries."
      ],
    },
    {
      title: "",
      imgSrc: "/sub/zam.jpg",
      subTitle: "Among the names of Zamzam:      ",
      parag: "",
      list: [
        "The Pilgrims' Drink",
        "Filling the Bellies; because its water satiates and satisfies.",
        "The Righteous Drink",
        "Food of Foods",
        "Cure for Illness"
      ],
    },
    {
      title: "",
      imgSrc: "/sub/zam.jpg",
      subTitle: "",
      parag: "Some scholars have estimated the age of Zamzam water on the face of the earth to be about five thousand years since it first appeared for Hagar, the mother of our master Ishmael.      ",
      list: [],
    },
    {
      title: "",
      imgSrc: "/sub/zam.jpg",
      subTitle: "Zamzam Well's Location:      ",
      parag: "",
      list: [
        "Zamzam well is located near the Sacred Kaaba, about 21 meters from it, south of the Station of Ibrahim.",
        "The distance from Zamzam to the Station of Ibrahim is 18 meters."
      ],
    },
    

    {
      title: "",
      imgSrc: "/sub/zam.jpg",
      subTitle: "Uses of Zamzam Water:      ",
      parag: "The chest of the Prophet Muhammad (peace be upon him) was washed with Zamzam water.      ",
      list: [],
    },
    {
      title: "",
      imgSrc: "/sub/zam.jpg",
      subTitle: "",
      parag: "Zamzam water is the best water on earth and is both food and a cure.      ",
      parag1:"Ibn Abbas (may Allah be pleased with him) reported that the Messenger of Allah (peace be upon him) said: The best water on the face of the earth is the water of Zamzam; in it is nourishment and a cure for illness.      ",
      list: [],
    },
    {
      title: "",
      imgSrc: "/sub/zam.jpg",
      subTitle: "",
      parag: "Zamzam water is for what it is drunk for.      ",
      parag1:"Jabir (may Allah be pleased with him) reported that the Messenger of Allah (peace be upon him) said: The water of Zamzam is for what it is drunk for.      ",
      list: [],
    },
    {
      title: "",
      imgSrc: "/sub/zam.jpg",
      subTitle: "",
      parag: "Zamzam Water Reduces Fever Severity: ",
      parag1:"Abu Jamrah Al-Duba’i said: I was sitting with Ibn Abbas in Mecca when I caught a fever. He told me to cool it with Zamzam water, for the Messenger of Allah (peace be upon him) said: 'Fever is from the heat of Hell, so cool it with water or he said with Zamzam water.' ",
      list: [],
    },
    {
      title: "",
      imgSrc: "/sub/zam.jpg",
      subTitle: "Rules and Etiquettes of Drinking Zamzam: ",
      parag: "",
      list: [
        "Say the name of Allah (Bismillah) before drinking.",
        "Drink while standing.",
        "Drink with the right hand.",
        "Drink in three breaths.",
        "Do not breathe into the vessel."
      ],
    },
   

    {
      title: "",
      imgSrc: "/sub/zam.jpg",
      subTitle: "Rules and Etiquettes of Drinking Zamzam:      ",
      parag: "",
      list: [
        "Drink to your fill as much as possible.",
        "Pour water over the head and face.",
        "Intend to benefit from it when drinking.",
        "Have certainty that it can - by the permission of Allah the Almighty - cure diseases and ailments, no matter how severe."
      ],
    },
    

    {
      title: "",
      imgSrc: "/sub/zam.jpg",
      subTitle: "Rules and Etiquettes of Drinking Zamzam: ",
      parag: "",
      list:  [
        "Supplicate to Allah Almighty and ask for the best in this life and the hereafter while drinking.",
        "Praise Allah Almighty after drinking from it.",
        "It is permissible to perform ablution with Zamzam water.",
        "It is permissible to gift Zamzam water and to give it away generously.",
        "It is permissible to carry Zamzam water to one's home and stock up on it if possible."
      ],
    },
  

    

   
   
   
  ],
};


