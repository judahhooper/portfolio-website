/* eslint-disable no-unused-vars */
import React, {useState} from 'react';
import {FaBars, FaTimes,FaGithub,FaLinkedin} from "react-icons/fa";
import { HiOutlineMail } from 'react-icons/hi';

const NavBar = () => {

const [nav, setNav] = useState(false);

const handleClick = () => setNav(!nav);

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
        <div onClick={handleClick} className='md:hidden z-10'>{!nav ? <FaBars/> : <FaTimes/>}</div>

        {/* mobile menu */}           
            <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-green-800 flex flex-col justify-center items-center'}>
                <li className='py-6 text-4xl'>About</li>
                <li className='py-6 text-4xl'>Skills</li>
                <li className='py-6 text-4xl'>Experience</li>
                <li className='py-6 text-4xl'>Contact</li>
            </ul>

        {/* socials */}
        <div className='flex fixed flex-col top-[35%] left-0'>
            <ul>
                <li></li>
            </ul>
        </div>

    </div>
  )
}; 

export default NavBar;