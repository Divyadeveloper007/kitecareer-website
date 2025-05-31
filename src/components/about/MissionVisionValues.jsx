import React from 'react';
import our_mission from '../../assets/our-mission.webp';
import our_vision from '../../assets/our-vision.webp';
import our_value from '../../assets/our-value.webp';

const MissionVisionValues = () => {
  return (
    <section className="py-16 px-4 md:px-10 lg:px-20 bg-white">
      <div className="max-w-7xl mx-auto bg-[#efe4f0] p-6 sm:p-10 lg:p-12 rounded-3xl shadow-xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Mission */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left lg:border-r lg:border-gray-300 pr-0 lg:pr-6">
            <img
              src={our_mission}
              alt="our-mission"
              className="w-16 h-16 mb-4 transition-transform duration-300 hover:scale-105"
            />
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">Our Mission</h3>
            <p className="text-gray-700 text-sm md:text-base leading-relaxed">
              To enable individuals and organizations to grow through cutting-edge digital
              solutions and continuous learning, bridging the gap between technology and meaningful outcomes.
            </p>
          </div>

          {/* Vision */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left lg:border-r lg:border-gray-300 pr-0 lg:pr-6">
            <img
              src={our_vision}
              alt="our-vision"
              className="w-16 h-16 mb-4 transition-transform duration-300 hover:scale-105"
            />
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">Our Vision</h3>
            <p className="text-gray-700 text-sm md:text-base leading-relaxed">
              To become a trusted global partner in digital innovation — known for transforming bold ideas
              into future-ready solutions that drive business growth and social impact.
            </p>
          </div>

          {/* Values */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <img
              src={our_value}
              alt="our-value"
              className="w-16 h-16 mb-4 transition-transform duration-300 hover:scale-105"
            />
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">Our Value</h3>
            <p className="text-gray-700 text-sm md:text-base leading-relaxed">
              We stand for innovation, integrity, excellence, collaboration, customer focus, and continuous
              learning to build lasting value.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVisionValues;
