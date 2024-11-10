import React from 'react'
import MenuBar from '../components/MenuBar'
import Wings from '../components/Wings'
import HomeTitle from '../components/HomeTitle'
import AnimeButton from '../components/AnimeButton'
import Shapes from '../components/Shapes'



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
