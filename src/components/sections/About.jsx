import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-forest-green mb-6">
              Tworzymy przestrzenie,
              <br />
              które inspirują
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Od ponad 10 lat specjalizujemy się w tworzeniu tarasów i ogrodów, 
              które spełniają marzenia naszych klientów. Każdy projekt to unikalne
              połączenie funkcjonalności i estetyki.
            </p>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Nasza pasja do natury i dbałość o każdy detal sprawiają, że 
              tworzymy przestrzenie, które nie tylko zachwycają, ale także 
              stają się miejscem relaksu i odpoczynku dla całej rodziny.
            </p>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-8 py-4 bg-mustard-gold text-forest-green 
                font-semibold rounded-full hover:bg-mustard-gold/90 transition-all duration-300 
                shadow-lg hover:shadow-xl"
            >
              Dowiedz się więcej
              <ArrowRight className="w-5 h-5" />
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <img
              src="/img/about/1.jpg"
              alt="Nasza Praca"
              className="w-full h-[600px] object-cover rounded-lg shadow-xl"
            />
            <div className="absolute inset-0 rounded-lg shadow-lg bg-gradient-to-t from-black/20 to-transparent" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
