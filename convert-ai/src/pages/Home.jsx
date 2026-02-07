import React from 'react'
import HomeHero from '../components/Home/HomeHero'
import Working from '../components/Home/Working'
import Features from '../components/Home/Features'
import FeaturedTestimonial from '../components/Home/FeaturedTestimonial'
import NotesFeatures from '../components/Home/NotesFeatures'
import FeatureHighlight from '../components/Home/FeatureHighlight'
import { Link } from 'react-router-dom'
import Benefits from '../components/Home/Benefits'
import Integrations from '../components/Home/Integrations'

const Home = () => {
  return (
    <div className=''>
      <HomeHero/>
      <Working/>
      <Features/>
      <FeaturedTestimonial/>
      <NotesFeatures/>
      <FeatureHighlight/>
      <Benefits/>
      <Integrations/>
    </div>
  )
}

export default Home