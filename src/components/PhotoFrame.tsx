
import React from 'react';

interface PhotoFrameProps {
  src: string;
  alt: string;
  className?: string;
}

const PhotoFrame = ({ src, alt, className = "" }: PhotoFrameProps) => {
  return (
    <div className={`photo-frame relative overflow-hidden rounded-lg ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-r from-valentine-100/20 to-valentine-300/20" />
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover transform transition-transform duration-500"
      />
    </div>
  );
};

export default PhotoFrame;
