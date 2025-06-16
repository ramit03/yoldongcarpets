"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";

// Carpet data
const carpets = [
  {
    title: "Sunset Weave",
    image: "/herorug.jpg",
    col: 2,
    row: 2,
  },
  {
    title: "Midnight Bloom",
    image: "/herorug.jpg",
    col: 1,
    row: 3,
  },
  {
    title: "Golden Trail",
    image: "/herorug.jpg",
    col: 1,
    row: 1,
  },
  {
    title: "Dusky Earth",
    image: "/herorug.jpg",
    col: 1,
    row: 1,
  },
];

// Utility: convert number span to static Tailwind class
const getColSpan = (col: number) =>
  ({
    1: "lg:col-span-1",
    2: "lg:col-span-2",
    3: "lg:col-span-3",
  }[col]);

const getRowSpan = (row: number) =>
  ({
    1: "lg:row-span-1",
    2: "lg:row-span-2",
    3: "lg:row-span-3",
  }[row]);

// Component
const FeaturedCarpets = () => {
  return (
    <section className="px-5 py-20 lg:px-20 lg:py-28 flex flex-col gap-8 lg:gap-12">
      <h1>Featured Carpets</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-[200px] gap-6 lg:gap-4">
        {carpets.slice(0, 5).map((carpet, index) => (
          <div
            key={index}
            className={clsx(
              "relative overflow-hidden rounded-lg col-span-1 row-span-1",
              getColSpan(carpet.col),
              getRowSpan(carpet.row)
            )}
          >
            <Image
              src={carpet.image}
              alt={carpet.title}
              fill
              className="object-cover transition duration-500 hover:scale-105"
            />
            <div className="absolute bottom-2 left-2 text-white bg-black/40 backdrop-blur-sm px-3 py-1 text-sm rounded-sm">
              {carpet.title}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10">
        <Link href="/explore">
          <Button size="lg" className="w-fit">
            Explore All
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default FeaturedCarpets;
