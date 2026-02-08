import React from 'react'
import PricingHero from '../components/Pricing/PricingHero'
import PricingFAQs from '../components/Pricing/PricingFAQs'
import Benefits from '../components/common/Benefits'

const Pricing = () => {
  return (
    <div>
      <PricingHero/>
      <PricingFAQs/>
      <Benefits maxWidth='1000px'/>
    </div>
  )
}

export default Pricing