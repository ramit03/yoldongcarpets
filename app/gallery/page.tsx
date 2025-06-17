import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import React from "react";
import Image from "next/image";
import GallerySlider from "@/components/sections/GallerySlider/page";
const tibetanCarpets = [
  {
    title: "Sunset Weave",
    description: "A vibrant blend of colors inspired by the sunset.",
    src: "/herorug.jpg",
    alt: "Sunset",
  },
  {
    title: "Mountain Mist",
    description: "Cool tones evoking the serenity of Himalayan peaks.",
    src: "/herorug.jpg",
    alt: "Mountain Mist",
  },
  {
    title: "Golden Horizon",
    description: "Warm earth tones with fine traditional motifs.",
    src: "/herorug.jpg",
    alt: "Golden Horizon",
  },
];

const indianCarpets = [
  {
    title: "Desert Bloom",
    description: "A blooming design rooted in Rajasthani heritage.",
    src: "/herorug.jpg",
    alt: "Desert Bloom",
  },
  {
    title: "Monsoon Lotus",
    description: "Water-inspired patterns with natural blue dyes.",
    src: "/herorug.jpg",
    alt: "Monsoon Lotus",
  },
  {
    title: "Saffron Dreams",
    description: "Rich reds and golds inspired by Indian spices.",
    src: "/herorug.jpg",
    alt: "Saffron Dreams",
  },
];

const Gallery = () => {
  return (
    <main className="px-5 lg:px-20 lg:pt-40 lg:pb-28 flex flex-col gap-16">
      {/* Tibetan Carpets Section */}

      <section className="text-center max-w-3xl mx-auto flex flex-col gap-4">
        <h1>Our Collection</h1>
        <p>
          Discover handcrafted excellence through our diverse range of
          traditional Tibetan and Indian carpets. Each piece reflects
          generations of artistry and natural dye processes rooted in cultural
          heritage.
        </p>
      </section>

      <section className="flex flex-col gap-6">
        <h1>Tibetan Carpets</h1>
        <GallerySlider items={tibetanCarpets} />
      </section>

      {/* Indian Carpets Section */}
      <section className="flex flex-col gap-6">
        <h1>Indian Carpets</h1>
        <GallerySlider items={indianCarpets} />
      </section>
    </main>
  );
};

export default Gallery;
