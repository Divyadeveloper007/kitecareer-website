import React from "react";
import logo from '../../assets/footer-logo.webp';
import { Facebook, Instagram, Twitter } from "lucide-react";

export default function Footer() {
    return (
        <footer id="footer" className="bg-[#18212C] text-white py-10">
            <div className="container mx-auto px-4 text-center space-y-6">
                {/* Logo and Tagline */}
                <div className="flex flex-col items-center space-y-2">
                    <img
                        src={logo}
                        alt="KITE Career Logo"
                        className="h-14 sm:h-16"
                    />
                    <p className="text-gray-400 max-w-md text-sm sm:text-base px-2">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
                    </p>
                </div>

                {/* Navigation Links */}
                <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-sm">
                    {['Home', 'About', 'Services', 'Technologies', 'Contact', 'FAQs'].map((item) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            className="hover:text-blue-400 transition-colors duration-200"
                        >
                            {item}
                        </a>
                    ))}
                </div>

                {/* Social Icons */}
                <div className="flex justify-center gap-4 sm:gap-6 text-lg sm:text-xl">
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
                        <Facebook />
                    </a>

                    <a href="https://www.facebook.com/yourpage" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
                        <Twitter />
                    </a>
                    <a href="https://www.facebook.com/yourpage" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
                        <Instagram />
                    </a>
                </div>
            </div>
        </footer>
    );
}
