import React from 'react';
import { motion } from 'framer-motion';

const CategoryFilters = ({ categories, activeCategory, onCategoryChange }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="flex flex-wrap justify-center gap-3 mb-12"
    >
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => onCategoryChange(category.id)}
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
  );
};

export default CategoryFilters;
