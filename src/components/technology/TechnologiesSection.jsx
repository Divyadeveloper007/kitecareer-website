import { useState, useEffect, useRef } from "react"
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



const categories = [
  "UI/UX",
  "Front-end",
  "Back-end",
  "Database",
  "Mobile",
  "Emerging",
]

const techItems = [
  { name: "Figma", category: "UI/UX", icon: figma },
  { name: "Photoshop", category: "UI/UX", icon: photoshop },
  { name: "Illustrator", category: "UI/UX", icon: illustrator },
  { name: "Canva", category: "UI/UX", icon: canva },

  { name: "React", category: "Front-end", icon: react },
  { name: "Vue.js", category: "Front-end", icon: vue },
  { name: "Angular", category: "Front-end", icon: angular },
  { name: "HTML5", category: "Front-end", icon: html5 },
  { name: "CSS3", category: "Front-end", icon: css3 },

  { name: "Node.js", category: "Back-end", icon: node },
  { name: "Express", category: "Back-end", icon: express },
  { name: "Python", category: "Back-end", icon: python },
  { name: "PHP", category: "Back-end", icon: php },
  { name: "Django", category: "Back-end", icon: django },

  { name: "MongoDB", category: "Database", icon: mongodb },
  { name: "MySQL", category: "Database", icon: mysql },
  { name: "PostgreSQL", category: "Database", icon: postgresql },

  { name: "Flutter", category: "Mobile", icon: flutter },
  { name: "React Native", category: "Mobile", icon: react }, // reuse react logo
  { name: "Swift", category: "Mobile", icon: swift },

  { name: "TensorFlow", category: "Emerging", icon: tensorflow },
  { name: "ChatGPT", category: "Emerging", icon: chatgpt },
  { name: "Docker", category: "Emerging", icon: docker },
]


const TechnologiesSection = () => {
  const [activeCategory, setActiveCategory] = useState("UI/UX")
  const scrollRef = useRef()

  // Scroll to active tab in mobile view
  useEffect(() => {
    const activeButton = scrollRef.current?.querySelector(".active-tab")
    if (activeButton && scrollRef.current) {
      scrollRef.current.scrollTo({
        left: activeButton.offsetLeft - 16,
        behavior: "smooth",
      })
    }
  }, [activeCategory])

  const filteredItems = techItems.filter(
    (item) => item.category === activeCategory
  )

  return (
    <section id="technologies" className="w-full py-10 leading-loose px-4 md:px-10 text-center">
      <h4 className="text-[#00a4f0] font-bold text-lg tracking-wide mb-2">
        Technologies We Use
      </h4>
      <h1 className="text-3xl md:text-4xl font-bold mb-6 py-4 leading-snug text-gray-800">
        Powering Innovation Through Modern Tools <br />
        and Proven Tech Stacks
      </h1>

      {/* Category Tabs - Scrollable on mobile */}
      <div
        ref={scrollRef}
        className="flex gap-2 overflow-x-auto no-scrollbar bg-[#0077b5] rounded-full px-4 py-2 w-full md:w-fit mx-auto mb-6 shadow-md"
      >
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`whitespace-nowrap px-4 py-1.5 rounded-full font-semibold transition-all duration-300 ${
              activeCategory === category
                ? "bg-white text-[#0077b5] scale-105 shadow active-tab"
                : "text-white hover:bg-white hover:text-[#0077b5]"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Dropdown alternative (optional) */}
      {/*
      <div className="block md:hidden mb-6">
        <select
          value={activeCategory}
          onChange={(e) => setActiveCategory(e.target.value)}
          className="w-full p-2 border rounded-md text-center"
        >
          {categories.map((category) => (
            <option key={category}>{category}</option>
          ))}
        </select>
      </div>
      */}

      <p className="text-sm text-gray-600 mb-10 max-w-xl mx-auto">
        Explore the trusted technologies and platforms we leverage to build
        scalable, secure, and future-ready solutions.
      </p>

      {/* Tech Items Grid */}
<div className="flex justify-center">
  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 px-4">
    {filteredItems.map((item) => (
      <div
        key={item.name}
        className="flex flex-col items-center justify-center gap-2 p-4 bg-white border rounded-xl shadow-sm hover:shadow-lg hover:scale-105 transition-all duration-300"
      >
        <img
          src={item.icon}
          alt={item.name}
          className="w-16 h-16 object-contain mx-auto"
        />
        <p className="text-sm font-medium text-gray-800">{item.name}</p>
      </div>
    ))}
  </div>
</div>
    </section>
  )
}

export default TechnologiesSection
