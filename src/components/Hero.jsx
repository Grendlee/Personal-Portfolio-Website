import React from 'react'
import { HERO_CONTENT } from '../constants';
import profilePic from "../assets/me.jpg";

const Hero = () => {
  return (
    
    <div className="flex items-center justify-center px-10 space-x-8">
        {/* Left Section: Heading and Paragraph */}
        <div className="flex flex-col text-left max-w-lg">
            <h1 className="text-5xl font-normal text-center">Hi, I'm Grant!</h1>
            <p className="mt-4">{HERO_CONTENT}</p>
        </div>

        {/* Right Section: Profile Image */}
        <div>
            <img src={profilePic} alt="profilePhoto" className="w-80 h-80 rounded-full object-cover" />
        </div>
    </div>

    
  )
}

export default Hero