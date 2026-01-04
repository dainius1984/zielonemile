import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-forest-green mb-6">
            O Nas
          </h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Poznaj naszą historię, wartości i zespół
          </p>
        </motion.div>

        {/* Placeholder sections */}
        <div className="space-y-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-white rounded-2xl p-8 md:p-12 shadow-lg"
          >
            <h2 className="text-3xl font-serif font-bold text-forest-green mb-4">
              Nasza Historia
            </h2>
            <p className="text-gray-700 leading-relaxed">
              [Treść o historii firmy - placeholder]
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-2xl p-8 md:p-12 shadow-lg"
          >
            <h2 className="text-3xl font-serif font-bold text-forest-green mb-4">
              Nasze Wartości
            </h2>
            <p className="text-gray-700 leading-relaxed">
              [Treść o wartościach firmy - placeholder]
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white rounded-2xl p-8 md:p-12 shadow-lg"
          >
            <h2 className="text-3xl font-serif font-bold text-forest-green mb-4">
              Nasz Zespół
            </h2>
            <p className="text-gray-700 leading-relaxed">
              [Treść o zespole - placeholder]
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

