import React from "react";
import Image from "next/image";
// const sections = [
//   {
//     title: "Who We Are",
//     content:
//       "Yoldong Carpets is a heritage brand rooted in the traditions of Tibetan and Indian weaving. For generations, we have preserved the craftsmanship of naturally dyed, handwoven carpets using age-old techniques passed down through families.",
//     image: "/about.jpg",
//     alt: "Artisan weaving carpet",
//   },
//   {
//     title: "What We Do",
//     content:
//       "We specialize in crafting bespoke rugs that balance tradition with modern aesthetics. Each piece tells a story—woven with natural fibers, dyed using organic methods, and designed in collaboration with artisans and our clients.",
//     image: "/about.jpg",
//     alt: "Woven carpet patterns",
//   },
//   {
//     title: "Our Manufacturing Process",
//     content:
//       "From spinning natural wool to hand-knotting and finishing, our process is slow, intentional, and sustainable. We work directly with local communities to ensure ethical production and lasting quality.",
//     image: "/about.jpg",
//     alt: "Carpet loom and tools",
//   },
// ];

const About = () => {
  return (
    <main className=" pb-20  lg:pb-32 flex flex-col gap-20">
      {/* Intro */}
      <section className="relative items-center pt-32 lg:pt-40 pb-16 lg:pb-24 w-full px-5 lg:px-20 text-center  mx-auto flex flex-col gap-6 ">
        <Image
          src="/about.jpg" // 🔥 Replace with your background image path
          alt="Background of craftsmen weaving carpet"
          fill
          priority
          className="object-cover"
        />
        {/* Optional dark overlay for better text contrast */}
        <div className="absolute inset-0 bg-black/30" />

        <h1 className="text-4xl font-playfair text-beige-light font-bold tracking-tight z-10">
          Our Story, Woven in Every Thread
        </h1>
        <p className="max-w-3xl text-base lg:text-lg z-10 text-white">
          Founded in 2000, our family-run business based in Kathmandu, Nepal
          specializes in the manufacturing and export of custom-ordered Tibetan
          hand-knotted carpets. With deep roots in the industry, built over
          years of experience even before we began our own venture, we carry
          forward a tradition of craftsmanship and quality. <br />
          <br /> Each rug we create is custom-made to reflect the evolving
          tastes and unique visions of our clients. In a world where design has
          become more personal and sophisticated, we take pride in blending
          timeless Tibetan techniques with modern sensibilities to craft rugs
          that are both meaningful and enduring.
          <br />
          <br /> We proudly export our rugs from Nepal to clients around the
          world, including countries like the United States and the United
          Kingdom.
        </p>
      </section>

      {/* Sections */}
      {/* {sections.map((section, index) => (
        <section
          key={index}
          className={clsx(
            "px-5 lg:px-20 flex flex-col lg:flex-row items-center gap-10 relative",
            index % 2 === 1 ? "lg:flex-row-reverse" : ""
          )}
        >
        
          <div
            className={clsx(
              "absolute inset-0 z-0 opacity-5 blur-3xl pointer-events-none",
              index % 2 === 0 ? "bg-orange-200" : "bg-indigo-200"
            )}
          />

         
          <div className="relative z-10 w-full lg:w-1/2 aspect-[4/3] rounded-2xl overflow-hidden shadow-md border border-muted/20">
            <Image
              src={section.image}
              alt={section.alt}
              fill
              className="object-cover transition duration-500 hover:scale-105"
            />
          </div>

        
          <div className="w-full lg:w-1/2 relative z-10 flex flex-col gap-4">
            <h2 className="text-3xl font-semibold tracking-tight font-playfair">
              {section.title}
            </h2>
            <p className="text-muted-foreground text-lg">{section.content}</p>
          </div>
        </section>
      ))} */}

      {/* CTA */}
      <section className="px-5 lg:px-20 text-center flex flex-col items-center gap-6">
        <h2 className="text-3xl font-playfair font-semibold">Get in Touch</h2>
        <p className=" max-w-xl">
          Have a question or need more information? Reach out to us and
          we&apos;ll be happy to assist you.
        </p>
        <button className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition">
          Contact Us
        </button>
      </section>
    </main>
  );
};

export default About;
