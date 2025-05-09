'use client'

import { useState, useEffect } from 'react'
// import { LaptopFrame } from '@/app/Components/laptop-frame'
import { motion, AnimatePresence } from 'framer-motion'

const screenshots = [
  {
    id: 1,
   image: '/assets/Images/homescreen.png',
    title: 'Assignment Platform'
  },
  {
    id: 2,
    image: '/assets/Images/homescreen.png',
    title: 'Dashboard View'
  },
  {
    id: 3,
   image: '/assets/Images/homescreen.png',
    title: 'Analytics Screen'
  }
]

export default function BannerSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const previousIndex = (currentIndex - 1 + screenshots.length) % screenshots.length
  const nextIndex = (currentIndex + 1) % screenshots.length

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((current) => (current + 1) % screenshots.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <main className="w-full overflow-hidden z-10">
      <div className="relative w-full max-w-[3000px] mx-auto py-16">
        <div className="flex items-center justify-center">
          {/* Previous Image */}
          <motion.div
            key={`prev-${previousIndex}`}
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ duration: 1 }}
            className="block w-[45%]   mr-0 lg:mr-[-400px]"
          >
            {/* <Image
              src={screenshots[previousIndex].image}
              alt="Previous"
              className="w-full h-full object-cover rounded-xl opacity-50"
              width="100%"
            /> */}
          </motion.div>

          {/* Main Laptop Frame */}
          <div className="w-full md:w-[65%] z-10 px-4 md:px-0">
            {/* <LaptopFrame> */}
              <AnimatePresence>
                <motion.div
                  key={`main-${currentIndex}`}
                  initial={{ x: '100%' }}
                  animate={{ x: 0 }}
                  exit={{ x: '-100%' }}
                  transition={{ duration: 1 }}
                  className="absolute inset-0"
                >
                  <img
                    src={screenshots[currentIndex].image}
                    alt={screenshots[currentIndex].title}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </AnimatePresence>
            {/* </LaptopFrame> */}
          </div>

          {/* Next Image */}
          <motion.div
            key={`next-${nextIndex}`}
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ duration: 1 }}
            className="block w-[45%] ml-[-400px]"
          >
            <img
              src={screenshots[nextIndex].image}
              alt="Next"
              className="w-full h-full object-cover rounded-xl opacity-50"
            />
          </motion.div>
        </div>
      </div>
    </main>
  )
}
