import React from 'react'
import PricingHero from '../components/Pricing/PricingHero'
import PricingFAQs from '../components/Pricing/PricingFAQs'
import Benefits from '../components/common/Benefits'
import useDocumentTitle from '../components/common/useDocumentTitle'

const Pricing = () => {
  useDocumentTitle('Convert CRM Pricing: Flexible Plans for Every Business')
  return (
    <div>
      <PricingHero/>
      <PricingFAQs/>
      <Benefits maxWidth='1000px'/>
    </div>
  )
}

export default Pricing