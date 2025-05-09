"use client"

import { motion } from "framer-motion";

// initial: { opacity: 0, y: 50 },
// animate: { opacity: 1, y: 0 },
// transition: { ease: "easeInOut", duration: 0.75 },
// };

// const fadeIn = {
// initial: { opacity: 0 },
// animate: { opacity: 1 },
// transition: { ease: "easeOut", duration: 0.75 },
// };

// const slideInFromLeft = {
// initial: { opacity: 0, x: -100 },
// animate: { opacity: 1, x: 0 },
// transition: { ease: "easeOut", duration: 0.75 },
// };

// const zoomIn = {
// initial: { opacity: 0, scale: 0.8 },
// animate: { opacity: 1, scale: 1 },
// transition: { ease: "easeInOut", duration: 0.75 },
// };

// const rotateAndFade = {
// initial: { opacity: 0, scale: 0.8  },
// animate: { opacity: 1, rotate: 0 },
// transition: { ease: "easeInOut", duration: 0.75 },
// };
export default function Template({children}){
return(
    <motion.div
      initial={{opacity: 0, scale: 0.8  }}
        animate={{ opacity: 1, scale: 1}}
        transition={{ease:"easeInOut",duration:0.75}}
    >
      {children}
    </motion.div>
)
}


// "use client";

// import { useEffect } from "react";
// import {animationPageIn} from "./animation"
// export default function Template({ children }) {
//   useEffect(()=>{
//     animationPageIn()
//   },[])
//   return (
//     <div>
//       <div
//         id="banner-1"
//         className="min-h-screen bg-neutral-950 z-10 fixed top-0 left-0 w-1/4"
//       ></div>
//       <div
//         id="banner-2"
//         className="min-h-screen bg-neutral-950 z-10 fixed top-0 left-1/4 w-1/4"
//       ></div>
//       <div
//         id="banner-3"
//         className="min-h-screen bg-neutral-950 z-10 fixed top-0 left-2/4 w-1/4"
//       ></div>
//       <div
//         id="banner-4"
//         className="min-h-screen bg-neutral-950 z-10 fixed top-0 left-3/4 w-1/4"
//       ></div>
//       {children}
//     </div>
//   );
// }







