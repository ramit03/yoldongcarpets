import { Button } from "@/components/ui/button";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative w-ful h-[100dvh] flex items-center justify-center text-center overflow-hidden">
      {/* Background with padding */}
      <div className="absolute inset-0 z-0 h-full w-full">
        <div className="relative h-full w-full rounded-b-lg overflow-hidden">
          <div className="absolute inset-0 bg-black/25 z-10" />
          <Image
            src="/hero.jpg"
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
          Woven in Nepal
        </p>
      </div>
    </section>
  );
};

export default Hero;
