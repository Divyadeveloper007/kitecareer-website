import React from 'react'
import AboutSection from '../components/about/AboutSection'
import MissionVisionValues from '../components/about/MissionVisionValues'
import IntelligentSolutions from '../components/about/IntelligentSolutions'

const About = () => {
  return (
    <div  className='bg-[#f2f2f2] relative w-full'>
        <AboutSection/>
        <MissionVisionValues/>
        <IntelligentSolutions/>
    </div>
  )
}

export default About