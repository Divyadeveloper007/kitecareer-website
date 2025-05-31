import React, { useEffect, useRef } from 'react';
import PHP_logo from '../../assets/programmingIcons/PHP_logo.webp';
import Python_logo from '../../assets/programmingIcons/Python_logo.webp';
import Java_logo from '../../assets/programmingIcons/Java_logo.webp';
import Node_logo from '../../assets/programmingIcons/Node_logo.webp';
import Postgresql_icon from '../../assets/programmingIcons/Postgresql_icon.webp';
import react_logo from '../../assets/programmingIcons/react_logo 2.webp';
import C_logo from '../../assets/programmingIcons/Java_logo.webp';
import Cpp_logo from '../../assets/programmingIcons/Node_logo.webp';
import Js_logo from '../../assets/programmingIcons/PHP_logo.webp';
import Html_logo from '../../assets/programmingIcons/Postgresql_icon.webp';
import Css_logo from '../../assets/programmingIcons/Python_logo.webp';
import Mongo_logo from '../../assets/programmingIcons/react_logo 2.webp';

const icons = [
  { src: PHP_logo, alt: 'PHP Logo' },
  { src: Python_logo, alt: 'Python Logo' },
  { src: Java_logo, alt: 'Java Logo' },
  { src: Node_logo, alt: 'Node.js Logo' },
  { src: Postgresql_icon, alt: 'PostgreSQL Logo' },
  { src: react_logo, alt: 'React Logo' },
  { src: C_logo, alt: 'C Logo' },
  { src: Cpp_logo, alt: 'C++ Logo' },
  { src: Js_logo, alt: 'JavaScript Logo' },
  { src: Html_logo, alt: 'HTML Logo' },
  { src: Css_logo, alt: 'CSS Logo' },
  { src: Mongo_logo, alt: 'MongoDB Logo' },
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
    <div className="bg-white w-full py-2 lg:py-6 shadow-inner rounded-t-3xl overflow-hidden">
      <div
        ref={scrollRef}
        className="max-w-6xl mx-auto overflow-x-auto whitespace-nowrap scrollbar-hide"
      >
        <div className="flex flex-nowrap gap-6 lg:gap-10 items-center py-2">
          {repeatedIcons.map((icon, index) => (
            <div
              key={index}
              className="flex items-center justify-center min-w-[60px] lg:min-w-[80px] transition-transform duration-300 hover:scale-110"
            >
              <img src={icon.src} alt={icon.alt} className="h-8 lg:h-10" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProgrammingIcons;
