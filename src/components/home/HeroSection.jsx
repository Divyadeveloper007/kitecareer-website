import React from 'react';
import Slider from 'react-slick';
import Banner1 from '../../assets/slider.webp';
import Banner2 from '../../assets/slider.webp';
import Banner3 from '../../assets/slider.webp';

const banners = [Banner1, Banner2, Banner3];

const HeroSection = () => {
 const settings = {
  dots: false,  // hide indicators
  infinite: true,
  speed: 500,
  autoplay: true,
  autoplaySpeed: 3000,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  pauseOnHover: true
};


  return (
    <section className="relative h-[600px] w-full">
      <Slider {...settings}>
        {banners.map((banner, index) => (
          <div key={index} className="relative h-[600px] w-full">
            {/* Background */}
            <img
              src={banner}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/60 w-1/2 rounded-r-3xl flex items-center justify-center px-2">
              <h2 className="text-white text-4xl md:text-6xl font-bold md:pl-20 text-left leading-snug max-w-2xl">
                Let's make <span className="text-blue-400">{`{}`}</span> software together!
              </h2>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default HeroSection;
