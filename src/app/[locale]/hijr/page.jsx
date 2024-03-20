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

export default function Hijr() {
  function getLinkHref() {
    // Logic to determine the URL
    return "/#target";
  }

  // const t = useTranslations("Kaaba1");
  
  const locale = useLocale();
  console.log(locale);

  const lang = locale === "en" ? "en" : "ar";
  return (
    <>
      <div className=" ">
        <img src="/sub/ismail.jpg" alt="item" />
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
            {locale === "en" ? "The Sacred House “Kaaba”" : "البيت الحرام"}
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
      subTitle:"",
      parag: "الحجر هو الحائط الواقع شمال الكعبة المشرفة على شكل نصف دائرة. وسمي بذلك: لاستدارته، أو لأنه حُجر من البيت؛ أي: مُنع منه، أو لتحجيره بالجدار ليطاف من ورائه.",
      list: [],
    },
    {
      title: "",
      subTitle:" من أسماء الحِجر: ",
      parag: "   حِجر الكعبة أو الحطيم أو الجَدر.",
      list: [],
    },
    {
      title: "",
      subTitle:"لا يصحّ تسمية الحجر       ",
      parag: "بـ(حِجر إسماعيل)؛ اعتمادًا على أنه دُفن مع أمه هاجر في الحِجر، بل لا يثبت أن أحدًا من الأنبياء عليهم السلام مات بجوار الكعبة المشرفة، أو دُفن فيها.",
      list: [],
    },
    {
      title: "",
      subTitle:"",
      parag: "يجب الإعتقاد بأن الحجر قطعة من الكعبة المشرفة",
      parag1:"عَنْ عَائِشَةَ، قَالَتْ: سَأَلْتُ رَسُولَ اللهِ صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ عَنِ الْحِجْرِ أَمِنَ الْبَيْتِ هُوَ؟ قَالَ: «نَعَمْ»، قُلْتُ: فَلِمَ لَمْ يُدْخِلُوهُ فِي الْبَيْتِ؟ فقال: «إِنَّ قَوْمَكِ اسْتَقْصَرُوا مِنْ بُنْيَانِ الْبَيْتِ، وَلَوْلَا حَدَاثَةُ عَهْدِهِمْ بِالشِّرْكِ، أَعَدْتُ مَا تَرَكُوا مِنْهُ، فَإِنْ بَدَا لِقَوْمِكِ مِنْ بَعْدِي أَنْ يَبْنُوهُ فَهَلُمِّي لِأُرِيَكِ مَا تَرَكُوا مِنْهُ»، فَأَرَاهَا قَرِيبًا مِنْ سَبْعَةِ أَذْرُعٍ.",
      list: [],
    },
    {
      title: "",
      subTitle:"",
      parag: "إستحباب الصلاة في الحجر لأنها كالصلاة في داخل الكعبة المشرفة.   ",
      list: [],
    },
    {
      title: "",
      subTitle:"",
      parag: "في الحجر تم شق صدر الحبيب محمد صلى الله عليه وسلم ليلة الإسراء، وأستخرج قلبه وغسل بالماء بأمر من الله تعالى مما يدل على عظيم فضل هذا المكان.",
      list: [],
    },
    {
      title: "",
      subTitle:"",
      parag: "إستحباب الجلوس في الحِجر، فهو أكرم المجالس وأشرفها على وجه الأرض، ولذلك كان الحِجر مجلسًا للنبي صلى الله عليه وسلم وأصحابه رضي الله عنهم، وكذا مجلسًا للتابعين من بعدهم      ",
      list: [],
    },
    {
      title: "",
      subTitle:"",
      parag: "تصح صلاة النافلة في الحجر، وأما بخصوص صلاة الفريضة، فالخلاف فيه مبنيٌّ على الخلاف في حكم صلاة الفريضة داخل الكعبة؛ باعتباره جزءًا وقطعة منها. ",
      list: [],
    },
    {
      title: "",
      subTitle:"",
      parag: "يُعتبر المكان الذي في الحِجر مما يلي الأذرع السبعة من مقدَّم الحِجر ليس من الكعبة.      ",
      list: [],
    },
    {
      title: "",
      subTitle:"",
      parag: "يُعتبر المكان الذي في الحِجر مما يلي الأذرع السبعة من مقدَّم الحِجر ليس من الكعبة.      ",
      list: [],
    },
    
    

   
  ],
  en: [
    {
      subTitle: " ",
      parag:"Al-Hijr is the semi-circular wall located to the north of the Kaaba. It is named as such due to its semi-circular shape, because it was sectioned off from the house (i.e., it was excluded), or because it was demarcated by a wall to be circumambulated behind.",
      parag1: "",
      list: [],
    },
    {
      subTitle: " Names of Al-Hijr: ",
      parag:"Hijr of the Kaaba, or Hatim, or Al-Jadr “the Wall”.",
      parag1: "",
      list: [],
    },
    {
      subTitle: "Incorrect Naming of Al-Hijr: ",
      parag:"It is incorrect to call it -Hijr Ismail- based on the claim that he and his mother Hagar were buried within Al-Hijr. In fact, it is not confirmed that any prophets, peace be upon them, died near the Kaaba or were buried in it.",
      parag1: "",
      list: [],
    },
    {
      subTitle: " ",
      parag:"It is essential to believe that Al-Hijr is a part of the Kaaba.       ",
      parag1: "Aisha (may Allah be pleased with her) asked the Prophet Muhammad (peace be upon him) if Al-Hijr was part of the house (Kaaba), and he replied, Yes. She then asked why it was not included within the house, and he explained that your people ran short of funds during the construction. Had it not been for their recent departure from polytheism, he would have rebuilt what was omitted. He suggested that if her people decided to rebuild it after him, he would show her what was left out, showing her a space close to seven cubits.",
      list: [],
    },
    {
      subTitle: "The Desirability of Praying in Al-Hijr: ",
      parag:"Praying in Al-Hijr is desirable because it is like praying inside the Kaaba.",
      parag1: "",
      list: [],
    },
    {
      subTitle: "Significance of Al-Hijr: ",
      parag:"In Al-Hijr, the chest of the beloved Prophet Muhammad (peace be upon him) was opened on the night of Isra (the night journey), and his heart was extracted and washed with water by the command of Allah, indicating the great virtue of this place.",
      parag1: "",
      list: [],
    },
    {
      subTitle: "The Desirability of Sitting in Al-Hijr: ",
      parag:"Sitting in Al-Hijr is recommended as it is the most honorable and noble place on earth. Therefore, it served as a meeting place for the Prophet Muhammad (peace be upon him), his companions (may Allah be pleased with them), and the followers after them.",
      parag1: "",
      list: [],
    },
    {
      subTitle: " Ruling on Praying Nafl (Voluntary Prayers) in Al-Hijr:      ",
      parag:"Sitting in Al-Hijr is recommended as it is the most honorable and noble place on earth. Therefore, it served as a meeting place for the Prophet Muhammad (peace be upon him), his companions (may Allah be pleased with them), and the followers after them.",
      parag1: "",
      list: [],
    },
    {
      subTitle: " The Area within Al-Hijr:      ",
      parag:"The area of Al-Hijr, extending to the seven cubits at its forefront, is not considered part of the Kaaba.      ",
      parag1: "",
      list: [],
    },
    {
      subTitle: " The Area within Al-Hijr:      ",
      parag:"The area of Al-Hijr, extending to the seven cubits at its forefront, is not considered part of the Kaaba.      ",
      parag1: "",
      list: [],
    },
    
    
     
   
   
  ],
};
