"use client";
import React, { useState } from "react";
// Define a type for the service items
type Service = {
  title: string;
  svg1: JSX.Element;
  svg2: JSX.Element;
  svg3: JSX.Element;

  items: string[];
};

const services: Service[] = [
  {
    title: "DESIGN SERVICE",
    svg1: (
      <svg viewBox="0 0 24 26" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M8 14H16M22 14C22 19.5228 17.5228 24 12 24C6.47715 24 2 19.5228 2 14C2 8.47715 6.47715 4 12 4C17.5228 4 22 8.47715 22 14Z"
          stroke="#CBFB45"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    svg2: (
      <svg viewBox="0 0 24 26" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M12 10V18M8 14H16M22 14C22 19.5228 17.5228 24 12 24C6.47715 24 2 19.5228 2 14C2 8.47715 6.47715 4 12 4C17.5228 4 22 8.47715 22 14Z"
          stroke="#CBFB45"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    svg3: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 42 42" fill="none">
        <path
          d="M1.81648 40.1198L15.7163 26.22M33.2199 20.0389L29.0592 32.5212C28.9928 32.7213 28.8791 32.9025 28.7277 33.0492C28.5764 33.196 28.3919 33.3041 28.1899 33.3643L2.68358 40.9455C2.45379 41.0137 2.20968 41.0176 1.97782 40.9568C1.74596 40.8959 1.53523 40.7726 1.36857 40.6003C1.20191 40.428 1.08569 40.2133 1.03258 39.9796C0.979461 39.7458 0.991477 39.502 1.06732 39.2746L9.34955 14.4323C9.40891 14.2539 9.50595 14.0904 9.63408 13.9528C9.76221 13.8153 9.91844 13.7069 10.0922 13.6351L21.8581 8.79064C22.0973 8.69185 22.3604 8.6661 22.6142 8.71663C22.868 8.76716 23.1012 8.89171 23.2843 9.07458L32.9032 18.6979C33.0754 18.8699 33.1961 19.0866 33.2521 19.3234C33.308 19.5603 33.2969 19.808 33.2199 20.0389Z"
          stroke="#CBFB45"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M33.4774 19.2704L39.6542 13.0915C40.4731 12.2723 40.9331 11.1615 40.9331 10.0032C40.9331 8.84485 40.4731 7.73396 39.6542 6.91479L35.0238 2.28006C34.6181 1.87424 34.1365 1.55232 33.6064 1.33268C33.0763 1.11305 32.5081 1 31.9343 1C31.3605 1 30.7924 1.11305 30.2623 1.33268C29.7322 1.55232 29.2505 1.87424 28.8449 2.28006L22.6682 8.45897M20.3486 21.5856C20.0443 21.2814 19.683 21.0402 19.2855 20.8756C18.8879 20.711 18.4618 20.6264 18.0316 20.6265C17.6013 20.6266 17.1753 20.7115 16.7778 20.8762C16.3803 21.041 16.0191 21.2824 15.715 21.5867C15.4108 21.891 15.1695 22.2523 15.005 22.6498C14.8404 23.0474 14.7558 23.4735 14.7559 23.9038C14.756 24.334 14.8408 24.7601 15.0056 25.1575C15.1703 25.555 15.4117 25.9162 15.7161 26.2203C16.3307 26.8347 17.1641 27.1797 18.0331 27.1795C18.9021 27.1793 19.7354 26.8339 20.3497 26.2193C20.964 25.6046 21.309 24.7712 21.3088 23.9022C21.3086 23.0332 20.9632 22.1999 20.3486 21.5856Z"
          stroke="#CBFB45"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    ),
    items: ["UI/UX Design", "Brand Design", "Graphic Design", "Logo Design"],
  },
  {
    title: "DEVELOPMENT SERVICE",
    svg1: (
      <svg viewBox="0 0 24 26" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M8 14H16M22 14C22 19.5228 17.5228 24 12 24C6.47715 24 2 19.5228 2 14C2 8.47715 6.47715 4 12 4C17.5228 4 22 8.47715 22 14Z"
          stroke="#CBFB45"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    svg2: (
      <svg viewBox="0 0 24 26" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M12 10V18M8 14H16M22 14C22 19.5228 17.5228 24 12 24C6.47715 24 2 19.5228 2 14C2 8.47715 6.47715 4 12 4C17.5228 4 22 8.47715 22 14Z"
          stroke="#CBFB45"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    svg3: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 47 42" fill="none">
        <path
          d="M11 11L1 21L11 31M36 11L46 21L36 31M28.5 1L18.5 41"
          stroke="#CBFB45"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    ),
    items: [
      "Website Devolopment",
      "Android app devolopment",
      "IOS app devolopment",
      "Hybrid app devolopment",
    ],
  },
  {
    title: "MAINTENANCE SERVICE",
    svg1: (
      <svg viewBox="0 0 24 26" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M8 14H16M22 14C22 19.5228 17.5228 24 12 24C6.47715 24 2 19.5228 2 14C2 8.47715 6.47715 4 12 4C17.5228 4 22 8.47715 22 14Z"
          stroke="#CBFB45"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    svg2: (
      <svg viewBox="0 0 24 26" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M12 10V18M8 14H16M22 14C22 19.5228 17.5228 24 12 24C6.47715 24 2 19.5228 2 14C2 8.47715 6.47715 4 12 4C17.5228 4 22 8.47715 22 14Z"
          stroke="#CBFB45"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    svg3: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 38 40" fill="none">
        <path
          d="M18.7659 0.50083V0.500866H18.7719C19.4074 0.500866 20.0249 0.542185 20.5924 0.636765L20.6015 0.638288L20.6107 0.639471C21.1731 0.711919 21.728 0.834506 22.2686 1.00577L22.2685 1.00582L22.2759 1.00803C22.8171 1.17038 23.355 1.38015 23.8898 1.63796L23.8926 1.63925C24.4131 1.88634 24.9538 2.19127 25.5017 2.52781C26.4672 3.14215 27.4211 3.64126 28.3961 4.04105L28.3961 4.04106L28.3996 4.04248C30.3108 4.80916 32.3324 5.26465 34.3877 5.39165C35.2561 5.45597 36.1498 5.49358 37.0685 5.50459V15.0221C37.0685 16.8801 36.8312 18.6416 36.3589 20.3085L36.358 20.3119C35.9017 21.9673 35.2535 23.5636 34.4265 25.0684L34.4262 25.0689C33.6004 26.576 32.6232 27.995 31.5097 29.3038L31.5083 29.3054C30.3717 30.6525 29.1405 31.9168 27.824 33.0887C26.4857 34.2651 25.0782 35.3602 23.6088 36.3681L23.6063 36.3699C22.1283 37.3972 20.6427 38.3437 19.1495 39.2094L19.1495 39.2094L19.1444 39.2125L18.7994 39.418L18.4545 39.2125L18.4545 39.2124L18.4491 39.2092C16.9162 38.3221 15.419 37.3745 13.9611 36.3688L13.9569 36.366C12.4814 35.3701 11.0747 34.2756 9.7466 33.0902L9.74621 33.0899C8.43007 31.9176 7.19925 30.653 6.06312 29.3055L6.06298 29.3053C4.95272 27.9898 3.97064 26.5712 3.1301 25.0689C2.31785 23.5561 1.67004 21.9606 1.19777 20.3098C0.724819 18.5884 0.490147 16.8102 0.500317 15.025H0.500325V15.0221V5.50459C1.41988 5.49357 2.31486 5.45592 3.1852 5.39154C4.2104 5.32177 5.22891 5.17513 6.23216 4.95285L6.23354 4.95254C7.21467 4.73223 8.20041 4.43919 9.17375 4.04166C10.1822 3.63395 11.1493 3.13051 12.0617 2.53826L12.062 2.53809C13.1277 1.84538 14.2029 1.33752 15.2577 1.00405C16.3942 0.656313 17.5775 0.486562 18.7659 0.50083ZM35.55 7.46894V6.99281L35.0744 6.96954C33.2192 6.87874 31.3813 6.56863 29.599 6.04569C27.8349 5.51796 26.1543 4.74338 24.6072 3.74497C23.7456 3.18114 22.8109 2.73808 21.829 2.42816L21.829 2.42813L21.8229 2.42627C20.8376 2.12911 19.8132 1.98183 18.784 1.98938C17.7485 1.98341 16.7178 2.13044 15.7252 2.42574L15.7252 2.42572L15.7215 2.42684C14.736 2.72828 13.8002 3.17297 12.9441 3.74665C11.3944 4.74872 9.71061 5.52608 7.9428 6.05554C6.20696 6.55997 4.3845 6.86929 2.47433 6.98233L2.00387 7.01017V7.48146V15.0347C2.00387 16.7358 2.22494 18.3739 2.66854 19.9471L2.66952 19.9505C3.11878 21.5019 3.7373 22.9993 4.51393 24.4155L4.51414 24.4159C5.29853 25.8433 6.22312 27.1891 7.27421 28.4333L7.27506 28.4343C8.33375 29.6809 9.4632 30.8407 10.6806 31.9414C11.8973 33.0415 13.1725 34.0607 14.5061 34.9988L14.5077 34.9999C15.8489 35.9355 17.191 36.7919 18.5341 37.5688L18.785 37.7139L19.0357 37.5682C20.4097 36.7697 21.7488 35.9127 23.0493 34.9994C24.3937 34.0636 25.6763 33.0419 26.889 31.9408C28.1058 30.8405 29.2376 29.6809 30.2963 28.4343L30.2971 28.4333C31.3482 27.1891 32.2728 25.8433 33.0572 24.4159L33.0578 24.4148C33.8309 22.9995 34.4405 21.5009 34.875 19.9479C35.3319 18.3499 35.5592 16.6951 35.55 15.0332V7.46894Z"
          stroke="#CBFB45"
        />
        <path
          d="M14.663 24.1058L15.035 24.6368L15.4541 24.142L26.2363 11.4111L26.838 11.3592L27.6222 12.0329L27.6653 12.6358L15.7675 26.6992L15.3986 26.86L14.4872 26.8041L14.144 26.6143L9.54923 20.0532L9.65205 19.4571L10.4748 18.869L11.0651 18.9693L14.663 24.1058Z"
          stroke="#CBFB45"
        />
      </svg>
    ),
    items: ["SEO", "Website & App", "Content Management", "Social Handling"],
  },
];

const ServiceDropdown: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className=" text-tc-tertiary dark:text-white  space-y-[20px]">
      {services.map((service, index) => (
        <>
          <div
            key={index}
            onClick={() => handleToggle(index)}
            className="bg-tc-secondary dark:bg-tc-tertiary rounded-[20px] w-full cursor-pointer shadow-[0px_0px_10px_2.616px_rgba(0,0,0,0.15)] "
          >
            <div className="flex items-center justify-between  bg-tc-secondarydark:bg-tc-tertiary rounded-[20px] p-[27px] lg:pl-[112px] lg:pt-[45px] lg:pb-[45px] lg:pr-[75px] self-center ">
              <div className="flex items-center gap-[20px] lg:gap-[40px] ">
                <span className="w-[20px] h-[20px] lg:w-10 lg:h-10">
                  {service.svg3}
                </span>
                <span className=" lg:text-[24px] font-semibold  font-montserrat">
                  {service.title}
                </span>
              </div>
              <div className=" w-[24px] h-[24px] self-center justify-center">
                {openIndex === index ? service.svg1 : service.svg2}
              </div>
            </div>
          </div>
          <div>
            {openIndex === index && service.items.length > 0 && (
              <div className=" text-[#7c7c7c]   ">
                {service.items.map((item, itemIndex) => (
                  <li
                    key={itemIndex}
                    className=" lg:px-6 py-4 lg:py-[44px] flex items-center justify-between  border-b-2 border-[#7c7c7c] hover:text-tc-primary gap-[56px] lg:gap-[134px]"
                  >
                    <span className="text-[20px] font-normal lg:text-[40px] ">
                      {String(itemIndex + 1).padStart(2, "0")}
                    </span>
                    <span className="flex-grow text-[#7c7c7c] text-left px-4 font-light text-[20px] lg:text-[40px] hover:text-tc-primary">
                      {item}
                    </span>
                  </li>
                ))}
              </div>
            )}
          </div>
        </>
      ))}
    </div>
  );
};

export default ServiceDropdown;
