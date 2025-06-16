"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Icon } from "@iconify/react";
const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed z-30 top-0 w-full px-5 lg:px-20 py-5 flex flex-row justify-between items-center transition-colors duration-500 ${
        scrolled ? "bg-white shadow-sm" : "bg-transparent"
      }`}
    >
      <Image
        src={"/logonobg.png"}
        alt="Logo"
        width={150}
        height={100}
        className="object-cover"
      />

      <div className="hidden lg:flex flex-row gap-8">
        <Link className="text-xl" href={"/"}>
          Explore
        </Link>
        <Link className="text-xl" href={"/"}>
          About
        </Link>
        <Link className="text-xl" href={"/"}>
          Contact
        </Link>
      </div>
      <Button className="hidden lg:flex" size={"lg"}>
        Enquire
      </Button>

      <div className="lg:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <button>
              <Icon icon="mdi:menu" width="28" height="28" />
            </button>
          </SheetTrigger>
          <SheetContent side="right" className="w-full">
            <nav className="flex flex-col gap-6 mt-10 px-5 pt-20 items-center">
              <Link href="/explore">Explore</Link>
              <Link href="/about">About</Link>
              <Link href="/contact">Contact</Link>
              <Button size="lg" className="mt-4 w-full">
                Enquire
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Header;
