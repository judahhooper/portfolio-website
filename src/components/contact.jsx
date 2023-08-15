import React from 'react'

const Contact = () => {
  return (
    <div name="contact" className='w-full h-screen bg-[#BF5700] flex justify-center items-center p-4 '>
        <form action="https://getform.io/f/bb8c5034-0c40-4103-8735-e814897ca2d8" className='flex flex-col m-w-[600px] w-full' method='POST'>
            <div className='pb-8'>
                <p className='text-4xl bont-bold inline border-b-4 text-slate-800'>Drop me a message</p>
                <p className='text-slate-700 py-4'>judahhooper@icloud.com</p>
            </div>
            <input className='bg-[] p-2' type='text' placeholder='Name' name="name"/>
            <input className="my-4 p-2 bg-[]" type='text' placeholder='Email' name="email"/>
            <textarea className='bg-[] p-2' name="message" rows="10" placeholder='Message'></textarea>
            <button className='text-slate-800 hover:bg-slate-700 hover:text-slate-200 hover:border-slate-200 border-2 px-4 py-3 my-8 mx-auto flex items-center'>Contact</button>
        </form>
    </div>
  )
}

export default Contact