import React from 'react'
import HomeHero from '../components/Home/HomeHero'
import Working from '../components/Home/Working'
import Features from '../components/Home/Features'

const Home = () => {
  return (
    <div className=''>
      <HomeHero/>
      <Working/>
      <Features/>
    </div>
  )
}

export default Home