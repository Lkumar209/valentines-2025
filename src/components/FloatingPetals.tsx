
import React, { useEffect, useState } from 'react';

const FloatingPetals = () => {
  const [petals, setPetals] = useState<Array<{ id: number; left: number; delay: number }>>([]);

  useEffect(() => {
    const createPetal = (id: number) => ({
      id,
      left: Math.random() * 100,
      delay: Math.random() * 5,
    });

    setPetals(Array.from({ length: 20 }, (_, i) => createPetal(i)));

    const interval = setInterval(() => {
      setPetals(prev => [...prev.slice(1), createPetal(prev[prev.length - 1].id + 1)]);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {petals.map(petal => (
        <div
          key={petal.id}
          className="floating-petal absolute"
          style={{
            left: `${petal.left}%`,
            animationDelay: `${petal.delay}s`,
          }}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-valentine-200"
          >
            <path
              d="M10 0C10 0 12.5 5 12.5 10C12.5 15 10 20 10 20C10 20 7.5 15 7.5 10C7.5 5 10 0 10 0Z"
              fill="currentColor"
            />
            <path
              d="M20 10C20 10 15 12.5 10 12.5C5 12.5 0 10 0 10C0 10 5 7.5 10 7.5C15 7.5 20 10 20 10Z"
              fill="currentColor"
            />
          </svg>
        </div>
      ))}
    </div>
  );
};

export default FloatingPetals;
