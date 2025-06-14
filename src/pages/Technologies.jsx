import React from 'react'
import slider1 from "../assets/technology-slider.jpeg";
import HomeIcon from '../utils/HomeIcon';
import CommonSlider from '../utils/CommonSlider';
import TechnologiesSection from '../components/technology/TechnologiesSection';

const Technologies= () => {
 const slides = [
  {
    image: slider1, 
    title: "Technologies",
  },
];

const breadcrumbItems = [
  { label: "Home", link: "/", icon: HomeIcon },
  { label: "Technologies" },
];


  return (
    <div>
       <CommonSlider slides={slides} breadcrumbItems={breadcrumbItems} />
       <TechnologiesSection/>
    </div>
  )
}

export default Technologies