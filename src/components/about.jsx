import React from 'react'

const About = () => {
  return (
    <div className='w-full h-screen '>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-[100%] grid grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8 pl-4'><p className='text-4xl font-bold inline border-b-4'>About
                </p>
                </div>
                <div></div>
            </div>
            <div className='max-w-[1000px] w-[100%] grid sm:grid-cols-2 gap-8 px-4' >
                <div className='text-4xl font-bold sm:text-right '>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                </div>
            </div>
            <div>lorem</div>
        </div>
        <div></div>
    </div>
  )
}

export default About