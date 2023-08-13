import React from 'react'
import {HiArrowNarrowRight} from "react-icons/hi";


const Home = () => {
  return (
    <div className='w-full h-screen bg-[#C7C7A6]'>

    {/* container */}
    <div className='max-w-[1000px] mx-auto px-8 flex-col justify-center h-full'>
        <p className='text-[#BF5700]'>My name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold]'>Judah Hooper.</h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-slate-800'>I'm looking for work as a junior front-end developer.</h2>
        <p className='text-slate-800 py-4 max-w-[700px]'>I'm a self taught dev, focussed on developing engaging and interesting full-stack applications. </p>
        
    </div>

{/* allow button to be styled independently */}
    <div>
        <button className='text-slate-800'>See what I've made <HiArrowNarrowRight/></button>
    </div>
    
    </div>
  )
};

export default Home;