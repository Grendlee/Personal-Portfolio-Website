import { FaReact } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { TiHtml5 } from "react-icons/ti";
import { SiCplusplus } from "react-icons/si";
import React from 'react';
import badge from '../assets/microsoft-certified-fundamentals-badge.svg';




const Certifications = () => {
  return (
    <div className="border-t border-neutral-800 my-14">
        <h2 className="my-10 text-center text-4xl">Certifications</h2>
        <div className="flex items-center justify-center">
          <a 
            href="https://learn.microsoft.com/api/credentials/share/en-us/GrantleyKuo-2723/14CA6B3EC7733B0A?sharingId=272BD99956A60F80" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <img 
              src={badge} 
              alt="Microsoft Certified Fundamentals Badge" 
              className="w-40 h-auto hover:brightness-150 transition duration-300"
            />
          </a>
        </div>
                {/* https://learn.microsoft.com/api/credentials/share/en-us/GrantleyKuo-2723/14CA6B3EC7733B0A?sharingId=272BD99956A60F80 */}
            
    </div>
  )
}

export default Certifications