"use client";
import { ReactTyped } from "react-typed";

import { useEffect, useRef, useState } from "react";
import styles from "./loader.module.css";
import PredefinedQuestions from "./PrefefinedQuestions";
import Image from "next/image";
import { useLocale } from "next-intl";
import Link from "next/link";

const Home = () => {
  const askedQuestions1 = [
    "ماهي مناسك الحج؟",
    "ماهي مناسك العمرة؟",
    "ماهو ميقات اهل المدينة؟",
    "ماهي شروط حج التمتع ؟",
    "كيفية لبس الاحرام ؟",
    "مالفرق بين التحلل الاكبر والاصغر؟",
  ];
  const askedQuestions2 = [
    "ماهي مناسك الحج1؟",
    "ماهي مناسك العمرة1؟",
    "ماهو ميقات اهل المدينة1؟",
    "ماهي شروط حج التمتع1 ؟",
    "كيفية لبس الاحرام1 ؟",
    "مالفرق بين التحلل الاكبر والاصغر1؟",
  ];
  const newArray = askedQuestions1.concat(askedQuestions2);

  const [merged, setMerged] = useState(true);
  const [enabled, setEnabled] = useState(false);
  const [suggesstions, setSuggestions] = useState([]);
  const [userInput, setUserInput] = useState("");
  const [suggestionLinks, setSuggestionLinks] = useState(true);
  const [answer, setAnswer] = useState("");
  const [answerBox, setAnswerBox] = useState(false);
  const [predefinedQuestions, setPredefinedQuestions] = useState([]);

  const getQuestions = async () => {
    await fetch("api/questins")
      .then((res) => res.json())
      .then((data) => setPredefinedQuestions(data));
  };

  useEffect(() => {
    getQuestions();
  }, []);

  // const predefinedQuestions = [
  //   {
  //     question: "What is the difference between Hajj and Umrah?",
  //     answer:
  //       "Hajj is a mandatory pilgrimage for Muslims who are able-bodied and financially able, performed once in a lifetime. It involves a set of rituals performed at specific times and locations in Mecca and its surroundings. Umrah, on the other hand, is a non-obligatory pilgrimage that can be performed anytime throughout the year. While similar in some rituals, it is shorter and less extensive than Hajj.",
  //   },
  //   {
  //     question: "What are the pillars of Hajj?",
  //     answer:
  //       "The five pillars of Hajj are: 1. Ihram (entering the state of consecration), 2. Tawaf (circumambulation of the Kaaba), 3. Sa'i (walking seven times between the hills of Safa and Marwa), 4. Wuquf (standing in prayer at Arafat), and 5. Throwing stones at the Jamarat.",
  //   },
  //   {
  //     question: "What are the requirements for performing Hajj?",
  //     answer:
  //       "The requirements for performing Hajj include being a Muslim, reaching the age of puberty, being in good physical and financial health, and having the ability to travel safely to Mecca.",
  //   },
  //   {
  //     question: "What are the benefits of performing Hajj?",
  //     answer:
  //       "Hajj is believed to be a way to cleanse oneself of sins, strengthen faith, and promote unity among Muslims. It is also seen as an opportunity to connect with the history and tradition of Islam.",
  //   },
  //   {
  //     question: "What are the rituals of Umrah?",
  //     answer:
  //       "Umrah involves similar rituals to Hajj, including Ihram, Tawaf, Sa'i, and shaving or trimming one's hair. However, it does not include the standing in Arafat or throwing stones at the Jamarat.",
  //   },
  //   {
  //     question: "What are the benefits of performing Umrah?",
  //     answer:
  //       "Performing Umrah is believed to bring spiritual rewards and forgiveness of sins. It also allows Muslims to experience the sacred city of Mecca and its significance in Islam.",
  //   },
  //   // Additional questions
  //   {
  //     question: "What is the significance of the Kaaba in Hajj and Umrah?",
  //     answer:
  //       "The Kaaba is considered the holiest site in Islam and is believed to have been built by Abraham and his son Ishmael. Circumambulating the Kaaba (Tawaf) is a central ritual in both Hajj and Umrah.",
  //   },
  //   {
  //     question: "What is the purpose of wearing Ihram during Hajj and Umrah?",
  //     answer:
  //       "Ihram is a state of consecration that signifies devotion to Allah and detachment from worldly matters. It requires wearing simple white garments and abstaining from certain activities like sexual intimacy, hunting, and using perfumes.",
  //   },
  //   {
  //     question:
  //       "What is the significance of Sa'i between Safa and Marwa hills?",
  //     answer:
  //       "Sa'i commemorates the efforts of Hagar, wife of Abraham, searching for water for her son Ishmael. It signifies perseverance, trust in Allah, and seeking His mercy.",
  //   },
  //   {
  //     question: "ماهي مناسك الحج?",
  //     answer: "هناك العديد من المناسك",
  //   },
  //   {
  //     question: "What is the meaning of standing in Arafat during Hajj?",
  //     answer:
  //       "Standing in Arafat is a central pillar of Hajj and a time for deep reflection, repentance, and supplication. It is considered a peak experience in Hajj, where Muslims seek forgiveness and draw closer to Allah.",
  //   },
  //   {
  //     question:
  //       "What is the symbolic meaning of throwing stones at the Jamarat during Hajj?",
  //     answer:
  //       "Throwing stones at the Jamarat represents the rejection of temptation and evil, symbolized by the story of Abraham rejecting the devil's attempts to dissuade him from sacrificing his son Ishmael.",
  //   },
  //   {
  //     question:
  //       "Who is responsible for making arrangements for Hajj and Umrah?",
  //     answer:
  //       "Individuals are ultimately responsible for making their own arrangements for Hajj and Umrah. However, there are travel agencies and organizations that specialize in assisting pilgrims with logistics, accommodations, and guidance.",
  //   },
  //   {
  //     question:
  //       "What are some of the challenges faced by pilgrims during Hajj and Umrah?",
  //     answer:
  //       "Challenges faced by pilgrims can include large crowds, hot weather, physical exertion, and ensuring proper planning and preparation. However, the spiritual significance and sense of community often outweigh these challenges.",
  //   },
  //   {
  //     question: "What is the difference between Hajj and Umrah attire?",
  //     answer:
  //       "While both Hajj and Umrah require wearing Ihram, there are slight differences for men. Men wear two unstit",
  //   },
  // ];

  const questionsToAsk = [];
  predefinedQuestions.forEach((element) => {
    questionsToAsk.push(element.question);
  });

  function filterSuggestions(input, allQuestions) {
    if (!allQuestions) {
      return [];
    }
    const regex = new RegExp(input, "gi");
    return allQuestions.filter((question) => regex.test(question));
  }

  useEffect(() => {
    const filtered = filterSuggestions(userInput, questionsToAsk);

    setSuggestions(filtered);
  }, [userInput]);

  // const [questionArray, setQuestionArray] = useState(askedQuestions1);

  // When status changes to accepting messages, focus the input:

  const handleSerchClick = () => {
    setEnabled(!enabled);
  };
  const handleClick = () => {
    if (merged) {
      setQuestionArray(newArray);
    } else {
      setQuestionArray(askedQuestions1);
    }
    setMerged(!merged);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const questionAnswer = predefinedQuestions.find(
      (question) => question.question === userInput
    );
    setAnswer(questionAnswer.answer);
    setAnswerBox(true);
    setSuggestions([]);
  };

  const handleKeyDown = (e) => {
    if (e.keyCode === 8) {
      const newInput = userInput.slice(0, -1);
      setUserInput(newInput);
      filterSuggestions(newInput);
    }
  };

  const hanleCloseClick = () => {
    setAnswerBox(false);
    setUserInput("");
    setSuggestionLinks(true);
  };

  const handleUserInputChange = (e) => {
    setUserInput(e.target.value);
  };

  const locale = useLocale();
  const url = `/${locale}/askai`;

  return (
    <>
      <div className=" flex flex-col w-full  items-center  py-4   ">
        <Link href="/" className="relative h-8 w-full  ">
          <button className="gap-2 absolute ml-2  left-0 font-semibold text-[#246499] flex items-center ">
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
            Home
          </button>
        </Link>
        <div className="navigate flex items-center  w-[90%] my-2">
          <form
            onSubmit={handleSubmit}
            className=" items-center justify-center  w-full lg:w-2/5 "
          >
            <input
              // disabled={status !== "awaiting_message"}
              className="  p-4  border border-gray-300 bg-white  rounded shadow-xl w-4/5"
              value={userInput}
              placeholder="Type your question..."
              type="text"
              onChange={handleUserInputChange}

              // onKeyDown={handleKeyDown}
            />
            <button className="py-4 bg-black rounded-r-lg  font-bold text-white px-2 -ml-2 ">
              Submit
            </button>
          </form>
        </div>

        <div className="w-full  my-4 flex items-center justify-center  ">
          {" "}
          {userInput && (
            <ul
              className={`${
                suggestionLinks
                  ? " mx-4   grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4   "
                  : "hidden"
              }`}
            >
              {suggesstions.length > 0 &&
                suggesstions.map((suggestion) => (
                  <li
                    key={suggestion}
                    onClick={() => {
                      setUserInput(suggestion);
                      setSuggestionLinks(false);
                    }}
                    className="border-2 text-center rounded-lg py-2 sm:text-sm leading-6 font-semibold text-md shadow-md px-2  cursor-pointer "
                  >
                    {suggestion}
                  </li>
                ))}
            </ul>
          )}
        </div>
        <div
          className={`answer w-4/5 rounded-lg relative bg-[#F0F4F9] p-8 mt-16 ${
            answerBox ? "block" : "hidden"
          }`}
        >
          <span
            className=" h-6 flex items-center justify-center w-6 absolute  text-black font-bold  right-1 top-1  bg-white    rounded-full cursor-pointer "
            onClick={hanleCloseClick}
          >
            x
          </span>
          <p className="bg-[#CDE4D6] w-fit  px-4 py-3 md:font-semibold right-2  mb-8 rounded-lg">
            <span className="md:text-2xl">🤵</span> {userInput}
          </p>
          <div className="bg-white rounded-lg sn:text-sm p-4 flex items-center gap-6">
            <ReactTyped strings={[answer]} typeSpeed={40} />
          </div>
        </div>
      </div>
      <PredefinedQuestions
        setUserInput={setUserInput}
        handleSubmit={handleSubmit}
        setSuggestions={setSuggestions}
        setSuggestionLinks={setSuggestionLinks}
      />
      <h2 className="my-12 w-full text-center text-md text-red-500 font-semibold">
        Cannot find your question?{" "}
        <Link href={url}>
          {" "}
          <button className="px-2 bg-black text-white rounded-md ml-1 py-0.5 border-2 border-white">
            Ask Ai
          </button>
        </Link>
      </h2>
    </>
  );
};

export default Home;
