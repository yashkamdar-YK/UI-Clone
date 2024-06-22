import React from 'react'

export const About = () => {
  return (
    <div className='w-full p-20 rounded-tl-3xl rounded-tr-3xl bg-[#cdea68] text-black'>
        <h1 className='font-["Neue_Montreal"] text-[3.5vw] leading-[53px] tracking-[2px] '>
        Ochi is a strategic partner for fast-growing tech
        businesses that need to raise funds, sell products,
        explain complex ideas, and hire great people.
        </h1>
        <div className='w-full flex gap-4 border-t-[2px] mt-20 pt-10 border-[#a1b562]'>
            <div className='w-1/2 '>
                <h1 className='text-[3.5vw] font-normal '>Our approach:</h1>
                <button className='px-10 py-6 bg-zinc-900 mt-5 rounded-full text-white text-[16px] font-semibold leading-[5px]'>READ MORE</button>
            </div>
            <div className='w-1/2 h-[70vh] bg-[#b0c859] rounded-3xl overflow-hidden '>
              <img className='w-full h-full bg-cover' src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg" />
            </div>
        </div>
    </div>

  )
}

export default About