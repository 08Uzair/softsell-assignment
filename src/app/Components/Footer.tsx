"use client";
import Lottie from "react-lottie-player";
import robot from "../../../public/assets/Images/robot.json";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import logo from "../../../public/assets/logo.png";
type Props = {};

const Footer = (props: Props) => {
  return (
    <footer>
      <div className="py-10 my-28  items-center bg-tc-tertiary rounded-[18px] relative hidden lg:flex">
        {/* Left Section: Lottie Animation */}
        <div className="w-full ">
          <Lottie
            loop
            animationData={robot}
            play
            style={{ width: 500, height: 500 }}
            className=" absolute top-[-100px] left-10"
          />
        </div>

        {/* Right Section: Text and Button */}
        <div className="w-full flex flex-col justify-center gap-5 ">
          <Link
            href="/contact-us"
            className="text-[50px] font-bold text-tc-secondary"
          >
            <span className="text-tc-primary">Book a</span> CALL!!
          </Link>
          <p className="text-[#8B8B8B] text-[20px] mr-0 md:mr-10 top-[-10px] relative">
            Personalized advice, tailored solutions, expert insights, and
            efficient communication for your needs. Book a call now!
          </p>
          <Link
            href="/contact-us"
            className="text-tc-primary bg-tc-dark rounded-[24px] py-3 px-8 text-[20px] max-w-[180px]"
          >
            Book a Call
          </Link>
        </div>
      </div>
      <div className="py-10 my-28  items-center bg-tc-tertiary rounded-[18px]  flex lg:hidden flex-col">
        {/* Left Section: Lottie Animation */}
        <div className="w-full flex justify-center items-center">
          <Lottie
            loop
            animationData={robot}
            play
            style={{ width: 200, height: 200 }}
          />
        </div>

        {/* Right Section: Text and Button */}
        <div className="w-full flex flex-col justify-center gap-6 items-center text-center ">
          <Link
            href="/contact-us"
            className="text-[35px] lg:text-[50px] font-bold text-tc-tertiary dark:text-tc-secondary"
          >
            <span className="text-tc-primary">Book a</span> CALL!!
          </Link>
          <p className="text-[#8B8B8B] text-[20px] ">
            Personalized advice, tailored solutions, expert insights, and
            efficient communication for your needs. Book a call now!
          </p>
          <Link
            href="/contact-us"
            className="text-tc-primary bg-tc-dark rounded-[24px] py-3 px-8 text-[20px] max-w-[180px]"
          >
            Book a Call
          </Link>
        </div>
      </div>
      <div className="py-10  flex flex-col md:flex-row justify-between items-center text-center md:text-left relative">
        <Link
          href="/"
          className="flex flex-row justify-center items-center gap-[20px]"
        >
          <Image src={logo} width={50} height={50} alt="logo" />
          <p className="block mt-1 font-valorant text-[27px] font-normal leading-[0.72px] text-tc-tertiary dark:text-[#fff]">
            SOFTSELL
          </p>
        </Link>

        <div className="flex items-end justify-center  gap-4 md:gap-6 text-sm">
          <Link
            href="/terms-conditions"
            className="text-[#8B8B8B] hover:text-tc-dark dark:hover:text-tc-light font-valorant"
          >
            TERMS & CONDITION
          </Link>
          <Link
            href="/privacy-policy"
            className="text-[#8B8B8B] hover:text-tc-dark dark:hover:text-tc-light font-valorant"
          >
            PRIVACY POLICY
          </Link>
          <Link
            href="/contact-us"
            className="text-[#8B8B8B] hover:text-tc-dark dark:hover:text-tc-light font-valorant"
          >
            CONTACT US
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
