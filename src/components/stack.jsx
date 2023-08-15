import React from 'react';
import CSS from "../resources/css.png";
import HTM from "../resources/html.png";
import JS from "../resources/js.png";
import REACT from "../resources/react.png";
import REDUX from "../resources/redux.png";
import TAILWIND from "../resources/tailwind.png";
import WORDPRESS from "../resources/wordpress.png";
import GITHUB from "../resources/github.png";




const Stack = () => {
  return (
    <div name="stack" className='bg-slate-700 text-slate-200 w-full h-screen'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div ><p className='text-4xl py-4 font-bold border-b-4 border-[]'>This is my regular stack.</p>
        </div>
        <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8 font-bold'>
        
        <div className='hover:scale-110 duration-500'><img className='w-20 mx-auto' src={JS} alt='js logo'/> <p className='my-4'>JavaScript</p></div>
        <div className='hover:scale-110 duration-500'><img className='w-20 mx-auto' src={REACT} alt='react logo'/> <p className='my-4'>React.js</p></div>
        <div className='hover:scale-110 duration-500'><img className='w-20 mx-auto' src={REDUX} alt='redux logo'/> <p className='my-4'>Redux.js</p></div>
        <div className='hover:scale-110 duration-500'><img className='w-20 mx-auto' src={TAILWIND} alt='tailwindcss logo'/> <p className='my-4'>Tailwind CSS</p></div>
        <div className='hover:scale-110 duration-500'><img className='w-20 mx-auto' src={WORDPRESS} alt='wordpress logo'/> <p className='my-4'>Wordpress</p></div>
        <div className='hover:scale-110 duration-500'><img className='w-20 mx-auto' src={HTM} alt='html logo'/> <p className='my-4'>HTML</p></div>
        <div className='hover:scale-110 duration-500'><img className='w-20 mx-auto' src={CSS} alt='css logo'/> <p className='my-4'>Vanilla CSS</p></div>
        <div className='hover:scale-110 duration-500'><img className='w-20 mx-auto' src={GITHUB} alt='github logo'/> <p className='my-4'>GitHub</p></div>
        <div></div>
        </div>
      </div>
    </div>
  )
}

export default Stack