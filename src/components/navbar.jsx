/* eslint-disable no-unused-vars */
import React, {useState} from 'react';
import {FaBars, FaTimes} from "react-icons/fa";

const NavBar = () => {

const [nav, setNav] = useState(false);

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-green-800 text-gray-300'>
        <div>
            <img src="" alt='' ></img>
        </div>

            <ul className='hidden md:flex'>
                <li>About</li>
                <li>Skills</li>
                <li>Experience</li>
                <li>Contact</li>
            </ul>

        {/* burger for mobile */}
        <div className='md:hidden z-10'><FaBars/></div>

        {/* mobile menu */}           
            <ul className='absolute top-0 left-0 w-full h-screen bg-green-800 flex flex-col justify-center items-center'>
                <li className='py-6 text-4xl'>About</li>
                <li className='py-6 text-4xl'>Skills</li>
                <li className='py-6 text-4xl'>Experience</li>
                <li className='py-6 text-4xl'>Contact</li>
            </ul>

        {/* socials */}
        <div className='hidden'></div>

    </div>
  )
}; 

export default NavBar;