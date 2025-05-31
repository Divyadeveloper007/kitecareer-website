// src/App.jsx
import React, { Suspense, lazy } from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Lazy load page components
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Team = lazy(() => import('./pages/Team'));
const Services = lazy(() => import('./pages/Services'));
const Technologies = lazy(() => import('./pages/Technologies'));
const Clients = lazy(() => import('./pages/Clients'));
const Contact = lazy(() => import('./pages/Contact'));

const App = () => {
  return (
    <>
      <Header />

      <main >
        <Suspense fallback={<div className="text-center mt-20 text-blue-500">Loading...</div>}>
          <section id="home"><Home /></section>
          <section id="about"><About /></section>
          <section id="team"><Team /></section>
          <section id="services"><Services /></section>
          <section id="technologies"><Technologies /></section>
          <section id="clients"><Clients /></section>
          <section id="contact"><Contact /></section>
        </Suspense>
      </main>

      <Footer />
    </>
  );
};

export default App;
