import React from 'react';
import team_work from '../../assets/about-us.webp';

const AboutSection = () => {
  return (
    <section id='about' className="relative py-16 px-4 sm:px-6 md:px-16 overflow-hidden bg-gray-50">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10 md:gap-12 relative z-10">

        {/* Left Image Section */}
        <div className="relative w-full md:w-[45%] ">
          <div className="relative overflow-hidden ">
            {/* Image with overlay */}
            <img
              src={team_work}
              alt="Team work"
              className="w-full h-auto object-cover transition-transform duration-500 hover:scale-105"
            />

            {/* Stats Overlay */}
            <div className="absolute bottom-4 right-4 bg-white rounded-lg shadow-md  px-4 py-3 sm:px-6 sm:py-4 flex justify-around items-center text-center gap-4 sm:gap-6 w-[90%] max-w-sm">
              <div>
                <h3 className="text-[#00a4f0] font-bold text-lg sm:text-xl">7+</h3>
                <p className="text-gray-500 text-xs">Years of experience</p>
              </div>
              <div>
                <h3 className="text-[#00a4f0] font-bold text-lg sm:text-xl">2018</h3>
                <p className="text-gray-500 text-xs">Founded year</p>
              </div>
              <div>
                <h3 className="text-[#00a4f0] font-bold text-lg sm:text-xl">40+</h3>
                <p className="text-gray-500 text-xs ">Projects Completed</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Content */}
        <div className="w-full md:w-[55%] text-center md:text-left space-y-6 animate-fade-in">
          <h4 className="text-[#00a4f0] font-bold text-lg tracking-wide">ABOUT US</h4>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-snug">
            Empowering Innovation,<br className="hidden sm:block" />
            Driving Digital Success
          </h2>
          <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
            At KiteCareer, we are passionate innovators dedicated to delivering smart,
            scalable, and impactful digital solutions. With expertise spanning product development,
            AI, IoT, Blockchain, and cloud computing, we empower businesses to grow and adapt in a
            fast-evolving digital world. Our team thrives on creativity, precision, and a commitment
            to client success — turning every idea into a market-ready product with long-term value.
          </p>
          <a
            href="#"
            className="text-sm font-semibold border-b-2 border-[#00a4f0] w-fit inline-block hover:text-[#00a4f0] transition duration-300"
          >
            YOUR ENDS →
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
