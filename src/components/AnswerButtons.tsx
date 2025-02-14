
import React, { useState, useEffect, useRef } from 'react';
import confetti from 'canvas-confetti';

interface AnswerButtonsProps {
  onYesClick: () => void;
}

const AnswerButtons = ({ onYesClick }: AnswerButtonsProps) => {
  const [noButtonPosition, setNoButtonPosition] = useState({ x: 0, y: 0 });
  const noButtonRef = useRef<HTMLButtonElement>(null);

  const handleMouseOver = () => {
    if (noButtonRef.current) {
      const newX = Math.random() * (window.innerWidth - 100);
      const newY = Math.random() * (window.innerHeight - 50);
      setNoButtonPosition({ x: newX, y: newY });
    }
  };

  const handleYesClick = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#FFB3C1', '#FF8FA6', '#FF6B81']
    });
    onYesClick();
  };

  return (
    <div className="flex gap-4 items-center justify-center mt-8">
      <button
        onClick={handleYesClick}
        className="px-8 py-4 bg-valentine-500 text-white rounded-full hover:bg-valentine-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl font-semibold text-lg"
      >
        Yes
      </button>
      <button
        ref={noButtonRef}
        onMouseEnter={handleMouseOver}
        style={{
          position: 'absolute',
          left: `${noButtonPosition.x}px`,
          top: `${noButtonPosition.y}px`,
          transition: 'all 0.3s ease'
        }}
        className="px-8 py-4 bg-gray-200 text-gray-700 rounded-full hover:bg-gray-300 shadow-lg hover:shadow-xl font-semibold text-lg"
      >
        No
      </button>
    </div>
  );
};

export default AnswerButtons;
