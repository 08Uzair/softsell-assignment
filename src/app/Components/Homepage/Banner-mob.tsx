"use client";
import CustomButton from "@/components/custom/CustomButton";
import Image from "next/image";
import illustrator from "../../../../public/assets/Images/Adobe Illustrator.webp";
import cpp from "../../../../public/assets/Images/C++ Language.webp";
import css from "../../../../public/assets/Images/CSS.webp";
import desktopimg from "../../../../public/assets/Images/desktopimg.webp";
import figma from "../../../../public/assets/Images/Figma.webp";
import html from "../../../../public/assets/Images/HTML.webp";
type Props = {};

const BannerMobile = (props: Props) => {
  return (
    <section className=" flex justify-center items-center flex-col gap-0 w-full ">
    
      <CustomButton text1="Book A Call" isImage={true} bgInvert="tc-tertiary" />
      <div className="homeAnimate absolute flex items-center justify-between z-10">
        <div className="html  relative top-[12rem] lg:z-10 lg:left-[-2rem] lg:w-[119px] lg:h-[119px] right-[10rem]">
          <Image loading="eager" priority={true} src={html} alt="logo" />
        </div>
        <div className="css relative bottom-[5rem]">
          <Image loading="eager" priority={true} src={css} alt="logo" />
        </div>
        <div className="cpp relative bottom-[5rem] left-[20rem]">
          <Image loading="eager" priority={true} src={cpp} alt="logo" />
        </div>
        <div className="figma relative left-[20rem] top-[7rem]">
          <Image loading="eager" priority={true} src={figma} alt="logo" />
        </div>

        <div className="w-[100px] h-[100px] illustrator relative left-[-6rem] top-[16rem]">
          <Image loading="eager" priority={true} src={illustrator} alt="logo" />
        </div>
      </div>
      <div className=" relative h-[400px]  lg:h-full w-[100%] lg:w-[35%] ">
        <Image
          loading="eager"
          priority={true}
          className="w-full h-full object-contain" // Updated class
          src={desktopimg}
          alt="desktopimg"
          fill
        />
      </div>
      <style jsx>{`
        .object-contain {
          object-fit: contain; // Set the object-fit style
        }
      `}</style>
    </section>
  );
};

export default BannerMobile;