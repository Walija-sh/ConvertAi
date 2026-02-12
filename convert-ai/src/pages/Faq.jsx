import React from 'react'
import useDocumentTitle from '../components/common/useDocumentTitle'
import FaqHero from '../components/Faqs/FaqHero'
import FaqsContainer from '../components/Faqs/FaqsContainer'

const Faq = () => {
  useDocumentTitle('Convert CRM FAQ: Your AI-Powered CRM Questions Answered')
  return (
    <div>
      <FaqHero/>
      <FaqsContainer/>
    </div>
  )
}

export default Faq