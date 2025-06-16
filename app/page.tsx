import About from "@/components/sections/About/page";
import Contact from "@/components/sections/Contact/page";
import FeaturedCarpets from "@/components/sections/FeaturedCarpets/page";
import Hero from "@/components/sections/Hero/page";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <Hero />
      {/* Gallery Teaser */}
      <FeaturedCarpets />
      <About />
      <Contact />
    </main>
  );
}
