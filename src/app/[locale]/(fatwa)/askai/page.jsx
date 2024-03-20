"use client";
import React from 'react'

import { Message, experimental_useAssistant as useAssistant } from "ai/react";
import { useEffect, useRef, useState } from "react";
import styles from "./loader.module.css";

import Link from "next/link";
import QuestionCard from "./QuestionCard";
import Image from "next/image";

const AskAi = () => {
  const { status, messages, submitMessage, input, handleInputChange, error } =
    useAssistant({
      api: "/locale/api/assistant",
    });





  const [enabled, setEnabled] = useState(false);
 
  const [userInput, setUserInput] = useState("");

  
  const [answerBox, setAnswerBox] = useState(false);
 



 
 




  // When status changes to accepting messages, focus the input:
  const inputRef = useRef(null);
  useEffect(() => {
    if (status === "awaiting_message") {
      inputRef.current?.focus();
    }
  }, [status]);

  const handleSerchClick = () => {
    setEnabled(!enabled);
  };
  

  

 

  const hanleCloseClick = () => {
    setAnswerBox(false);
   
  };



  return (
    <div className=" flex flex-col w-full  items-center  py-4   ">
      <div className="navigate flex items-center gap-2 my-2">
        <button
          className="bg-black px-4 rounded-lg font-semibold text-white py-2 "
          onClick={handleSerchClick}
        >
          Ask Ai
        </button>
       
      </div>

      <div className="  w-[90%]  my-4 flex flex-col  ">
        <div>
          {messages.map((m) => (
            <div key={m.id} className=" py-8 bg-gray-100 rounded-lg  relative ">
              <>
                <div className="flex gap-2 items-center  mb-10      ">
                  <span className="text-3xl flex ">
                    {m.role === "user" && (
                      <div className="absolute right-10  sm:right-0 flex items-center h-fit mb-4 ">
                        <span
                          className="bg-[#CDE4D6]  rounded-l-lg rounded-tr-xl
                         text-[18px] font-semibold px-8 py-0.5"
                        >
                          {m.content}
                        </span>
                        🤵
                      </div>
                    )}
                  </span>
                </div>
                <div>
                  <div className="flex items-center  justify-start mt-16   w-fit sm:mt-8   ">
                    <div className="flex items-center  relative ">
                      {status === "in_progress" ? (
                        <Image
                          src="/Ai.png"
                          alt=""
                          width={40}
                          height={40}
                          className="max-h-10 max-w-10"
                        />
                      ) : (
                        ""
                      )}
                      {status === "in_progress" ? (
                        <span
                          className={`${styles.loader} absolute left-3 bottom-0`}
                        ></span>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                  {m.role === "assistant" && (
                    <p
                      style={{ direction: "rtl" }}
                      className="whitespace-pre-wrap ml-8 w-4/5 bg-white self-center  p-10"
                    >
                      {m.content}
                    </p>
                  )}
                </div>
              </>
            </div>
          ))}
        </div>
      </div>
      <form
        onSubmit={submitMessage}
        className={` items-center justify-center  w-full lg:w-2/5 ${
          !enabled ? "hidden" : "flex"
        } `}
      >
        <input
          ref={inputRef}
          disabled={status !== "awaiting_message"}
          className="  p-4  border border-gray-300 bg-white  rounded shadow-xl w-4/5"
          value={ input}
          placeholder="Type your question..."
          type="text"
          onChange={handleInputChange }
         

          // onKeyDown={handleKeyDown}
        />
        <button className="p-4 bg-black rounded-r-lg -ml-2 font-bold text-white px-4 ">
          Ask
        </button>
      </form>
     
    </div>
  );
};

export default AskAi;

