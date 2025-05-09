'use client';

import { motion, AnimatePresence } from 'framer-motion';
import React, { useState, useRef } from 'react';
import { useEffect } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import CustomButton from '@/components/custom/CustomButton';
type Stage = {
  id: number;
  title: string;
  description: string;
  svg?: any;
};

const stages: Stage[] = [
  {
    id: 1,
    title: 'DISCOVERY',
    description:
      'Our team will perform research and discovery to plan and inform the phase of the project',
    svg: (
      <svg
        width='80'
        height='80'
        viewBox='0 0 80 80'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M80.5 27.6L73.6313 31.6L57.4697 4L64.3384 0L80.5 27.6ZM31.6111 23.6L43.7323 44.4L68.3788 30.4L56.2576 9.6L31.6111 23.6ZM38.0758 42.8L29.995 28.8L12.6212 38.8L20.702 52.8L38.0758 42.8ZM0.5 50.4L4.5404 57.2L15.0455 51.2L11.0051 44.4L0.5 50.4ZM40.904 48L39.6919 46.4L22.3182 56.4L23.5303 58C24.3384 59.2 25.5505 60.4 26.7626 61.2L20.298 80H28.3788L34.0354 62.8H34.4394L40.5 80H48.5808L40.904 57.6C42.9242 54.8 42.9242 51.2 40.904 48Z'
          fill='#CBFB45'
        />
      </svg>
    ),
  },
  {
    id: 2,
    title: 'WIREFRAMING',
    description:
      'Prior to prototyping we design the wireframes which plan out the structure and user flow of your website',
    svg: (
      <svg
        width='80'
        height='80'
        viewBox='0 0 80 80'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M4 44H84'
          stroke='#CBFB45'
          strokeWidth='8'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M52.4174 4H35.5752C34.4585 4 33.3876 4.42143 32.598 5.17157C31.8083 5.92172 31.3647 6.93913 31.3647 8V24C31.3647 25.0609 31.8083 26.0783 32.598 26.8284C33.3876 27.5786 34.4585 28 35.5752 28H52.4174C53.5341 28 54.605 27.5786 55.3946 26.8284C56.1843 26.0783 56.6279 25.0609 56.6279 24V8C56.6279 6.93913 56.1843 5.92172 55.3946 5.17157C54.605 4.42143 53.5341 4 52.4174 4ZM27.1542 60H10.3121C9.19539 60 8.12442 60.4214 7.3348 61.1716C6.54517 61.9217 6.10156 62.9391 6.10156 64V80C6.10156 81.0609 6.54517 82.0783 7.3348 82.8284C8.12442 83.5786 9.19539 84 10.3121 84H27.1542C28.2709 84 29.3419 83.5786 30.1315 82.8284C30.9211 82.0783 31.3647 81.0609 31.3647 80V64C31.3647 62.9391 30.9211 61.9217 30.1315 61.1716C29.3419 60.4214 28.2709 60 27.1542 60ZM77.6805 60H60.8384C59.7217 60 58.6507 60.4214 57.8611 61.1716C57.0715 61.9217 56.6279 62.9391 56.6279 64V80C56.6279 81.0609 57.0715 82.0783 57.8611 82.8284C58.6507 83.5786 59.7217 84 60.8384 84H77.6805C78.7972 84 79.8682 83.5786 80.6578 82.8284C81.4474 82.0783 81.891 81.0609 81.891 80V64C81.891 62.9391 81.4474 61.9217 80.6578 61.1716C79.8682 60.4214 78.7972 60 77.6805 60Z'
          fill='#CBFB45'
          strokeWidth='8'
          strokeLinejoin='round'
        />
        <path
          d='M43.9975 44V28M69.2607 60V44M18.7344 60V44'
          stroke='#CBFB45'
          strokeWidth='8'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>
    ),
  },
  {
    id: 3,
    title: 'DESIGN',
    description:
      'In a collabrative process from end-to-end, the design of the website is created from the scratch',
    svg: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='80'
        height='80'
        viewBox='0 0 80 80'
        fill='none'
      >
        <path
          d='M6.56975 59.7926V73.9303H20.7074L62.4039 32.196L48.2663 18.0584L6.56975 59.7926ZM80.5 63.9774L64.4774 80L44.8732 60.3959L51.5462 53.7229L55.3162 57.4929L64.6282 48.1433L69.9816 53.4967L64.4774 58.8501L68.4736 62.6202L73.827 57.3421L80.5 63.9774ZM20.1795 35.5891L0.5 16.0226L16.5226 0L23.1579 6.67295L13.8459 16.0226L17.8798 20.0188L27.1541 10.6692L32.5075 16.0226L27.1541 21.3384L30.9241 25.1084L20.1795 35.5891ZM73.3369 21.1499C74.8073 19.6795 74.8073 17.3798 73.3369 15.8341L64.5151 7.16305C63.1202 5.69274 60.6696 5.69274 59.1993 7.16305L52.2625 14.0622L66.4001 28.1998L73.3369 21.1499Z'
          fill='#CBFB45'
        />
      </svg>
    ),
  },
  {
    id: 4,
    title: 'DEVELOPMENT',
    description:
      'The final design from the design phased are used to devolop a web version of our site on our stagging server',
    svg: (
      <svg
        width='80'
        height='80'
        viewBox='0 0 80 80'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M14.8334 71.6667C12.8626 71.6667 11.1754 70.965 9.77196 69.5615C8.36848 68.158 7.66675 66.4709 7.66675 64.5V21.5C7.66675 19.5292 8.36848 17.8421 9.77196 16.4386C11.1754 15.0351 12.8626 14.3334 14.8334 14.3334H72.1668C74.1376 14.3334 75.8247 15.0351 77.2282 16.4386C78.6317 17.8421 79.3334 19.5292 79.3334 21.5V39.4167H72.1668V21.5H14.8334V64.5H54.2501V71.6667H14.8334ZM61.4168 71.6667V46.5834H79.3334V71.6667H61.4168Z'
          fill='#CBFB45'
        />
        <path
          d='M37.2351 35.8274L29.1726 43.8899L37.2351 51.9524'
          fill='#CBFB45'
        />
        <path
          d='M50.6726 35.8274L58.7351 43.8899L50.6726 51.9524'
          fill='#CBFB45'
        />
      </svg>
    ),
  },
  {
    id: 5,
    title: 'CONTENT',
    description:
      'The website functionality is devoloped and content is populated as outlined in the project spec.',
    svg: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='80'
        height='80'
        viewBox='0 0 80 80'
        fill='none'
      >
        <path
          d='M13.8337 66.6667C12.0003 66.6667 10.4309 66.0139 9.12533 64.7084C7.81977 63.4028 7.16699 61.8334 7.16699 60V20C7.16699 18.1667 7.81977 16.5973 9.12533 15.2917C10.4309 13.9862 12.0003 13.3334 13.8337 13.3334H67.167C69.0003 13.3334 70.5698 13.9862 71.8753 15.2917C73.1809 16.5973 73.8337 18.1667 73.8337 20V60C73.8337 61.8334 73.1809 63.4028 71.8753 64.7084C70.5698 66.0139 69.0003 66.6667 67.167 66.6667H13.8337ZM47.167 53.3334V46.6667H60.5003V53.3334H47.167ZM47.167 43.3334V36.6667H60.5003V43.3334H47.167ZM13.8337 36.6667V60H67.167V33.3334H47.167V26.6667H67.167V20H40.5003V36.6667H13.8337Z'
          fill='#CBFB45'
        />
      </svg>
    ),
  },
  {
    id: 6,
    title: 'TESTING',
    description:
      'The website undergeos a full Q&A and testing procedure, ensuring optimal performance',
    svg: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='80'
        height='80'
        viewBox='0 0 80 80'
        fill='none'
      >
        <path
          d='M7.16675 29.9999V19.9999C7.16675 18.1666 7.81953 16.5971 9.12508 15.2916C10.4306 13.986 12.0001 13.3333 13.8334 13.3333H67.1668C69.0001 13.3333 70.5695 13.986 71.8751 15.2916C73.1806 16.5971 73.8334 18.1666 73.8334 19.9999V38.3333H67.1668V19.9999H13.8334V29.9999H7.16675ZM23.8334 56.6666C23.2223 56.6666 22.639 56.5138 22.0834 56.2083C21.5279 55.9027 21.1112 55.4444 20.8334 54.8333L15.0834 43.3333H7.16675V36.6666H17.1667C17.7779 36.6666 18.3612 36.8194 18.9167 37.1249C19.4723 37.4305 19.889 37.8888 20.1667 38.4999L23.8334 45.8333L34.1668 25.1666C34.4445 24.611 34.8612 24.1944 35.4168 23.9166C35.9723 23.6388 36.5556 23.4999 37.1668 23.4999C37.7779 23.4999 38.3612 23.6388 38.9168 23.9166C39.4723 24.1944 39.889 24.611 40.1668 25.1666L45.7501 36.3333C44.7501 36.9444 43.7918 37.5833 42.8751 38.2499C41.9584 38.9166 41.1112 39.6666 40.3334 40.4999L37.1668 34.1666L26.8334 54.8333C26.5556 55.4444 26.139 55.9027 25.5834 56.2083C25.0279 56.5138 24.4445 56.6666 23.8334 56.6666ZM36.0834 66.6666H13.8334C12.0001 66.6666 10.4306 66.0138 9.12508 64.7083C7.81953 63.4027 7.16675 61.8333 7.16675 59.9999V49.9999H13.8334V59.9999H34.0834C34.2501 61.1666 34.5001 62.3055 34.8334 63.4166C35.1668 64.5277 35.5834 65.611 36.0834 66.6666ZM57.1668 73.3333C52.5556 73.3333 48.6251 71.7083 45.3751 68.4583C42.1251 65.2083 40.5001 61.2777 40.5001 56.6666C40.5001 52.0555 42.1251 48.1249 45.3751 44.8749C48.6251 41.6249 52.5556 39.9999 57.1668 39.9999C61.7779 39.9999 65.7084 41.6249 68.9584 44.8749C72.2084 48.1249 73.8334 52.0555 73.8334 56.6666C73.8334 61.2777 72.2084 65.2083 68.9584 68.4583C65.7084 71.7083 61.7779 73.3333 57.1668 73.3333ZM57.8334 58.3333L65.4168 50.7499L63.0834 48.4166L55.5001 55.9999L57.8334 58.3333Z'
          fill='#CBFB45'
        />
      </svg>
    ),
  },
];

export default function ResponsiveServices() {
  const [activeStage, setActiveStage] = useState(1);
  const [mobileActiveStage, setMobileActiveStage] = useState<number | null>(
    null
  );
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);

  const toggleMobileStage = (id: number) => {
    setMobileActiveStage(mobileActiveStage === id ? null : id);
  };
  const [prevStage, setPrevStage] = useState(activeStage);
  const [animationClass, setAnimationClass] = useState('animate-slideInUp');
  const [direction, setDirection] = useState(0);

  const [currentStage, setCurrentStage] = useState(prevStage);

  useEffect(() => {
    if (prevStage !== activeStage) {
      const newDirection = activeStage > prevStage ? 1 : -1;
      setDirection(newDirection);

      const missedStages = Array.from(
        { length: Math.abs(activeStage - prevStage) },
        (_, i) => prevStage + (i + 1) * newDirection
      );

      missedStages.forEach((stage, index) => {
        setTimeout(() => {
          setCurrentStage(stage);
          if (index === missedStages.length - 1) {
            setPrevStage(activeStage);
          }
        }, index * 600);
      });
    }
  }, [activeStage, prevStage]);

  const variants = {
    initial: (direction: number) => ({
      opacity: 0,
      y:
        direction > 0
          ? -(typeof window !== 'undefined' ? window.innerHeight : 100)
          : typeof window !== 'undefined'
          ? window.innerHeight
          : 100,
    }),
    enter: { opacity: 1, y: 0 },
    exit: (direction: number) => ({
      opacity: 0,
      y:
        direction > 0
          ? typeof window !== 'undefined'
            ? window.innerHeight
            : 100
          : -(typeof window !== 'undefined' ? window.innerHeight : 100),
    }),
  };

  return (
    <section className='flex flex-col gap-5 h-full py-[20px] lg:py-[80px] font-montserrat self-center w-full '>
      <div className=''>
        <h2 className='text-tc-dark dark:text-tc-secondary text-[28px] md:text-[40px] lg:text-[60px] leading-normal mb-[20px] lg:leading-[68px] font-semibold '>
          How We<span className='text-tc-primary'> Work</span>
        </h2>
        <p className='text-[16px] lg:text-[18px] md:text-[18px] text-[#8B8B8B] leading-[26px]'>
          Showcasing Innovation: Our Best Project, Where Creativity Meets
          Cutting-Edge Technology for Exceptional Results.
        </p>
      </div>

      {/* {/ {/ Desktop Layout /} /} */}
      <div className='  lg:flex h-full flex-row gap-10 lg:mt-[82px] justify-center self-center '>
        <div className='flex flex-row justify-center self-center '>
          {/* {/ Sidebar  /} */}
          <div className='serviceRight hidden lg:flex justify-center lg:justify-start mr-2 lg:mr-[25px]'>
            <div className='w-[5px] rounded-[20px] h-auto bg-gray-300 dark:bg-gray-700 flex flex-col items-center justify-start lg:gap-[5px]'>
              {stages.map((stage, index) => (
                <motion.div
                  key={index}
                  className={`rounded-[20px] h-[40px] sm:h-[60px] md:h-[70px] lg:h-[56px] w-[5px] lg:w-full flex justify-center ${
                    currentStage === stage.id
                      ? 'dark:bg-tc-secondary bg-tc-dark'
                      : 'bg-transparent'
                  }`}
                  custom={direction}
                  initial='initial'
                  animate='enter'
                  exit='exit'
                  variants={variants}
                  transition={{ duration: 0.6 }}
                ></motion.div>
              ))}
            </div>
          </div>

          <div className='serviceRight hidden lg:flex gap-[27px]  justify-center items-center h-full flex-col'>
            {stages.map((stage, index) => (
              <button
                key={index}
                className={`block w-full text-left font-bold sm:text-[15px] md:text-[22px] lg:text-[24px] ${
                  activeStage === stage.id
                    ? 'text-tc-dark dark:text-tc-secondary'
                    : 'hover:text-tc-primary text-[#868686]'
                }`}
                onClick={() => setActiveStage(stage.id)}
              >
                {stage.id}.{stage.title}
              </button>
            ))}
          </div>

          <div className='serviceMob lg:hidden w-full '>
            {stages.map((stage, index) => (
              <div key={index} className='mb-4'>
                <button
                  onClick={() => toggleMobileStage(stage.id)}
                  className='flex items-center justify-between w-full p-4 text-tc-secondary bg-[#fff] dark:bg-tc-tertiary rounded-[12px]'
                >
                  <span className='text-xl font-bold text-tc-dark dark:text-tc-secondary'>
                    {stage.id}. {stage.title}
                  </span>
                  {mobileActiveStage === stage.id ? (
                    <ChevronUp className='h-6 w-6 text-tc-primary transform transition-transform duration-300' />
                  ) : (
                    <ChevronDown className='h-6 w-6 text-tc-primary transform transition-transform duration-300' />
                  )}
                </button>
                <div
                  ref={(el) => {
                    contentRefs.current[index] = el;
                    // Ensure no return statement here
                  }}
                  className={`mt-2 overflow-hidden transition-all duration-300 ease-in-out rounded-[12px] ${
                    mobileActiveStage === stage.id
                      ? 'max-h-[1000px] opacity-100'
                      : 'max-h-0 opacity-0'
                  }`}
                  style={{
                    maxHeight:
                      mobileActiveStage === stage.id
                        ? `${contentRefs.current[index]?.scrollHeight}px`
                        : '0px',
                  }}
                >
                  <div className='p-4 mt-2 bg-tc-light dark:bg-tc-dark rounded-[12px]'>
                    <div className='flex flex-col items-center gap-4'>
                      <span>{stage.svg}</span>
                      <p className='text-tc-dark dark:text-tc-secondary'>
                        {stage.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* {/ {/ Right container /} /} */}
        <div className='serviceRight hidden lg:flex bg-[#C0C0C0] dark:bg-tc-tertiary flex-row justify-center items-center py-4 lg:py-[67px] px-4 lg:pl-[50px] lg:pr-[61px] gap-4 lg:gap-16 rounded-[32px] overflow-hidden w-[915px] h-[460px]'>
          <div
            className={`w-[50%] flex flex-shrink justify-center items-center ${animationClass} self-center`}
          >
            <AnimatePresence>
              <motion.div
                key={currentStage}
                custom={direction}
                variants={variants}
                initial='initial'
                animate='enter'
                exit='exit'
                transition={{ duration: 0.5 }}
                style={{ position: 'absolute', left: 0, width: '100%' }}
              >
                {stages.map(
                  (stage, index) =>
                    stage.id === currentStage && (
                      <div
                        key={index}
                        className='flex justify-center flex-col rounded-[24px] bg-tc-secondary px-[54px] font-montserrat py-[50px] dark:bg-tc-dark h-[325px] w-[325px]'
                      >
                        <div className='w-[60px] h-[60px] mx-auto justify-center flex mb-5'>
                          {stage.svg}
                        </div>
                        <h3 className='text-tc-tertiary dark:text-tc-secondary text-center mb-4 font-semibold text-[20px]'>
                          {stage.id}.{stage.title}
                        </h3>
                        <p className='text-gray-400 font-normal text-center text-[14px]'>
                          {stage.description}
                        </p>
                      </div>
                    )
                )}
              </motion.div>
            </AnimatePresence>
          </div>

          <div className='w-[50%] hidden lg:block'>
            <h2 className='mb-6 text-3xl font-bold text-tc-tertiary dark:text-tc-secondary '>
              Our Website design
              <br />
              <span className='text-tc-primary'>process</span>
            </h2>
            <p className='text-[#c1c1c1] font-normal tracking-[0.4px] pr-[2px] text-[20px] '>
              Our web design expert team follows a bespoke process from the
              start to finish, providing you with the unique website design
              tailored to your specific requirements.
            </p>

            <div className='   gap-[10px] flex justify-between items-center cursor-pointer mt-6 flex-row'>
              <CustomButton
                text1=' KNOW MORE'
                isImage={true}
                bgInvert='tc-dark'
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
