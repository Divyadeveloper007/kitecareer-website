import React from 'react';
import Slider from 'react-slick';
import Banner1 from '../../assets/slider4.webp';
import Banner2 from '../../assets/slider5.webp';
import Banner3 from '../../assets/slider6.webp';

const banners = [Banner1, Banner2, Banner3];

const HeroSection = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 300,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    pauseOnHover: false,
    cssEase: 'ease-in-out',
    lazyLoad: 'ondemand', // Only loads visible slide
    responsive: [
      {
        breakpoint: 768,
        settings: {
          speed: 300,
          autoplaySpeed: 2500,
        },
      },
    ],
  };

  return (
    <section className="pt-[74px] min-h-[400px] sm:h-[600px] w-full overflow-hidden">
      <Slider {...settings}>
        {banners.map((banner, index) => (
          <div key={index} className="relative h-[400px] sm:h-[600px] w-full">
            <img
              src={banner}
              alt={`Slide ${index + 1}`}
              loading={index === 0 ? 'eager' : 'lazy'}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/60 flex items-center justify-center px-2">
              <h2 className="text-white text-3xl sm:text-5xl md:text-6xl font-bold text-center sm:text-left leading-snug max-w-2xl">
                Let’s make <span className="text-blue-400">{`{}`}</span> software together!
              </h2>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default HeroSection;
