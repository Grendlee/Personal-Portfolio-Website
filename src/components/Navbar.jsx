import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

const iconShake = {
  animate: {
    rotate: [0, -18, 18, -18, 18, 0],
    transition: { repeat: Infinity, duration: 1.5 },
  },
};

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between px-10 py-5"> 
        <div className="flex flex-shrink-0 items-center pr-4 text-3xl font-light">
            {/* Logo or Name */}
            Grendlee
        </div>
        

            
        {/* Social Icons (Aligned to the Right) */}

        
        <div className="text-blue-600 flex items-center gap-6 text-3xl">
            {/* Email (Always Shaking + "Email me!") */}
            <a
                href="mailto:grantley_kuo@sfu.ca"
                className="flex items-center gap-2 hover:brightness-150 transition duration-300"
                >
                <motion.div animate="animate" variants={iconShake}>
                    <FaEnvelope className="text-5xl"/>
                </motion.div>
                <span className="hidden sm:block text-xl font-medium whitespace-nowrap">Email me here!</span>
            </a>
            
            {/* LinkedIn */}
            <a
                href="https://www.linkedin.com/in/grantleyk/"
                className="flex items-center gap-2 hover:brightness-150 transition duration-300"
                target="_blank"
                rel="noopener noreferrer"
                >
                <FaLinkedin />
                <span className="hidden sm:block text-xl font-medium">LinkedIn</span>
            </a>

            {/* GitHub */}
            <a
            href="https://github.com/grendlee"
            className="flex items-center gap-2 hover:brightness-150 transition duration-300"
            target="_blank"
            rel="noopener noreferrer"
            >
            <FaGithub />
            <span className="hidden md:block text-xl font-medium">GitHub</span>
            </a>

        
      </div>
    </nav>
  );
};

export default Navbar;
