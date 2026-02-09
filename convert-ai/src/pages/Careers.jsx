import React from 'react'
import useDocumentTitle from '../components/common/useDocumentTitle'
import CareerHero from '../components/Careers/CareerHero'
import OpenPositions from '../components/Careers/OpenPositions'
import BenefitsPackage from '../components/Careers/BenefitsPackage'
import Benefits from '../components/common/Benefits'

const Careers = () => {
  useDocumentTitle('Join Convert: Shape the Future of AI-Powered CRM')
  return (
    <div>
      <CareerHero/>
      <BenefitsPackage/>
      <OpenPositions/>
      <Benefits 
      maxWidth='1200px' 
      title="Don't see an open position but stil want to join our team?"
      description='We would love to hear from you. We are always looking for talented individuals who are passionate about making a change.'
      buttonText='General application'
      buttonTo='#'
      />
    </div>
  )
}

export default Careers