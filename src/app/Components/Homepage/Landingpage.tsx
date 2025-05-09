"use client";

import Typewriter from 'typewriter-effect'
import { motion } from 'framer-motion'
import Link from 'next/link';



export default function LandingPage() {
 
  
  const handleScrollToNext = () => {
    const serviceSection = document.getElementById("service-section");
    if (serviceSection) {
      serviceSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <section className=" h-screen  lg:h-[90vh]  flex justify-center items-center flex-col gap-10 w-full ">
      <h1 className="text-tc-dark text-center text-[35px] leading-[40px]  lg:text-[80px] lg:leading-[80px] lg:-tracking-[3px] font-valorant dark:text-tc-secondary">
      We craft best and<br className="hidden  lg:block" />affordable
        {/* <br className="block  lg:hidden" /> */}
       
        <span className="text-tc-primary">
          <Typewriter
            options={{
              strings: ['WEBSITE', 'MOBILE APP', 'GRAPHICS' , 'BRAND LOGO'],
              autoStart: true,
              loop: true,
            }}
          />
        </span>
      </h1>
      <Link href="/contact-us" className='text-black bg-[#B9FC00] hover:bg-[#232323] hover:text-[white] rounded-[24px] py-2 px-7 text-[20px] flex gap-3 justify-center items-center '>Book a Call
<svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg" className='mr-[-10px]'>
<rect x="0.5" width="32" height="32" rx="16" fill="#171717"/>
<path d="M16.5003 10.6665L15.5603 11.6065L19.2803 15.3332H11.167V16.6665H19.2803L15.5603 20.3932L16.5003 21.3332L21.8337 15.9998L16.5003 10.6665Z" fill="#CBFB45"/>
</svg>

</Link>
      {/* <div className='hidden lg:flex '>

      <BannerSlider />
      </div>
      <div className='block w-full lg:hidden '>
      <BannerMobile />

      </div> */}
       <motion.div
       onClick={handleScrollToNext}
        className="absolute bottom-10 animate-bounce"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <svg className="w-6 h-6 text-tc-primary" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </motion.div>

    
    </section>
  );
};

