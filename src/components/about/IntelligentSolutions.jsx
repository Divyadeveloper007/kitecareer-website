import React from 'react'
import ai from '../../assets/digital-solution.webp'

const IntelligentSolutions = () => {
  return (
    <section className="w-full">
      <div className="flex flex-col md:flex-row w-full">
        {/* Left Content */}
        <div
          className="md:w-1/2 p-8 md:p-6 text-white flex items-center"
          style={{
            background: 'linear-gradient(to top, #0c161a, #0c4a66, #0b86bf)'
          }}
        >
          <div className='p-4'>
            <h3 className="text-2xl md:text-3xl font-bold mb-6 leading-snug">
              Turning Ideas into <br />Intelligent Digital Solutions
            </h3>
            <p className="text-sm md:text-base text-gray-100 leading-relaxed">
              At KiteCareer, we specialize in transforming your ideas into powerful digital experiences.
              Our expert team blends creativity with technology to deliver high-quality services that include
              product development, custom website and mobile app solutions, and future-driven technologies
              like AI, IoT, and Blockchain. We also offer robust digital marketing strategies, cloud solutions,
              and professional training and consulting — all tailored to help businesses thrive in the digital era.
            </p>
          </div>
        </div>

        {/* Right Image */}
        <div className="md:w-1/2 w-full">
          <img src={ai} alt="intelligent-digital-solution" className="w-full h-full object-cover" />
        </div>
      </div>
    </section>
  )
}

export default IntelligentSolutions;
