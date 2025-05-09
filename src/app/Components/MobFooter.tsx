'use client';
import Lottie from 'react-lottie-player';
import robot from '../../../public/assets/Images/robot.json';
import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import logo from '../../../public/assets/logo.png';
type Props = {};

const MobFooter = (props: Props) => {
  return (
    <footer className='mb-[0.5rem]'>
      <div className='py-10 my-28  items-center bg-tc-tertiary rounded-[18px] relative hidden lg:flex'>
        {/* Left Section: Lottie Animation */}
        <div className='w-full '>
          <Lottie
            loop
            animationData={robot}
            play
            style={{ width: 500, height: 500 }}
            className=' absolute top-[-100px] left-10'
          />
        </div>

        {/* Right Section: Text and Button */}
        <div className='w-full flex flex-col justify-center gap-6 items-center !text-center'>
          <Link
            href='/contact-us'
            className='text-[50px] font-bold text-tc-tertiary dark:text-tc-secondary'
          >
            <span className='text-tc-primary'>Book a</span> CALL!!
          </Link>
          <p className='text-[#8B8B8B] text-[20px] text-center '>
            Personalized advice, tailored solutions, expert insights, and
            efficient communication for your needs. Book a call now!
          </p>
          <Link
            href='/contact-us'
            className='text-tc-primary bg-tc-dark rounded-[24px] py-3 px-8 text-[20px] max-w-[180px]'
          >
            Book a Call
          </Link>
        </div>
      </div>
      <div className='py-10 my-[28px]  items-center bg-tc-tertiary rounded-[18px]  flex lg:hidden flex-col'>
        {/* Left Section: Lottie Animation */}
        <div className='w-full flex justify-center items-center'>
          <Lottie
            loop
            animationData={robot}
            play
            style={{ width: 200, height: 200 }}
          />
        </div>

        {/* Right Section: Text and Button */}
        <div className='w-full flex flex-col justify-center gap-6 items-center p-5'>
          <Link
            href='/contact-us'
            className='foottxt1 text-[50px] font-bold text-tc-secondary'
          >
            <span className='text-tc-primary'>Book a</span> CALL!!
          </Link>
          <p className='text-[#8B8B8B] text-[20px] text-center'>
            Personalized advice, tailored solutions, expert insights, and
            efficient communication for your needs. Book a call now!
          </p>
          <Link
            href='/contact-us'
            className=' text-tc-primary bg-tc-dark rounded-[24px] py-3 px-8 text-[20px] max-w-[180px]'
          >
            Book a Call
          </Link>
        </div>
      </div>
      <div className=' flex flex-col md:flex-row justify-between items-center text-center md:text-left'>
        <Link className='flex items-center justify-center w-full' href='/'>
        <Image src={logo} width={50} height={50} alt="logo" />
          <span className='font-valorant text-tc-tertiary dark:text-tc-secondary text-[24px] ml-[10px]'>
         SOFTSELL
          </span>
        </Link>

        <div className='flex items-center justify-center'>
          <Link
            href='/terms-conditions'
            className='foottxt2 text-[#8B8B8B] hover:text-tc-dark dark:hover:text-tc-light text-[10px] font-normal leading-[19.5px] mt-[20px] mx-[20px]'
          >
            TERMS & CONDITIONS
          </Link>
          <Link
            href='/privacy-policy'
            className='foottxt2 text-[#8B8B8B] hover:text-tc-dark dark:hover:text-tc-light text-[10px] font-normal leading-[19.5px] mt-[20px] mx-[20px]'
          >
            PRIVACY POLICY
          </Link>
          <Link
            href='/contact-us'
            className='foottxt2 text-[#8B8B8B] hover:text-tc-dark dark:hover:text-tc-light text-[10px] font-normal leading-[19.5px] mt-[20px] mx-[20px]'
          >
            CONTACT US
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default MobFooter;
