import React, { useEffect, useState } from 'react';

function Eyes() {
  const [rotate, setRotate] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      let mouseX = e.clientX;
      let mouseY = e.clientY;

      let deltaX = mouseX - window.innerWidth / 2;
      let deltaY = mouseY - window.innerHeight / 2;

      var angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
      setRotate(angle - 180);
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className='eyes w-full h-screen overflow-hidden'>
      <div data-scroll  data-scroll-speed="-.6" className='relative w-full h-full bg-center bg-cover bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg")]'>
        <div className='flex absolute top-[40%] left-1/2 -translate-x-[50%] -translate-y-[50%] gap-10'>
          <div className='flex items-center justify-center w-[15vw] h-[15vw] rounded-full bg-zinc-100'>
            <div className='relative w-2/3 h-2/3 rounded-full bg-zinc-900'>
              <div
                style={{ transform: `translate(-50%, -50%) rotate(${rotate}deg)` }}
                className='line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]  w-full h-7'
              >
                <div className='w-7 h-7 rounded-full bg-zinc-100'></div>
              </div>
            </div>
          </div>
          <div className='flex items-center justify-center w-[15vw] h-[15vw] rounded-full bg-zinc-100'>
            <div className='relative w-2/3 h-2/3 rounded-full bg-zinc-900'>
              <div
                style={{ transform: `translate(-50%, -50%) rotate(${rotate}deg)` }}
                className='line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]  w-full h-7'
              >
                <div className='w-7 h-7 rounded-full bg-zinc-100'></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Eyes;
