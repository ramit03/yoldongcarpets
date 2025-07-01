import clsx from "clsx";
import Image from "next/image";
import React from "react";

const sections = [
  {
    title: "Who We Are",
    content:
      "Yoldong Carpets is a heritage brand rooted in the traditions of Tibetan and Indian weaving. For generations, we have preserved the craftsmanship of naturally dyed, handwoven carpets using age-old techniques passed down through families.",
    image: "/about.jpg",
    alt: "Artisan weaving carpet",
  },
  {
    title: "What We Do",
    content:
      "We specialize in crafting bespoke rugs that balance tradition with modern aesthetics. Each piece tells a story—woven with natural fibers, dyed using organic methods, and designed in collaboration with artisans and our clients.",
    image: "/about.jpg",
    alt: "Woven carpet patterns",
  },
  {
    title: "Our Manufacturing Process",
    content:
      "From spinning natural wool to hand-knotting and finishing, our process is slow, intentional, and sustainable. We work directly with local communities to ensure ethical production and lasting quality.",
    image: "/about.jpg",
    alt: "Carpet loom and tools",
  },
];

const About = () => {
  return (
    <main className="pt-32 pb-20 lg:pt-40 lg:pb-32 flex flex-col gap-32">
      {/* Intro */}
      <section className="px-5 lg:px-20 text-center max-w-3xl mx-auto flex flex-col gap-4">
        <h1 className="text-4xl font-playfair font-bold tracking-tight">
          Our Story, Woven in Every Thread
        </h1>
        <p className="text-muted-foreground text-lg">
          Rooted in heritage. Crafted with soul. Explore the journey of Yoldong
          Carpets.
        </p>
      </section>

      {/* Sections */}
      {sections.map((section, index) => (
        <section
          key={index}
          className={clsx(
            "px-5 lg:px-20 flex flex-col lg:flex-row items-center gap-10 relative",
            index % 2 === 1 ? "lg:flex-row-reverse" : ""
          )}
        >
          {/* Background blob / pattern */}
          <div
            className={clsx(
              "absolute inset-0 z-0 opacity-5 blur-3xl pointer-events-none",
              index % 2 === 0 ? "bg-orange-200" : "bg-indigo-200"
            )}
          />

          {/* Image block */}
          <div className="relative z-10 w-full lg:w-1/2 aspect-[4/3] rounded-2xl overflow-hidden shadow-md border border-muted/20">
            <Image
              src={section.image}
              alt={section.alt}
              fill
              className="object-cover transition duration-500 hover:scale-105"
            />
          </div>

          {/* Text block */}
          <div className="w-full lg:w-1/2 relative z-10 flex flex-col gap-4">
            <h2 className="text-3xl font-semibold tracking-tight font-playfair">
              {section.title}
            </h2>
            <p className="text-muted-foreground text-lg">{section.content}</p>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="px-5 lg:px-20 text-center flex flex-col items-center gap-6">
        <h2 className="text-3xl font-playfair font-semibold">
          Visit Our Studio
        </h2>
        <p className="text-muted-foreground max-w-xl">
          Experience the artistry in person. Our doors are always open to those
          curious about the craft.
        </p>
        <button className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition">
          Contact Us
        </button>
      </section>
    </main>
  );
};

export default About;
