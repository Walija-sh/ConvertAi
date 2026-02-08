import React from 'react'
import HomeHero from '../components/Home/HomeHero'
import Working from '../components/Home/Working'
import FeaturedTestimonial from '../components/Home/FeaturedTestimonial'
import NotesFeatures from '../components/Home/NotesFeatures'
import FeatureHighlight from '../components/Home/FeatureHighlight'
import Benefits from '../components/common/Benefits'
import Integrations from '../components/Home/Integrations'
import Testimonials from '../components/Home/Testimonials'
import Tutorial from '../components/Home/Tutorial'
import FAQs from '../components/common/FAQs'
import Cta from '../components/common/Cta'
import HomeFeatures from '../components/Home/HomeFeatures'

const Home = () => {
  return (
    <div className=''>
      <HomeHero/>
      <Working/>
      <HomeFeatures/>
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