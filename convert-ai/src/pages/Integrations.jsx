import React from 'react'
import useDocumentTitle from '../components/common/useDocumentTitle'
import IntegrationHero from '../components/Integration/IntegrationHero'
import Benefits from '../components/common/Benefits'
import FeaturedIntegrations from '../components/Integration/FeaturedIntegrations'
import CrmIntegrations from '../components/Integration/CrmIntegrations'

const Integrations = () => {
  useDocumentTitle('Convert CRM Integrations: Seamless AI-Powered Connections')
  return (
    <div>
      <IntegrationHero/>
      <FeaturedIntegrations/>
      <CrmIntegrations/>
      <Benefits maxWidth='1200px'/>
    </div>
  )
}

export default Integrations