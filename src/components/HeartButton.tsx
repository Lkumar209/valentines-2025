
import React from 'react';
import { Heart } from 'lucide-react';

const HeartButton = () => {
  return (
    <div className="flex items-center justify-center">
      <Heart
        className="text-valentine-500 animate-heartbeat"
        size={48}
        fill="currentColor"
      />
    </div>
  );
};

export default HeartButton;
