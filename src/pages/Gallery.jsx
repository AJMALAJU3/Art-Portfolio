import React from 'react'
import TitleCards from '../components/Gallery/TitleCards'
import collection from '../assets/realesticEye.jpg'
import color from '../assets/Color_1.jpg'
import paper from '../assets/paperAnnamkutty.jpg'
import realestic from '../assets/realesticDq.jpeg'
import portrait from '../assets/RealesticNikhil.jpg'
import stencil from '../assets/StencilKaztro.jpg'
import craft from '../assets/CraftEagle.jpg'

function Gallery() {
  return (
    <div className='flex flex-wrap p-4 justify-center mb-32 relative'>
    <TitleCards name={'Collection'} img={collection}/>
    <TitleCards name={'Realestic'} img={realestic}/>
    <TitleCards name={'Stencil'} img={stencil}/>
    <TitleCards name={'Craft'} img={craft}/>
    <TitleCards name={'Color Portrait'} img={color}/>
    <TitleCards name={'Paper Portrait'} img={paper}/>
    <TitleCards name={'All Portraits'} img={portrait}/>
    </div>

  )
}

export default Gallery
