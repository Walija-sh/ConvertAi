import React from 'react'
import { changelogData } from './changelogData'
import VersionCard from './VersionCard'

const VersionInfo = () => {
  return (
    <section className='pt-[40px] pb-[60px] px-5  lg:py-[80px] lg:px-8'>
        {/* version cards */}
        <div className="max-w-[600px] lg:max-w-[800px] mx-auto grid gap-[60px]">
            {changelogData.map((item, index) => (
        <VersionCard key={index} {...item} />
      ))}
        </div>
    </section>
  )
}

export default VersionInfo