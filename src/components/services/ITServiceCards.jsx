import React from "react";
import {
  AppWindow,
  MonitorSmartphone,
  Smartphone,
  Brain,
  Network,
  LockKeyhole,
  Cloud,
  Megaphone,
  Users,
} from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    slug: "product-development",
    icon: <AppWindow size={28} />,
    title: "Product Development",
    desc: "We turn your ideas into full-fledged digital products with end-to-end development. From strategy to launch, we build with scalability and impact in mind.",
  },
  {
    slug: "website-development",
    icon: <MonitorSmartphone size={28} />,
    title: "Website Development",
    desc: "We design and develop responsive, SEO-friendly websites tailored to your brand. Built for performance, security, and seamless user experience.",
  },
  {
    slug: "mobile-app-development",
    icon: <Smartphone size={28} />,
    title: "Mobile App Development",
    desc: "Custom Android, iOS, and cross-platform apps to engage your mobile users. Our apps are intuitive, fast, and built for long-term value.",
  },
  {
    slug: "ai-solutions",
    icon: <Brain size={28} />,
    title: "AI Solutions",
    desc: "Leverage AI to automate tasks, analyze data, and improve decision making. From chatbots to smart analytics, we build intelligent systems.",
  },
  {
    slug: "iot-solutions",
    icon: <Network size={28} />,
    title: "IoT Solutions",
    desc: "We develop connected IoT systems for smart monitoring and control. Real-time data, improved efficiency, and seamless integration.",
  },
  {
    slug: "blockchain-development",
    icon: <LockKeyhole size={28} />,
    title: "Blockchain Development",
    desc: "Secure and decentralized apps using blockchain and smart contracts. We bring transparency, trust, and innovation to your systems.",
  },
  {
    slug: "cloud-computing",
    icon: <Cloud size={28} />,
    title: "Cloud Computing",
    desc: "Scalable cloud solutions for hosting, migration, and DevOps automation. Boost flexibility, speed, and performance across your infrastructure.",
  },
  {
    slug: "digital-marketing",
    icon: <Megaphone size={28} />,
    title: "Digital Marketing",
    desc: "Grow your brand with SEO, social media, and targeted ad strategies. We help you reach, engage, and convert your ideal audience.",
  },
  {
    slug: "training-consulting",
    icon: <Users size={28} />,
    title: "Training & Consulting",
    desc: "Hands-on training and expert consulting to empower teams and individuals. Stay ahead with practical knowledge and strategic tech guidance.",
  },
];

export default function ITServiceCards() {
  return (
    <section className="bg-[#f5faff] py-14 px-4 lg:px-20">
      <h2 className="text-[#00a4f0] font-bold text-lg  text-center tracking-wide mb-2">
        IT Support For Business
      </h2>
      <h2 className="text-3xl md:text-4xl text-center mb-14  font-bold text-gray-900 ">
        We provide a wide range of creative services
      </h2>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-center">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white text-center p-6 rounded-2xl shadow-md hover:shadow-2xl flex flex-col items-center h-full hover:-translate-y-2 transition-all duration-300 animate-fadeIn"
          >
            <div className="w-16 h-16 bg-gray-100 border-2 border-white rounded-full shadow-lg flex items-center justify-center -mt-12 mb-5 text-blue-600">
              {React.cloneElement(service.icon, {
                size: 28,
                stroke: "#0077B8",
              })}
            </div>

            <h3 className="text-xl font-semibold text-[#041735] mb-2">
              {service.title}
            </h3>
            <p className="text-sm text-gray-600 mb-6 leading-relaxed">
              {service.desc.split(".")[0]}.
            </p>
            <Link
              to={`/services/${service.slug}`}
              className="relative inline-block px-6 py-2 rounded-full text-sm font-semibold transition duration-300 group"
            >
              <span className="absolute inset-0 rounded-full bg-gradient-to-r from-[#09A7F1]  to-[#0F579A] opacity-100 group-hover:opacity-100"></span>
              <span className="relative z-10  group-hover:text-white text-white px-6 py-2 rounded-full transition-all duration-300">
                Learn More →
              </span>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
