import React from 'react';
import KC from "../resources/kc.png"

const Work = () => {
  return (
    <div className='bg-[#C7C7A6] w-full md:h-screen text-slate-700' name="work">
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 text-slate-700'>Work</p>
                <p className='py-6'>See some of my recent projects</p>
            </div>

            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
                <div  style={{backgroundImage: `url(${KC})`}} className='group container rounded-md flex justify-center items-center mx-auto content-div'>
                    <div className='opacity-0 group-hover:opacity-100 duration-400'>
                        <span className='text-2xl font-bold text-slate-200 tracking tracking-wider m-5px'>
                        Kingdom Company Website
                        </span>
                        <div className='pt-8 text-center'>
                            <a href='/'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 text-slate-200 font-bold text-lg'>View Site</button>
                            </a>
                            <a href='/'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 text-slate-200 text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Work;