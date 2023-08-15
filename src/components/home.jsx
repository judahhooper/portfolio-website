import React from 'react'
import {HiArrowNarrowRight} from "react-icons/hi";
import TypeWriterEffect from "react-typewriter-effect";



const Home = () => {
  return (
    <div name="home" className='relative w-full h-screen bg-[#C7C7A6] overflow-hidden z-0'>

    {/* container */}
    <div className='max-w-[1000px] mx-auto px-8 flex-col justify-center h-full translate-y-[30%] top-[50] md:translate-x-[-25%] z-10'>
        <p className='text-[#BF5700] pt-4 font-bold'>My name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold] py-4'><TypeWriterEffect startDelay={100} text="Judah Hooper." typeSpeed={75} stop/></h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-slate-800 py-4'>I'm looking for work as a junior developer.</h2>
        <p className='text-slate-800 py-4 max-w-[700px]'>I'm a self taught dev, developing engaging and interesting web applications in my free time. Thanks for being here, please stay a while.</p>
        <div>
        <button className='text-slate-800 group border-2 px-6 py-3 my-2 border-slate-200 flex items-center hover:bg-[#BF5700] hover:text-slate-200 hover:border-slate-700 '>See what I've made
        <span className='group-hover:rotate-90 duration-300'><HiArrowNarrowRight className='ml-2'/></span>
        </button>
    </div>
    </div>
    </div>
  )
};

export default Home;