import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import Image from "next/image";
const Contact = () => {
  return (
    <section className="px-5 py-20 lg:px-20 lg:py-28 bg-gradient-to-b from-beige-soft to-beige-light">
      <div className=" mx-auto flex flex-col-reverse lg:flex-row items-center gap-10">
        {/* Text Side */}
        <div className="w-full lg:w-1/2 flex flex-col gap-4">
          <h2>Get in Touch</h2>
          <p>
            Whether you're looking for a custom piece or have a question about
            our collection — we're always happy to connect.
          </p>

          <div className="mt-4">
            <Link href="/contact">
              <Button variant="default">Contact Us</Button>
            </Link>
          </div>
        </div>

        {/* Image Side */}
        <div className="w-full lg:w-1/2 relative h-[300px] lg:h-[400px] rounded-lg overflow-hidden">
          <Image
            src="/herorug.jpg"
            alt="Contact Yoldong Carpets"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;
