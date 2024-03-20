"use client";
import { useState, useTransition } from "react";
import TabButton from "./TabButton";
const QuestionMenu = ({setUserInput,handleSubmit,setSuggestionLinks}) => {
  const [tab, setTab] = useState("hajj");
  const [isPending, startTransition] = useTransition();
  const handleCick = () => {
    setUserInput("What is the difference between Hajj and Umrah?")

    setSuggestionLinks(false)
  }

  const TAB_DATA = [
    {
      title: "Al-Hajj",
      id: "hajj",
      content: (
        <ul className="list-disc pl-2">
          <li onClick={handleCick}>What is the difference between Hajj and Umrah?</li>
          {/* <li>React js</li>
          <li>Nextjs</li>
          <li>TypeScript</li>
          <li>Tailwindcss</li>
          <li>Nodejs</li> */}
        </ul>
      ),
    },
    {
      title: "Omrah",
      id: "omrah",
      content: (
        <ul className="list-disc pl-2">
          {/* <li>Faculty of Science</li>
          <li>Complete Mernstack track</li>
          <li>Udemy full Courses</li> */}
        </ul>
      ),
    },
    {
      title: "Ihram",
      id: "ihram",
      content: (
        <ul className="list-disc pl-2">
          {/* <li>ITI Certification</li>
          <li>Udemy and Udacity certification</li> */}
        </ul>
      ),
    },
  ];

  const handlTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };
  return (
    <section className="  " id="about">
      <div className=" gap-8 justify-center  px-4 items-center xl:gap-16 ">
        <div className=" md:mt-0  text-left flex flex-col h-full">
          <div className="flex  flex-row">
            <TabButton
              selectTab={() => handlTabChange("hajj")}
              active={tab === "hajj"}
            >
              {" "}
              Al-Hajj{" "}
            </TabButton>
            <TabButton
              selectTab={() => handlTabChange("omrah")}
              active={tab === "omrah"}
            >
              {" "}
              Al-Omrah{" "}
            </TabButton>
            <TabButton
              selectTab={() => handlTabChange("ihram")}
              active={tab === "ihram"}
            >
              {" "}
              Al-Ihram{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuestionMenu;
