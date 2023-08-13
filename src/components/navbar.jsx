import React from 'react';
import {FaBars, FaTimes} from "react-icons/fa";

export default function NavBar() {
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-green-800 text-gray-300'>
        <div>
            <img src="" alt='Logo' ></img> hello
        </div>
        <div>
            <ul className='flex '>
                <li>About</li>
                <li>Skills</li>
                <li>Experience</li>
                <li>Contact</li>
            </ul>
        </div>

        {/* burger for mobile */}
        <div className='hidden'><FaBars/></div>

        {/* mobile menu */}
        <div className='hidden'>            
            <ul>
                <li>About</li>
                <li>Skills</li>
                <li>Experience</li>
                <li>Contact</li>
            </ul>
        </div>

        {/* socials */}
        <div></div>

    </div>
  )
}; 