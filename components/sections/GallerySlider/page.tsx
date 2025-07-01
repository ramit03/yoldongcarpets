"use client";
import React, { useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import Image from "next/image";

import dynamic from "next/dynamic";
const LightBoxComponent = dynamic(() => import("@/components/ui/lightbox"), {
  ssr: false,
});

interface Carpet {
  description: string;
  src: string;
}

interface GallerySliderProps {
  items: Carpet[];
}

const GallerySlider: React.FC<GallerySliderProps> = ({ items }) => {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);
  return (
    <div>
      <Carousel opts={{ align: "start" }} className="w-full">
        <CarouselContent>
          {items.map((item, index) => (
            <CarouselItem key={index} className="basis-[80%] lg:basis-1/3">
              <div
                onClick={() => {
                  setIndex(index);
                  setOpen(true);
                }}
                className="relative cursor-pointer w-full aspect-square group rounded-lg overflow-hidden"
              >
                <Image
                  src={item.src}
                  alt={item.description}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105 pointer-events-none"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <LightBoxComponent
        open={open}
        close={() => {
          setOpen(false);
        }}
        slides={items}
        index={index}
        setIndex={setIndex}
      />
    </div>
  );
};

export default GallerySlider;
