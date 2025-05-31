import React, { useState } from 'react';
import Logo from '../../assets/kc-logo.webp';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-5 left-1/2 transform -translate-x-1/2 z-50 w-[95%] max-w-6xl bg-white rounded-lg shadow-md px-6 py-3 flex justify-between items-center">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <img src={Logo} alt="Kite Career Logo" className="h-12" />
      </div>

      {/* Desktop Navigation */}
      <ul className="hidden md:flex gap-6 text-sm text-gray-800 font-medium">
        <li onClick={() => handleScroll('home')} className="hover:text-[#00a4f0] cursor-pointer font-semibold">Home</li>
        <li onClick={() => handleScroll('about')} className="hover:text-[#00a4f0] cursor-pointer">About Us</li>
        <li onClick={() => handleScroll('services')} className="hover:text-[#00a4f0] cursor-pointer">Services</li>
        <li onClick={() => handleScroll('technologies')} className="hover:text-[#00a4f0] cursor-pointer">Technologies</li>
        <li onClick={() => handleScroll('contact')} className="hover:text-[#00a4f0] cursor-pointer">Contact</li>
      </ul>

      {/* Mobile Menu Icon */}
      <div className="md:hidden cursor-pointer" onClick={toggleMenu}>
        {isOpen ? <X className="text-black" /> : <Menu className="text-black" />}
      </div>

      {/* Mobile Animated Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.ul
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="absolute top-full right-4 mt-2 w-48 bg-white rounded-lg shadow-md flex flex-col text-sm text-gray-800 font-medium md:hidden z-50"
          >
            <li onClick={() => handleScroll('home')} className="px-4 py-2 hover:text-[#00a4f0] cursor-pointer font-semibold">Home</li>
            <li onClick={() => handleScroll('about')} className="px-4 py-2 hover:text-[#00a4f0] cursor-pointer">About Us</li>
            <li onClick={() => handleScroll('services')} className="px-4 py-2 hover:text-[#00a4f0] cursor-pointer">Services</li>
            <li onClick={() => handleScroll('technologies')} className="px-4 py-2 hover:text-[#00a4f0] cursor-pointer">Technologies</li>
            <li onClick={() => handleScroll('contact')} className="px-4 py-2 hover:text-[#00a4f0] cursor-pointer">Contact</li>
          </motion.ul>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Header;
