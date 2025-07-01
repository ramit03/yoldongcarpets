import { Button } from "@/components/ui/button";
import Image from "next/image";
import { sanityClient } from "@/lib/sanity";
import { HeroImage } from "@/sanity/lib/types";

const query = `*[_type == 'heroImage'][0]{
"image":image.asset->url,
desc}`;

const Hero = async () => {
  const data: HeroImage = await sanityClient.fetch(query);
  console.log("Hero data:", data);
  return (
    <section className="relative w-ful h-[100dvh] flex items-center justify-center text-center overflow-hidden">
      {/* Background with padding */}
      <div className="absolute inset-0 z-0 h-full w-full">
        <div className="relative h-full w-full rounded-b-lg overflow-hidden">
          <div className="absolute inset-0 bg-black/25 z-10" />
          <Image
            src={data.image}
            alt="Hero Rug"
            fill
            className="object-cover w-full h-full"
          />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 px-5 lg:px-20">
        <h1 className="text-6xl text-white lg:text-7xl font-playfair font-semibold mb-4">
          Yoldong Carpet <br /> Industries
        </h1>
        <p className="max-w-xl mx-auto text-2xl lg:text-3xl text-white mb-6">
          {data.desc}
        </p>
      </div>
    </section>
  );
};

export default Hero;
