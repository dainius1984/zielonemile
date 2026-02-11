import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CategoryHighlight = ({ categoryInfo }) => {
  if (!categoryInfo) return null;

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={categoryInfo.title}
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
                src={categoryInfo.highlightImage}
                alt={categoryInfo.highlightTitle}
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
                    {categoryInfo.title}
                  </span>
                </motion.div>

                {/* Main Title */}
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-forest-green mb-4 leading-tight"
                >
                  {categoryInfo.highlightTitle}
                </motion.h2>

                {/* Highlight Description */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-lg md:text-xl text-mustard-gold font-medium mb-6 leading-relaxed"
                >
                  {categoryInfo.highlightDescription}
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
                  {categoryInfo.description}
                </motion.p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default CategoryHighlight;
