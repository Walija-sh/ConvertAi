import React from 'react'
import useDocumentTitle from '../components/common/useDocumentTitle'
import AboutHero from '../components/About/AboutHero'
import Team from '../components/About/Team'
import Investors from '../components/About/Investors'
import Benefits from '../components/common/Benefits'

const About = () => {
  useDocumentTitle('About Convert: Revolutionizing CRM with AI Technology')
  return (
    <div>
      <AboutHero/>
      <Team/>
      <Investors/>
      <Benefits 
      title='Convert is growing. Join our team and grow with us.'
      description='Join our small but mighty team taking on the CRM industry'
      buttonText='See open positions'
      buttonTo='/careers'
      maxWidth='1200px'
      />
    </div>
  )
}

export default About