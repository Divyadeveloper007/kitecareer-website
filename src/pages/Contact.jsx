import { Mail, MapPin, PhoneCall } from "lucide-react";
import React from "react";

export default function Contact() {
    return (
        <div
            id="contact"
            className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-10"
        >
            <div className="flex flex-col md:flex-row w-full max-w-6xl gap-6">
                {/* Left Side - Contact Info */}
                <div className="md:w-1/2 px-4 md:px-8 py-6 text-gray-800">
                    <h2 className="text-3xl sm:text-4xl font-bold text-[#011333] mb-4">
                        Let's talk with us
                    </h2>
                    <p className="mb-6 text-base sm:text-lg text-gray-600">
                        Questions, comments, or suggestions? Simply fill in the form and we’ll be in touch shortly.
                    </p>
                    <div className="space-y-4">
                        <div className="flex items-start space-x-3 text-[#011333] text-base sm:text-xl font-semibold">
                            <MapPin size={20} className="text-blue-600 mt-1" />
                            <span>VKR complex, Behind bus stand, Surandai 627859.</span>
                        </div>
                        <div className="flex items-start space-x-3 text-[#011333] text-base sm:text-xl font-semibold">
                            <PhoneCall size={20} className="text-blue-600 mt-1" />
                            <span>+91 9498478472</span>
                        </div>
                        <div className="flex items-start space-x-3 text-[#011333] text-base sm:text-xl font-semibold">
                            <Mail size={20} className="text-blue-600 mt-1" />
                            <span>hr@kitecareer.com</span>
                        </div>
                    </div>
                </div>

                {/* Right Side - Form */}
                <div className="md:w-1/2 px-4 py-6 bg-white border border-gray-300 shadow-lg rounded-lg max-w-xl mx-auto w-full">
                    <form className="space-y-4">
                        <div className="flex flex-col md:flex-row md:space-x-4">
                            <input
                                type="text"
                                placeholder="First Name*"
                                className="flex-1 p-3 border border-gray-300 bg-[#fafafa] rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500 hover:border-blue-500 mb-4 md:mb-0"
                            />
                            <input
                                type="text"
                                placeholder="Last Name*"
                                className="flex-1 p-3 border border-gray-300 bg-[#fafafa] rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500 hover:border-blue-500"
                            />
                        </div>
                        <input
                            type="email"
                            placeholder="Email*"
                            className="w-full p-3 border border-gray-300 bg-[#fafafa] rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500 hover:border-blue-500"
                        />
                        <input
                            type="tel"
                            placeholder="Phone Number*"
                            className="w-full p-3 border border-gray-300 bg-[#fafafa] rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500 hover:border-blue-500"
                        />
                        <textarea
                            rows="4"
                            placeholder="Your message..."
                            className="w-full p-3 border border-gray-300 bg-[#fafafa] rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500 hover:border-blue-500"
                        ></textarea>
                        <button
                            type="submit"
                            className="w-full bg-[#0077b8] hover:bg-[#0078b8ea] text-white font-semibold py-3 rounded-full transition duration-300"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
