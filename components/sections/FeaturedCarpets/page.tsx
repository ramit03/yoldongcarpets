"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { useEffect, useMemo, useState } from "react";

import dynamic from "next/dynamic";
import { sanityClient } from "@/lib/sanity";
import {
  useQuery,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";

const LightBoxComponent = dynamic(() => import("@/components/ui/lightbox"), {
  ssr: false,
});

const queryClient = new QueryClient();

export interface Carpet {
  image: string;
  desc: string;
  category?: string;
  featured?: boolean;
}

const fetchFeaturedCarpets = async (): Promise<Carpet[]> => {
  const query = `*[_type == "carpets"][0].carpet[featured == true]{
    "image": image.asset->url,
    desc,
    category
  }`;
  return await sanityClient.fetch(query);
};

const FeaturedCarpets = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Featured />
    </QueryClientProvider>
  );
};

const Featured = () => {
  const { data, isLoading } = useQuery<Carpet[]>({
    queryKey: ["carpets"],
    queryFn: fetchFeaturedCarpets,
  });

  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const slides = useMemo(
    () =>
      (data ?? []).map((carpet) => ({
        src: carpet.image,

        description: carpet.desc,
      })),
    [data]
  );

  if (isLoading) return <p className="px-5 py-10">Loading...</p>;

  return (
    <section className="px-5 py-20 lg:px-20 lg:py-28 flex flex-col gap-8 lg:gap-12">
      <h1>Featured Carpets</h1>

      <div className="hidden lg:grid grid-cols-4 gap-6 lg:gap-4">
        {slides.map((carpet, index) => (
          <div
            key={index}
            onClick={() => {
              setIndex(index);
              setOpen(true);
            }}
            className={clsx(
              "relative overflow-hidden rounded-lg col-span-1 aspect-square row-span-1 cursor-pointer group"
            )}
          >
            <Image
              src={carpet.src}
              alt={carpet.description}
              fill
              className="object-cover transition duration-500 group-hover:scale-105 pointer-events-none"
            />
          </div>
        ))}
      </div>

      <Carousel opts={{ align: "start" }} className="lg:hidden">
        <CarouselContent className="flex -ml-2">
          {slides.map((carpet, index) => (
            <CarouselItem
              key={index}
              className="basis-full"
              onClick={() => {
                setIndex(index);
                setOpen(true);
              }}
            >
              <div className="relative w-full overflow-hidden rounded-lg aspect-square">
                <Image
                  src={carpet.src}
                  alt={carpet.description}
                  fill
                  className="object-cover transition duration-500 hover:scale-105 pointer-events-none"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      {mounted && (
        <LightBoxComponent
          open={open}
          close={() => setOpen(false)}
          slides={slides}
          index={index}
          setIndex={setIndex}
        />
      )}

      <div className="mt-10">
        <Link href="/gallery">
          <Button size="lg" className="w-fit">
            Explore All
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default FeaturedCarpets;
