import React from 'react';
import { typeIcons } from '@/utils/typeIcons'; 
import Image from 'next/image';
import { TypeIconProps } from './interface';

export function TypeIcon({ type, className, onClick }: TypeIconProps) {
  const iconSrc = typeIcons[type.toLowerCase()];
  
  if (!iconSrc) return null;

  return (
    <div 
      className={`flex flex-col items-center cursor-pointer ${className}`}
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          onClick?.();
        }
      }}
    >
      <Image 
        src={iconSrc} 
        alt={type} 
        width={48}
        height={48}
        className="w-12 h-12 md:w-14 md:h-14 hover:scale-110 transition-transform duration-200"
      />
    </div>
  );
};