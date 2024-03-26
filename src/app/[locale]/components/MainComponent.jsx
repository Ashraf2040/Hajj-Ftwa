"use client";

import { useRef, useState, useEffect } from "react";
import SubCardsNew from "./SubCardsNew";
import React, { createContext } from "react";
import MainCaresoul from "./MainCaresoul";

export default function MainComponent() {
  const [showDiv, setShowDiv] = useState(false);
  const [typeIndex, setTypeIndex] = useState("");

  const [showParent, setShowParent] = useState(true);
  const [isIntersecting, setIsIntersecting] = useState(false);

  const handleButtonClick = (id) => {
    setShowDiv(true);
    setTypeIndex(id);
  };

  const divRef = useRef(null);
  // const ref = useRef(null);

  const handleScroll = () => {
    if (divRef.current) {
      divRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    if (divRef.current) {
      setTimeout(() => {
        divRef.current.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  }, [divRef]);
  if (isIntersecting) {
    console.log("observed");
  }

  // const hash = window.location.hash;
  // console.log(hash);
  // const idReturned = Number(hash.charAt(hash.length - 1));
  // console.log(idReturned)
  // useEffect(() => {
  //   if (hash) {
  //     handleButtonClick(idReturned);
  //   }
  // });

  // const idReturned = localStorage.getItem("index");
  // useEffect(() => {
  //   if (idReturned) {
  //     handleButtonClick(idReturned);
  //     setTimeout(() => {
  //       divRef.current.scrollIntoView({ behavior: "smooth" });
  //     }, 100);
  //   }
  // });

  return (
    <div className=" relative w-screen h-screen">
      <div className={`h-full ${showParent ? "" : "hidden"}`}>
        <MainCaresoul
          handleButtonClick={handleButtonClick}
          setShowDiv={divRef.current}
          setTypeIndex={setTypeIndex}
        />
      </div>

      {showDiv && (
        <div
          ref={divRef}
          id="target"
          className=" p-0 id   bg-neutral-700 overflow-y-scroll"
        >
          <SubCardsNew typeIndex={typeIndex} />
        </div>
      )}
    </div>
  );
}
