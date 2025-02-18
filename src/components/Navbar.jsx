// i used the racfe snippet to create this function

import logo from "../assets/kevinRushLogo.png"
import React from 'react'
import { FaLinkedin} from "react-icons/fa"
import { FaGithub } from "react-icons/fa6";


const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between"> 
        <div className="flex flex-shrink-0 items-center text-3xl font-light">
            {/*<img className="mx-2 w-10" src={logo} alt="logo"/> */}
            Grendlee
        </div>
        <div className="m-8 flex items-center justify-center gap-4 text-3xl">
            <FaLinkedin />
            <FaGithub />
        </div>

    </nav>
  )
}

export default Navbar