"use client"
import React from "react";
import ServiceCards from "./ServiceCards";

const Services1 = () => {
  return (
    <>
      <section id="service-section" className="flex flex-col gap-5 h-full py-[20px] lg:py-[80px] font-montserrat self-center w-full ">
        <div>
          <h2 className="text-tc-dark dark:text-tc-secondary text-[28px] md:text-[40px] lg:text-[60px] leading-normal mb-[20px] lg:leading-[68px] font-semibold ">
            Our <span className="text-tc-primary">Services</span>
          </h2>
          <p className="text-[16px] lg:text-[18px] md:text-[18px] text-[#8B8B8B] leading-[26px] mb-[94px]">
            Showcasing Innovation: Our Best Project, Where Creativity Meets
            Cutting-Edge Technology for Exceptional Results.
          </p>

          <div className="flex items-center justify-center w-full ">
            <ServiceCards />
          </div>
        
        </div>
      </section>
    </>
  );
};

export default Services1;
