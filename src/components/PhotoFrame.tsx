
import React from 'react';
import { Heart } from 'lucide-react';

interface PhotoFrameProps {
  src: string;
  alt: string;
  className?: string;
}

const PhotoFrame = ({ src, alt, className = "" }: PhotoFrameProps) => {
  return (
    <div className={`photo-frame relative overflow-hidden rounded-lg ${className}`}>
      <div className="absolute inset-0 border-8 border-valentine-200 rounded-lg z-10">
        <Heart className="absolute -top-3 -right-3 text-valentine-500" size={24} fill="currentColor" />
        <Heart className="absolute -top-3 -left-3 text-valentine-500" size={24} fill="currentColor" />
        <Heart className="absolute -bottom-3 -right-3 text-valentine-500" size={24} fill="currentColor" />
        <Heart className="absolute -bottom-3 -left-3 text-valentine-500" size={24} fill="currentColor" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-valentine-100/20 to-valentine-300/20" />
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-105"
      />
    </div>
  );
};

export default PhotoFrame;
