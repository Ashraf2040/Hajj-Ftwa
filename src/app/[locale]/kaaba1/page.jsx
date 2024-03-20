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

export default function Kaaba() {

  const router = useRouter();
  
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
          <button onClick={()=>router.back()}>
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
          </button>
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
     title :"",
      subTitle:"",
      parag: "البيت الحرام (الكعبة المشرفة) هو ذلك البناء مكّعب الشكل؛ الذي يقع في وسط المسجد الحرام",
      list: [],
    },
    {
      // title:"",
      subTitle: "من أسماء البيت الحرام",
      parag: "",
      list: [
        "الكعبة",
        " بيت الله",
        " البيت العتيق",
        " البيت الحرام",
        " المسجد الحرام",
      ],
    },
    {
      title: "وصف البيت الحرام ",
      subTitle: "يبلغ عرض جدار الكعبة:",
      parag: "",
      list: [
        "من جهة باب الكعبة: 11,68م.",
        "من جهة الحِجر: 9,90م.",
        "ما بين الركن الشامي واليماني: 12,04م.",
        "ما بين الحجر الأسود والركن اليماني: 10,18م.",
        "يبلغ ارتفاعه: 14م.",
        "تبلغ مساحته عند قاعدته: 145م2.",
      ],
    },
    {
      title: "    ",
      subTitle:"صور تعظيم الكعبة المشرَّفة ",
      parag: "عظمةُ الكعبة المشرّفة نابعةٌ من عظمة الله تعالى؛ الذي أمر بتعظيمها؛ ورفع قَدْرها على سائر البيّنات.",
      list: [],
    },
    {
      title: "    ",
      subTitle:" صور تعظيم الكعبة المشرَّفة ",
      parag: " أن الله تعالي اضاف البيت الي نفسه الشريفة بقوله تعالي (وطهر بيتي) ..(الحج:26)",
      list: [],
    },
    {
      title: "    ",
      subTitle:
        "صور تعظيم الكعبة المشرَّفة ",
      parag: "أن الله تعالى حرّم مكة يوم خلق السموات والأرض؛ تعظيمًا لحُرمة بيته الذي ستضمُّه جنباتها، وعلى هذا حُرِّمت أمور مباحة في غير مكة؛ تمييزًا وتعظيمًا لها.",
      list: [],
    },

    {
      title: "    ",
      subTitle:
        "صور تعظيم الكعبة المشرَّفة ",
      parag: "أن الله تعالى قد توعّد كلّ من أرادها بسوء أن يهلكه، كما أهلك أبرهة الأشرم.",
      list: [],
    },
    {
      title: "    ",
      subTitle: " الكعبة المشرّفة مركز الكون.",
      parag: "صور تعظيم الكعبة المشرَّفة ",
      list: [],
    },
    {
      subtitle: "من وصف البيت الحرام في القرآن الكريم",
      parag: "هدىً للعالمين",
      parag1:
        "معنى كون البيت هدىً للعالمين: أنه بيان وإرشاد للناس -مسلمهم وكافرهم- على ربهم وخالقهم لما تضمنه من الآيات البينات، وقبلة ومنسك للمسلمين وطريق لهم إلى الجنّة.",
      list: [],
    },

    {
      subTitle: "من وصف البيت الحرام في القرآن الكريم",
      parag: "مبارك ",
      parag1:
        "معنى كون البيت مباركًا: أن خيراته متعددة، وفضائله متكاثرة، منها ما يظهر أثره في الدنيا، ومنها ما يكون ذُخرا لصاحبه في الآخرة.",
      list: [],
    },
    {
      subTitletitle: "من وصف البيت الحرام في القرآن الكريم",
      parag: "مثابة للناس",
      parag1:
        "معنى كون البيت مثابة للناس: أن النّاس يترددون إليه بشوقٍ وبلا ملل، ويبذلون في سبيله أنفس ما يملكون، طلبًا للأجر والمثوبة ومحو السيئات، ولا ينصرفون عنه إلا وهم راغبون في العود إليه. ",
      list: [],
    },
    {
      subTitletitle: "من وصف البيت الحرام في القرآن الكريم",
      parag: "قبلة",
      parag1:
        "معنى كون البيت قبلة: أن المسلمين يتوجهون إليه في صلاتهم، ويوجّهون إلى جهته موتاهم.",
      list: [],
    },
    {
      subTitletitle: "من وصف البيت الحرام في القرآن الكريم",
      parag: "قيام للناس      ",
      parag1:
        "معنى كون البيت قيامًا للناس: أن به صلاحًا للناس في أمر دينهم ودنياهم، وقيامِهم إلى مقاصدهم في معاشهم ومعادهم؛ لما يتم لهم من أمر حجهم وعمرتهم وتجارتهم وأنواع منافعهم.  ",
      list: [],
    },
    {
      subTitletitle: "من وصف البيت الحرام في القرآن الكريم",
      parag: "آمن      ",
      parag1:
        "معنى كون البيت آمنًا: أن الله تعالى يحفظه من الزوال على مرّ العصور والدهور؛ إلى حين يأذن بقيام الساعة. ",
      list: [],
    },
    {
      subTitletitle: "من وصف البيت الحرام في القرآن الكريم",
      parag: "محرم",
      parag1:
        "معنى كون البيت محرّمًا: المنع المطلق من أن يكون فيها ما يضاد صلاحها وصلاح ما بها من ساكن ودابة وشجر فيحرم فيها القتل، والصيد، واللقطة، وقطع الشجر وغيرها مما له حكمها.",
      list: [],
    },

    {
      subTitletitle: "من وصف البيت الحرام في القرآن الكريم",
      parag: "طاهر",
      parag1:
        "معنى كون البيت طاهرًا: أن يكون معلمًا للتوحيد، وأن يطهَّر من الشرك والكفر والبدع والأنجاس والقاذورات، وأن لا يسمح أن يكون عنده إلا ما وافق التوحيد والطهر.",
      list: [],
    },
  ],
  en: [
    {
      parag: " The Sacred House “Kaaba” is that cube-shaped building located in the center of the Sacred Mosque (Masjid al-Haram).",
      parag1:
        "",
      list: [],
    },
    {
      subTitle: "Names of the Sacred House:",
      parag: "",
      list: [
        "The Kaaba",
        "The House of Allah",
        "The House of Allah ",
        "The Sacred House",
        "The Sacred Mosque",
        "The Sacred House",
      ],
    },
    {
      title: "Description of the Sacred House",
      subTitle: "The width of the Kaaba's walls:",
      parag: "",
      list: [
        "From the door of the Kaaba: 1168m",
        "From the Hijr: 990m",
        "Between the Syrian and Yemeni corners: 1204m",
        "Between the Black Stone and the Yemeni corner: 1018m",
        "Its height: 14m",
        "Its base area: 145m²",
      ],
    },
    {
      title: "",
      subTitle: "How the Sacred Kaaba is venerated?",
      parag:
        "The greatness of the Sacred Kaaba stems from the greatness of Allah, who commanded its veneration and elevated its status above other signs.",
      list: [],
    },
    {
      title: "",
      subTitle: "How the Sacred Kaaba is venerated? ",
      parag:
        "Allah has attributed the House to His noble self by saying, Purify My House [22:26].",
      list: [],
    },
    {
      subTitle: "How the Sacred Kaaba is venerated?",
      parag:
        "Allah declared Makkah sacred the day He created the heavens and the earth, honoring the sanctity of His House that it would encompass. Consequently, certain permissible acts elsewhere are forbidden in Mecca, distinguishing and honoring it.",
      list: [],
    },
    {
      subTitle: "How the Sacred Kaaba is venerated?",
      parag:
        "Allah has threatened destruction to anyone intending harm to it, just as He destroyed Abraha the Ashram.",
      list: [],
    },
    {
      subTitle: "How the Sacred Kaaba is venerated?",
      parag: "The Sacred Kaaba is the center of the universe.",
      list: [],
    },
    {
      title: "Descriptions of the Sacred House in the Holy Quran",
      subTitle: "A guidance for the people: ",
      parag:
        "The House serves as guidance and instruction for all people - Muslim and non-Muslim - towards their Lord and Creator through the clear signs it encompasses, a direction for Muslims' prayers, and a path to Paradise. ",
      list: [],
    },
    {
      title: "Descriptions of the Sacred House in the Holy Quran  ",
      subTitle: "Blessed:",
      parag:
        "Its blessings are numerous and its virtues abundant, some visible in this world and others reserved for the Hereafter. ",
      list: [],
    },
    {
      title: "Descriptions of the Sacred House in the Holy Quran ",
      subTitle: "A place of return for people:      ",
      parag:
        "People come to it eagerly and tirelessly, sacrificing their most valuable possessions in pursuit of reward, expiation of sins, and they leave longing to return.",
      list: [],
    },
    {
      title: "Descriptions of the Sacred House in the Holy Quran ",
      subTitle: "A direction (Qibla): ",
      parag:
        "Muslims face it during their prayers and direct their dead towards it. ",
      list: [],
    },
    {
      title: "Descriptions of the Sacred House in the Holy Quran ",
      subTitle: "A means of sustenance for people: ",
      parag:
        "It ensures the well-being of people in their religion and worldly life, fulfilling their needs through Hajj, Umrah, trade, and various benefits.",
      list: [],
    },
    {
      subTitle: "Descriptions of the Sacred House in the Holy Quran ",
      parag: "Safe: ",
      parag1:
        "Allah ensures its protection across ages until the Day of Judgment.",
      list: [],
    },
    {
      subTitle: "Descriptions of the Sacred House in the Holy Quran ",
      parag: "Sacred: ",
      parag1:
        "Absolute prohibition of anything that opposes its sanctity, including killing, hunting, picking up lost items, and cutting trees, among others, to maintain its purity.",
      list: [],
    },
    {
      subTitle: "Descriptions of the Sacred House in the Holy Quran ",
      parag: "Pure:",
      parag1:
        "A symbol of monotheism, purified from polytheism, disbelief, innovation, filth, and impurities, allowing only what aligns with monotheism and purity. ",
      list: [],
    },
  ],
};
