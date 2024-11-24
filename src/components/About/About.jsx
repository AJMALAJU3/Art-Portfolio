import React from 'react'
import mypic from '../../assets/mypic.jpg'
import SocialCards from './SocialCards'


function About() {
  return (
    <div className='grid grid-cols-12 w-full gap-2 justify-center '>
      <div className='lg:col-span-4 md:col-span-6 col-span-12  h-auto flex flex-col justify-center items-center p-4'>
        <div class="flex relative items-center justify-center w-full">
          <div class="rounded-xl bg-gradient-to-b from-white/20 to-transparent border group border-white/10 shadow-xl overflow-hidden relative text-center p-4 items-center flex flex-col max-w-sm hover:shadow-2xl transition-all duration-500 shadow-xl">
            <div class="text-gray-500  transition-all">
              <img src={mypic} alt="" className='w-64 h-64 rounded-full shadow-lg hover:shadow-black hover:scale-105 duration-500' />
            </div>
            <div class=" transition-all duration-500  my-8">
              <h1 class="font-semibold text-gray-700">Ajmal </h1>
              <p class="text-gray-400 text-sm">@creative_artist</p>
              <p className='my-3 text-gray-600'>" Making bad art is better than making no art, life beats down and crushes the soul and art reminds you that you have one. "</p>
            </div>
            
          </div>
        </div>
      </div>
      <div className='lg:col-span-8 md:col-span-6 col-span-12 flex flex-wrap gap-2 justify-center items-center'>
        <SocialCards />

      </div>
    </div>
  )
}

export default About
