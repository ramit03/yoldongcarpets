import Image from "next/image";
import React from "react";
import { Icon } from "@iconify/react";
import { SocialIcon } from "react-social-icons";
const Footer = () => {
  return (
    <footer className=" px-5 py-16 lg:px-20 lg:py-28 bg-white">
      <div className="flex gap-7 flex-col lg:flex-row justify-between">
        <div className="flex flex-col gap-3 lg:gap-8">
          <Image
            src={"/logonobg.png"}
            alt="Logo"
            width={150}
            height={100}
            className="object-cover"
          />

          <div className="flex flex-col gap-3 px-4">
            <div className="flex flex-row gap-2 items-center">
              <Icon icon="ic:outline-email" fontSize={22} />
              <p className="text-xl">email@email.com</p>
            </div>
            <div className="flex flex-row gap-2 items-center">
              <Icon icon="ic:baseline-phone" fontSize={22} />
              <p className="text-xl">1234567890</p>
            </div>
          </div>
          <div className="flex flex-row gap-1">
            <SocialIcon
              network="instagram"
              url="https://instagram.com/yoldongcarpets"
              target="_blank"
              bgColor="white"
              fgColor="#000"
              borderRadius="0"
            />
            <SocialIcon
              network="facebook"
              url="https://facebook.com/yoldongcarpets"
              target="_blank"
              bgColor="white"
              fgColor="#000"
              borderRadius="0"
            />
          </div>
        </div>
        <div className="px-4 lg:px-0">
          <h4 className="mb-4">Quick Links</h4>
          <ul className="flex flex-col gap-2">
            <li className="text-lg hover:underline cursor-pointer">Home</li>
            <li className="text-lg hover:underline cursor-pointer">About Us</li>
            <li className="text-lg hover:underline cursor-pointer">Contact</li>
          </ul>
        </div>
      </div>
      <hr className="mt-4" />
      <div className="w-full justify-center items-center">
        <p className="text-center mt-4">
          &copy; {new Date().getFullYear()} Yoldong Carpets. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
