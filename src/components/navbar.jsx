/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
import React, {useState} from 'react';
import {FaBars, FaTimes} from "react-icons/fa";
import { HiOutlineMail } from 'react-icons/hi';


const NavBar = () => {

const [nav, setNav] = useState(false);

const handleClick = () => setNav(!nav);

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#566e3d] text-slate-300 z-10'>
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
            <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#566e3d] flex flex-col justify-center items-center'}>
                <li className='py-6 text-4xl'>About</li>
                <li className='py-6 text-4xl'>Skills</li>
                <li className='py-6 text-4xl'>Experience</li>
                <li className='py-6 text-4xl'>Contact</li>
            </ul>

    </div>
  )
}; 

export default NavBar;