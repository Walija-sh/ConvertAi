import React from 'react'
import FeatureHero from '../components/Features/FeatureHero'
import AiAutomate from '../components/Features/AiAutomate'
import Benefits from '../components/common/Benefits'
import Cta from '../components/common/Cta'

const Features = () => {
  return (
    <div>
      <FeatureHero/>
      <AiAutomate/>
      <Benefits/>
      <Cta buttonText='Get started for free' maxWidth='1200px'/>
    </div>
  )
}

export default Features