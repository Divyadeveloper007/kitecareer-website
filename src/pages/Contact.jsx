import React from 'react'
import slider1 from "../assets/contact/contact-us3.jpg";
import HomeIcon from '../utils/HomeIcon';
import CommonSlider from '../utils/CommonSlider';
import ContactSection from '../components/contact/ContactSection';

const Contact = () => {
 const slides = [
  {
    image: slider1, // your image path
    title: "Contact Us",
  },
];

const breadcrumbItems = [
  { label: "Home", link: "/", icon: HomeIcon },
  { label: "Contact Us" },
];


  return (
    <div>
       <CommonSlider slides={slides} breadcrumbItems={breadcrumbItems} />
       <ContactSection/>
    </div>
  )
}

export default Contact