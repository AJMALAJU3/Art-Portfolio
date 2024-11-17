import React, { useState } from 'react'
import { FaArrowLeft } from 'react-icons/fa';

function TitleCards(props) {
    const [clicked, setClicked] = useState(null)

    return (
        <>
            <div 
                 onClick={(e)=>{
                    e.preventDefault()
                    console.log('sadf')
                    setClicked(props.name)}}
                className={`
                    bg-pink-700 bg-opacity-80 rounded-2xl shadow-2xl shadow-gray-800 outline outline-slate-400 -outline-offset-8 m-4 w-full h-56 md:w-80`}>
                <div
                    className={`
                        ${clicked === props.name ? 'fixed  z-50 top-0 left-0 h-screen w-screen  hover:rotate-0 bg-neutral-300' : 'relative w-full bg-neutral-800 '}
                        group overflow-hidden  after:duration-500 before:duration-500 duration-500 hover:after:duration-500 hover:after:translate-x-24 hover:before:translate-y-12 hover:before:-translate-x-32 hover:duration-500 after:absolute
                        after:w-24 after:h-24 after:bg-pink-700 after:rounded-full after:blur-xl after:bottom-32 after:right-16 after:w-12 after:h-12 before:absolute
                        before:w-20 before:h-20 before:bg-pink-400 before:rounded-full before:blur-xl before:top-20 before:right-16 origin-top-left
                        before:w-12 before:h-12 hover:-rotate-12 flex justify-center items-center h-56 w-full 
                        rounded-2xl outline outline-slate-400 -outline-offset-8`}>

                            
                    <div className={` ${clicked === props.name ?'p-10':'items-center '}
                        z-10 flex justify-center gap-2 w-full h-full `}>
                        <span className={`text-2xl font-bold ${clicked === props.name ?'text-neutral-900 ':'text-gray-200 '} flex `}>
                             <FaArrowLeft className={`absolute left-6  ${clicked === props.name ?'':'hidden'} z-50`} 
                             onClick={(e)=>{
                                e.preventDefault()
                                e.stopPropagation(); 
                                console.log('sdf')

                                setClicked(null)}}/>

                            {props.name}</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TitleCards
