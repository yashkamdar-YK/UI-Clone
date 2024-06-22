import React from 'react'

export const Cards = () => {
  return (
    <div className=' flex w-full h-screen bg-zinc-100 items-center px-[5rem] gap-5'> 
      <div className='cardcontainer h-[405px] w-1/2'>
        <div className='card relative w-full  rounded-xl h-full bg-[#004d43] flex items-center justify-center'>
        <img className='w-[160px]' src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" srcset="" />
        <button className='absolute px-6 border-[#cdea68] text-[#cdea68] py-1.5 border-2 rounded-3xl left-10 bottom-10'>©2022-2024</button>
        </div>
      </div>
      <div className='cardcontainer w-1/2 h-[405px] flex gap-5 '>
        <div className='card relative w-1/2 rounded-xl h-full  bg-[#212121] flex items-center justify-center'>
           <img className='w-[160px]' src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" /> 
           <button className='absolute px-6 border-zinc-400 text-zinc-200 uppercase font-semibold py-1.5 border-2 rounded-3xl left-8 text-[12px] bottom-10'>Rating 5.0 on Clutch</button>
        </div>
        <div className='card relative w-1/2 rounded-xl h-full bg-[#212121] flex items-center justify-center'>
        <img className='w-[160px]' src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" /> 
        <button className='absolute px-6 border-zinc-400 text-zinc-200 uppercase font-semibold py-1.5 border-2 rounded-3xl left-8 text-[12px] bottom-10'>Business Bootcamp Alumni</button>
        </div>
      </div>
    </div>
  )
}

export default Cards