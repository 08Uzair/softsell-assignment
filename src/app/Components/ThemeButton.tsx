import React from 'react';
import { createContext, useContext, useEffect, useState } from 'react';

type Props = {};

const ThemeContext = createContext({} as any);

export const useThemeCtx = () => useContext(ThemeContext);

const ThemeButton = (props: Props) => {
  const [theme, setTheme] = useState(
    typeof window !== 'undefined' && window?.localStorage.getItem('theme')
      ? window?.localStorage.getItem('theme')
      : 'dark'
  );

  useEffect(() => {
    if (theme === 'light') {
      document.documentElement.classList.remove('dark');
    } else if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    }
    localStorage.setItem('theme', theme as any);
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  };

  return (
    <section className=' mb-[-8px]'>
      <button
        style={{
          transition: 'all .4s ease',
        }}
        className='dark:rotate-180 '
        onClick={() => toggleTheme()}
        aria-label='themebutton'
      >
        <svg
          width='24'
          height='24'
          className='layoutmd:w-[32px] layoutmd:h-[32px] fill-white'
          viewBox='0 0 32 32'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M16 9.6C14.3026 9.6 12.6747 10.2743 11.4745 11.4745C10.2743 12.6748 9.6 14.3026 9.6 16C9.6 17.6974 10.2743 19.3253 11.4745 20.5255C12.6747 21.7257 14.3026 22.4 16 22.4L16 9.6Z'
            fill='#333333'
            className='dark:fill-white'
          />
          <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M16 32C24.8368 32 32 24.8368 32 16C32 7.1632 24.8368 0 16 0C7.1632 0 0 7.1632 0 16C0 24.8368 7.1632 32 16 32ZM16 28.8V22.4C17.6974 22.4 19.3253 21.7257 20.5255 20.5255C21.7257 19.3253 22.4 17.6974 22.4 16C22.4 14.3026 21.7257 12.6747 20.5255 11.4745C19.3253 10.2743 17.6974 9.6 16 9.6V3.2C12.6052 3.2 9.3495 4.54857 6.94903 6.94903C4.54857 9.3495 3.2 12.6052 3.2 16C3.2 19.3948 4.54857 22.6505 6.94903 25.051C9.3495 27.4514 12.6052 28.8 16 28.8Z'
            fill='#333333'
            className='dark:fill-white'
          />
        </svg>
      </button>
    </section>
  );
};

export default ThemeButton;
