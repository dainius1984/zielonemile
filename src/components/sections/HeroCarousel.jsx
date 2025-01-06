import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const HeroCarousel = ({ 
  slides = [
    {
      id: 1,
      image: "/img/main/1.jpg",
      title: "Stylowe Tarasy",
      subtitle: "Funkcjonalność i Elegancja"
    },
    {
      id: 2,
      image: "/img/main/2.jpg",
      title: "Nowoczesne Ogrody",
      subtitle: "Harmonia z Naturą"
    },
    {
      id: 3,
      image: "/img/main/3.jpg",
      title: "Automatyczne Nawadnianie",
      subtitle: "Inteligentna Pielęgnacja"
    }
  ],
  autoplayInterval = 5000,
  primaryCTALink = "/portfolio",
  secondaryCTALink = "/contact"
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const goToSlide = useCallback((index) => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentSlide(index);
      setTimeout(() => setIsTransitioning(false), 500);
    }
  }, [isTransitioning]);

  const nextSlide = useCallback(() => {
    goToSlide((currentSlide + 1) % slides.length);
  }, [currentSlide, slides.length, goToSlide]);

  const prevSlide = useCallback(() => {
    goToSlide((currentSlide - 1 + slides.length) % slides.length);
  }, [currentSlide, slides.length, goToSlide]);

  useEffect(() => {
    const timer = setInterval(nextSlide, autoplayInterval);
    return () => clearInterval(timer);
  }, [nextSlide, autoplayInterval]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') prevSlide();
      if (e.key === 'ArrowRight') nextSlide();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [prevSlide, nextSlide]);

  return (
    <div className="relative w-full h-[calc(100vh-96px)] overflow-hidden">
      {/* Slides */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-500
              ${index === currentSlide ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
          >
            <div className="absolute inset-0 bg-black/50" />
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            
{/* Slide Content - Centered with proper spacing */}
<div className="absolute inset-0 flex flex-col items-center justify-center px-4">
              <div className="w-full text-center mb-8">
                <h1 className="text-3xl md:text-6xl font-bold text-white mb-4">
                  {slide.title}
                </h1>
                <p className="text-lg md:text-2xl text-white mb-8">
                  {slide.subtitle}
                </p>
              </div>
              
              {/* CTAs - Centered in viewport */}
              <div className="w-full max-w-md flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={primaryCTALink}
                  className="px-6 py-3 bg-yellow-400 text-gray-800 rounded-full 
                    hover:bg-yellow-500 transition-colors duration-300 
                    font-semibold text-base md:text-lg text-center"
                >
                  Zobacz realizacje
                </a>
                <a
                  href={secondaryCTALink}
                  className="px-6 py-3 border-2 border-yellow-400 text-yellow-400 
                    rounded-full hover:bg-yellow-400 hover:text-gray-800 
                    transition-colors duration-300 font-semibold text-base md:text-lg text-center"
                >
                  Skontaktuj się z nami
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows - Adjusted for better mobile visibility */}
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between px-4 pointer-events-none">
        <button
          onClick={prevSlide}
          className="p-2 bg-black/30 hover:bg-black/50 rounded-full 
            transition-colors duration-300 text-white pointer-events-auto"
          aria-label="Previous slide"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={nextSlide}
          className="p-2 bg-black/30 hover:bg-black/50 rounded-full 
            transition-colors duration-300 text-white pointer-events-auto"
          aria-label="Next slide"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Pagination Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-colors duration-300
              ${index === currentSlide ? 'bg-yellow-400' : 'bg-white/50 hover:bg-white'}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;