import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import PortfolioHeader from '../components/portfolio/PortfolioHeader';
import CategoryFilters from '../components/portfolio/CategoryFilters';
import CategoryHighlight from '../components/portfolio/CategoryHighlight';
import PortfolioGrid from '../components/portfolio/PortfolioGrid';

const Portfolio = () => {
  const location = useLocation();
  const [activeCategory, setActiveCategory] = useState('all');

  // Handle hash navigation from Services page
  useEffect(() => {
    if (location.hash) {
      const categoryFromHash = location.hash.replace('#', '');
      // Map portfolio categories
      const categoryMap = {
        'tarasy': 'tarasy',
        'ogrody': 'ogrody',
        'plac-zabaw': 'plac-zabaw',
        'zabudowy': 'zabudowy'
      };
      
      if (categoryMap[categoryFromHash]) {
        setActiveCategory(categoryMap[categoryFromHash]);
        // Scroll to filters after a short delay
        setTimeout(() => {
          const filtersElement = document.querySelector('[data-category-filters]');
          if (filtersElement) {
            filtersElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }, 100);
      }
    }
  }, [location.hash]);
  const [imageDimensions, setImageDimensions] = useState({});

  const categories = [
    { id: 'all', label: 'Wszystkie', slug: 'all' },
    { id: 'tarasy', label: 'Tarasy', slug: 'tarasy' },
    { id: 'ogrody', label: 'Ogrody', slug: 'ogrody' },
    { id: 'bramy-i-garaze', label: 'Bramy i Garaże', slug: 'bramy-i-garaze' },
    { id: 'plac-zabaw', label: 'Place Zabaw', slug: 'plac-zabaw' },
    { id: 'zabudowy', label: 'Zabudowy', slug: 'zabudowy' },
  ];

  // Category descriptions and highlights
  const categoryInfo = {
    'tarasy': {
      title: 'Tarasy',
      description: 'Tworzymy tarasy, które są przedłużeniem Twojego domu - przestrzenie, gdzie elegancja spotyka się z funkcjonalnością. Wykorzystujemy najwyższej jakości materiały: modrzew, kompozyt, poliwęglan komorowy i lity, zapewniając trwałość i piękno przez lata.',
      highlightImage: '/img/tarasy/Modrzew gładki bezbarwny.jpg',
      highlightTitle: 'Modrzew Gładki Bezbarwny',
      highlightDescription: 'Naturalne piękno drewna w najczystszej formie'
    },
    'ogrody': {
      title: 'Ogrody',
      description: 'Projektujemy i tworzymy ogrody, które są oazą spokoju i harmonii. Każdy ogród to unikalna kompozycja roślin, ścieżek i elementów małej architektury, tworząca przestrzeń idealną do relaksu i kontemplacji.',
      highlightImage: '/img/ogrody/nowoczesny design.jpg',
      highlightTitle: 'Nowoczesny Design',
      highlightDescription: 'Gdzie współczesna estetyka spotyka się z naturą - minimalistyczne formy, czyste linie i harmonijne kompozycje roślinne'
    },
    'bramy-i-garaze': {
      title: 'Bramy i Garaże',
      description: 'Bezpieczeństwo i funkcjonalność w jednym. Projektujemy i montujemy bramy oraz garaże, które nie tylko chronią, ale także dodają charakteru Twojej posesji. Nowoczesne rozwiązania techniczne spotykają się z estetyką.',
      highlightImage: '/img/bramy i garaze/stylowe garaze.jpg',
      highlightTitle: 'Stylowe Garaże',
      highlightDescription: 'Gdzie funkcjonalność spotyka się z elegancją - nowoczesne rozwiązania architektoniczne dla Twojej posesji'
    },
    'plac-zabaw': {
      title: 'Place Zabaw',
      description: 'Tworzymy bezpieczne i ekologiczne place zabaw, gdzie dzieci mogą rozwijać się poprzez zabawę. Wykorzystujemy wyłącznie certyfikowane, przyjazne środowisku materiały, zapewniając najwyższe standardy bezpieczeństwa dla najmłodszych.',
      highlightImage: '/img/plac zabaw/nowoczesny plac zabaw.jpg',
      highlightTitle: 'Nowoczesny Plac Zabaw',
      highlightDescription: 'Bezpieczne, ekologiczne materiały dla dzieci - gdzie zabawa spotyka się z bezpieczeństwem i troską o środowisko'
    },
    'zabudowy': {
      title: 'Zabudowy',
      description: 'Funkcjonalne zabudowy gospodarcze, które organizują przestrzeń wokół Twojego domu. Od śmietników po pomieszczenia gospodarcze - każda zabudowa jest zaprojektowana tak, aby była praktyczna i estetyczna.',
      highlightImage: '/img/zabudowy/Zabudowa śmietnik (1).jpg',
      highlightTitle: 'Zabudowa Śmietnik',
      highlightDescription: 'Eleganckie rozwiązania dla codziennych potrzeb - funkcjonalność w pięknym opakowaniu'
    }
  };

  // Portfolio images - automatically loaded from img folders
  // Format: { id, src, alt, category }
  const portfolioImages = [
    // Tarasy
    { id: 1, src: '/img/tarasy/20190527_152218.jpg', alt: 'Taras', category: 'tarasy' },
    { id: 2, src: '/img/tarasy/20191009_115738.jpg', alt: 'Taras', category: 'tarasy' },
    { id: 3, src: '/img/tarasy/20191022_134147.jpg', alt: 'Taras', category: 'tarasy' },
    { id: 4, src: '/img/tarasy/20191218_114130.jpg', alt: 'Taras', category: 'tarasy' },
    { id: 5, src: '/img/tarasy/20200430_160320.jpg', alt: 'Taras', category: 'tarasy' },
    { id: 6, src: '/img/tarasy/20200601_155227.jpg', alt: 'Taras', category: 'tarasy' },
    { id: 7, src: '/img/tarasy/20200711_132938.jpg', alt: 'Taras', category: 'tarasy' },
    { id: 8, src: '/img/tarasy/20200908_110915.jpg', alt: 'Taras', category: 'tarasy' },
    { id: 9, src: '/img/tarasy/20210529_180356.jpg', alt: 'Taras', category: 'tarasy' },
    { id: 10, src: '/img/tarasy/20220409_174555.jpg', alt: 'Taras', category: 'tarasy' },
    { id: 11, src: '/img/tarasy/20230715_182524.jpg', alt: 'Taras', category: 'tarasy' },
    { id: 12, src: '/img/tarasy/20240709_093355.jpg', alt: 'Taras', category: 'tarasy' },
    
    // Ogrody
    { id: 20, src: '/img/ogrody/nowoczesny design.jpg', alt: 'Nowoczesny Design', category: 'ogrody' },
    { id: 21, src: '/img/ogrody/Ogrody (1).jpg', alt: 'Ogród', category: 'ogrody' },
    { id: 22, src: '/img/ogrody/Ogrody (2).jpg', alt: 'Ogród', category: 'ogrody' },
    { id: 23, src: '/img/ogrody/Ogrody (3).jpg', alt: 'Ogród', category: 'ogrody' },
    { id: 24, src: '/img/ogrody/Ogrody (4).jpg', alt: 'Ogród', category: 'ogrody' },
    { id: 25, src: '/img/ogrody/Ogrody (5).jpg', alt: 'Ogród', category: 'ogrody' },
    { id: 26, src: '/img/ogrody/Ogrody (6).jpg', alt: 'Ogród', category: 'ogrody' },
    { id: 27, src: '/img/ogrody/Ogrody (7).jpg', alt: 'Ogród', category: 'ogrody' },
    { id: 28, src: '/img/ogrody/Ogrody (8).jpg', alt: 'Ogród', category: 'ogrody' },
    { id: 29, src: '/img/ogrody/Ogrody (9).jpg', alt: 'Ogród', category: 'ogrody' },
    { id: 30, src: '/img/ogrody/Ogrody (10).jpg', alt: 'Ogród', category: 'ogrody' },
    { id: 31, src: '/img/ogrody/Ogrody (11).jpg', alt: 'Ogród', category: 'ogrody' },
    { id: 32, src: '/img/ogrody/Ogrody (12).jpg', alt: 'Ogród', category: 'ogrody' },
    
    // Bramy i Garaże
    { id: 40, src: '/img/bramy i garaze/20190327_163606.jpg', alt: 'Brama i Garaż', category: 'bramy-i-garaze' },
    { id: 41, src: '/img/bramy i garaze/20190328_134624.jpg', alt: 'Brama i Garaż', category: 'bramy-i-garaze' },
    { id: 43, src: '/img/bramy i garaze/20210309_110516.jpg', alt: 'Brama i Garaż', category: 'bramy-i-garaze' },
    { id: 44, src: '/img/bramy i garaze/20210309_143520.jpg', alt: 'Brama i Garaż', category: 'bramy-i-garaze' },
    { id: 45, src: '/img/bramy i garaze/stylowe garaze.jpg', alt: 'Stylowe Garaże', category: 'bramy-i-garaze' },
    
    // Place Zabaw
    { id: 50, src: '/img/plac zabaw/nowoczesny plac zabaw.jpg', alt: 'Nowoczesny Plac Zabaw', category: 'plac-zabaw' },
    { id: 51, src: '/img/plac zabaw/20220423_142644.jpg', alt: 'Plac Zabaw', category: 'plac-zabaw' },
    { id: 52, src: '/img/plac zabaw/20220423_142703.jpg', alt: 'Plac Zabaw', category: 'plac-zabaw' },
    
    // Zabudowy
    { id: 60, src: '/img/zabudowy/20220802_084131.jpg', alt: 'Zabudowa', category: 'zabudowy' },
    { id: 61, src: '/img/zabudowy/20230111_150559.jpg', alt: 'Zabudowa', category: 'zabudowy' },
    { id: 62, src: '/img/zabudowy/20250507_075527.jpg', alt: 'Zabudowa', category: 'zabudowy' },
    { id: 63, src: '/img/zabudowy/20250814_193933.jpg', alt: 'Zabudowa', category: 'zabudowy' },
    { id: 64, src: '/img/zabudowy/IMG_20180927_163530.jpg', alt: 'Zabudowa', category: 'zabudowy' },
    { id: 65, src: '/img/zabudowy/Zabudowa śmietnik (1).jpg', alt: 'Zabudowa', category: 'zabudowy' },
  ];

  const [selectedImage, setSelectedImage] = useState(null);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const [showSwipeHint, setShowSwipeHint] = useState(true);

  const filteredImages = activeCategory === 'all' 
    ? portfolioImages 
    : portfolioImages.filter(img => img.category === activeCategory);

  const openLightbox = (image) => {
    setSelectedImage(image);
    setShowSwipeHint(true);
    document.body.style.overflow = 'hidden';
    
    // Auto-hide swipe hint after 3 seconds
    setTimeout(() => {
      setShowSwipeHint(false);
    }, 3000);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'unset';
  };

  const getCurrentImageIndex = () => {
    return filteredImages.findIndex(img => img.id === selectedImage?.id);
  };

  const navigateImage = (direction) => {
    const currentIndex = getCurrentImageIndex();
    if (currentIndex === -1) return;

    let newIndex;
    if (direction === 'next') {
      newIndex = (currentIndex + 1) % filteredImages.length;
    } else {
      newIndex = (currentIndex - 1 + filteredImages.length) % filteredImages.length;
    }

    setSelectedImage(filteredImages[newIndex]);
  };

  // Swipe handlers for mobile
  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const minSwipeDistance = 50;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    // Hide swipe hint after first swipe
    if ((isLeftSwipe || isRightSwipe) && showSwipeHint) {
      setShowSwipeHint(false);
    }

    if (isLeftSwipe && filteredImages.length > 1) {
      navigateImage('next');
    }
    if (isRightSwipe && filteredImages.length > 1) {
      navigateImage('prev');
    }
  };

  // Keyboard navigation
  useEffect(() => {
    if (!selectedImage) return;

    const handleKeyPress = (e) => {
      const currentIndex = filteredImages.findIndex(img => img.id === selectedImage?.id);
      if (currentIndex === -1) return;

      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        const newIndex = (currentIndex - 1 + filteredImages.length) % filteredImages.length;
        setSelectedImage(filteredImages[newIndex]);
      }
      if (e.key === 'ArrowRight') {
        e.preventDefault();
        const newIndex = (currentIndex + 1) % filteredImages.length;
        setSelectedImage(filteredImages[newIndex]);
      }
      if (e.key === 'Escape') {
        e.preventDefault();
        closeLightbox();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [selectedImage, filteredImages]);

  // Load image dimensions for better layout calculation
  useEffect(() => {
    const loadImageDimensions = () => {
      const dimensions = {};
      filteredImages.forEach((image) => {
        const img = new Image();
        img.onload = () => {
          dimensions[image.id] = {
            width: img.naturalWidth,
            height: img.naturalHeight,
            aspectRatio: img.naturalWidth / img.naturalHeight
          };
          setImageDimensions(prev => ({ ...prev, ...dimensions }));
        };
        img.src = image.src;
      });
    };
    
    loadImageDimensions();
  }, [filteredImages]);

  // Improved masonry layout helper - better distribution to minimize gaps
  const getMasonryClass = (index, total) => {
    const image = filteredImages[index];
    const dims = imageDimensions[image.id];
    
    // If we have dimensions, use aspect ratio to determine best size
    if (dims) {
      const aspectRatio = dims.aspectRatio;
      // Portrait images (tall) - make them span 2 rows
      if (aspectRatio < 0.75) {
        return 'md:row-span-2';
      }
      // Landscape images (wide) - make them span 2 columns
      if (aspectRatio > 1.5) {
        return 'md:col-span-2';
      }
      // Very wide images - span both
      if (aspectRatio > 2.0) {
        return 'md:col-span-2 md:row-span-2';
      }
    }
    
    // Fallback to intelligent pattern based on position
    const position = index % 12;
    
    // Pattern designed to minimize gaps by varying sizes strategically
    const patterns = {
      0: '', // normal
      1: 'md:row-span-2', // tall - fills vertical gaps
      2: '', // normal
      3: 'md:col-span-2', // wide - fills horizontal gaps
      4: '', // normal
      5: 'md:row-span-2', // tall
      6: 'md:col-span-2 md:row-span-2', // large - fills both directions
      7: '', // normal
      8: 'md:row-span-2', // tall
      9: '', // normal
      10: 'md:col-span-2', // wide
      11: '', // normal
    };
    
    return patterns[position] || '';
  };

  const currentCategoryInfo = activeCategory !== 'all' ? categoryInfo[activeCategory] : null;

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-cream">
      <div className="max-w-7xl mx-auto">
        <PortfolioHeader />
        
        <CategoryFilters 
          categories={categories}
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />

        <CategoryHighlight categoryInfo={currentCategoryInfo} />

        {/* Category Description for "All" */}
        {activeCategory === 'all' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12 text-center"
          >
            <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Odkryj nasze kompleksowe realizacje - od eleganckich tarasów przez harmonijne ogrody, 
              bezpieczne place zabaw, aż po praktyczne zabudowy gospodarcze. 
              Każdy projekt to połączenie pasji, doświadczenia i najwyższej jakości materiałów.
            </p>
          </motion.div>
        )}

        <PortfolioGrid 
          images={filteredImages}
          onImageClick={openLightbox}
          getMasonryClass={getMasonryClass}
        />
      </div>

      {/* Lightbox with Navigation and Swipe */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
            onClick={closeLightbox}
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            {/* Close Button */}
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeLightbox}
              className="absolute top-4 right-4 text-white hover:text-mustard-gold transition-colors z-10 p-2 hover:bg-white/10 rounded-full"
              aria-label="Close lightbox"
            >
              <X size={32} />
            </motion.button>

            {/* Previous Button - Desktop Only */}
            {filteredImages.length > 1 && (
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={(e) => {
                  e.stopPropagation();
                  navigateImage('prev');
                }}
                className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-mustard-gold transition-colors z-10 p-3 hover:bg-white/10 rounded-full"
                aria-label="Previous image"
              >
                <ChevronLeft size={40} />
              </motion.button>
            )}

            {/* Next Button - Desktop Only */}
            {filteredImages.length > 1 && (
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={(e) => {
                  e.stopPropagation();
                  navigateImage('next');
                }}
                className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-mustard-gold transition-colors z-10 p-3 hover:bg-white/10 rounded-full"
                aria-label="Next image"
              >
                <ChevronRight size={40} />
              </motion.button>
            )}

            {/* Image Counter */}
            {filteredImages.length > 1 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-sm bg-black/50 px-4 py-2 rounded-full"
              >
                {getCurrentImageIndex() + 1} / {filteredImages.length}
              </motion.div>
            )}

            {/* Image */}
            <AnimatePresence mode="wait">
              <motion.img
                key={selectedImage.id}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ duration: 0.3 }}
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="max-w-full max-h-[90vh] object-contain rounded-lg touch-none"
                onClick={(e) => e.stopPropagation()}
              />
            </AnimatePresence>

            {/* Image Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="absolute bottom-16 left-1/2 -translate-x-1/2 text-white text-center bg-black/50 px-6 py-3 rounded-lg"
              onClick={(e) => e.stopPropagation()}
            >
              <p className="font-medium">{selectedImage.alt}</p>
            </motion.div>

            {/* Swipe Hint - Mobile Only */}
            {filteredImages.length > 1 && showSwipeHint && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 30 }}
                className="md:hidden absolute top-20 left-1/2 -translate-x-1/2 z-20"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="bg-gradient-to-r from-mustard-gold/95 to-mustard-gold/90 backdrop-blur-sm text-forest-green px-6 py-4 rounded-2xl shadow-2xl border-2 border-mustard-gold/50">
                  <div className="flex items-center gap-3">
                    {/* Animated Arrows */}
                    <div className="flex items-center gap-2">
                      <motion.div
                        animate={{ x: [-5, 5, -5] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                      >
                        <ChevronLeft size={24} className="text-forest-green" />
                      </motion.div>
                      <motion.div
                        animate={{ x: [5, -5, 5] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
                      >
                        <ChevronRight size={24} className="text-forest-green" />
                      </motion.div>
                    </div>
                    <p className="text-sm font-semibold whitespace-nowrap">
                      Przewiń w prawo lub lewo
                    </p>
                  </div>
                </div>
                {/* Arrow pointing down */}
                <motion.div
                  animate={{ y: [0, 8, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-2"
                >
                  <div className="w-0 h-0 border-l-8 border-r-8 border-t-8 border-transparent border-t-mustard-gold/90"></div>
                </motion.div>
              </motion.div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Portfolio;

