import React, { useState, useEffect } from "react";
import { FaStar, FaArtstation, FaPaintBrush, FaPen, FaCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom"; 

function AnimeButton() {
  const [isMounted, setIsMounted] = useState(false);
  const navigate = useNavigate(); 

  useEffect(() => {
    setTimeout(() => {
      setIsMounted(false);
      setIsMounted(true);
    }, 1500);
  }, []);


  const handleExploreClick = () => {
    navigate("/gallery"); 
  };

  return (
    <div className="flex justify-center items-center md:m-4 w-full">
      <div className="flex justify-around max-w-sm md:w-96 w-72 z-10">
        <div
          onClick={handleExploreClick} // Add click handler
          className={`px-10 py-2 bg-gradient-to-r from-black text-gray-300 to-pink-500 rounded-full cursor-pointer ${
            isMounted ? "opacity-100" : "opacity-0 w-0 scale-125"
          } hover:border-t-4 shadow-custom-top-left border-[#191919] font-bold hover:shadow-black duration-500 transition-all ease-in relative group`}
        >
          Explore
          <FaPen
            className="absolute text-black bottom-4 group-hover:opacity-100 z-[-1]
         opacity-0 duration-500 transition-all ease-in-out group-hover:bottom-16 group-hover:right-0 right-16"
          />
          <FaPaintBrush
            className="absolute text-black bottom-2 group-hover:opacity-100 z-[-1]
         opacity-0 duration-700 transition-all ease-in-out group-hover:bottom-8 group-hover:right-32 right-16"
            size={40}
          />
          <FaArtstation
            className="absolute text-black bottom-4 right-16 group-hover:opacity-100 z-[-1]
         opacity-0 duration-700 transition-all ease-in-out group-hover:bottom-16"
          />
          <FaStar
            className="absolute text-black bottom-4 group-hover:opacity-100 z-[-1]
         opacity-0 duration-700 transition-all ease-in-out group-hover:bottom-14  group-hover:right-24 right-16"
          />
          <FaStar
            className="absolute text-black bottom-4 group-hover:opacity-100 z-[-1]
         opacity-0 duration-700 transition-all ease-in-out group-hover:bottom-20 right-16 group-hover:right-10  group-hover:right-30"
            size={10}
          />
          <FaStar
            className="absolute text-black bottom-4 group-hover:opacity-100 z-[-1]
         opacity-0 duration-700 transition-all ease-in-out group-hover:bottom-12  right-16 group-hover:right-7"
          />
          <div className="p-[1px] h-3 absolute bg-black right-4 top-8 opacity-0 group-hover:opacity-100 group-hover:h-9 transition-all duration-700 z-[0]"></div>
          <FaStar
            className="absolute text-black top-7 right-2 group-hover:opacity-100 z-[-1]
         opacity-0 duration-700 transition-all ease-in-out group-hover:bottom-12   group-hover:right-2 group-hover:top-16"
            size={20}
          />
          <FaCircle
            className="absolute text-gray-300 top-7 right-[14px] group-hover:opacity-100
         opacity-100 duration-700 transition-all ease-in-out group-hover:bottom-12 shadow-custom-top-left shadow-black border-2 rounded-full border-neutral-700"
            size={6}
          />
        </div>
      </div>
    </div>
  );
}

export default AnimeButton;
