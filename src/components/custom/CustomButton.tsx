import React from 'react';
import Link from 'next/link';
interface ButttonProps {
  text1: string;
  isImage: boolean;
  bgInvert: string;
  link?: string;
  openLinkToNewTab?: boolean;
}

const CustomButton: React.FC<ButttonProps> = ({
  text1,
  isImage,
  bgInvert,
  link,
}) => {
  return (
    <>
      <Link
        href={link ? link : '/contact-us'}
        target={link ? '_blank' : '_self'}
        className={` customBtn bg-tc-primary  text-tc-dark rounded-[24px] py-[10px] px-[20px] text-[16px] font-semibold flex gap-3 justify-center items-center w-[195px] h-[52px] relative z-20`}
      >
        {text1}
        {isImage ? (
          <>
            {' '}
            <svg
              width='33'
              height='32'
              viewBox='0 0 33 32'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
              className='mr-[-10px] arrowBtn'
            >
              <rect x='0.5' width='32' height='32' rx='16' fill='#171717' />
              <path
                d='M16.5003 10.6665L15.5603 11.6065L19.2803 15.3332H11.167V16.6665H19.2803L15.5603 20.3932L16.5003 21.3332L21.8337 15.9998L16.5003 10.6665Z'
                fill='#CBFB45'
              />
            </svg>
          </>
        ) : (
          <></>
        )}
      </Link>
    </>
  );
};

export default CustomButton;
