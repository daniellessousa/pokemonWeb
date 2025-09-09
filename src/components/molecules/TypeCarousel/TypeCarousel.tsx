// components/molecules/TypeCarousel/TypeCarousel.tsx
'use client';
import React, { useState } from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { typeIcons } from '@/utils/typeIcons'; 
import { TypeIcon } from "@/components/atoms";
import './index.css';

interface TypeCarouselProps {
  onTypeSelect: (type: string) => void;
}

export default function TypeCarousel({ onTypeSelect }: TypeCarouselProps) {
  const types = Object.keys(typeIcons);
  const [activeIndex, setActiveIndex] = useState(0);

  const responsive = {
    0: { items: 3 },
    568: { items: 4 },
    768: { items: 10 },
  };

  const handleSlideChanged = (e: { item: number }) => {
    setActiveIndex(e.item);
  };

  const handleTypeClick = (type: string) => {
    onTypeSelect(type);
  };

  const items = types.map((type) => (
    <div key={type} className="px-2">
      <TypeIcon 
        type={type} 
        className={`mx-auto w-10`}
        onClick={() => handleTypeClick(type)}
      />
    </div>
  ));

  return (
    <div>
      <AliceCarousel
        mouseTracking
        items={items}
        responsive={responsive}
        controlsStrategy="alternate"
        disableButtonsControls
        disableDotsControls
        activeIndex={activeIndex}
        onSlideChanged={handleSlideChanged}
        autoPlay
        autoPlayInterval={1000}
        infinite
        animationDuration={500}
        animationType="fadeout"
      />
    </div>
  );
};