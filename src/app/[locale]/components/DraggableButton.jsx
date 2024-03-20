"use client";

import React, { useRef, useState } from "react";

const DraggableButton = () => {
  const buttonRef = useRef(null);
  const hiddenContentRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [initialY, setInitialY] = useState(0);

  const handleMouseDown = (event) => {
    setIsDragging(true);
    setInitialY(event.clientY);
  };

  const handleMouseMove = (event) => {
    if (isDragging) {
      const deltaY = event.clientY - initialY;

      // Update button position visually for feedback (optional)
      buttonRef.current.style.transform = `translateY(${deltaY}px)`;

      // Update hidden content position based on drag distance
      hiddenContentRef.current.style.top = `${deltaY}px`;
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    const hiddenContent = hiddenContentRef.current;

    // Adjust threshold (optional)
    if (Math.abs(parseInt(hiddenContent.style.top)) > 50) { // Get top value as integer

      // Reveal hidden content by removing the "hidden" class
      hiddenContent.classList.remove("hidden");
    } else {
      // Reset button position and hidden content state on short drag
      buttonRef.current.style.transform = "translateY(0px)";
      hiddenContent.style.top = "0px";
    }
  };

  return (
    <div className="container flex flex-col justify-center items-center">
      <button
        ref={buttonRef}
        className={`draggable-button px-4 py-2 rounded-md text-white font-bold cursor-grab ${
          isDragging ? "bg-blue-600 hover:bg-blue-700" : "bg-blue-500 hover:bg-blue-600"
        }`}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
      >
        Drag Me Down!
      </button>
      <div
        ref={hiddenContentRef}
        className="hidden-content hidden px-4 py-2 rounded-md bg-gray-100 text-gray-700"
      >
        <p>This is the additional content!</p>
      </div>
    </div>
  );
};

export default DraggableButton;

