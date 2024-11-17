import React from 'react'
import TitleCards from '../components/Gallery/TitleCards'

function Gallery() {
  return (
    <div className='flex flex-wrap p-4 justify-center mb-32'>
      
    <TitleCards name={'Realestic'}/>
    <TitleCards name={'Stencil'}/>
    <TitleCards name={'Colorful'}/>
    <TitleCards name={'Creative'}/>
    <TitleCards name={'Craft'}/>
    </div>

  )
}

export default Gallery
