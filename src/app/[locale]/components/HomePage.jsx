"use client";
import { ReactTyped } from "react-typed";

import { useEffect,  useState } from "react";
import PredefinedQuestions from "./PrefefinedQuestions";
import { useLocale } from "next-intl";
import Link from "next/link";

const FatwaPage = () => {

 
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


  console.log(predefinedQuestions)

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

  


 

  const handleSubmit = (e) => {
    e.preventDefault();

    const questionAnswer = predefinedQuestions.find(
      (question) => question.question === userInput
    );
    setAnswer(questionAnswer.answer);
    setAnswerBox(true);
    setSuggestions([]);
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
    <div className=" ">
      <div className=" flex flex-col w-full   items-center  py-4   ">
        
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
    </div>
  );
};

export default FatwaPage;
