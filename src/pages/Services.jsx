import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Services = () => {
  const services = [
    { id: 1, title: 'Projektowanie Ogrodów', slug: 'projektowanie-ogrodow', description: 'Kompleksowe projekty ogrodów' },
    { id: 2, title: 'Budowa Tarasów', slug: 'budowa-tarasow', description: 'Profesjonalna budowa tarasów' },
    { id: 3, title: 'Nawadnianie Automatyczne', slug: 'nawadnianie', description: 'Systemy automatycznego nawadniania' },
  ];

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
            Usługi
          </h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Kompleksowe usługi ogrodnicze i tarasowe
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <h2 className="text-2xl font-serif font-bold text-forest-green mb-4">
                {service.title}
              </h2>
              <p className="text-gray-700 mb-6">
                {service.description}
              </p>
              <Link
                to={`/uslugi/${service.slug}`}
                className="inline-flex items-center gap-2 text-mustard-gold hover:text-forest-green font-semibold transition-colors"
              >
                Dowiedz się więcej
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Additional Services Placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-white rounded-2xl p-8 md:p-12 shadow-lg"
        >
          <h2 className="text-3xl font-serif font-bold text-forest-green mb-6">
            Dodatkowe Usługi
          </h2>
          <p className="text-gray-700 leading-relaxed">
            [Treść o dodatkowych usługach - placeholder]
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;

