"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Icon } from "@iconify/react";
import { usePathname } from "next/navigation";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import ContactForm from "../ContactForm/page";
const Header = () => {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [open, setOpen] = useState(false);

  const handleClose = () => setOpen(false);

  const [scrolled, setScrolled] = useState(!isHome);

  useEffect(() => {
    if (!isHome) {
      setScrolled(true);
      return;
    }

    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    // Reset and listen for scroll only on homepage
    setScrolled(false);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHome]); // Re-run when route changes

  return (
    <header
      className={`fixed z-50 top-0 w-full px-5 lg:px-20 py-5 flex flex-row justify-between items-center transition-colors duration-500 ${
        scrolled ? "bg-white shadow-sm" : "bg-transparent"
      }`}
    >
      <Link href={"/"}>
        {" "}
        <Image
          src={scrolled ? "/logonobg.png" : "/logowhite.png"}
          alt="Logo"
          width={120}
          height={100}
          className="object-cover"
        />
      </Link>

      <div className="hidden text-lg font-medium lg:flex flex-row gap-8">
        <Link
          className={`${scrolled ? "text-beige-dark" : "text-white"}`}
          href="/gallery"
        >
          Gallery
        </Link>
        <Link
          className={`${scrolled ? "text-beige-dark" : "text-white"}`}
          href="/about"
        >
          About
        </Link>
        <Link
          className={`${scrolled ? "text-beige-dark" : "text-white"}`}
          href="/contact"
        >
          Contact
        </Link>
      </div>
      <Dialog>
        <DialogTrigger asChild>
          <Button size="lg" className="mt-4 w-auto hidden lg:block">
            Enquire
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Make an Enquiry</DialogTitle>
            <DialogDescription>
              Fill out the form below for any queries, custom orders, or
              assistance. Our team will respond as soon as possible.
            </DialogDescription>
          </DialogHeader>
          <ContactForm />
        </DialogContent>
      </Dialog>

      <div className="lg:hidden">
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <button>
              <Icon
                icon="mdi:menu"
                className={`${scrolled ? "text-black" : "text-white"}`}
                width="28"
                height="28"
              />
            </button>
          </SheetTrigger>
          <SheetContent side="right" className="w-full">
            <nav className="flex  flex-col gap-6 mt-10 px-5 pt-20 items-center">
              <Link
                href="/gallery"
                onClick={handleClose}
                className="text-beige-dark"
              >
                Gallery
              </Link>
              <Link
                href="/about"
                onClick={handleClose}
                className="text-beige-dark"
              >
                About
              </Link>
              <Link
                href="/contact"
                onClick={handleClose}
                className="text-beige-dark"
              >
                Contact
              </Link>
              <Dialog>
                <DialogTrigger asChild>
                  <Button size="lg" className="mt-4 w-full">
                    Enquire
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Make an Enquiry</DialogTitle>
                    <DialogDescription>
                      Fill out the form below for any queries, custom orders, or
                      assistance. Our team will respond as soon as possible.
                    </DialogDescription>
                  </DialogHeader>
                  <ContactForm />
                </DialogContent>
              </Dialog>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Header;
