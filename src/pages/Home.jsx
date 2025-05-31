import React from 'react'
import HeroSection from '../components/home/HeroSection'
import ProgrammingIcons from '../components/home/ProgrammingIcons'

const Home = () => {
  return (
     <div id='home' className="bg-white min-h-screen font-sans">
      <HeroSection />
      <ProgrammingIcons />
    </div>
  )
}

export default Home