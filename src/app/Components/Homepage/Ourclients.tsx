'use client';

import { motion } from 'framer-motion';
import Image, { StaticImageData } from 'next/image';
import Mint from '../../../../public/assets/Images/clients/logo/MintW.png';
import Parma from '../../../../public/assets/Images/clients/logo/parmaAcademy.png';
import Rafa from '../../../../public/assets/Images/clients/logo/rafaW.png';
import Symbians from '../../../../public/assets/Images/clients/logo/symbians_logo.png';
import Sneaker from '../../../../public/assets/Images/clients/logo/the_sneaker_fly.png';

type Company = {
  id: number;
  img: StaticImageData;
  name: string;
};

const OurclientsData: Company[] = [
  { id: 1, img: Mint, name: 'MINT TAKEAWAY' },
  { id: 2, img: Parma, name: 'PARMA ACADEMY' },
  { id: 3, img: Symbians, name: 'SYMBIANS SPORTS' },
  { id: 4, img: Rafa, name: 'RAFA INDIA' },
  { id: 5, img: Sneaker, name: '' },
  { id: 6, img: Mint, name: 'MINT TAKEAWAY' },
  { id: 7, img: Parma, name: 'PARMA ACADEMY' },
  { id: 8, img: Rafa, name: 'RAFA INDIA' },
  { id: 9, img: Sneaker, name: '' },
  { id: 10, img: Mint, name: 'MINT TAKEAWAY' },
  { id: 11, img: Parma, name: 'PARMA ACADEMY' },
  { id: 12, img: Rafa, name: 'RAFA INDIA' },
  { id: 13, img: Sneaker, name: '' },
];

const OurClients = () => {
  return (
    <div className='overflow-hidden py-[44px] mx-[10px] lg:-mx-[160px]'>
      <div className='scroll-container  lg:gap-[137.18px]'>
        {OurclientsData.map((company) => (
          <motion.div
            key={company.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              opacity: { duration: 0.2 },
            }}
            className='flex flex-row justify-center text-center self-center gap-1 lg:gap-[10px] px-4 '
          >
            <div className='w-[53px] h-[50px] lg:w-[106px] lg:h-[100px]'>
              <Image src={company.img} alt={company.name} loading='eager' />
            </div>

            <p className='font-montserrat text-[15px] lg:text-[20px]  font-medium leading-normal text-center self-center text-tc-dark dark:text-tc-light'>
              {company.name}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default OurClients;
