import { motion } from 'framer-motion'
import React from 'react'
function Marquee() {
  return (
    <div data-scroll data-section data-scroll-speed=".1" className='w-full py-20 rounded-tl-3xl rounded-tr-3xl bg-[#004d43]'>
        <div className='text border-t-2 border-b-2 border-zinc-300 flex  overflow-hidden whitespace-nowrap'>
            <motion.h1 initial={{x: 0}} animate={{x: "-100%"}} transition={{ease: "linear", repeat: Infinity, duration: 5}} className='text-[17vw] leading-none font-bold pr-20 -mt-[1rem]'>
              WE ARE OCHI
            </motion.h1>
            <motion.h1 initial={{x: 0}} animate={{x: "-100%"}} transition={{ease: "linear", repeat: Infinity, duration: 5}} className='text-[17vw] leading-none font-bold pr-20 -mt-[1rem]'>
              WE ARE OCHI
            </motion.h1>
        </div>
    </div>
  )
}

export default Marquee