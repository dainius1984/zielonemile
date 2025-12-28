import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  // Sample gallery images - replace with actual images
  const galleryImages = [
    {
      id: 1,
      src: '/img/main/1.jpg',
      alt: 'Taras 1',
      category: 'tarasy',
    },
    {
      id: 2,
      src: '/img/main/2.jpg',
      alt: 'Taras 2',
      category: 'tarasy',
    },
    {
      id: 3,
      src: '/img/main/3.jpg',
      alt: 'Taras 3',
      category: 'tarasy',
    },
    {
      id: 4,
      src: '/img/about/1.jpg',
      alt: 'Ogród 1',
      category: 'ogrody',
    },
    {
      id: 5,
      src: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
      alt: 'Taras 4',
      category: 'tarasy',
    },
    {
      id: 6,
      src: 'https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=800&q=80',
      alt: 'Ogród 2',
      category: 'ogrody',
    },
    {
      id: 7,
      src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
      alt: 'Taras 5',
      category: 'tarasy',
    },
    {
      id: 8,
      src: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80',
      alt: 'Ogród 3',
      category: 'ogrody',
    },
  ];

  const openLightbox = (image) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'unset';
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

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeLightbox}
              className="absolute top-4 right-4 text-white hover:text-mustard-gold transition-colors z-10"
              aria-label="Close lightbox"
            >
              <X size={32} />
            </motion.button>
            <motion.img
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="max-w-full max-h-[90vh] object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;

