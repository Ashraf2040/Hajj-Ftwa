"use client";
import React, { useRef, useState } from "react";

const DraggableIcon = () => {
  const containerRef = useRef(null);
  const iconRef = useRef(null);
  const contentRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [initialY, setInitialY] = useState(0);
  const [contentVisible, setContentVisible] = useState(false);

  const handleMouseDown = (event) => {
    event.preventDefault(); // Prevent default behavior
    setIsDragging(true);
    setInitialY(event.clientY);
  };

  const handleMouseMove = (event) => {
    if (isDragging) {
      const deltaY = event.clientY - initialY;

      // Clamp deltaY to prevent exceeding container height
      const clampedDeltaY = Math.min(deltaY, containerRef.current.clientHeight);

      // Update icon position visually (optional)
      iconRef.current.style.transform = `translateY(${clampedDeltaY}px)`;

      // Update content visibility based on drag threshold
      const threshold = containerRef.current.clientHeight / 2; // Adjust threshold as needed
      setContentVisible(clampedDeltaY >= threshold);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Handle dragend event to reset visibility on drag completion
  const handleDragEnd = () => {
    setIsDragging(false);
    // Reset content visibility here (if desired)
    // setContentVisible(false); // Uncomment this line to reset on drag completion
  };

  return (
    <div ref={containerRef} className="draggable-container h-screen flex flex-col items-center justify-center">
      <button
        ref={iconRef}
        className="draggable-icon focus:outline-none rounded-full p-4 bg-blue-500 text-white font-bold cursor-grab"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onTouchStart={handleMouseDown} // Handle touch events for mobile
        onTouchMove={handleMouseMove}
        onTouchEnd={handleMouseUp}
        onDragEnd={handleDragEnd} // Added dragend event handler
      >
        <svg // Your icon SVG here
          className="w-8 h-8"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M5 8a2 2 0 100-4l10 10a2 2 0 000 4L5 8z" />
        </svg>
      </button>
      <div
        ref={contentRef}
        className={`content absolute bottom-0 w-full px-4 py-8 rounded-md bg-gray-100 text-gray-700 transition duration-300 ease-in-out transform ${
          contentVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        This is the content that will be revealed! You can add more content here.
      </div>
    </div>
  );
};

export default DraggableIcon;
