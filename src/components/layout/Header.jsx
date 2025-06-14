import React, { useState } from "react";
import Logo from "../../assets/kc-logo.webp";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ApplyNowModal from "../career/ApplyNowModal";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleModal = () => setShowModal(!showModal);

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About Us" },
    { path: "/services", label: "Services" },
    { path: "/technologies", label: "Technologies" },
    { path: "/career", label: "Career" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-blue-100 via-white to-blue-100 shadow-md px-6 md:px-12 py-3 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <img src={Logo} alt="Kite Career Logo" className="h-16" />
        </div>

        <ul className="hidden md:flex gap-6 text-sm text-gray-800 font-medium items-center">
          {navItems.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `text-lg font-semibold ${
                    isActive ? "text-[#00a4f0]" : "text-gray-800"
                  } hover:text-[#00a4f0] transition-all`
                }
                onClick={() => setIsOpen(false)} // Close mobile menu
              >
                {item.label}
              </NavLink>
            </li>
          ))}

          {/* <li>
            <button
              onClick={toggleModal}
              className="ml-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-white px-5 py-2 rounded-full font-semibold shadow-md transition-all duration-300 ease-in-out 
             hover:from-cyan-500 hover:to-blue-600 hover:scale-105 hover:shadow-lg 
             active:scale-95 active:shadow-inner"
            >
              Apply Now
            </button>

          </li> */}
        </ul>

        {/* Mobile View */}
        <div className="md:hidden flex items-center gap-3">
          {/* <button
            onClick={toggleModal}
            className="bg-gradient-to-r from-cyan-400 to-blue-500 text-white px-4 py-1 rounded-full font-medium shadow hover:scale-105 transition-all duration-300"
          >
            Apply
          </button> */}
          <div onClick={toggleMenu} className="cursor-pointer">
            {isOpen ? (
              <X className="text-black" />
            ) : (
              <Menu className="text-black" />
            )}
          </div>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.ul
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="fixed top-[70px] left-0 right-0 w-full bg-white shadow-md flex flex-col text-sm text-gray-800 font-medium z-40 md:hidden"
            >
              {navItems.map((item) => (
                <li key={item.path}>
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      `block px-6 py-3 text-sm font-semibold ${
                        isActive ? "text-[#00a4f0]" : "text-gray-800"
                      } hover:text-[#00a4f0] transition-all`
                    }
                    onClick={() => setIsOpen(false)} // Close menu on click
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
      </nav>

      {/* 🔁 Separate Modal Component */}
      {/* <AnimatePresence>
        <ApplyNowModal showModal={showModal} setShowModal={setShowModal} />
      </AnimatePresence> */}
    </>
  );
};

export default Header;
