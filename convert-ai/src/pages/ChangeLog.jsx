import React from 'react'
import useDocumentTitle from '../components/common/useDocumentTitle';
import ChangelogHero from '../components/Changelog/ChangelogHero';
import VersionInfo from '../components/Changelog/VersionInfo';
import Benefits from '../components/common/Benefits'

const ChangeLog = () => {
  useDocumentTitle('Convert CRM Updates: Latest AI Enhancements and Features')
  return (
    <div>
      <ChangelogHero/>
      <VersionInfo/>
      <Benefits maxWidth='1000px'/>
    </div>
  )
}

export default ChangeLog;