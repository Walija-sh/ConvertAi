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
import Testimonials from '../components/Home/Testimonials'
import Tutorial from '../components/Home/Tutorial'
import FAQs from '../components/common/FAQs'
import Cta from '../components/Home/Cta'

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
      <Testimonials/>
      <Tutorial/>
      <FAQs/>
      <Cta/>
    </div>
  )
}

export default Home