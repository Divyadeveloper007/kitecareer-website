import React from 'react'
import AboutSection from '../components/about/AboutSection'
import MissionVisionValues from '../components/about/MissionVisionValues'
import IntelligentSolutions from '../components/about/IntelligentSolutions'
import slider1 from "../assets/about-slider.webp";
import HomeIcon from '../utils/HomeIcon';
import CommonSlider from '../utils/CommonSlider';


const About = () => {
  const slides = [
  {
    image: slider1, // your image path
    title: "About Us",
  },
];

const breadcrumbItems = [
  { label: "Home", link: "/", icon: HomeIcon },
  { label: "About Us" },
];

  return (
    <div>
 <CommonSlider slides={slides} breadcrumbItems={breadcrumbItems} />  
       <AboutSection/>
        <MissionVisionValues/>
    </div>
  )
}

export default About