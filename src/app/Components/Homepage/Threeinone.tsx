"use client";

import Link from "next/link";
import phoneimg1 from "../../../../public/assets/Images/phoneimg1.webp";
import phoneimg2 from "../../../../public/assets/Images/phoneimg2.webp";
import desk2 from "../../../../public/assets/Images/threein2.png";
import desk3 from "../../../../public/assets/Images/threein1.png";
import bgImg from "../../../../public/assets/Images/threein3.webp";
import {
  motion,
  useMotionValue,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import CustomButton from "@/components/custom/CustomButton";

const data = [
  {
    title: "Website Management",
    component: <WhatWeDo />,
  },
  {
    title: "Technical SEO",
    component: <Mission />,
  },
  {
    title: "Privacy & Security",
    component: <Vision />,
  },
];

const Threeinone = () => {
  const parentRef = useRef(null);

  return (
    <section className="h-full py-[60px] lg:py-[80px] lg:pb-[160px]   ">
      <div
        ref={parentRef}
        className="stack-cards js-stack-cards mx-auto max-w-[1440px] w-full flex items-center justify-center flex-col"
      >
        <div>
          <h2 className="text-tc-dark dark:text-tc-secondary  text-[28px] md:text-[40px] leading-[40px] mb-[20px] lg:text-[60px] lg:leading-[68px] font-semibold">
            How <span className="text-tc-primary">It Works</span>
          </h2>
          <p className="text-[18px] text-[#8B8B8B]">
            Introducing our **3-in-1 Product**: a **Mobile App**, **Desktop
            App**, and **Website**. Stay productive on the go, at your desk, or
            from any device with a seamless, unified experience across all
            platforms.
          </p>
        </div>
        {data.map((card: any, index: any) => (
          <Card
            content={card}
            length={data.length}
            parent={parentRef}
            index={index}
            key={`${card.title}${index}`}
          />
        ))}
      </div>
    </section>
  );
};

const Card = ({ content, index, parent, length }: any) => {
  const { title, component } = content;
  const cref = useRef(null);
  const marginY = useRef(24);
  const { scrollY } = useScroll({
    target: cref,
    offset: ["end end", "start start"],
  });
  const downsizer = useMotionValue(1);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const parentValues = parent.current.getBoundingClientRect();
    var cardTop = parseInt(
      getComputedStyle(parent.current.children[0]).getPropertyValue("top")
    );
    var cardHeight = parseInt(
      getComputedStyle(parent.current.children[0]).getPropertyValue("height")
    );
    var top = parentValues.top;
    var scrolling = cardTop - top - index * (cardHeight + marginY.current);
    var scaling = index == length - 2 ? 1 : cardHeight - scrolling * 0.007;

    downsizer.set(scaling <= 1 ? scaling : 1);
  });

  return (
    <motion.div
      className={` stack-cards_item js-stack-cards_item  mt-[30px] lg:mt-[140px] rounded-[30px] overflow-hidden drop-shadow-md w-full place-items-center`}
      style={{
        scale: downsizer,
        translateY: `${index * marginY.current}px`,
      }}
      ref={cref}
    >
      {component}
    </motion.div>
  );
};
export default Threeinone;

function WhatWeDo() {
  return (
    <motion.div
      className={`stack-card-shadow !w-[90%] h-[710px] lg:h-[480px] phoneimage_box justify-between layout3xl:p-12 flex-1 rounded-3xl flex md:rounded-input text-grey-500 bg-[#DFDFDF] dark:bg-tc-tertiary stack-cards__item js-stack-cards__item`}
    >
      <div className=" w-full  flex justify-center items-center relative">
        <div className="card1Cont w-full flex flex-col justify-center gap-6 items-center ">
          <Link
            href="/contact-us"
            className=" text-center text-[20px] lg:text-[30px] leading-[25px] lg:leading-[40px] font-semibold text-tc-dark dark:text-tc-secondary"
          >
            <span className="text-tc-primary ">Mobile Application </span>and
            <br /> mobile responsive
          </Link>
          <ul className="list-outside list-disc max-w-[450px] w-full">
            <li className="text-tc-dark dark:text-white text-[14px] my-2 leading-[26px]">
              <strong>Fast and Reliable - </strong>
              <span className="text-[#8B8B8B]">
                Your site will load quickly and work smoothly.
              </span>
            </li>
            <li className="text-tc-dark dark:text-white text-[14px] my-2 leading-[26px]">
              <strong>Built for Search Engines </strong>{" "}
              <span className="text-[#8B8B8B]">
                ( SEO Ready ) – We’ll help people find you on Google.
              </span>
            </li>

            <li className="text-tc-dark dark:text-white text-[14px] my-2 leading-[26px]">
              <strong>Eye-Catching Animations – </strong>
              <span className="text-[#8B8B8B]">
                Make a great first impression with engaging animations.
              </span>
            </li>
            <li className="text-tc-dark dark:text-white text-[14px] my-2 leading-[26px]">
              <strong>Dynamic Content – </strong>
              <span className="text-[#8B8B8B]">
                Easily update pages as your business grows
              </span>
              .
            </li>
            <li className="text-tc-dark dark:text-white text-[14px] my-2 leading-[26px]">
              <strong>Custom Design – </strong>
              <span className="text-[#8B8B8B]">
                A unique look tailored to your brand.
              </span>
            </li>
          </ul>
          <div className=" flex gap-3 justify-center items-center ">
            <CustomButton
              text1=" Book a Call"
              isImage={true}
              bgInvert="tc-dark"
            />
          </div>
        </div>
        <div className="stackImg1 absolute bottom-0 lg:left-5 lg:h-[70%]  h-[200px] w-[200px] lg:w-[270px]">
          <Image loading="eager" src={phoneimg1} alt="phone1"  className="treeImg"  />
        </div>
        <div className="stackImg2 absolute top-0  lg:h-[70%] lg:right-5  h-[200px] w-[200px] lg:w-[270px]">
          <Image loading="eager" src={phoneimg2} alt="phone1" className="treeImg"  />
        </div>
      </div>
    </motion.div>
  );
}
function Mission() {
  return (
    <motion.div
      className={`stack-card-shadow !w-[95%] h-[710px] lg:h-[479px] phoneimage_box justify-between layout3xl:p-12 flex-1 rounded-3xl flex md:rounded-input text-grey-500 bg-[#DFDFDF] dark:bg-tc-tertiary stack-cards__item js-stack-cards__item  `}
    >
      <div className=" w-full  flex lg:justify-center lg:items-center relative">
        <div className="stackbgCont w-full flex flex-col justify-center lg:px-[85px] items-start cardtxt">
          <Link
            href="/contact-us"
            className="  text-[20px] lg:text-[30px] leading-[25px] lg:leading-[40px] font-semibold text-tc-dark dark:text-tc-secondary"
          >
            <span className="stackbgCont1 sm-text-[10px] text-tc-primary lg:mt-[58px] ">
              Website{" "}
            </span>
            Design
            <br /> & Development
          </Link>
          <div className="lg:my-[30px] my-[10px]">
            <ul className="list-outside list-disc max-w-[450px] w-full">
              <li className="text-tc-dark dark:text-white text-[14px] my-2 leading-[26px]">
                <strong>Reach your audience </strong>
                <span className="text-[#8B8B8B]">
                  on the go with a single app for both iOS and Android.
                </span>
              </li>
              <li className="text-tc-dark dark:text-white text-[14px] my-2 leading-[26px]">
                <strong>Works Everywhere –</strong>{" "}
                <span className="text-[#8B8B8B]">
                  Built to run smoothly on iOS and Android.
                </span>
              </li>
              <li className="text-tc-dark dark:text-white text-[14px] my-2 leading-[26px]">
                <strong>High Performance – </strong>
                <span className="text-[#8B8B8B]">
                  Fast, responsive, and user-friendly.
                </span>
              </li>
              <li className="text-tc-dark dark:text-white text-[14px] my-2 leading-[26px]">
                <strong>Easy to Manage – </strong>
                <span className="text-[#8B8B8B]">
                  {" "}
                  Update content or features without hassle.
                </span>
                .
              </li>
              <li className="text-tc-dark dark:text-white text-[14px] my-2 leading-[26px]">
                <strong>Fully Integrated – </strong>
                <span className="text-[#8B8B8B]">
                  Seamlessly connected to your website and admin panel.
                </span>
              </li>
            </ul>
          </div>
          <div className=" flex  justify-center items-center ">
            <CustomButton
              text1=" Know More"
              isImage={true}
              bgInvert="tc-dark"
            />
          </div>
        </div>

        <div className="stackbg absolute right-[23px] bottom-0 lg:h-[442px] h-[200px] w-[738px] lg:w-[50%]">
          <Image className="w-full absolute bottom-0 treeImg" loading="eager" src={bgImg} alt="bg"   />
        </div>
      </div>
    </motion.div>
  );
}
function Vision() {
  return (
    <motion.div
      className={`stack-card-shadow !w-[100%] h-[710px] lg:h-[479px] phoneimage_box justify-between layout3xl:p-12 flex-1 rounded-3xl flex md:rounded-input text-grey-500  bg-[#DFDFDF] dark:bg-tc-tertiary stack-cards__item js-stack-cards__item`}
    >
      <div className=" w-full lg:gap-[74.69px] flex-col lg:flex-row flex  items-center relative ">
        {/* Image */}
        <div className="lg:w-[37%] lg:h-[90%]">
          <div className="flex  justify-center">
            <Image
              loading="eager"
              className="desk2 !w-[617.7px]  mt-[1.5rem] "
              src={desk2}
              alt="desk1"
             
            />
          </div>
          <div>
            <Image
              loading="eager"
              className="desk3 !w-[617.7px]  mt-[1.5rem] treeImg  "
              src={desk3}
              alt="desk1"
              
            />
          </div>
        </div>
        {/* Text  */}
        <div className="lg:w-[50%] h-[475px] flex flex-col justify-center items-start self-center  mt-[8.63px] relative  px-[30px] lg:px-0 lg:right-[-4rem]  lg:top-0">
          <div className=" flex flex-col justify-center gap-[30px] items-start">
            <Link
              href="/contact-us"
              className=" text-start lg:text-[30px] leading-[25px] lg:leading-[40px] font-semibold text-tc-dark dark:text-tc-secondary text-[28px] tracking-[0.476px]"
            >
              <span className="text-tc-primary ">Admin </span>
              Panel{" (CRM)"}
            </Link>
            <div>
              <ul className="list-outside list-disc max-w-[450px] w-full">
                <li className="text-white text-[14px]  leading-[26px]">
                  <strong>Manage everything </strong>
                  <span className="text-[#8B8B8B]">
                    from one place, easily and securely.
                  </span>
                </li>
                <li className="text-white text-[14px]  leading-[26px]">
                  <strong>Data Control – </strong>{" "}
                  <span className="text-[#8B8B8B]">
                    Keep all your data in one place with easy access.
                  </span>
                </li>
                <li className="text-white text-[14px]  leading-[26px]">
                  <strong>User Management – </strong>
                  <span className="text-[#8B8B8B]">
                    Add, edit, and manage user accounts.
                  </span>
                </li>
                <li className="text-white text-[14px]  leading-[26px]">
                  <strong>Track Attendance & Progress – </strong>
                  <span className="text-[#8B8B8B]">
                    {" "}
                    Get insights into attendance and performance.
                  </span>
                  .
                </li>
                <li className="text-white text-[14px] leading-[26px]">
                  <strong>Complete Flexibility – </strong>
                  <span className="text-[#8B8B8B]">
                    Update, edit, and monitor everything you need
                  </span>
                </li>
              </ul>
            </div>
            <div className="self-center">
              <CustomButton
                text1=" KNOW MORE"
                isImage={true}
                bgInvert="tc-dark"
              />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
