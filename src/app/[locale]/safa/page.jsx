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
            {locale === "en" ? "Safa and Marwah" : "الصفا والمروة"}
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
      imgSrc: "/sub/safa.jpg",
      subTitle: "",
      parag: "الصفا والمروة جبلان معروفان بمكة، وهما متقابلان، وبينهما يكون السعي في الحج والعمرة، بدايةً بالصفا، وانتهاءً بالمروة..",
      list: [],
    },
    {
      title: "",
      imgSrc: "/sub/safa2.jpeg",
      subTitle: "",
      parag: " تبلغ المسافة بين الصفا والمروة  نحو 400م.",
      list: [],
    },
    {
      title: "",
      imgSrc: "/sub/safa2.jpeg",
      subTitle: "",
      parag: " الصفا والمروة من شعائر الله، ومعالمه التي جعلها تعالى ذكره لعباده.",
      list: [],
    },
    {
      title: "",
      imgSrc: "/sub/safa2.jpeg",
      subTitle: "",
      parag: " يجب السعي بين الصفا والمروة في الحج والعمرة.",
      list: [],
    },
    {
      title: "",
      imgSrc: "/sub/safa2.jpeg",
      subTitle: "",
      parag: " لا يصح السعي بين الصفا والمروة إلا لحج أو عمرة.",
      list: [],
    },
    {
      title: "",
      imgSrc: "/sub/safa2.jpeg",
      subTitle: "صفة السعي:",
      parag: "",
      parag1:"قال جابر رضي الله عنه -في حديث صفة حجّ النبي صلى الله عليه وسلم-: (..ثم خرج من الباب إلى الصفا، فلما دنا من الصفا قرأ: {إِنَّ الصَّفَا وَالْمَرْوَةَ مِن شَعَآئِرِ اللّهِ}  «أبدأ بما بدأ الله به» فبدأ بالصفا، فرقي عليه، حتى رأى البيت فاستقبل القبلة، فوحد الله وكبره، وقال: «لا إله إلا الله وحده لا شريك له، له الملك وله الحمد وهو على كل شيء قدير، لا إله إلا الله وحده، أنجز وعده، ونصر عبده، وهزم الأحزاب وحده» ثم دعا بين ذلك، قال: مثل هذا ثلاث مرات، ثم نزل إلى المروة، حتى إذا انصبت قدماه في بطن الوادي سعى، حتى إذا صعدتا مشى، حتى أتى المروة، ففعل على المروة كما فعل على الصفا).      ",
      list: [],
    },
    {
      title: "",
      imgSrc: "/sub/safa2.jpeg",
      subTitle: "",
      parag: "السعي سبعة أشواط، يبتدئ من الصفا وينتهي بالمروة، يعدّ الذهاب شوطًا والإياب شوطًا آخر.      ",
      list: [],
    },
    {
      title: "",
      imgSrc: "/sub/safa2.jpeg",
      subTitle: "",
      parag: "إذا وصل الساعي عند موضع الأنوار الخضراء فإنه يسعى سعيا شديدا بينهما في جميع الأشواط، وذلك للرجال دون النساء، فإذا تعدى الأنوار الخضراء فإنه يمشي مشيا معتادا.     ",
      list: [],
    },
    {
      title: "",
      imgSrc: "/sub/safa2.jpeg",
      subTitle: "",
      parag: "السعي يكون بعد الطواف ولا يتقدم عليه، إلا من نسي وابتدأ بالسعي قبل الطواف فإنه يجوز في حقه للعذر.      ",
      list: [],
    },
    {
      title: "",
      imgSrc: "/sub/safa2.jpeg",
      subTitle: "",
      parag: "لا تجب الموالاة بين الطواف والسعي، فيجوز أن يطوف في النهار ويؤخر السعي إلى الليل.      ",
      list: [],
    },
    {
      title: "",
      imgSrc: "/sub/safa2.jpeg",
      subTitle: "إذا تعب الشخص أثناء السعي فله أن يستريح حتى يزول عنه التعب ثم يكمل السعي من حيث توقف.      ",
      parag: "",
      list: [],
    },
    {
      title: "",
      imgSrc: "/sub/safa2.jpeg",
      subTitle: "",
      parag: "المفرد والقارن إذا سعيا مع طواف القدوم فإنه يكفي عن سعي الحج، وإذا لم يسعيا مع طواف القدوم فلابد أن يسعيا بعد طواف الإفاضة.",
      list: [],
    },
    {
      title: "",
      imgSrc: "/sub/safa2.jpeg",
      subTitle: "",
      parag: "ليس للسعي ذكر ولا دعاء خاص به، فيدعو بما شاء، أو ينشغل بالذكر وقراءة القرآن.      ",
      list: [],
    },
    {
      title: "",
      imgSrc: "/sub/safa2.jpeg",
      subTitle: "",
      parag: "إذا فرغ من السعي فإنه ينصرف، فليس بعد السعي دعاء معين ولا صلاة ركعتين بعده.  ",
      list: [],
    },
    {
      title: "",
      imgSrc: "/sub/safa2.jpeg",
      subTitle: "",
      parag: "إذا سعى الحاج وكان قد رمى جمرة العقبة فإنه يتحلل التحلل الكامل، فتباح له كل محظورات الإحرام.      ",
      list: [],
    },

 
    

   
  ],
  en: [
    {
      title: "",
      imgSrc: "/sub/safa.jpg",
      subTitle: "",
      parag: "Safa and Marwah are well-known mountains in Makkah, facing each other, between which the ritual of Sa'i (walking back and forth) is performed during Hajj and Umrah, starting from Safa and ending at Marwah.",
      list: [],
    },
    {
      title: "",
      imgSrc: "/sub/safa2.jpeg",
      subTitle: "",
      parag: "The distance between Safa and Marwah is approximately 400 meters.",
      list: [],
    },
    {
      title: "",
      imgSrc: "/sub/safa2.jpeg",
      subTitle: "",
      parag: "Safa and Marwah are among the symbols of Allah, landmarks that He has made significant for His servants.",
      list: [],
    },
    {
      title: "",
      imgSrc: "/sub/safa2.jpeg",
      subTitle: "",
      parag: "Sa'i between Safa and Marwah is obligatory in Hajj and Umrah.",
      list: [],
    },
    {
      title: "",
      imgSrc: "/sub/safa2.jpeg",
      subTitle: "",
      parag: "Sa'i is only valid for Hajj or Umrah purposes.",
      list: [],
    },
    {
      title: "",
      imgSrc: "/sub/safa2.jpeg",
      subTitle: "How to perform Sa’i?      ",
      parag: "",
      parag1:"Jabir (may Allah be pleased with him), in a narration describing the Prophet Muhammad's (peace be upon him) Hajj, said: Then he went out through the door to Safa. When he approached Safa, he recited: {'Indeed, As-Safa and Al-Marwah are among the symbols of Allah.'} [2:158] 'I start with what Allah started with.' So he started with Safa, climbed it until he could see the House, then faced the Qibla, glorified Allah, and said: 'There is no deity except Allah alone, without partner. To Him belongs sovereignty and to Him belongs praise, and He is over all things omnipotent. There is no deity except Allah alone; He fulfilled His promise, supported His servant, and alone defeated the confederates.' Then he prayed in between that, saying such words three times, then descended to Marwah. When his feet reached the bottom of the valley, he ran, and when he climbed, he walked until he reached Marwah, where he did as he had done at Safa. ",
      list: [],
    },
    {
      title: "",
      imgSrc: "/sub/safa2.jpeg",
      subTitle: "",
      parag: "Sa'i consists of seven circuits, starting from Safa and ending at Marwah, with going and returning each counting as a separate circuit.      ",
      list: [],
    },
    {
      title: "",
      imgSrc: "/sub/safa2.jpeg",
      subTitle: "",
      parag: "When the person performing Sa'i reaches the green lights, men are encouraged to run between them in all circuits, while women should not. Beyond the green lights, the person should resume walking at a normal pace.      ",
      list: [],
    },
    {
      title: "",
      imgSrc: "/sub/safa2.jpeg",
      subTitle: "",
      parag: "Sa'i is performed after Tawaf and should not precede it, except in the case of forgetting, where starting with Sa'i before Tawaf is permissible due to the forgiveness.      ",
      list: [],
    },
    {
      title: "",
      imgSrc: "/sub/safa2.jpeg",
      subTitle: "",
      parag: "Continuity between Tawaf and Sa'i is not obligatory, allowing for Tawaf during the day and delaying Sa'i until the night.      ",
      list: [],
    },
    {
      title: "",
      imgSrc: "/sub/safa2.jpeg",
      subTitle: "",
      parag: "If a person becomes tired during Sa'i, they are allowed to rest until the fatigue is relieved, then continue Sa'i from where they left off.      ",
      list: [],
    },
    {
      title: "",
      imgSrc: "/sub/safa2.jpeg",
      subTitle: "",
      parag: "For those performing Ifrad (Hajj only) or Qiran (Hajj and Umrah together) who perform Sa'i with the arrival Tawaf, it suffices for the Sa'i of Hajj. If they do not perform Sa'i with the arrival Tawaf, they must perform it after the Tawaf of Ifada.      ",
      list: [],
    },
    {
      title: "",
      imgSrc: "/sub/safa2.jpeg",
      subTitle: "",
      parag: "There is no specific supplication or prayer for Sa'i; one may supplicate as they wish or engage in remembrance and recitation of the Quran.      ",
      list: [],
    },
    {
      title: "",
      imgSrc: "/sub/safa2.jpeg",
      subTitle: "",
      parag: "After completing Sa'i, one may leave; there is no specified supplication or two units of prayer to be performed afterward.      ",
      list: [],
    },
    {
      title: "",
      imgSrc: "/sub/safa2.jpeg",
      subTitle: "",
      parag: "If a pilgrim performs Sa'i after throwing the pebbles “stones” at the Jamrah Al-Aqabah, they achieve full release from the restrictions of Ihram, making all that was previously forbidden permissible again.      ",
      list: [],
    },
    
      
  ],
};
