
import React, { useState } from 'react';
import { Heart } from 'lucide-react';

const ValentineCard = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mt-8 flex flex-col items-center">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="px-8 py-4 bg-valentine-500 text-white rounded-full hover:bg-valentine-600 transition-all duration-300 transform hover:scale-105 flex items-center gap-2 shadow-lg hover:shadow-xl font-semibold text-lg"
      >
        <Heart size={24} className="animate-heartbeat" fill="currentColor" />
        Open Valentine's Card
      </button>
      
      {isOpen && (
        <div className="mt-8 max-w-2xl mx-auto animate-fade-in w-full">
          <div className="relative bg-white p-8 rounded-lg shadow-xl border-4 border-valentine-200 mx-4">
            <div className="absolute -top-4 -left-4">
              <Heart fill="#FF6B81" size={32} />
            </div>
            <div className="absolute -top-4 -right-4">
              <Heart fill="#FF6B81" size={32} />
            </div>
            <div className="absolute -bottom-4 -left-4">
              <Heart fill="#FF6B81" size={32} />
            </div>
            <div className="absolute -bottom-4 -right-4">
              <Heart fill="#FF6B81" size={32} />
            </div>
            
            <div className="text-center space-y-4">
              <h3 className="text-2xl font-bold text-valentine-600 mb-4">My Dearest Valentine</h3>
              <p className="text-gray-700 leading-relaxed">
                From the moment I first saw you, my heart knew you were special. Every smile you share lights up my world, and every laugh we share becomes a precious memory I'll cherish forever. You make every day brighter just by being you.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Your kindness, your spirit, and your beautiful soul have captured my heart completely. I can't imagine my life without the joy and love you bring to it.
              </p>
              <p className="text-valentine-500 font-semibold mt-4">
                With all my love and affection ❤️
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ValentineCard;
