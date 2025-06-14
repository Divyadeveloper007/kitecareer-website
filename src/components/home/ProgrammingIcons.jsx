import React, { useEffect, useRef } from 'react';
import figma from '../../assets/programmingIcons/Figma-logo.svg'
import photoshop from '../../assets/programmingIcons/Adobe_Photoshop_CC_icon.svg'
import illustrator from '../../assets/programmingIcons/Adobe_Illustrator_CC_icon.svg'
import canva from '../../assets/programmingIcons/canva-1.svg'

import react from '../../assets/programmingIcons/React-icon.svg'
import vue from '../../assets/programmingIcons/Vue.js_Logo_2.svg'
import angular from '../../assets/programmingIcons/Angular_full_color_logo.svg'
import html5 from '../../assets/programmingIcons/HTML5_Badge.svg'
import css3 from '../../assets/programmingIcons/CSS3_logo.svg'

import node from '../../assets/programmingIcons/Node.js_logo.svg'
import express from '../../assets/programmingIcons/Expressjs.webp'
import python from '../../assets/programmingIcons/Python-logo-notext.svg'
import php from '../../assets/programmingIcons/PHP-logo.svg'
import django from '../../assets/programmingIcons/Django_logo.svg'

import mongodb from '../../assets/programmingIcons/mongodb-icon-1.svg'
import mysql from '../../assets/programmingIcons/MySQL_logo.svg'
import postgresql from '../../assets/programmingIcons/Postgresql_elephant.svg'

import flutter from '../../assets/programmingIcons/Google-flutter-logo.webp'
import swift from '../../assets/programmingIcons/Swift_logo.svg'

import tensorflow from '../../assets/programmingIcons/Tensorflow_logo.svg'
import chatgpt from '../../assets/programmingIcons/ChatGPT_logo.svg'
import docker from '../../assets/programmingIcons/Docker_(container_engine)_logo.svg'


const icons = [
  { src: figma, alt: 'Figma' },
  { src: photoshop, alt: 'Photoshop' },
  { src: illustrator, alt: 'Illustrator' },
  { src: canva, alt: 'Canva' },
  { src: react, alt: 'React' },
  { src: vue, alt: 'Vue.js' },
  { src: angular, alt: 'Angular' },
  { src: html5, alt: 'HTML5' },
  { src: css3, alt: 'CSS3' },
  { src: node, alt: 'Node.js' },
  { src: express, alt: 'Express' },
  { src: python, alt: 'Python' },
  { src: php, alt: 'PHP' },
  { src: django, alt: 'Django' },
  { src: mongodb, alt: 'MongoDB' },
  { src: mysql, alt: 'MySQL' },
  { src: postgresql, alt: 'PostgreSQL' },
  { src: flutter, alt: 'Flutter' },
  { src: swift, alt: 'Swift' },
  { src: tensorflow, alt: 'Tensorflow' },
  { src: chatgpt, alt: 'ChatGPT' },
  { src: docker, alt: 'Docker' },
];


const ProgrammingIcons = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    let animationFrameId;

    const scroll = () => {
      if (scrollContainer) {
        scrollContainer.scrollLeft += 0.5;
        if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
          scrollContainer.scrollLeft = 0;
        }
      }
      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  const repeatedIcons = [...icons, ...icons];

  return (
    <div className="bg-gradient-to-r from-blue-100 via-white to-blue-100 w-full py-2 shadow-inner  overflow-hidden">
      <div
        ref={scrollRef}
        className="max-w-6xl mx-auto overflow-x-auto whitespace-nowrap scrollbar-hide"
      >
        <div className="flex flex-nowrap gap-8 items-center py-4">
          {repeatedIcons.map((icon, index) => (
            <div
              key={index}
              className="flex items-center justify-center min-w-[80px] transition-transform duration-300 hover:scale-125"
            >
              <img src={icon.src} alt={icon.alt} className="h-12 w-12 object-contain" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProgrammingIcons;
