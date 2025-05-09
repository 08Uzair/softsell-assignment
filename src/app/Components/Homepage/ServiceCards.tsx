"use client";

import React, { Fragment, useEffect, useState } from "react";
import SpotlightCard from "../../../components/SpotlightCard/SpotlightCard";
const ServiceCards = () => {
  const [checkedIds, setCheckedIds] = useState<number[]>([]);

  useEffect(() => {
    const storedCheckedIds = JSON.parse(
      localStorage.getItem("checkbox") || "[]"
    );
    setCheckedIds(storedCheckedIds);
  }, []);

  const toggleCheck = (id: number) => {
    const updatedCheckedIds = checkedIds.includes(id)
      ? checkedIds.filter((item) => item !== id)
      : [...checkedIds, id];

    setCheckedIds(updatedCheckedIds);
    localStorage.setItem("checkbox", JSON.stringify(updatedCheckedIds));
  };
  const cardData = [
    {
      id: 1,
      title: "Design",
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
        >
          <path
            d="M1.51744 14.9482V18.4826H5.05184L15.476 8.04901L11.9416 4.51461L1.51744 14.9482ZM20 15.9943L15.9943 20L11.0933 15.099L12.7615 13.4307L13.7041 14.3732L16.032 12.0358L17.3704 13.3742L15.9943 14.7125L16.9934 15.655L18.3318 14.3355L20 15.9943ZM4.91989 8.89727L0 4.00566L4.00566 0L5.66447 1.66824L3.33648 4.00566L4.34496 5.00471L6.66353 2.66729L8.00189 4.00566L6.66353 5.33459L7.60603 6.2771L4.91989 8.89727ZM18.2092 5.28747C18.5768 4.91989 18.5768 4.34496 18.2092 3.95853L16.0038 1.79076C15.655 1.42319 15.0424 1.42319 14.6748 1.79076L12.9406 3.51555L16.475 7.04995L18.2092 5.28747Z"
            fill="#111111"
          />
        </svg>
      ),
      points: [
        {
          id: 1,
          name: "UI/UX Design",
        },
        {
          id: 2,
          name: "Brand Design",
        },
        {
          id: 3,
          name: "Graphic Design",
        },
        {
          id: 4,
          name: "Logo Design",
        },
      ],
    },
    {
      id: 2,
      title: "Devolopment",
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="20"
          viewBox="0 0 24 20"
          fill="none"
        >
          <path
            d="M12.5667 0L14.7444 0.444445L10.5889 20L8.41111 19.5556L12.5667 0ZM20.0111 10L16.0222 6.01111V2.86667L23.1556 10L16.0222 17.1222V13.9778L20.0111 10ZM0 10L7.13333 2.86667V6.01111L3.14444 10L7.13333 13.9778V17.1222L0 10Z"
            fill="#111111"
          />
        </svg>
      ),
      points: [
        {
          id: 5,
          name: "Website Devolopment",
        },
        {
          id: 6,
          name: "Android app devolopment",
        },
        {
          id: 7,
          name: "IOS app devolopment",
        },
        {
          id: 8,
          name: "Hybrid app devolopment",
        },
      ],
    },
    {
      id: 3,
      title: "Management",
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
        >
          <path
            d="M16.84 0L19.9998 3.15988L17.591 5.56982L14.4311 2.40994L16.84 0ZM5.26636 14.7335H8.42624L16.1016 7.05813L12.9417 3.89824L5.26636 11.5736V14.7335Z"
            fill="#111111"
          />
          <path
            d="M16.8527 17.8937H5.43289C5.40551 17.8937 5.37707 17.9043 5.34968 17.9043C5.31493 17.9043 5.28017 17.8948 5.24435 17.8937H2.10659V3.1476H9.3185L11.4251 1.04102H2.10659C0.944805 1.04102 0 1.98477 0 3.1476V17.8937C0 19.0566 0.944805 20.0003 2.10659 20.0003H16.8527C17.4114 20.0003 17.9472 19.7784 18.3423 19.3833C18.7374 18.9883 18.9593 18.4524 18.9593 17.8937V8.76377L16.8527 10.8704V17.8937Z"
            fill="#111111"
          />
        </svg>
      ),
      points: [
        {
          id: 9,
          name: "SEO",
        },
        {
          id: 10,
          name: "Website & App",
        },
        {
          id: 11,
          name: "Content Management",
        },
        {
          id: 12,
          name: "Social Handling",
        },
      ],
    },
  ];

  return (
    <>
      <div className="flex items-center justify-center md:justify-between flex-wrap w-full gap-[20px] mainServeice">
        {cardData.map((item, index) => {
          return (
            <Fragment key={index}>
              <SpotlightCard
                className={`
                    ${index === 1 ? "lg:min-w-[450px]" : "lg:min-w-[370px]"}
                    w-full
                    flex-1
                    h-[386px] serviceCards lg:p-[45px]   p-[35px] bg-tc-light dark:bg-tc-tertiary rounded-[20px] font-montserrat  shadow-[0px_0px_10px_2.616px_rgba(0,0,0,0.15)]`}
              >
                <div>
                  <div className="flex items-center justify-between mb-[63px]">
                    <h2 className="serviceText1 text-tc-dark dark:text-tc-light text-[24px] font-semibold leading-[26px]">
                      {item.title}
                    </h2>
                    <div className="py-[10px] px-[20px] w-[60px] h-[40px] bg-tc-primary  rounded-[30px]">
                      {item.svg}
                    </div>
                  </div>
                  {item.points.map((pItem, index) => (
                    <div
                      key={index}
                      onClick={() => toggleCheck(pItem.id)}
                      className="mb-[20px] flex items-center justify-start cursor-pointer"
                    >
                      {checkedIds.includes(pItem.id) ? (
                        <>
                          <input
                            id={"checkbox"}
                            className={
                              "w-[14px] h-[14px] border-[1px] rounded-[2px] border-tc-primary mr-[20px] z-50 "
                            }
                            type="checkbox"
                            onChange={() => null}
                            checked={true}
                          />
                        </>
                      ) : (
                        <>
                          <div
                            className={
                              "w-[14px] h-[14px] border-[1px] rounded-[2px] border-tc-primary mr-[20px] "
                            }
                          ></div>
                        </>
                      )}
                      <h2 className="text-tc-tertiary dark:text-[#8B8B8B] serviceText2 text-[24px]  font-normal leading-[26px]">
                        {pItem.name}
                      </h2>
                    </div>
                  ))}
                </div>
              </SpotlightCard>
            </Fragment>
          );
        })}
      </div>
    </>
  );
};

export default ServiceCards;
