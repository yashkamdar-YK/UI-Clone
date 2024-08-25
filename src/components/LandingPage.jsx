import { motion } from 'framer-motion';
import React from 'react'
import { FaArrowUpLong } from "react-icons/fa6";

function LandingPage() {
  
  return (
    <div data-scroll data-section data-scroll-speed="-.3" className='w-full h-screen bg-zinc-900 pt-1'>
        <div className='textstructure mt-44 px-20'>
          {["We Create", "Eye-opening", "presentations"] .map((item, index)=>{
            return (
            <div className='masker overflow-hidden'>
              <div className='w-fit flex'>
                {index === 1 && <motion.div initial={{width:0}} animate={{width:"9vw"}} transition={{ease:[0.76, 0, 0.24, 1],duration: 1}} className='w-[9vw] h-[5vw] relative -bottom-[1vw] bg-red-500 bg-[url("./tag.jpg")] bg-cover rounded-md'>
                                </motion.div>}
                <h1 className='uppercase text-[6.5vw] leading-[92px] tracking-tighter font-[founders_Grotesk]
                '>
                {item}
                </h1>
              </div>
            </div>
            );
          }) }
        </div>

        <div className='border-t-[1px] border-zinc-800 mt-24 flex item-center justify-between py-5 px-20'>
          {["For public and private companies","From the first pitch to IPO"] .map((item, index)=> (
            <p className='text-md font-light tracking-tight leading-none'>{item}</p>
            ))}

            <div className='start flex items-center gap-5'>
              <div className='px-6 py-1.5 border-[1px] border-zinc-400 font-light text-md rounded-full'>START THE PROJECT</div>
              <div className='w-10 h-10 border-[1px] border-zinc-400 rounded-full flex items-center justify-center'>
                <span className='rotate-[45deg]'>
                <FaArrowUpLong/>
                </span>
              </div>

            </div>
          
        </div>
    </div>
  )
}

export default LandingPage