import React from 'react'
import useDocumentTitle from '../components/common/useDocumentTitle'
import TestimonialHero from '../components/Testimonials/TestimonialHero'
import Cta from '../components/common/Cta'

const WallsOfLove = () => {
  useDocumentTitle('Convert CRM Success Stories: Real Results with AI-Powered CRM')
  return (
    <div>
      <TestimonialHero/>
      <Cta buttonText='Get started for free'/>
    </div>
  )
}

export default WallsOfLove