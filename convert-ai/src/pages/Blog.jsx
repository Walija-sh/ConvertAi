import React from 'react'
import useDocumentTitle from '../components/common/useDocumentTitle'
import BlogSection from '../components/Blog/BlogSection'
import Benefits from '../components/common/Benefits'

const Blog = () => {
  useDocumentTitle('Convert CRM Blog: AI Insights for Sales and Customer Success')
  return (
    <div>
      <BlogSection/>
      <Benefits/>
    </div>
  )
}

export default Blog