import React from "react";
import {
  FaFacebookF,
  FaYoutube,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaPinterestP,
} from "react-icons/fa";
import logo from "../../assets/kc-logo.webp";
import bg_img from "../../assets/footer-bg.webp";

export default function Footer() {
  return (
    <footer className="relative text-black overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0 w-full h-full bg-cover bg-center"
        style={{ backgroundImage: `url(${bg_img})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-white/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto w-full px-6 md:px-10 py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Logo and About */}
          <div className="space-y-4">
            <img src={logo} alt="Kite Career Logo" className="h-14" />
            <p className="text-sm text-gray-700 leading-relaxed text-justify">
              At KiteCareer, we craft intelligent software solutions that drive
              results. Our team builds custom apps and systems tailored to your
              business goals. We combine innovation with technology to solve
              real-world problems. Your success is our mission — through smart,
              scalable digital solutions.
            </p>
          </div>

          {/* About Company */}
          <div className="space-y-2">
            <h3 className="font-bold text-lg">ABOUT COMPANY</h3>
            <ul className="text-sm text-gray-700 space-y-1">
              {[
                "About Us",
                "Services",
                "Technology",
                "Contact Us",
                "Portfolio",
                "Career",
              ].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:underline">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Location */}
          <div className="space-y-2">
            <h3 className="font-bold text-lg">OUR LOCATION</h3>
            <p className="text-sm text-gray-700">
              VKR Complex, Behind Bus Stand, Surandai 627859.
            </p>
            <p className="text-sm font-semibold">Branches</p>
            <p className="text-sm text-gray-700">
              Chennai, Tenkasi - Tamil Nadu
            </p>
          </div>

          {/* Map Embed */}
          <div className="space-y-2">
            <h3 className="font-bold text-lg">HEAD OFFICE</h3>
            <iframe
              title="Kite Career Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.9232513807538!2d77.41851207350658!3d8.97920988976945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b069dc301286259%3A0x3ce75e35eb627fdf!2sKite%20Career!5e0!3m2!1sen!2sin!4v1748915355420!5m2!1sen!2sin"
              width="100%"
              height="160"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-md"
            ></iframe>
          </div>
        </div>

        {/* Divider Line */}
        <div className="border-t my-8"></div>

        {/* Copyright */}
        <div className="text-center text-sm text-gray-600 pb-4">
          © 2025 KiteCareer. All rights reserved.
        </div>

        {/* Social Icons */}
        <div className="flex justify-center space-x-6 pb-6">
          <a
            href="https://www.facebook.com/kitecareer.kitecareer.5?mibextid=2JQ9oc"
            target="_blank"
            aria-label="Facebook"
            className="text-gray-600 hover:text-blue-600"
          >
            <FaFacebookF size={20} />
          </a>
          <a
            href="https://www.youtube.com/@KiteCareer"
            target="_blank"
            aria-label="YouTube"
            className="text-gray-600 hover:text-red-600"
          >
            <FaYoutube size={20} />
          </a>
          <a
            href="https://twitter.com/KiteCareer2018"
            target="_blank"
            aria-label="Twitter"
            className="text-gray-600 hover:text-blue-400"
          >
            <FaTwitter size={20} />
          </a>
          <a
            href="https://www.instagram.com/kitecareer__its_your_startup/"
            target="_blank"
            aria-label="Instagram"
            className="text-gray-600 hover:text-pink-600"
          >
            <FaInstagram size={20} />
          </a>
          <a
            href="https://www.linkedin.com/company/kitecareer/"
            target="_blank"
            aria-label="LinkedIn"
            className="text-gray-600 hover:text-blue-700"
          >
            <FaLinkedinIn size={20} />
          </a>
          <a
            href="https://www.pinterest.com/kitecareer"
            target="_blank"
            aria-label="Pinterest"
            className="text-gray-600 hover:text-red-500"
          >
            <FaPinterestP size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}
