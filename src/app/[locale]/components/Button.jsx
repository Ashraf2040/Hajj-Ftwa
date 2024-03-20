
"use client";
import React, { useState } from 'react';
import './Button.css';
import { ChevronsDown } from 'lucide-react';

function AnimatedButton() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button 
      className={`animated-button  ${isHovered ? 'hovered' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
       <ChevronsDown
                    strokeWidth={4}
                    spacing={2}
                    className="text-red-900 border-2  h-10 animate-bounce  "
                    onClick={() => handleButtonClick(index)}
                    onTouchStart={() => handleButtonClick(index)}
                    
                  /> 
    </button>
  );
}

export default AnimatedButton;