import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Hero = ({ onContactClick }) => {
  const videoRef = useRef(null);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoError, setVideoError] = useState(false);

  useEffect(() => {
    // Load video immediately when component mounts
    if (videoRef.current) {
      const video = videoRef.current;
      
      // Try to play video immediately
      const handleCanPlay = () => {
        setVideoLoaded(true);
        video.play().catch(() => {
          // Auto-play might be blocked, but video is ready
          setVideoLoaded(true);
        });
      };

      const handleError = () => {
        setVideoError(true);
        setVideoLoaded(false);
      };

      video.addEventListener('canplay', handleCanPlay);
      video.addEventListener('canplaythrough', handleCanPlay);
      video.addEventListener('error', handleError);
      
      // Start loading video immediately
      video.load();
      
      // Try to play
      video.play().catch(() => {
        // Auto-play might be blocked, continue anyway
      });

      return () => {
        video.removeEventListener('canplay', handleCanPlay);
        video.removeEventListener('canplaythrough', handleCanPlay);
        video.removeEventListener('error', handleError);
      };
    }
  }, []);

  const scrollToPortfolio = () => {
    const portfolioSection = document.getElementById('portfolio');
    if (portfolioSection) {
      portfolioSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleContactClick = () => {
    if (onContactClick) {
      onContactClick();
    } else {
      // Fallback: scroll to contact section if no modal handler
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="w-full h-full object-cover"
          style={{
            opacity: videoLoaded ? 1 : 0,
            transition: 'opacity 0.3s ease-in-out'
          }}
        >
          <source
            src="/video/hero.mp4"
            type="video/mp4"
          />
        </video>
        {/* Fallback image only if video fails to load */}
        {videoError && (
          <img
            src="/img/main/1.jpg"
            alt="Terasy"
            className="absolute inset-0 w-full h-full object-cover"
          />
        )}
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-forest-green/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-cream mb-6 leading-tight"
          >
            Stylowe Tarasy:
            <br />
            <span className="text-mustard-gold">Funkcjonalność i Elegancja</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-10"
          >
            <motion.button
              onClick={scrollToPortfolio}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-mustard-gold text-forest-green font-semibold rounded-full 
                shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2
                text-lg"
            >
              Zobacz Portfolio
              <ArrowRight className="w-5 h-5" />
            </motion.button>
            <motion.button
              onClick={handleContactClick}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-transparent border-2 border-cream text-cream font-semibold 
                rounded-full hover:bg-cream hover:text-forest-green transition-all duration-300
                text-lg"
            >
              Skontaktuj się z nami
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-cream rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-3 bg-cream rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;

