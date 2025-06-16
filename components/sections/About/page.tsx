import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <section className="px-6 lg:px-0 py-20 bg-gradient-to-b from-beige-light  to-beige-soft">
      <div className="max-w-5xl mx-auto flex flex-col lg:flex-row items-center gap-10">
        {/* Image Side */}
        <div className="w-full lg:w-1/2 relative h-[300px] lg:h-[400px] rounded-lg overflow-hidden">
          <Image
            src="/herorug.jpg"
            alt="About Yoldong Carpets"
            fill
            className="object-cover"
          />
        </div>

        {/* Text Side */}
        <div className="w-full lg:w-1/2 flex flex-col gap-4">
          <h2 className="text-3xl font-bold">Our Story</h2>
          <p className="text-base leading-relaxed">
            With generations of Tibetan craftsmanship woven into every fiber,
            Yoldong Carpets represents tradition, authenticity, and art.
            Discover how we preserve cultural heritage through each hand-knotted
            piece.
          </p>

          <div className="mt-4">
            <Link href="/about">
              <Button variant="default">About Us</Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
