"use client";

import { NavigationData } from "../Data/Data";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState, useRef } from "react";
import ThemeButton from "./ThemeButton";
import Image from "next/image";
import logo from "../../../public/assets/logo.png";
import logod from "../../../public/assets/logo-d.png";
type NavbarProps = {
  className?: string;
};

const Header = ({ className }: NavbarProps) => {
  const [selected, setSelected] = useState<string | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  // Ref to track the header and menu
  const menuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (pathname) {
      setSelected(pathname);
    }
  }, [pathname]);

  const handleMenuToggle = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const handleLinkClick = (link: string) => {
    if (pathname !== link) {
      router.push(link);
    }
    setIsMenuOpen(false);
  };

  // Close the menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
        console.log("Clicked outside");
      }
    };

    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <>
      <header
        className="pr-[80px]  md:pr-0  w-full flex justify-between items-center py-5 bg-tc-light dark:bg-tc-dark lg:dark:bg-transparent lg:bg-transparent fixed md:relative z-40"
        ref={menuRef}
      >
        <div className="flex items-center ">
          <Link
            href="/"
            aria-label="Home"
            className="flex items-center gap-[19px] self-center text-center"
          >
            <Image src={logo} width={50} height={50} alt="logo" />
            <h2 className="text-[#000] dark:text-[#fff] font-valorant font-normal text-[24px] hidden lg:block justify-center py-1 tracking-[0.72px] leading-normal text-center">
              SOFTSELL
            </h2>
            {/* <svg
              className="block lg:hidden"
              width="35"
              height="35"
              viewBox="0 0 27 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M22.9113 25.5471L20.0947 30H14.1981C12.6049 29.9899 11.1408 29.7746 9.84904 29.3617C6.9615 28.4397 4.76798 26.4843 3.67629 23.8577C2.91895 22.039 2.73151 20.0329 3.11905 17.9002C3.4078 16.3095 3.95238 15.0405 4.25887 14.4098L4.40071 14.1109L6.55876 10.6307H0.5L2.92655 6.73506H8.97265L13.1469 0H18.4129L15.6393 4.45036H15.6241L14.2107 6.73252L12.7594 9.07548L11.7918 10.6307H11.7969L8.31409 16.2462L8.26849 16.3425C8.10132 16.6844 7.70365 17.5735 7.50101 18.693C7.27052 19.9696 7.36677 21.1322 7.78977 22.1479C8.2001 23.1358 9.12715 24.4554 11.2067 25.119C12.0704 25.3951 13.0861 25.5395 14.231 25.5471H22.9113Z"
                fill="#CBFB45"
              />
              <path
                d="M26.48 6.67676V6.76034L24.0813 10.6307H19.5474L17.3159 14.2325L14.3042 19.0906H20.325L22.9466 23.3206H14.2434C13.2784 23.313 12.5008 23.1965 11.8827 22.9989C9.61829 22.2771 9.43846 20.4787 9.68922 19.0906C9.85132 18.2041 10.1857 17.4848 10.2693 17.3176C10.2693 17.3176 10.2693 17.3151 10.2718 17.3151L14.4157 10.6307L14.75 10.0911L16.8295 6.73248L16.865 6.67676H26.48Z"
                fill="#CBFB45"
              />
            </svg> */}
          </Link>
        </div>

        <div className="flex items-center">
          <div className="themeBtn hidden lg:block">
            <ThemeButton />
          </div>
          <div className=" themeBtn flex lg:hidden items-center gap-5">
            <ThemeButton />
            <button
              onClick={handleMenuToggle}
              className="text-black rounded-[30px] bg-tc-primary px-5 py-[10px] text-[16px] font-bold menuBtn"
            >
              {isMenuOpen ? "Close" : "Menu"}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Blur overlay */}
            <motion.div
              className="fixed inset-0 bg-[#f8f9fa00] dark:bg-[#17171700] bg-opacity-80 backdrop-blur-md z-40  top-[5.2rem]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            />

            {/* Mobile Menu */}
            <motion.div
              className="fixed top-[5.65rem] right-0 w-[80%] h-[calc(100%-5.65rem)] bg-tc-primary z-50 px-5 flex justify-between items-center gap-20 flex-col rounded-l-[30px] lg:hidden"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 100 }}
            >
              {/* Menu Content */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, staggerChildren: 2 }}
              >
                <Link href="/" className="flex items-center mt-10">
                  <Image src={logod} width={50} height={50} alt="logo" />
                </Link>
              </motion.div>

              {/* Book a Call Button */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, staggerChildren: 2 }}
                className="mb-10 md:mb-20"
              >
                <Link
                  href="/"
                  className="text-tc-dark border-2 border-black hover:bg-tc-tertiary hover:text-tc-secondary rounded-[24px] py-2 px-7 text-[20px] ml-4 transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
                >
                  Book a Call
                </Link>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
