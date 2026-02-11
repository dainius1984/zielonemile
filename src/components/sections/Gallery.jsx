import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const [showSwipeHint, setShowSwipeHint] = useState(true);

  // Gallery images from portfolio categories
  const galleryImages = [
    {
      id: 1,
      src: '/img/tarasy/20200908_110915.jpg',
      alt: 'Taras',
      category: 'tarasy',
    },
    {
      id: 2,
      src: '/img/tarasy/20230715_182524.jpg',
      alt: 'Taras',
      category: 'tarasy',
    },
    {
      id: 3,
      src: '/img/ogrody/Ogrody (1).jpg',
      alt: 'Ogród',
      category: 'ogrody',
    },
    {
      id: 4,
      src: '/img/ogrody/Ogrody (5).jpg',
      alt: 'Ogród',
      category: 'ogrody',
    },
    {
      id: 5,
      src: '/img/zabudowy/20210309_110516.jpg',
      alt: 'Zabudowa',
      category: 'zabudowy',
    },
    {
      id: 6,
      src: '/img/plac zabaw/20220423_142644.jpg',
      alt: 'Plac Zabaw',
      category: 'plac-zabaw',
    },
    {
      id: 7,
      src: '/img/zabudowy/20230111_150559.jpg',
      alt: 'Zabudowa',
      category: 'zabudowy',
    },
    {
      id: 8,
      src: '/img/tarasy/20240709_093355.jpg',
      alt: 'Taras',
      category: 'tarasy',
    },
  ];

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
    return galleryImages.findIndex(img => img.id === selectedImage?.id);
  };

  const navigateImage = (direction) => {
    const currentIndex = getCurrentImageIndex();
    if (currentIndex === -1) return;

    let newIndex;
    if (direction === 'next') {
      newIndex = (currentIndex + 1) % galleryImages.length;
    } else {
      newIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
    }

    setSelectedImage(galleryImages[newIndex]);
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

    if (isLeftSwipe && galleryImages.length > 1) {
      navigateImage('next');
    }
    if (isRightSwipe && galleryImages.length > 1) {
      navigateImage('prev');
    }
  };

  // Masonry layout helper
  const getMasonryClass = (index) => {
    const patterns = [
      'md:row-span-2',
      'md:col-span-1',
      'md:row-span-1',
      'md:row-span-2',
      'md:col-span-1',
      'md:row-span-1',
      'md:row-span-2',
      'md:col-span-1',
    ];
    return patterns[index % patterns.length];
  };

  return (
    <section id="portfolio" className="py-20 px-4 sm:px-6 lg:px-8 bg-cream">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-forest-green mb-4">
            Nasze Realizacje
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Odkryj piękno naszych projektów - każdy taras i ogród to unikalne dzieło sztuki
          </p>
        </motion.div>

        {/* Masonry Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-fr">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative overflow-hidden rounded-lg cursor-pointer group ${getMasonryClass(index)}`}
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
                <p className="text-white font-medium">{image.alt}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox with Swipe */}
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
            {galleryImages.length > 1 && (
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
            {galleryImages.length > 1 && (
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
            {galleryImages.length > 1 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-sm bg-black/50 px-4 py-2 rounded-full"
              >
                {getCurrentImageIndex() + 1} / {galleryImages.length}
              </motion.div>
            )}

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
            {galleryImages.length > 1 && showSwipeHint && (
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

export default Gallery;

