import React, { useState } from 'react'
import { FaArrowLeft,FaArrowRight } from 'react-icons/fa';
import ImageContainer from './ImageContainer'


function TitleCards(props) {
    const [clicked, setClicked] = useState(null)

    return (
        <>
            <div 
                 onClick={(e)=>{
                    e.preventDefault()
                    setClicked(props.name)}}
                className={`
                    bg-pink-700 bg-opacity-80 bg-cover bg-center rounded-2xl shadow-2xl shadow-gray-800 hover:outline hover:outline-slate-400 hover:-outline-offset-8 m-4 w-full h-56 md:w-80 group `}
                    style={{backgroundImage: `url(${props.img})`}}>
                <div

                    className={`
                        ${clicked ? 'fixed  z-50 top-0 left-0 h-screen w-screen  hover:rotate-0 bg-neutral-300 before:bg-pink-600 after:bg-pink-500 after:w-24 after:h-24  before:w-24 before:h-24' : 'group-hover:after:opacity-0 group-hover:before:opacity-0 before:w-12 before:h-12 after:w-12 after:h-12 after:bg-neutral-950 before:bg-neutral-900 relative w-full origin-top-left  items-center group-hover:z-0 bg-gradient-to-tr from-black via-[#00000087] to-[#6f6f6f5e] group-hover:bg-[#0005] group-hover:bg-none  '}
                         overflow-hidden  after:duration-500 before:duration-500 duration-500 hover:after:duration-500 hover:after:translate-x-24 hover:after:-translate-y-28 hover:before:translate-y-28  hover:before:-translate-x-24 hover:duration-500 after:absolute
                          after:rounded-full after:bottom-16 after:right-24  before:absolute before:blur-xl after:blur-xl
                        before:rounded-full  before:top-24 before:left-24 
                        hover:-rotate-6 flex justify-center h-56 w-full 
                        rounded-2xl `}>

                            
                    <div className={` ${clicked ?'p-10':''}
                        z-10 flex justify-center gap-2 w-full`}>
                        <span className={`text-2xl font-bold  ${clicked?'text-neutral-900 ':'text-gray-300 '} transform duration-500 flex z-50 h-0`}>
                             <FaArrowLeft className={` ${clicked ?' absolute left-[-7rem] lg:left-[-27rem] md:left-[-20rem] mt-1':'hidden'} z-50`} 
                             onClick={(e)=>{
                                e.preventDefault()
                                e.stopPropagation(); 
                                setClicked(null)}}/>

                            {props.name} <FaArrowRight className={`  ${clicked ?'hidden ':'opacity-0 group-hover:opacity-100 text-white ml-0 group-hover:ml-10 duration-500 transform'} z-50 mt-1`} /></span>
                            

                            {clicked ? <ImageContainer title={clicked.toLowerCase()}/>:''}
                    </div>
                </div>
            </div>
        </>
    )
}

export default TitleCards
