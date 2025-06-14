import React from "react";
import { useParams } from "react-router-dom";
import CommonSlider from "../../utils/CommonSlider";
import slider1 from "../../assets/services/service-slider.jpg";
import HomeIcon from '../../utils/HomeIcon';
import ServiceDetailLayout from "./ServiceDetailLayout";

import img1 from '../../assets/services/product-development.jpg';
import img2 from '../../assets/services/website-development.jpg';
import img3 from '../../assets/services/app-development.jpg';
import img4 from '../../assets/services/ai-solution.jpg';
import img5 from '../../assets/services/iot.jpg';
import img6 from '../../assets/services/blockchain.jpg';
import img7 from '../../assets/services/cloud-computing.jpg';
import img8 from '../../assets/services/digital-marketing.jpeg';
import img9 from '../../assets/services/training.jpg';

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
const services = [
  {
    slug: "product-development",
    icon: <AppWindow size={32} />,
    title: "Product Development",
    content: "We turn your ideas into full-fledged digital products with end-to-end development. From strategy to launch, we build with scalability and impact in mind.",
    image: img1,
    benefits: [
      "Transform your concept into a robust digital solution",
      "Faster go-to-market",
      "Improved user experience",
      "Future-proof and scalable architecture"
    ],
    highlights: [
      "Rapid prototyping",
      "Scalable architecture",
      "Agile methodology",
      "Post-launch support",
      "MVP delivery"
    ]
  },
  {
    slug: "website-development",
    icon: <MonitorSmartphone size={32} />,
    title: "Website Development",
    content: "We design and develop responsive, SEO-friendly websites tailored to your brand. Built for performance, security, and seamless user experience.",
    image: img2,
    benefits: [
      "High-converting design",
      "Enhanced brand presence",
      "Optimized for all devices",
      "Improved loading speed"
    ],
    highlights: [
      "Mobile-first design",
      "SEO optimization",
      "Custom UI/UX",
      "CMS integration",
      "High performance"
    ]
  },
  {
    slug: "mobile-app-development",
    icon: <Smartphone size={32} />,
    title: "Mobile App Development",
    content: "Custom Android, iOS, and cross-platform apps to engage your mobile users. Our apps are intuitive, fast, and built for long-term value.",
    image: img3,
    benefits: [
      "Engage mobile-first users",
      "High retention & usability",
      "Faster time to launch",
      "Cross-platform support"
    ],
    highlights: [
      "iOS & Android apps",
      "Cross-platform frameworks",
      "Fast & responsive UI",
      "App store deployment",
      "Maintenance & updates"
    ]
  },
  {
    slug: "ai-solutions",
    icon: <Brain size={32} />,
    title: "AI Solutions",
    content: "Leverage AI to automate tasks, analyze data, and improve decision making. From chatbots to smart analytics, we build intelligent systems.",
    image: img4,
    benefits: [
      "Smarter automation",
      "Better data-driven insights",
      "Operational efficiency",
      "Cost-effective solutions"
    ],
    highlights: [
      "Machine learning",
      "Chatbot integration",
      "Data prediction",
      "AI-driven analytics",
      "Process automation"
    ]
  },
  {
    slug: "iot-solutions",
    icon: <Network size={32} />,
    title: "IoT Solutions",
    content: "We develop connected IoT systems for smart monitoring and control. Real-time data, improved efficiency, and seamless integration.",
    image: img5,
    benefits: [
      "Real-time device control",
      "Improved efficiency",
      "Remote access",
      "Centralized monitoring"
    ],
    highlights: [
      "Real-time data",
      "Secure device communication",
      "Sensor integration",
      "Smart dashboards",
      "Remote monitoring"
    ]
  },
  {
    slug: "blockchain-development",
    icon: <LockKeyhole size={32} />,
    title: "Blockchain Development",
    content: "Secure and decentralized apps using blockchain and smart contracts. We bring transparency, trust, and innovation to your systems.",
    image: img6,
    benefits: [
      "High trust & transparency",
      "Fraud prevention",
      "Immutable records",
      "Reduced intermediaries"
    ],
    highlights: [
      "Smart contracts",
      "DApp development",
      "Ethereum & Solidity",
      "Crypto wallet integration",
      "Private blockchain"
    ]
  },
  {
    slug: "cloud-computing",
    icon: <Cloud size={32} />,
    title: "Cloud Computing",
    content: "Scalable cloud solutions for hosting, migration, and DevOps automation. Boost flexibility, speed, and performance across your infrastructure.",
    image: img7,
    benefits: [
      "Scalable infrastructure",
      "High uptime & availability",
      "Faster deployments",
      "Reduced operational costs"
    ],
    highlights: [
      "AWS & Azure solutions",
      "Cloud migration",
      "DevOps CI/CD",
      "Serverless architecture",
      "Backup & recovery"
    ]
  },
  {
    slug: "digital-marketing",
    icon: <Megaphone size={32} />,
    title: "Digital Marketing",
    content: "Grow your brand with SEO, social media, and targeted ad strategies. We help you reach, engage, and convert your ideal audience.",
    image: img8,
    benefits: [
      "Increased brand visibility",
      "Lead generation",
      "Better customer engagement",
      "Higher ROI"
    ],
    highlights: [
      "Search engine optimization",
      "PPC campaigns",
      "Content strategy",
      "Email marketing",
      "Social media growth"
    ]
  },
  {
    slug: "training-consulting",
    icon: <Users size={32} />,
    title: "Training & Consulting",
    content: "Hands-on training and expert consulting to empower teams and individuals. Stay ahead with practical knowledge and strategic tech guidance.",
    image: img9,
    benefits: [
      "Up-to-date tech knowledge",
      "Expert-led sessions",
      "Tailored programs",
      "Team productivity boost"
    ],
    highlights: [
      "Workshops & webinars",
      "Customized training paths",
      "Expert mentoring",
      "Tech assessments",
      "Corporate upskilling"
    ]
  },
];

const ServiceDetail = () => {
  const { slug } = useParams();
  const service = services.find((s) => s.slug === slug);

  const slides = [
    {
      image: slider1,
      title: service?.title || "Service",
    },
  ];

  const breadcrumbItems = [
    { label: "Home", link: "/", icon: HomeIcon },
    { label: "Services", link: "/services" },
    { label: service?.title || "Not Found" },
  ];

  return (
    <section className="min-h-screen bg-[#f5faff] text-[#041735]">
      <CommonSlider slides={slides} breadcrumbItems={breadcrumbItems} />

      <div className="px-6 py-12 md:py-16 lg:px-32">
        <ServiceDetailLayout services={services} />
      </div>
    </section>
  );
};

export default ServiceDetail;