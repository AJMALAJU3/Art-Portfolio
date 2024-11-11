import React from 'react'
import MenuBar from '../components/MenuBar'
import Wings from '../components/HomePage/Wings'
import HomeTitle from '../components/HomePage/HomeTitle'
import AnimeButton from '../components/HomePage/AnimeButton'
import Shapes from '../components/HomePage/Shapes'



function Home() {
    return (
<>
    <MenuBar />
    <Wings />
    <div className='h-screen w-full flex flex-col justify-center items-center z-50'>
    <HomeTitle />
    <AnimeButton />
    </div>
    <Shapes />

</>

    )
}

export default Home
