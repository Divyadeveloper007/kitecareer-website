import { Carousel, Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";

const CommonSlider = ({ slides = [], breadcrumbItems = [] }) => {
  return (
    <div className="relative">
      <Carousel
        className="h-[90vh] rounded-none"
        autoplay={true}
        loop={true}
        navigation={false}
        prevArrow={() => null}
        nextArrow={() => null}
      >
        {slides.map((slide, index) => (
          <div key={index} className="relative h-full w-full">
            {/* Background Image - show full image from bottom */}
            <img
              src={slide.image}
              alt={`slide ${index + 1}`}
              className="h-full w-full object-cover object-[center_30%]"
            />

            {/* Black Gradient Overlay */}
            <div className="absolute inset-0 bg-black/40 z-10" />

            {/* Title Text */}
            <div className="absolute inset-0 z-20 flex flex-col justify-center px-6 lg:px-40 text-center">
              <Typography className="text-white font-bold text-4xl md:text-5xl lg:text-6xl mb-4 font-[Ubuntu, sans-serif]">
                {slide.title}
              </Typography>
            </div>
          </div>
        ))}
      </Carousel>

      {/* Breadcrumb Section - aligned to left with blue theme */}
<div className="absolute bottom-[30%] left-1/2 transform -translate-x-1/2 z-30 px-4 w-full flex justify-center">
        <div
          className="flex items-center bg-gradient-to-r from-[#c35794] to-[#d13eb6]
 px-6 py-2 rounded-full text-white text-sm md:text-base shadow-md space-x-2 font-[Ubuntu, sans-serif]"
        >
          {breadcrumbItems.map((item, idx) => (
            <span key={idx} className="flex items-center space-x-1">
              {item.link ? (
                <Link
                  to={item.link}
                  className="hover:underline flex items-center space-x-1 transition duration-200 hover:text-cyan-400"
                >
                  {item.icon && <item.icon className="w-4 h-4" />}
                  <span>{item.label}</span>
                </Link>
              ) : (
                <span className="flex items-center space-x-1">
                  {item.icon && <item.icon className="w-4 h-4" />}
                  <span>{item.label}</span>
                </span>
              )}
              {idx < breadcrumbItems.length - 1 && (
                <span className="mx-1">→</span>
              )}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CommonSlider;
