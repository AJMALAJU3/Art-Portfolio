import React from 'react'
import { FaInstagram, FaTwitter, FaPhone, FaLinkedin, FaFacebook, FaWhatsapp ,FaGithub  } from "react-icons/fa";
function SocialCards() {
  return (
    <>
  <div 
    class=" w-44 h-48 bg-gradient-to-b from-white/20 to-transparent border border-white/10 shadow-xl flex justify-center items-center  duration-500 rounded-lg  backdrop-blur-[10px] "
    data-text="Github"
  >
    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
        <FaInstagram className="text-3xl text-pink-600 hover:text-pink-800" />
      </a>
  </div>

  <div 
    class=" w-44 h-48 bg-gradient-to-b from-white/20 to-transparent border border-white/10 shadow-xl flex justify-center items-center  duration-500 rounded-lg  backdrop-blur-[10px] "
    data-text="Github"
  >
    <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
        <FaTwitter className="text-3xl text-blue-500 hover:text-blue-700" />
      </a>
  </div>

  

  <div 
    class=" w-44 h-48 bg-gradient-to-b from-white/20 to-transparent border border-white/10 shadow-xl flex justify-center items-center  duration-500 rounded-lg  backdrop-blur-[10px] "
    data-text="Github"
  >
    <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
        <FaLinkedin className="text-3xl text-blue-700 hover:text-blue-900" />
      </a>
  </div>
  <div 
    class=" w-44 h-48 bg-gradient-to-b from-white/20 to-transparent border border-white/10 shadow-xl flex justify-center items-center  duration-500 rounded-lg  backdrop-blur-[10px] "
    data-text="Github"
  >
    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
        <FaFacebook className="text-3xl text-blue-600 hover:text-blue-800" />
      </a>
  </div>
  
  <div 
    class=" w-44 h-48 bg-gradient-to-b from-white/20 to-transparent border border-white/10 shadow-xl flex justify-center items-center  duration-500 rounded-lg  backdrop-blur-[10px] "
    data-text="Github"
  >
     <a href="https://github.com" target="_blank" rel="noopener noreferrer">
        <FaGithub className="text-3xl text-black hover:text-gray-700" />
      </a>
  </div>
  

  </>
  )
}

export default SocialCards
