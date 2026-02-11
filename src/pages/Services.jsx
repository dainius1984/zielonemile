import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Image as ImageIcon } from 'lucide-react';

const Services = () => {
  const services = [
    { 
      id: 1, 
      title: 'Tarasy', 
      slug: 'budowa-tarasow', 
      description: 'Profesjonalna budowa tarasów z najwyższej jakości materiałów',
      portfolioCategory: 'tarasy',
      previewImages: [
        '/img/tarasy/20200908_110915.jpg',
        '/img/tarasy/20230715_182524.jpg',
        '/img/tarasy/20240709_093355.jpg'
      ]
    },
    { 
      id: 2, 
      title: 'Ogrody', 
      slug: 'projektowanie-ogrodow', 
      description: 'Kompleksowe projekty i realizacje ogrodów',
      portfolioCategory: 'ogrody',
      previewImages: [
        '/img/ogrody/nowoczesny design.jpg',
        '/img/ogrody/Ogrody (1).jpg',
        '/img/ogrody/Ogrody (5).jpg'
      ]
    },
    { 
      id: 4, 
      title: 'Place Zabaw', 
      slug: 'plac-zabaw', 
      description: 'Projektowanie i budowa bezpiecznych, ekologicznych placów zabaw dla dzieci',
      portfolioCategory: 'plac-zabaw',
      previewImages: [
        '/img/plac zabaw/nowoczesny plac zabaw.jpg',
        '/img/plac zabaw/20220423_142644.jpg',
        '/img/plac zabaw/20220423_142703.jpg'
      ]
    },
    { 
      id: 5, 
      title: 'Zabudowy', 
      slug: 'zabudowy', 
      description: 'Zabudowy gospodarcze, śmietniki i inne konstrukcje',
      portfolioCategory: 'zabudowy',
      previewImages: [
        '/img/zabudowy/20230111_150559.jpg',
        '/img/zabudowy/20250507_075527.jpg',
        '/img/zabudowy/Zabudowa śmietnik (1).jpg'
      ]
    },
    { 
      id: 6, 
      title: 'Nawadnianie Automatyczne', 
      slug: 'nawadnianie', 
      description: 'Systemy automatycznego nawadniania',
      portfolioCategory: null, // Nie ma kategorii w portfolio
      previewImages: []
    },
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
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              {/* Preview Images */}
              {service.previewImages && service.previewImages.length > 0 && (
                <div className="relative h-48 overflow-hidden bg-cream">
                  <div className="grid grid-cols-3 gap-1 h-full">
                    {service.previewImages.slice(0, 3).map((img, imgIndex) => (
                      <motion.img
                        key={imgIndex}
                        src={img}
                        alt={`${service.title} - Przykład ${imgIndex + 1}`}
                        className="w-full h-full object-cover"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.3 }}
                      />
                    ))}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              )}
              
              <div className="p-8">
                <h2 className="text-2xl font-serif font-bold text-forest-green mb-4">
                  {service.title}
                </h2>
                <p className="text-gray-700 mb-6">
                  {service.description}
                </p>
                
                <div className="flex flex-col gap-3">
                  <Link
                    to={`/uslugi/${service.slug}`}
                    className="inline-flex items-center gap-2 text-mustard-gold hover:text-forest-green font-semibold transition-colors"
                  >
                    Dowiedz się więcej
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  
                  {/* Portfolio Link */}
                  {service.portfolioCategory && (
                    <Link
                      to={`/portfolio`}
                      onClick={(e) => {
                        e.preventDefault();
                        window.location.href = `/portfolio#${service.portfolioCategory}`;
                      }}
                      className="inline-flex items-center gap-2 text-forest-green/70 hover:text-mustard-gold font-medium text-sm transition-colors group/portfolio"
                    >
                      <ImageIcon className="w-4 h-4 group-hover/portfolio:scale-110 transition-transform" />
                      Zobacz realizacje
                      <ArrowRight className="w-3 h-3 group-hover/portfolio:translate-x-1 transition-transform" />
                    </Link>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Portfolio CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-gradient-to-br from-forest-green to-forest-green/90 rounded-3xl p-8 md:p-12 shadow-2xl text-center text-white"
        >
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
            Zobacz nasze realizacje
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Odkryj nasze najlepsze projekty - każdy taras, ogród i plac zabaw to unikalne dzieło sztuki
          </p>
          <Link
            to="/portfolio"
            className="inline-flex items-center gap-3 px-8 py-4 bg-mustard-gold text-forest-green font-semibold rounded-full hover:bg-mustard-gold/90 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
          >
            Przejdź do Portfolio
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;

