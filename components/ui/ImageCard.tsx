'use client';

import Image from 'next/image';
import React from 'react';

interface ImageCardProps {
  image: string;
  backgroundColor: string;
  className?: string;
  delay?: number;
  name?: string;
}

const fallbackImage = '/lovable-uploads/f6a07817-7562-49aa-ae0b-f00de4784ee9.png';

const ImageCard: React.FC<ImageCardProps> = ({ 
  image, 
  backgroundColor, 
  className = '', 
  delay = 0,
  name = 'Student' 
}) => {
  const [imgSrc, setImgSrc] = React.useState(image);

  return (
    <div 
      className={`image-card  rounded-xl overflow-hidden  ${className}`}
      style={{ 
        backgroundColor,
        animationDelay: `${delay}ms`,
      }}
    >
      <Image
        src={imgSrc}
        alt={name}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, 33vw"
        onError={() => setImgSrc(fallbackImage)}
      />
    </div>
  );
};

export default ImageCard;
