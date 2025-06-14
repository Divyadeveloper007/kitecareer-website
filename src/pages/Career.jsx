import React from 'react'
import slider1 from "../assets/career-slider.jpeg";
import HomeIcon from '../utils/HomeIcon';
import CommonSlider from '../utils/CommonSlider';
import ApplyNowModal from '../components/career/ApplyNowModal';

const Career= () => {
 const slides = [
  {
    image: slider1, 
    title: "Careers",
  },
];

const breadcrumbItems = [
  { label: "Home", link: "/", icon: HomeIcon },
  { label: "Career" },
];


  return (
    <div>
       <CommonSlider slides={slides} breadcrumbItems={breadcrumbItems} />
        <ApplyNowModal/>
    </div>
  )
}

export default Career;