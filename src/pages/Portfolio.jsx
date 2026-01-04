import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Portfolio = () => {
  const portfolioCategories = [
    { id: 1, title: 'Tarasowe Projekty', slug: 'tarasy', description: 'Zobacz nasze realizacje tarasów', image: '/img/main/1.jpg' },
    { id: 2, title: 'Projekty Ogrodowe', slug: 'ogrody', description: 'Poznaj nasze projekty ogrodów', image: '/img/main/3.jpg' },
    { id: 3, title: 'Przed i Po', slug: 'przed-po', description: 'Zobacz transformacje przestrzeni', image: '/img/main/2.jpg' },
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
            Portfolio
          </h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Odkryj nasze najlepsze realizacje
          </p>
        </motion.div>

        {/* Portfolio Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {portfolioCategories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8">
                <h2 className="text-2xl font-serif font-bold text-forest-green mb-4">
                  {category.title}
                </h2>
                <p className="text-gray-700 mb-6">
                  {category.description}
                </p>
                <Link
                  to={`/portfolio/${category.slug}`}
                  className="inline-flex items-center gap-2 text-mustard-gold hover:text-forest-green font-semibold transition-colors"
                >
                  Zobacz więcej
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Featured Projects Placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-white rounded-2xl p-8 md:p-12 shadow-lg"
        >
          <h2 className="text-3xl font-serif font-bold text-forest-green mb-6">
            Najnowsze Projekty
          </h2>
          <p className="text-gray-700 leading-relaxed">
            [Galeria projektów - placeholder]
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;

