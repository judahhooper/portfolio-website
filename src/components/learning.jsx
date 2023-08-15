import React from 'react';
import TS from "../resources/typescript.png";
import PHP from "../resources/php.png";
import NEXT from "../resources/next.png";

const Learning = () => {
  return (
    <div name="learning" className='bg-slate-700 text-slate-200 w-full h-screen'>
    <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
      <div ><p className='text-4xl py-4 font-bold border-b-4 border-[]'>This is what I'm learning.</p>
      </div>
      <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8 font-bold'>
      
      <div className='hover:scale-110 duration-500'><img className='w-20 mx-auto' src={TS} alt='js logo'/> <p className='my-4'>JavaScript</p></div>
      <div className='hover:scale-110 duration-500'><img className='w-20 mx-auto' src={PHP} alt='react logo'/> <p className='my-4'>React.js</p></div>
      <div className='hover:scale-110 duration-500'><img className='w-20 mx-auto' src={NEXT} alt='redux logo'/> <p className='my-4'>Redux.js</p></div>

      <div></div>
      </div>
    </div>
  </div>
  )
}

export default Learning