import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import WhatsAppButton from "./components/whatsapp/WhatsAppButton";
import ServiceDetail from "./components/services/ServiceDetail";

// Lazy load components
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Team = lazy(() => import("./pages/Team"));
const Services = lazy(() => import("./pages/Services"));
const Technologies = lazy(() => import("./pages/Technologies"));
const Clients = lazy(() => import("./pages/Clients"));
const Career = lazy(() => import("./pages/Career"));
const Contact = lazy(() => import("./pages/Contact"));

const App = () => {
  return (
    <>
      <Header />

      <main className="bg-[#f2f2f2]">
        <Suspense
          fallback={
            <div className="text-center mt-20 text-blue-500">Loading...</div>
          }
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/team" element={<Team />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/:slug" element={<ServiceDetail />} />
            <Route path="/technologies" element={<Technologies />} />
            <Route path="/clients" element={<Clients />} />
            <Route path="/career" element={<Career />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Suspense>
      </main>

      <WhatsAppButton />
      <Footer />

      <ToastContainer position="top-right" autoClose={3000} theme="colored" />
    </>
  );
};

export default App;
