import type { Metadata } from "next";
import { Poppins, Outfit, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/sections/Header/page";
import Footer from "@/components/sections/Footer/page";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["600", "700"],
});

// Load Outfit for body
const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const playfair = Playfair_Display({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Elegant Tibetan Carpets",
  description: "A showcase of handcrafted Tibetan carpets",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${playfair.variable} ${outfit.variable} antialiased bg-beige-light text-neutral-800`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
