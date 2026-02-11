import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const PortfolioGrid = ({ images, onImageClick, getMasonryClass }) => {
  const [failedImages, setFailedImages] = useState(new Set());
  if (images.length === 0) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-center py-16"
      >
        <p className="text-gray-500 text-lg">Brak zdjęć w tej kategorii</p>
      </motion.div>
    );
  }

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={images[0]?.id || 'grid'}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-3"
        style={{ 
          gridAutoRows: 'minmax(180px, auto)',
          gridAutoFlow: 'row dense'
        }}
      >
        {images.map((image, index) => {
          const hasFailed = failedImages.has(image.id);
          
          // Skip rendering if image failed to load
          if (hasFailed) return null;
          
          return (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.03 }}
              className={`relative overflow-hidden rounded-lg cursor-pointer group min-h-[200px] ${getMasonryClass(index, images.length)}`}
              onClick={() => onImageClick(image)}
            >
              <motion.img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                whileHover={{ scale: 1.05 }}
                loading="lazy"
                onError={() => {
                  // Hide image if it fails to load
                  setFailedImages(prev => new Set([...prev, image.id]));
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-white font-medium text-sm">{image.alt}</p>
                <p className="text-white/80 text-xs capitalize">{image.category}</p>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </AnimatePresence>
  );
};

export default PortfolioGrid;
