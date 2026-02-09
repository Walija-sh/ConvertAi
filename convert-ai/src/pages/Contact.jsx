import React from 'react'
import useDocumentTitle from '../components/common/useDocumentTitle'
import ContactSection from '../components/Contact/ContactSection'

const Contact = () => {
  useDocumentTitle('Contact Convert: Get Support for Your AI-Powered CRM')
  return (
    <div>
      <ContactSection/>
    </div>
  )
}

export default Contact