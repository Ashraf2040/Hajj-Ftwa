"use client";

import { useRef, useState, useEffect } from "react";
import SubCardsNew from "./SubCardsNew";
import React, { createContext } from "react";
import MainCaresoul from "./MainCaresoul";

export default function MainComponent() {
  const [showDiv, setShowDiv] = useState(false);
  const [typeIndex, setTypeIndex] = useState("");
  const [refDiv, setRefDiv] = useState(null);

  const handleButtonClick = (id) => {
    setShowDiv(true);
    setTypeIndex(id);
    console.log(id);
  };

  console.log(typeIndex);
  const divRef = useRef(refDiv);
  console.log(divRef.current);

  useEffect(() => {
    if (divRef.current || routePath) {
      // Delay scrolling slightly for smoother animation
      setTimeout(() => {
        divRef.current.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  }, [divRef]);

  const routePath = localStorage.getItem("routepath");
  console.log(routePath);

  useEffect(() => {
    if (routePath) {
      setRefDiv("target");
      
      handleButtonClick(0)
    }
  },[])

  // useEffect(() => {
  //   if (routePath) {
  //     handleButtonClick(0)
  //   }
  // }, [routePath]);

  return (
    <div className=" relative w-screen h-screen">
      <MainCaresoul
        handleButtonClick={handleButtonClick}
        setShowDiv={setShowDiv}
        setTypeIndex={setTypeIndex}
      />

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
