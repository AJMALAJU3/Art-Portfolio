import React from 'react'
import { FaInstagram, FaTwitter, FaLinkedin, FaGithub  } from "react-icons/fa";
function SocialCards() {
  return (
    <>
  
  <div 
    class=" w-44 h-48  group bg-gradient-to-b from-white/20 to-transparent border border-white/10 shadow-xl flex justify-center items-center  duration-500 rounded-lg  backdrop-blur-[10px] "
    data-text="Github"
  >
    <a href="https://www.instagram.com/ajmal_cxbrx" target="_blank" rel="noopener noreferrer" className='items-center flex flex-col'>
        <FaInstagram className="text-3xl group-hover:-translate-y-6 group-hover:scale-125 duration-300 text-pink-600 hover:text-pink-800 " />
        <p className=' translate-y-6  group-hover:-translate-y-0 font-semibold text-sm duration-300 group-hover:scale-110'>Art Page</p>
        <p className='opacity-0 translate-y-16 h-0 group-hover:opacity-100 group-hover:translate-y-2 duration-300 group-hover:scale-110 text-blue-500'>@ajmal_cxbrx </p>
      </a>
  </div>
  
  
  <div 
    class=" w-44 h-48  group bg-gradient-to-b from-white/20 to-transparent border border-white/10 shadow-xl flex justify-center items-center  duration-500 rounded-lg  backdrop-blur-[10px] "
    data-text="Github"
  >
    <a href="https://www.instagram.com/_aajma1.in" target="_blank" rel="noopener noreferrer" className='items-center flex flex-col'>
        <FaInstagram className="text-3xl group-hover:-translate-y-6 group-hover:scale-125 duration-300 text-pink-600 hover:text-pink-800 " />
        <p className=' translate-y-6  group-hover:-translate-y-0 font-semibold text-sm duration-300 group-hover:scale-110'>Private Page</p>
        <p className='opacity-0 translate-y-16 h-0 group-hover:opacity-100 group-hover:translate-y-2 duration-300 group-hover:scale-110 text-blue-500'>@_aajma1.in </p>
      </a>
  </div>

  <div 
    class=" w-44 h-48  group bg-gradient-to-b from-white/20 to-transparent border border-white/10 shadow-xl flex justify-center items-center  duration-500 rounded-lg  backdrop-blur-[10px] "
    data-text="Github"
  >
    <a href="https://x.com/AJMAL_AJU_3" target="_blank" rel="noopener noreferrer" className='items-center flex flex-col'>
    <FaTwitter className="text-3xl group-hover:-translate-y-6 group-hover:scale-125 duration-300 text-blue-500 hover:text-blue-700" />
        <p className=' translate-y-6  group-hover:-translate-y-0 font-semibold text-sm duration-300 group-hover:scale-110'>Twitter</p>
        <p className='opacity-0 translate-y-16 h-0 group-hover:opacity-100 group-hover:translate-y-2 duration-300 group-hover:scale-110 text-blue-500'>@ajmal_aju_3</p>
      </a>
  </div>
  
  <div 
    class=" w-44 h-48  group bg-gradient-to-b from-white/20 to-transparent border border-white/10 shadow-xl flex justify-center items-center  duration-500 rounded-lg  backdrop-blur-[10px] "
    data-text="Github"
  >
    <a href="https://www.linkedin.com/in/ajmal-ta/" target="_blank" rel="noopener noreferrer" className='items-center flex flex-col'>
    <FaLinkedin className="text-3xl group-hover:-translate-y-6 group-hover:scale-125 duration-300 text-blue-700 hover:text-blue-900" />
        <p className=' translate-y-6  group-hover:-translate-y-0 font-semibold text-sm duration-300 group-hover:scale-110'>LinkedIn</p>
        <p className='opacity-0 translate-y-16 h-0 group-hover:opacity-100 group-hover:translate-y-2 duration-300 group-hover:scale-110 text-blue-500'>@ajmal ta</p>
      </a>
  </div>
 

  <div 
    class=" w-44 h-48  group bg-gradient-to-b from-white/20 to-transparent border border-white/10 shadow-xl flex justify-center items-center  duration-500 rounded-lg  backdrop-blur-[10px] "
    data-text="Github"
  >
    <a href="https://github.com/AJMALAJU3" target="_blank" rel="noopener noreferrer" className='items-center flex flex-col'>
        <FaGithub className="text-3xl text-black hover:text-gray-700 group-hover:-translate-y-6 group-hover:scale-125 duration-300" />
        <p className=' translate-y-6  group-hover:-translate-y-0 font-semibold text-sm duration-300 group-hover:scale-110'>Github</p>
        <p className='opacity-0 translate-y-16 h-0 group-hover:opacity-100 group-hover:translate-y-2 duration-300 group-hover:scale-110 text-blue-500'>@ajmalaju3</p>
      </a>
  </div>
  

  </>
  )
}

export default SocialCards
