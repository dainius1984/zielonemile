import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Gallery from '../components/sections/Gallery';
import Features from '../components/sections/Features';
import Contact from '../components/sections/Contact';
import { ConsultationModal } from '../components/ConsultationModal';

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Handle hash navigation on home page
    if (location.hash === '#contact') {
      setTimeout(() => {
        const element = document.getElementById('contact');
        if (element) {
          const headerOffset = 80;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }, 100);
    }
  }, [location.hash]);

  return (
    <>
      <Hero onContactClick={() => setIsModalOpen(true)} />
      <About />
      <Gallery />
      <Features />
      <Contact />
      <ConsultationModal open={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default Home;

