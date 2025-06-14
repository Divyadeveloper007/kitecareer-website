import React, { useState } from "react";
import {
  MonitorSmartphone,
  AppWindow,
  Smartphone,
  Brain,
  Network,
  LockKeyhole,
  Cloud,
  Megaphone,
  Users,
} from "lucide-react";

const services= [
  {
    icon: <AppWindow size={32} />,
    title: "Product Development",
    desc: "We turn your ideas into full-fledged digital products with end-to-end development. From strategy to launch, we build with scalability and impact in mind.",
  },
  {
    icon: <MonitorSmartphone size={32} />,
    title: "Website Development",
    desc: "We design and develop responsive, SEO-friendly websites tailored to your brand. Built for performance, security, and seamless user experience.",
  },
  {
    icon: <Smartphone size={32} />,
    title: "Mobile App Development",
    desc: "Custom Android, iOS, and cross-platform apps to engage your mobile users.Our apps are intuitive, fast, and built for long-term value.",
  },
  {
    icon: <Brain size={32} />,
    title: "AI Solutions",
    desc: "Leverage AI to automate tasks, analyze data, and improve decision making. From chatbots to smart analytics, we build intelligent systems.",
  },
  {
    icon: <Network size={32} />,
    title: "IoT Solutions",
    desc: "We develop connected IoT systems for smart monitoring and control. Real-time data, improved efficiency, and seamless integration.",
  },
  {
    icon: <LockKeyhole size={32} />,
    title: "Blockchain Development",
    desc: "Secure and decentralized apps using blockchain and smart contracts. We bring transparency, trust, and innovation to your systems.",
  },
  {
    icon: <Cloud size={32} />,
    title: "Cloud Computing",
    desc: "Scalable cloud solutions for hosting, migration, and DevOps automation. Boost flexibility, speed, and performance across your infrastructure.",
  },
  {
    icon: <Megaphone size={32} />,
    title: "Digital Marketing",
    desc: "Grow your brand with SEO, social media, and targeted ad strategies. We help you reach, engage, and convert your ideal audience.",
  },
  {
    icon: <Users size={32} />,
    title: "Training & Consulting",
    desc: "Hands-on training and expert consulting to empower teams and individuals. Stay ahead with practical knowledge and strategic tech guidance.",
  },
];

const ServiceSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const gradient = "linear-gradient(to top, #0c161a, #0c4a66, #0b86bf)";

  return (
    <section className=" w-full py-16 px-4 md:px-16">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-[#00a4f0] font-bold text-lg tracking-wide mb-2">
          Our Services
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          We provide a wide range of creative services
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12 ">
          We offer a full spectrum of technology services to help businesses
          stay competitive, connected, and future-ready. Whether you're a
          startup or a growing enterprise, KiteCareer delivers smart solutions
          that scale with your vision.
        </p>

        {/* Services Grid */}
        {/* Responsive Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((item, index) => {
            const isHovered = hoveredIndex === index;

            return (
              <div
                key={index}
                className={`mx-auto w-full sm:w-[90%] lg:w-[85%] xl:w-[80%] 2xl:w-[75%] px-6 py-10 transition-all duration-300 hover:shadow-xl hover:scale-[1.03] flex flex-col items-center text-center ${
                  isHovered ? "text-white" : "text-black"
                }`}
                style={{
                  background: isHovered ? gradient : "",
                  borderRadius: "12px",
                  minHeight: "280px",
                  cursor: "pointer",
                }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div
                  className={`w-14 h-14 mb-4 rounded-full border-4 flex items-center justify-center transition-all duration-300 ${
                    isHovered
                      ? "bg-white text-[#0077b8]"
                      : "bg-[#0077b8] text-white border-[#0077b8]"
                  }`}
                >
                  {item.icon}
                </div>

                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm ">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
