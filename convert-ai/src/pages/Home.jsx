import React from 'react'
import HomeHero from '../components/Home/HomeHero'
import Working from '../components/Home/Working'
import Features from '../components/Home/Features'
import FeaturedTestimonial from '../components/Home/FeaturedTestimonial'

const Home = () => {
  return (
    <div className=''>
      <HomeHero/>
      <Working/>
      <Features/>
      <FeaturedTestimonial/>
    </div>
  )
}

export default Home