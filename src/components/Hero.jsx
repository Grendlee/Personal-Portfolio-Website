import React from 'react';
import { Typewriter } from "react-simple-typewriter";
import { HERO_CONTENT } from '../constants';
import profilePic from "../assets/me.jpg";

const Hero = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center px-10 space-x-0 lg:space-x-8">
        {/* Left Section: Heading and Paragraph */}
        <div className="flex flex-col text-center lg:text-left max-w-lg">
            {/* Static Title */}
            <h1 className="text-4xl py-4 font-normal">
                Hi, I'm Grant!
            </h1>


            <p className="mt-4">{HERO_CONTENT}</p>
            
        </div>

        {/* Right Section: Profile Image */}
        <div className="order-first lg:order-last">
            <img src={profilePic} alt="profilePhoto" className="w-80 h-80 rounded-full object-cover" />
        </div>
    </div>
  );
}

export default Hero;
