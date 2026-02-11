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
      description: 'Stylowe zabudowy od śmietników po przestronne zabudowy na auta - funkcjonalne przestrzenie łączące praktyczność z elegancją',
      portfolioCategory: 'zabudowy',
      previewImages: [
        '/img/zabudowy/zabudowy na auta.jpg',
        '/img/zabudowy/20230111_150559.jpg',
        '/img/zabudowy/Zabudowa śmietnik (1).jpg'
      ]
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

        {/* Services Grid - Enhanced Interactive UX/UI */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -12, scale: 1.02 }}
              className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 group cursor-pointer border border-forest-green/5 hover:border-mustard-gold/30"
            >
              {/* Preview Images with Enhanced Effects */}
              {service.previewImages && service.previewImages.length > 0 && (
                <div className="relative h-64 overflow-hidden bg-cream">
                  <div className="grid grid-cols-3 gap-1 h-full">
                    {service.previewImages.slice(0, 3).map((img, imgIndex) => (
                      <motion.div
                        key={imgIndex}
                        className="relative overflow-hidden"
                        whileHover={{ zIndex: 10 }}
                      >
                        <motion.img
                          src={img}
                          alt={`${service.title} - Przykład ${imgIndex + 1}`}
                          className="w-full h-full object-cover"
                          whileHover={{ scale: 1.15 }}
                          transition={{ duration: 0.4, ease: "easeOut" }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      </motion.div>
                    ))}
                  </div>
                  {/* Animated Overlay */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-mustard-gold/20 via-transparent to-forest-green/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    initial={false}
                  />
                  {/* Hover Badge */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileHover={{ opacity: 1, y: 0 }}
                    className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg"
                  >
                    <span className="text-sm font-semibold text-forest-green">
                      {service.previewImages.length}+ realizacji
                    </span>
                  </motion.div>
                </div>
              )}
              
              <div className="p-8 relative">
                {/* Decorative Element */}
                <div className="absolute top-0 left-8 w-16 h-1 bg-gradient-to-r from-mustard-gold to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <motion.h2 
                  className="text-3xl font-serif font-bold text-forest-green mb-4 group-hover:text-mustard-gold transition-colors duration-300"
                  whileHover={{ x: 5 }}
                >
                  {service.title}
                </motion.h2>
                <p className="text-gray-700 mb-6 leading-relaxed text-base">
                  {service.description}
                </p>
                
                <div className="flex flex-col gap-4 pt-4 border-t border-forest-green/10">
                  <motion.div whileHover={{ x: 5 }}>
                    <Link
                      to={`/uslugi/${service.slug}`}
                      className="inline-flex items-center gap-2 text-mustard-gold hover:text-forest-green font-semibold transition-all duration-300 group/link"
                    >
                      <span>Dowiedz się więcej</span>
                      <ArrowRight className="w-4 h-4 group-hover/link:translate-x-2 transition-transform" />
                    </Link>
                  </motion.div>
                  
                  {/* Portfolio Link with Enhanced Design */}
                  {service.portfolioCategory && (
                    <motion.div whileHover={{ x: 5 }}>
                      <Link
                        to={`/portfolio`}
                        onClick={(e) => {
                          e.preventDefault();
                          window.location.href = `/portfolio#${service.portfolioCategory}`;
                        }}
                        className="inline-flex items-center gap-2 px-4 py-2 bg-cream hover:bg-mustard-gold/10 text-forest-green/80 hover:text-mustard-gold font-medium text-sm rounded-lg transition-all duration-300 group/portfolio border border-forest-green/10 hover:border-mustard-gold/30"
                      >
                        <ImageIcon className="w-4 h-4 group-hover/portfolio:scale-125 group-hover/portfolio:rotate-12 transition-transform" />
                        <span>Zobacz realizacje</span>
                        <ArrowRight className="w-3 h-3 group-hover/portfolio:translate-x-2 transition-transform" />
                      </Link>
                    </motion.div>
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
            Odkryj nasze najlepsze projekty - każdy taras, ogród, plac zabaw i zabudowa to unikalne dzieło sztuki
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

