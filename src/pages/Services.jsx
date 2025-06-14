import React from 'react'
import slider1 from "../assets/services/service-slider.jpg";
import HomeIcon from '../utils/HomeIcon';
import CommonSlider from '../utils/CommonSlider';
import ServiceSection from '../components/services/ServiceSection';
import ITServiceCards from '../components/services/ITServiceCards';

const Services = () => {
 const slides = [
  {
    image: slider1, // your image path
    title: "Our Services",
  },
];

const breadcrumbItems = [
  { label: "Home", link: "/", icon: HomeIcon },
  { label: "Our Services" },
];


  return (
    <div>
       <CommonSlider slides={slides} breadcrumbItems={breadcrumbItems} />
       <ITServiceCards/>
    </div>
  )
}

export default Services