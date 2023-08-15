/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
import React, {useState} from 'react';
import {FaBars, FaTimes} from "react-icons/fa";
import { HiOutlineMail } from 'react-icons/hi';
import { Link } from "react-scroll";



const NavBar = () => {

const [nav, setNav] = useState(false);

const handleClick = () => setNav(!nav);

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#566e3d] text-slate-300 z-10'>
        <div>
            <img src="" alt='' ></img>
        </div>

            <ul className='hidden md:flex'>
                <li><Link to="home" smooth={true} duration={500}>
                Home
                </Link></li>
                <li><Link to="about" smooth={true} duration={500}>
                About
                </Link></li>
                <li><Link to="stack" smooth={true} duration={500}>
                Skills
                </Link></li>
                <li><Link to="contact" smooth={true} duration={500}>
                Contact
                </Link></li>
            </ul>

        {/* burger for mobile */}
        <div onClick={handleClick} className='md:hidden z-10'>{!nav ? <FaBars/> : <FaTimes/>}</div>

        {/* mobile menu */}           
            <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#566e3d] flex flex-col justify-center items-center'}>
                <li className='py-6 text-4xl'><Link onClick={handleClick} to="home" smooth={true} duration={500}>
                Home
                </Link></li>
                <li className='py-6 text-4xl'><Link onClick={handleClick} to="about" smooth={true} duration={500}>
                About
                </Link></li>
                <li className='py-6 text-4xl'><Link onClick={handleClick} to="stack" smooth={true} duration={500}>
                Skills
                </Link></li>
                <li className='py-6 text-4xl'><Link onClick={handleClick} to="contact" smooth={true} duration={500}>
                Contact
                </Link></li>
            </ul>

    </div>
  )
}; 

export default NavBar;