import React from 'react'
import FeatureHero from '../components/Features/FeatureHero'
import AiAutomate from '../components/Features/AiAutomate'
import Benefits from '../components/common/Benefits'
import Cta from '../components/common/Cta'
import MoreFeatures from '../components/Features/MoreFeatures'
import useDocumentTitle from '../components/common/useDocumentTitle'

const Features = () => {
  useDocumentTitle('Convert CRM Features: AI-Driven Tools for Sales Success')
  return (
    <div>
      <FeatureHero/>
      <AiAutomate/>
      <Benefits/>
      <MoreFeatures/>
      <Cta buttonText='Get started for free' maxWidth='1200px'/>
    </div>
  )
}

export default Features