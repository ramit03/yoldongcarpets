import React from "react";
import GallerySlider from "@/components/sections/GallerySlider/page";
import { sanityClient } from "@/lib/sanity";

type Carpet = {
  description: string;
  src: string;
  category?: string;
};

const tibetanQuery = `*[_type == "carpets"][0].carpet[category == "tibetan"]{
    "src": image.asset->url,
    "description" : desc,
   
  }`;

const customQuery = `*[_type == "carpets"][0].carpet[category == "custom"]{
    "src": image.asset->url,
    "description" : desc,

  }`;

const Gallery = async () => {
  const tibetanCarpets: Carpet[] = await sanityClient.fetch(tibetanQuery);
  const customCarpets: Carpet[] = await sanityClient.fetch(customQuery);
  return (
    <main className="px-5 pt-32 pb-20 lg:px-20 lg:pt-40 lg:pb-28 flex flex-col gap-16">
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

      {/* Custome Carpets Section */}
      <section className="flex flex-col gap-6">
        <h1>Made-to-Order Carpets</h1>
        <GallerySlider items={customCarpets} />
      </section>
    </main>
  );
};

export default Gallery;
