import Image from "next/image";
import React from "react";
import { Icon } from "@iconify/react";
import { SocialIcon } from "react-social-icons";
const Footer = () => {
  return (
    <footer className=" px-5 py-8 lg:py-16 lg:px-20  bg-white">
      <div className="flex gap-7 flex-col lg:flex-row items-center justify-center">
        <div className="flex flex-col items-center gap-3 lg:gap-8">
          <h1 className="text-[28px] lg:text-[50px] font-playfair text-black">
            Yoldong Carpets
          </h1>
          <div className="flex flex-col justify-center lg:flex-row gap-3 px-4">
            <div className="flex flex-row gap-2 items-center">
              <Icon icon="ic:outline-email" fontSize={22} />
              <p className="text-xl">sonam@yoldongcarpets.com</p>
            </div>
            <div className="flex flex-row gap-2 items-center">
              <Icon icon="ic:baseline-phone" fontSize={22} />
              <p className="text-xl">1234567890</p>
            </div>
          </div>
          <div className="flex flex-row items-center justify-center gap-1">
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
