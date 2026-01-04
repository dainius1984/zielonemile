import React from 'react';
import { motion } from 'framer-motion';

const Ogrody = () => {
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
            Projekty Ogrodowe
          </h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Nasze realizacje ogrodów
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid md:grid-cols-2 gap-8"
        >
          <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
            <img
              src="/img/main/3.jpg"
              alt="Projekt ogrodowy"
              className="w-full h-[400px] object-cover"
            />
          </div>
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
            <h2 className="text-2xl font-serif font-bold text-forest-green mb-4">
              Nasze Projekty Ogrodowe
            </h2>
            <p className="text-gray-700 leading-relaxed">
              [Opis projektów ogrodowych - placeholder]
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Ogrody;

