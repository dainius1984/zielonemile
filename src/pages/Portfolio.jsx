import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('all');

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
      highlightDescription: 'Naturalne piękno drewna w najczystszej formie',
      icon: '🌳'
    },
    'ogrody': {
      title: 'Ogrody',
      description: 'Projektujemy i tworzymy ogrody, które są oazą spokoju i harmonii. Każdy ogród to unikalna kompozycja roślin, ścieżek i elementów małej architektury, tworząca przestrzeń idealną do relaksu i kontemplacji.',
      highlightImage: '/img/ogrody/nowoczesny design.jpg',
      highlightTitle: 'Nowoczesny Design',
      highlightDescription: 'Gdzie współczesna estetyka spotyka się z naturą - minimalistyczne formy, czyste linie i harmonijne kompozycje roślinne',
      icon: '🌿'
    },
    'bramy-i-garaze': {
      title: 'Bramy i Garaże',
      description: 'Bezpieczeństwo i funkcjonalność w jednym. Projektujemy i montujemy bramy oraz garaże, które nie tylko chronią, ale także dodają charakteru Twojej posesji. Nowoczesne rozwiązania techniczne spotykają się z estetyką.',
      highlightImage: '/img/bramy i garaze/stylowe garaze.jpg',
      highlightTitle: 'Stylowe Garaże',
      highlightDescription: 'Gdzie funkcjonalność spotyka się z elegancją - nowoczesne rozwiązania architektoniczne dla Twojej posesji',
      icon: '🚪'
    },
    'plac-zabaw': {
      title: 'Place Zabaw',
      description: 'Tworzymy bezpieczne i ekologiczne place zabaw, gdzie dzieci mogą rozwijać się poprzez zabawę. Wykorzystujemy wyłącznie certyfikowane, przyjazne środowisku materiały, zapewniając najwyższe standardy bezpieczeństwa dla najmłodszych.',
      highlightImage: '/img/plac zabaw/nowoczesny plac zabaw.jpg',
      highlightTitle: 'Nowoczesny Plac Zabaw',
      highlightDescription: 'Bezpieczne, ekologiczne materiały dla dzieci - gdzie zabawa spotyka się z bezpieczeństwem i troską o środowisko',
      icon: '🎠'
    },
    'zabudowy': {
      title: 'Zabudowy',
      description: 'Funkcjonalne zabudowy gospodarcze, które organizują przestrzeń wokół Twojego domu. Od śmietników po pomieszczenia gospodarcze - każda zabudowa jest zaprojektowana tak, aby była praktyczna i estetyczna.',
      highlightImage: '/img/zabudowy/Zabudowa śmietnik (1).jpg',
      highlightTitle: 'Zabudowa Śmietnik',
      highlightDescription: 'Eleganckie rozwiązania dla codziennych potrzeb - funkcjonalność w pięknym opakowaniu',
      icon: '🏗️'
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
    { id: 42, src: '/img/bramy i garaze/20190328_134955.jpg', alt: 'Brama i Garaż', category: 'bramy-i-garaze' },
    { id: 43, src: '/img/bramy i garaze/20210309_110516.jpg', alt: 'Brama i Garaż', category: 'bramy-i-garaze' },
    { id: 44, src: '/img/bramy i garaze/20210309_143520.jpg', alt: 'Brama i Garaż', category: 'bramy-i-garaze' },
    
    // Place Zabaw
    { id: 50, src: '/img/plac zabaw/nowoczesny plac zabaw.jpg', alt: 'Nowoczesny Plac Zabaw', category: 'plac-zabaw' },
    { id: 51, src: '/img/plac zabaw/20220423_142644.jpg', alt: 'Plac Zabaw', category: 'plac-zabaw' },
    { id: 52, src: '/img/plac zabaw/20220423_142703.jpg', alt: 'Plac Zabaw', category: 'plac-zabaw' },
    { id: 53, src: '/img/plac zabaw/Plac zabaw sbr (2).jpg', alt: 'Plac Zabaw', category: 'plac-zabaw' },
    
    // Zabudowy
    { id: 60, src: '/img/zabudowy/20220802_084131.jpg', alt: 'Zabudowa', category: 'zabudowy' },
    { id: 61, src: '/img/zabudowy/20230111_150559.jpg', alt: 'Zabudowa', category: 'zabudowy' },
    { id: 62, src: '/img/zabudowy/20250507_075527.jpg', alt: 'Zabudowa', category: 'zabudowy' },
    { id: 63, src: '/img/zabudowy/20250814_193933.jpg', alt: 'Zabudowa', category: 'zabudowy' },
    { id: 64, src: '/img/zabudowy/IMG_20180927_163530.jpg', alt: 'Zabudowa', category: 'zabudowy' },
    { id: 65, src: '/img/zabudowy/Zabudowa śmietnik (1).jpg', alt: 'Zabudowa', category: 'zabudowy' },
  ];

  const [selectedImage, setSelectedImage] = useState(null);

  const filteredImages = activeCategory === 'all' 
    ? portfolioImages 
    : portfolioImages.filter(img => img.category === activeCategory);

  const openLightbox = (image) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden';
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

  // Masonry layout helper - varied sizes for better UX
  const getMasonryClass = (index) => {
    const patterns = [
      '', // normal size
      'md:row-span-2', // taller
      '', // normal size
      'md:col-span-2', // wider
      '', // normal size
      'md:row-span-2', // taller
      '', // normal size
    ];
    return patterns[index % patterns.length];
  };

  const currentCategoryInfo = activeCategory !== 'all' ? categoryInfo[activeCategory] : null;

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-cream">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-forest-green mb-6">
            Portfolio
          </h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Odkryj nasze najlepsze realizacje
          </p>
        </motion.div>

        {/* Category Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-5 py-2.5 rounded-full text-sm md:text-base font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-mustard-gold text-forest-green shadow-lg scale-105'
                  : 'bg-white text-forest-green hover:bg-cream/80 hover:shadow-md'
              }`}
            >
              {category.label}
            </button>
          ))}
        </motion.div>

        {/* Category Highlight Section - Premium UX/UI */}
        <AnimatePresence mode="wait">
          {currentCategoryInfo && (
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -30, scale: 0.95 }}
              transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
              className="mb-16"
            >
              <div className="bg-white rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-shadow duration-500 border border-forest-green/10">
                <div className="grid md:grid-cols-2 gap-0">
                  {/* Image Section */}
                  <motion.div 
                    className="relative h-64 md:h-[500px] overflow-hidden group"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.4 }}
                  >
                    <motion.img
                      src={currentCategoryInfo.highlightImage}
                      alt={currentCategoryInfo.highlightTitle}
                      className="w-full h-full object-cover"
                      initial={{ scale: 1.1 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.6 }}
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-forest-green/90 via-forest-green/60 to-transparent" />
                    {/* Decorative Elements */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-mustard-gold/20 rounded-full blur-3xl -translate-y-16 translate-x-16" />
                    <div className="absolute bottom-0 left-0 w-40 h-40 bg-mustard-gold/10 rounded-full blur-3xl translate-y-20 -translate-x-20" />
                    
                    {/* Icon Badge */}
                    {currentCategoryInfo.icon && (
                      <motion.div
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
                        className="absolute top-6 left-6 text-6xl md:text-7xl opacity-90"
                      >
                        {currentCategoryInfo.icon}
                      </motion.div>
                    )}
                  </motion.div>

                  {/* Content Section */}
                  <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center bg-gradient-to-br from-cream via-cream/95 to-white relative overflow-hidden">
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-5">
                      <div className="absolute top-0 right-0 w-64 h-64 bg-forest-green rounded-full blur-3xl" />
                      <div className="absolute bottom-0 left-0 w-48 h-48 bg-mustard-gold rounded-full blur-3xl" />
                    </div>

                    <div className="relative z-10">
                      {/* Category Badge */}
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="inline-block mb-4"
                      >
                        <span className="px-4 py-2 bg-mustard-gold/20 text-mustard-gold text-sm font-semibold rounded-full border border-mustard-gold/30">
                          {currentCategoryInfo.title}
                        </span>
                      </motion.div>

                      {/* Main Title */}
                      <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-forest-green mb-4 leading-tight"
                      >
                        {currentCategoryInfo.highlightTitle}
                      </motion.h2>

                      {/* Highlight Description */}
                      <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="text-lg md:text-xl text-mustard-gold font-medium mb-6 leading-relaxed"
                      >
                        {currentCategoryInfo.highlightDescription}
                      </motion.p>

                      {/* Divider */}
                      <motion.div
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ delay: 0.5, duration: 0.5 }}
                        className="w-20 h-1 bg-mustard-gold mb-6 origin-left"
                      />

                      {/* Full Description */}
                      <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="text-gray-700 text-base md:text-lg leading-relaxed"
                      >
                        {currentCategoryInfo.description}
                      </motion.p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Category Description for "All" */}
        {activeCategory === 'all' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12 text-center"
          >
            <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Odkryj nasze kompleksowe realizacje - od eleganckich tarasów przez harmonijne ogrody, 
              bezpieczne place zabaw, funkcjonalne bramy i garaże, aż po praktyczne zabudowy gospodarcze. 
              Każdy projekt to połączenie pasji, doświadczenia i najwyższej jakości materiałów.
            </p>
          </motion.div>
        )}

        {/* Gallery Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3"
            style={{ gridAutoRows: 'minmax(200px, auto)' }}
          >
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.03 }}
                className={`relative overflow-hidden rounded-lg cursor-pointer group min-h-[200px] ${getMasonryClass(index)}`}
                onClick={() => openLightbox(image)}
              >
                <motion.img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  whileHover={{ scale: 1.05 }}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-white font-medium text-sm">{image.alt}</p>
                  <p className="text-white/80 text-xs capitalize">{image.category}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {filteredImages.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <p className="text-gray-500 text-lg">Brak zdjęć w tej kategorii</p>
          </motion.div>
        )}
      </div>

      {/* Lightbox with Navigation */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
            onClick={closeLightbox}
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

            {/* Previous Button */}
            {filteredImages.length > 1 && (
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={(e) => {
                  e.stopPropagation();
                  navigateImage('prev');
                }}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-mustard-gold transition-colors z-10 p-3 hover:bg-white/10 rounded-full"
                aria-label="Previous image"
              >
                <ChevronLeft size={40} />
              </motion.button>
            )}

            {/* Next Button */}
            {filteredImages.length > 1 && (
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={(e) => {
                  e.stopPropagation();
                  navigateImage('next');
                }}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-mustard-gold transition-colors z-10 p-3 hover:bg-white/10 rounded-full"
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
                className="max-w-full max-h-[90vh] object-contain rounded-lg"
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
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Portfolio;

