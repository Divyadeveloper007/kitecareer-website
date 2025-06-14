import React from "react";
import team1 from "../assets/team/card1.webp";
import team2 from "../assets/team/card2.webp";
import team3 from "../assets/team/card3.webp";
import team4 from "../assets/team/card4.webp";
import { Link } from "react-router-dom";

const team = [
  {
    name: "Mariselvam",
    role: "CEO & Founder",
    img: team1,
    link: "https://www.linkedin.com/in/mariselvam-subbiah-68aa837/",
  },
  {
    name: "Pappa",
    role: "Managing Director",
    img: team2,
    link: "https://www.linkedin.com/in/pappa-mariselvam-798b8a1a0/",
  },
  {
    name: "Jothisree",
    role: "Operation Manager",
    img: team3,
    link: "https://www.linkedin.com/in/jothisree-km-0975a9162/",
  },
  {
    name: "Nithya",
    role: "Human Resources",
    img: team4,
    link: "https://www.linkedin.com/in/nithya-j-hr/",
  },
];

const Team = () => {
  return (
    <section id="team" className="w-full py-16 px-4 md:px-10">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Meet the Team
        </h2>
        <p className="text-gray-600 mb-10 md:text-lg">
          Meet our team of professionals to serve you
        </p>

        <div className="flex justify-center flex-wrap gap-4 mb-10">
          <button className="bg-[#00a4f0] text-white px-6 py-2 rounded-lg text-sm font-semibold shadow hover:bg-[#0b86bf] transition">
            About us
          </button>
          <Link
            to="/contact"
            className="border border-[#0b86bf] text-[#0b86bf] px-6 py-2 rounded-lg text-sm font-semibold hover:bg-gray-100 transition"
          >
            Contact
          </Link>
        </div>

        <div className="flex gap-6 justify-center flex-wrap">
          <div className="flex gap-6 justify-center flex-wrap transition-all duration-500 ease-in-out">
            {team.map((member, idx) => (
              <div
                key={idx}
                className="w-72 rounded-xl overflow-hidden shadow-lg group cursor-pointer transition-all duration-300"
              >
                {/* Image */}
                <div className="relative w-full h-52 overflow-hidden">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Footer with overlay */}
                <div className="relative p-4 text-center">
                  {/* Gradient Overlay */}
                  <div
                    className="absolute inset-0 bg-gradient-to-r from-[#0b86bf] via-[#00a4f0] to-[#0b86bf]
  translate-y-full group-hover:translate-y-0 opacity-0 group-hover:opacity-100 
  transition-all duration-700 ease-in-out rounded-b-xl z-0"
                  ></div>

                  {/* Content (above overlay) */}
                  <div className="relative z-10 flex flex-col items-center justify-center min-h-[100px]">
                    <h3 className="text-lg font-semibold text-gray-500 group-hover:text-white">
                      {member.name}
                    </h3>
                    <p className="text-sm text-gray-400 group-hover:text-white">
                      {member.role}
                    </p>

                    {/* LinkedIn Icon: Hidden by default, show on hover only */}
                    <a
                      href={member.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 w-8 h-8 flex items-center justify-center bg-white text-[#0b86bf] rounded-full opacity-0 group-hover:opacity-100 hover:bg-[#0b86bf] hover:text-white transition duration-300"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-4 h-4 fill-current"
                        viewBox="0 0 448 512"
                      >
                        <path d="M100.28 448H7.4V148.9h92.88zm-46.44-340.4a53.76 53.76 0 1 1 53.76-53.76 53.76 53.76 0 0 1-53.76 53.76zm394.34 340.4h-92.68V302.4c0-34.7-.7-79.4-48.4-79.4-48.4 0-55.8 37.8-55.8 76.8v148.2h-92.68V148.9h89v40.8h1.3c12.4-23.4 42.6-48.4 87.7-48.4 93.8 0 111.1 61.8 111.1 142.3V448z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
