import { Button } from "@/components/ui/button";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative w-full h-[75svh] lg:h-[60svh] flex items-center justify-center text-center overflow-hidden">
      {/* Background with padding */}
      <div className="absolute inset-0 z-0 px-5 lg:px-20 h-full w-full">
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
        <h1 className="text-4xl text-white lg:text-6xl font-playfair font-bold mb-4">
          Yoldong Carpets
        </h1>
        <p className="max-w-xl mx-auto text-xl text-white mb-6">
          Woven in Nepal
        </p>
        <Button variant="default">View Collection</Button>
      </div>
    </section>
  );
};

export default Hero;
