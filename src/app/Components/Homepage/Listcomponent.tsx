'use client';

import { AnimatedList } from '@/components/ui/animated-list';
import { ReactNode } from 'react';

interface Item {
  name?: string;
  description?: string;
  icon?: ReactNode;
  color?: string;
  time?: string;
}

let notifications = [
  {
    name: 'Expertise and Innovation ',
    icon: (
      <svg
        width='30'
        height='38'
        viewBox='0 0 32 32'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M30.9995 16.172C30.9065 24.3808 24.2202 30.9907 15.9995 30.9907V25.6638C15.5159 25.7567 15.1068 25.8032 14.8278 25.8032C13.5537 25.8032 12.5122 24.7713 12.5122 23.4884C12.5122 22.2054 13.5444 21.1735 14.8278 21.1735C15.1068 21.1735 15.5252 21.22 15.9995 21.313C15.9995 21.313 15.9995 16.6647 15.9995 16.0604'
          className='text-tc-dark dark:text-white'
          stroke='currentColor'
          strokeWidth='2'
          strokeMiterlimit='15.48'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M6.32856 15.9952C6.23557 15.5118 6.18907 15.1028 6.18907 14.8239C6.18907 13.5502 7.22131 12.509 8.50463 12.509C9.78796 12.509 10.8202 13.541 10.8202 14.8239C10.8202 15.1028 10.7737 15.5211 10.6807 15.9952H16V21.3222C15.5164 21.2292 15.1072 21.1827 14.8283 21.1827C13.5542 21.1827 12.5127 22.2146 12.5127 23.4976C12.5127 24.7805 13.5449 25.8124 14.8283 25.8124C15.1072 25.8124 15.5257 25.7659 16 25.673V30.9999C7.71418 30.9906 1 24.2692 1 15.9952H6.32856Z'
          className='text-tc-dark dark:text-white'
          stroke='currentColor'
          strokeWidth='2'
          strokeMiterlimit='15.48'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M16.0093 15.7909C16.0093 15.9211 16.0093 15.9954 16.0093 15.9954H10.6807C10.7737 15.512 10.8202 15.103 10.8202 14.8241C10.8202 13.5504 9.78796 12.5092 8.50463 12.5092C7.22131 12.5092 6.18907 13.5411 6.18907 14.8241C6.18907 15.103 6.23557 15.5213 6.32856 15.9954H1C1.0093 7.86094 7.48169 1.25109 15.5536 1.01868'
          className='text-tc-dark dark:text-white'
          stroke='currentColor'
          strokeWidth='2'
          strokeMiterlimit='15.48'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M25.6714 15.9953C25.7644 16.4788 25.8109 16.8878 25.8109 17.1667C25.8109 18.4403 24.7787 19.4815 23.4954 19.4815C22.212 19.4815 21.1798 18.4496 21.1798 17.1667C21.1798 16.8878 21.2263 16.4695 21.3193 15.9953H16V10.6684C16.4836 10.7614 16.8927 10.8079 17.1717 10.8079C18.4458 10.8079 19.4873 9.77595 19.4873 8.49302C19.4873 7.2101 18.4551 6.17818 17.1717 6.17818C16.8927 6.17818 16.4743 6.22466 16 6.31763V1C24.2858 1 31 7.72141 31 15.9953H25.6714Z'
          stroke='#CBFB45'
          strokeWidth='2'
          strokeMiterlimit='15.48'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>
    ),
    color: '#00C9A7',
  },
  {
    name: 'Tailored Solutions',
    icon: (
      <svg
        width='30'
        height='38'
        viewBox='0 0 50 58'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <rect width='50' height='58' rx='5' fill='none' />
        <path
          d='M10.5586 37.1423H39.4293'
          className='text-[#B9FC00]'
          stroke='currentColor'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M26.6827 47.9064C34.1748 47.0734 40 40.7501 40 33.072C40 27.1097 36.4875 21.9642 31.4103 19.572C30.8789 19.3218 30.5335 18.7949 30.5335 18.209V14.0715H30.5682C31.302 14.0715 31.8968 13.4795 31.8968 12.7492V11.3222C31.8968 10.592 31.302 10 30.5682 10H19.5892C18.8554 10 18.2606 10.592 18.2606 11.3222V12.7492C18.2606 13.4795 18.8554 14.0715 19.5892 14.0715H19.6239V18.1053C19.6239 18.7044 19.2805 19.2546 18.7338 19.5048C13.5789 21.8665 10 27.0528 10 33.071C10 41.2719 16.6449 47.9268 24.8677 47.998C24.9116 47.998 24.9555 48 24.9995 48C25.0271 48 25.0547 48 25.0823 47.999C25.1262 47.999 25.1702 47.999 25.2151 47.999C25.6556 47.9949 26.092 47.9685 26.5222 47.9237C26.5284 47.9237 26.5355 47.9227 26.5416 47.9217C26.5897 47.9166 26.6367 47.9115 26.6837 47.9054L26.6827 47.9064Z'
          className='text-tc-dark dark:text-white'
          stroke='currentColor'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M35.9426 33.7148C35.6044 33.7148 35.3294 33.4412 35.3294 33.1045C35.3294 32.5238 35.2753 31.943 35.169 31.3775C35.1067 31.0459 35.3264 30.7276 35.6595 30.6655C35.9927 30.6035 36.3126 30.8221 36.3749 31.1537C36.4945 31.7925 36.5558 32.4495 36.5558 33.1045C36.5558 33.4412 36.2809 33.7148 35.9426 33.7148ZM34.6079 28.7442C34.3964 28.7442 34.19 28.6354 34.0765 28.4391C33.4235 27.3162 32.52 26.3174 31.4633 25.5515C31.1894 25.3532 31.1291 24.9718 31.3284 24.6992C31.5277 24.4266 31.911 24.3666 32.1848 24.5649C33.3785 25.4295 34.4005 26.5585 35.1383 27.8288C35.308 28.1207 35.2078 28.494 34.9145 28.6628C34.8174 28.7188 34.7122 28.7452 34.6079 28.7452V28.7442Z'
          className='text-tc-dark dark:text-white'
          fill='currentColor'
        />
      </svg>
    ),
    color: '#1E86FF',
  },
  {
    name: 'Expertise and Innovation ',
    icon: (
      <svg
        width='30'
        height='38'
        viewBox='0 0 32 32'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M30.9995 16.172C30.9065 24.3808 24.2202 30.9907 15.9995 30.9907V25.6638C15.5159 25.7567 15.1068 25.8032 14.8278 25.8032C13.5537 25.8032 12.5122 24.7713 12.5122 23.4884C12.5122 22.2054 13.5444 21.1735 14.8278 21.1735C15.1068 21.1735 15.5252 21.22 15.9995 21.313C15.9995 21.313 15.9995 16.6647 15.9995 16.0604'
          className='text-tc-dark dark:text-white'
          stroke='currentColor'
          strokeWidth='2'
          strokeMiterlimit='15.48'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M6.32856 15.9952C6.23557 15.5118 6.18907 15.1028 6.18907 14.8239C6.18907 13.5502 7.22131 12.509 8.50463 12.509C9.78796 12.509 10.8202 13.541 10.8202 14.8239C10.8202 15.1028 10.7737 15.5211 10.6807 15.9952H16V21.3222C15.5164 21.2292 15.1072 21.1827 14.8283 21.1827C13.5542 21.1827 12.5127 22.2146 12.5127 23.4976C12.5127 24.7805 13.5449 25.8124 14.8283 25.8124C15.1072 25.8124 15.5257 25.7659 16 25.673V30.9999C7.71418 30.9906 1 24.2692 1 15.9952H6.32856Z'
          className='text-tc-dark dark:text-white'
          stroke='currentColor'
          strokeWidth='2'
          strokeMiterlimit='15.48'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M16.0093 15.7909C16.0093 15.9211 16.0093 15.9954 16.0093 15.9954H10.6807C10.7737 15.512 10.8202 15.103 10.8202 14.8241C10.8202 13.5504 9.78796 12.5092 8.50463 12.5092C7.22131 12.5092 6.18907 13.5411 6.18907 14.8241C6.18907 15.103 6.23557 15.5213 6.32856 15.9954H1C1.0093 7.86094 7.48169 1.25109 15.5536 1.01868'
          className='text-tc-dark dark:text-white'
          stroke='currentColor'
          strokeWidth='2'
          strokeMiterlimit='15.48'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M25.6714 15.9953C25.7644 16.4788 25.8109 16.8878 25.8109 17.1667C25.8109 18.4403 24.7787 19.4815 23.4954 19.4815C22.212 19.4815 21.1798 18.4496 21.1798 17.1667C21.1798 16.8878 21.2263 16.4695 21.3193 15.9953H16V10.6684C16.4836 10.7614 16.8927 10.8079 17.1717 10.8079C18.4458 10.8079 19.4873 9.77595 19.4873 8.49302C19.4873 7.2101 18.4551 6.17818 17.1717 6.17818C16.8927 6.17818 16.4743 6.22466 16 6.31763V1C24.2858 1 31 7.72141 31 15.9953H25.6714Z'
          stroke='#CBFB45'
          strokeWidth='2'
          strokeMiterlimit='15.48'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>
    ),
    color: '#00C9A7',
  },
  {
    name: 'Tailored Solutions',
    icon: (
      <svg
        width='30'
        height='38'
        viewBox='0 0 50 58'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <rect width='50' height='58' rx='5' fill='none' />
        <path
          d='M10.5586 37.1423H39.4293'
          className='text-[#B9FC00]'
          stroke='currentColor'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M26.6827 47.9064C34.1748 47.0734 40 40.7501 40 33.072C40 27.1097 36.4875 21.9642 31.4103 19.572C30.8789 19.3218 30.5335 18.7949 30.5335 18.209V14.0715H30.5682C31.302 14.0715 31.8968 13.4795 31.8968 12.7492V11.3222C31.8968 10.592 31.302 10 30.5682 10H19.5892C18.8554 10 18.2606 10.592 18.2606 11.3222V12.7492C18.2606 13.4795 18.8554 14.0715 19.5892 14.0715H19.6239V18.1053C19.6239 18.7044 19.2805 19.2546 18.7338 19.5048C13.5789 21.8665 10 27.0528 10 33.071C10 41.2719 16.6449 47.9268 24.8677 47.998C24.9116 47.998 24.9555 48 24.9995 48C25.0271 48 25.0547 48 25.0823 47.999C25.1262 47.999 25.1702 47.999 25.2151 47.999C25.6556 47.9949 26.092 47.9685 26.5222 47.9237C26.5284 47.9237 26.5355 47.9227 26.5416 47.9217C26.5897 47.9166 26.6367 47.9115 26.6837 47.9054L26.6827 47.9064Z'
          className='text-tc-dark dark:text-white'
          stroke='currentColor'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M35.9426 33.7148C35.6044 33.7148 35.3294 33.4412 35.3294 33.1045C35.3294 32.5238 35.2753 31.943 35.169 31.3775C35.1067 31.0459 35.3264 30.7276 35.6595 30.6655C35.9927 30.6035 36.3126 30.8221 36.3749 31.1537C36.4945 31.7925 36.5558 32.4495 36.5558 33.1045C36.5558 33.4412 36.2809 33.7148 35.9426 33.7148ZM34.6079 28.7442C34.3964 28.7442 34.19 28.6354 34.0765 28.4391C33.4235 27.3162 32.52 26.3174 31.4633 25.5515C31.1894 25.3532 31.1291 24.9718 31.3284 24.6992C31.5277 24.4266 31.911 24.3666 32.1848 24.5649C33.3785 25.4295 34.4005 26.5585 35.1383 27.8288C35.308 28.1207 35.2078 28.494 34.9145 28.6628C34.8174 28.7188 34.7122 28.7452 34.6079 28.7452V28.7442Z'
          className='text-tc-dark dark:text-white'
          fill='currentColor'
        />
      </svg>
    ),
    color: '#1E86FF',
  },
];

notifications = Array.from({ length: 10 }, () => notifications).flat();

const Notification = ({ name, icon }: Item) => {
  return (
    <figure
      // className={cn(
      //   'relative h-fit w-full max-w-[440px] cursor-pointer overflow-hidden rounded-2xl gap-[20px]',
      //   // animation styles
      //   'transition-all duration-200 ease-in-out hover:scale-[103%]',
      //   // light styles
      //   'bg-[#DFDFDF] dark:bg-tc-tertiary [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]',
      //   // dark styles
      //   'transform-gpu  dark:backdrop-blur-md dark:[border:1px_solid_rgba(255,255,255,.1)] '
      // )}
    >
      <div className='flex flex-row items-center self-center px-6 py-8 h-[96px] w-[440px] gap-4'>
        <span className='text-lg bg-tc-light dark:bg-tc-dark  w-auto h-auto rounded-[5px] p-[10px] flex items-center justify-center'>
          {icon}
        </span>
        <div className='flex flex-col overflow-hidden'>
          <figcaption className='flex flex-row items-center whitespace-pre text-lg font-medium dark:text-tc-secondary '>
            <span className='lg:text-[24px] text-[16px] lg:leading-[29px] text-tc-tertiary dark:text-tc-secondary'>
              {name}
            </span>
          </figcaption>
        </div>
      </div>
    </figure>
  );
};

export function AnimatedListDemo({ className }: { className?: string }) {
  return (
    <div
      // className={cn(
      //   'relative flex h-[444px] w-full lg:w-[440px] flex-col  overflow-hidden rounded-lg  bg-transparent   ',
      //   className
      // )}
    >
      <AnimatedList>
        {notifications.map((item, idx) => (
          <Notification {...item} key={idx} />
        ))}
      </AnimatedList>
    </div>
  );
}
