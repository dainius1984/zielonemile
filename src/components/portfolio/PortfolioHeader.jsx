import React from 'react';
import { motion } from 'framer-motion';

const PortfolioHeader = () => {
  return (
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
  );
};

export default PortfolioHeader;
