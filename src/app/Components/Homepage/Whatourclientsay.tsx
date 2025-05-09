"use client";
import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Navigation } from "swiper/modules";
import Image from "next/image";

type Props = {};

const Data = [
  {
    id: "1",
    heading: "Empowering Non-Technical Users to Design Like Real Pros",
    description:
      "With Nexus, I can bring my ideas to life quickly and effortlessly. It has streamlined my workflow and elevated my website designs to a whole new level.",
    image: "/assets/Images/client1.webp",
    name: "Emily Rodriguez",
    designation: "Elevation Design Co.",
  },
  {
    id: "1",
    heading: "Empowering Non-Technical Users to Design Like Real Pros",
    description:
      "With Nexus, I can bring my ideas to life quickly and effortlessly. It has streamlined my workflow and elevated my website designs to a whole new level.",
    image: "/assets/Images/client1.webp",
    name: "Emily Rodriguez",
    designation: "Elevation Design Co.",
  },
  {
    id: "1",
    heading: "Empowering Non-Technical Users to Design Like Real Pros",
    description:
      "With Nexus, I can bring my ideas to life quickly and effortlessly. It has streamlined my workflow and elevated my website designs to a whole new level.",
    image: "/assets/Images/client1.webp",
    name: "Emily Rodriguez",
    designation: "Elevation Design Co.",
  },
  {
    id: "1",
    heading: "Empowering Non-Technical Users to Design Like Real Pros",
    description:
      "With Nexus, I can bring my ideas to life quickly and effortlessly. It has streamlined my workflow and elevated my website designs to a whole new level.",
    image: "/assets/Images/client1.webp",
    name: "Emily Rodriguez",
    designation: "Elevation Design Co.",
  },
  {
    id: "1",
    heading: "Empowering Non-Technical Users to Design Like Real Pros",
    description:
      "With Nexus, I can bring my ideas to life quickly and effortlessly. It has streamlined my workflow and elevated my website designs to a whole new level.",
    image: "/assets/Images/client1.webp",
    name: "Emily Rodriguez",
    designation: "Elevation Design Co.",
  },
  {
    id: "1",
    heading: "Empowering Non-Technical Users to Design Like Real Pros",
    description:
      "With Nexus, I can bring my ideas to life quickly and effortlessly. It has streamlined my workflow and elevated my website designs to a whole new level.",
    image: "/assets/Images/client1.webp",
    name: "Emily Rodriguez",
    designation: "Elevation Design Co.",
  },
  {
    id: "1",
    heading: "Empowering Non-Technical Users to Design Like Real Pros",
    description:
      "With Nexus, I can bring my ideas to life quickly and effortlessly. It has streamlined my workflow and elevated my website designs to a whole new level.",
    image: "/assets/Images/client1.webp",
    name: "Emily Rodriguez",
    designation: "Elevation Design Co.",
  },
];

const Whatourclientsay = (props: Props) => {
  const swiperRef = useRef(null);

  useEffect(() => {
    if (swiperRef?.current) {
      // swiperRef?.current?.swiper?.navigation?.update();
    }
  }, [swiperRef]);

  return (
    <section className="flex flex-col gap-5 py-[100px]   h-full justify-center  w-full ">
      <h2 className="text-tc-tertiary dark:text-tc-secondary text-[28px] md:text-[40px] leading-[40px]  lg:text-[60px] lg:leading-[68px] font-semibold">
      Customer <span className="text-tc-primary"> Testimonials</span>
      </h2>
      <p className="text-[18px] font-normal leading-[26px] px-[1px] text-[#8B8B8B]">
        See what are client have to say abour the serice we provided them
      </p>
      <div className=" w-full h-full flex gap-10  mt-2 lg:mt-[90px]">
        <Swiper
          ref={swiperRef}
          slidesPerView={1}
          spaceBetween={30}
          modules={[Autoplay, Navigation]}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          loop={true}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          breakpoints={{
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          {Data.map((data, index) => {
            return (
              <SwiperSlide key={index}>
                <div className="bg-[#DFDFDF]  dark:bg-tc-tertiary lg:py-[22px] py-[17px] px-[10px] lg:px-[36px] w-full rounded-[15px] gap-4 flex flex-col">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="-0.000488281"
                      width="31.9098"
                      height="31.9098"
                      rx="15.9549"
                      fill="#CBFB45"
                    />
                    <path
                      d="M11.9639 18.3943H13.8288L15.072 16.0736V12.5925H11.3423V16.0736H13.2071L11.9639 18.3943ZM16.9369 18.3943H18.8017L20.0449 16.0736V12.5925H16.3152V16.0736H18.1801L16.9369 18.3943Z"
                      fill="black"
                    />
                  </svg>

                  <p className="text-black dark:text-tc-secondary text-[18px] leading-[25px] font-semibold">
                    {data.heading}
                  </p>
                  <p className="text-black dark:text-tc-secondary text-[14px] leading-[20px] font-normal">
                    {data.description}
                  </p>
                  <div className="flex gap-3 ">
                    <div className="relative h-11 w-11">
                      <Image
                        src={data.image}
                        fill
                        alt="clientimg"
                        loading="eager"
                      />
                    </div>
                    <div className="flex flex-col gap-1 justify-center">
                      <p className="text-black dark:text-tc-secondary text-[12px] leading-[16px] ">
                        {data.name}
                      </p>
                      <p className="text-black dark:text-tc-secondary text-[10px] leading-[11px]">
                        {data.designation}
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      <div className=" w-full justify-center items-center gap-5 relative lg:hidden flex">
        <div className="swiper-button-prev ">
          <svg
            width="32"
            height="33"
            viewBox="0 0 32 33"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              width="32"
              height="32"
              rx="16"
              transform="matrix(-1 0 0 1 32 0.187744)"
              fill="#CBFB45"
            />
            <path
              d="M15.9987 10.8545L16.9387 11.7945L13.2187 15.5212H21.332V16.8545H13.2187L16.9387 20.5812L15.9987 21.5212L10.6654 16.1878L15.9987 10.8545Z"
              fill="#111111"
            />
          </svg>
        </div>
        <div className="swiper-button-next">
          <svg
            width="32"
            height="33"
            viewBox="0 0 32 33"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect y="0.187744" width="32" height="32" rx="16" fill="#CBFB45" />
            <path
              d="M16.0013 10.8545L15.0613 11.7945L18.7813 15.5212H10.668V16.8545H18.7813L15.0613 20.5812L16.0013 21.5212L21.3346 16.1878L16.0013 10.8545Z"
              fill="#111111"
            />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Whatourclientsay;
