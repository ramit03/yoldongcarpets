import { Button } from "@/components/ui/button";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="w-full relative text-center flex flex-col items-center justify-center py-28 h-[75svh] lg:h-[60svh]">
      {/* Background image */}
      <div className="absolute inset-0 w-full z-0 h-full">
        <Image
          src="/hero.jpeg"
          alt="Hero Rug"
          fill
          className="object-cover object-right select-none pointer-events-none"
        />
      </div>

      {/* Content wrapper */}
      <div className="relative z-10">
        <h1 className="text-4xl lg:text-6xl font-bold mb-4">Yoldong Carpets</h1>
        <p className="max-w-xl mx-auto text-xl text-white mb-6">
          Timeless craftsmanship, naturally dyed, woven with tradition.
        </p>
        <Button variant="default">View Collection</Button>
      </div>
    </section>
  );
};

export default Hero;
