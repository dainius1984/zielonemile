import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Shield, Wrench, Award, ArrowRight, Image as ImageIcon } from 'lucide-react';

const Zabudowy = () => {
  // Portfolio images for zabudowy category
  const portfolioImages = [
    { id: 1, src: '/img/zabudowy/zabudowy na auta.jpg', alt: 'Zabudowy na Auta' },
    { id: 2, src: '/img/zabudowy/20230111_150559.jpg', alt: 'Zabudowa' },
    { id: 3, src: '/img/zabudowy/Zabudowa śmietnik (1).jpg', alt: 'Zabudowa Śmietnik' },
    { id: 4, src: '/img/zabudowy/20250507_075527.jpg', alt: 'Zabudowa' },
    { id: 5, src: '/img/zabudowy/20250814_193933.jpg', alt: 'Zabudowa' },
    { id: 6, src: '/img/zabudowy/20190327_163606.jpg', alt: 'Zabudowa' },
  ];

  const [selectedImage, setSelectedImage] = useState(null);

  const features = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Solidne',
      description: 'Najwyższej jakości materiały i konstrukcje zapewniające trwałość i odporność na warunki atmosferyczne'
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: 'Funkcjonalne',
      description: 'Od śmietników po przestronne zabudowy na auta - rozwiązania dopasowane do Twoich potrzeb'
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Stylowe',
      description: 'Eleganckie projekty, które nie tylko spełniają swoje zadanie, ale także dodają charakteru Twojej posesji'
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-cream">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-forest-green mb-6">
            Zabudowy
          </h1>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Tworzymy funkcjonalne i stylowe zabudowy, które organizują przestrzeń wokół Twojego domu. 
            Od eleganckich śmietników, przez praktyczne pomieszczenia gospodarcze, aż po przestronne zabudowy na auta - 
            każda realizacja łączy w sobie funkcjonalność z estetyką.
          </p>
        </motion.div>

        {/* Features with Icons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid md:grid-cols-3 gap-6 mb-16"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center"
            >
              <div className="text-mustard-gold mb-4 flex justify-center">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-serif font-bold text-forest-green mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Portfolio Gallery */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16"
        >
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-forest-green">
              Nasze Realizacje
            </h2>
            <Link
              to="/portfolio#zabudowy"
              className="inline-flex items-center gap-2 px-6 py-3 bg-mustard-gold text-forest-green font-semibold rounded-full hover:bg-mustard-gold/90 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <ImageIcon className="w-5 h-5" />
              Zobacz więcej
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {portfolioImages.map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="relative overflow-hidden rounded-xl cursor-pointer group h-64"
                onClick={() => setSelectedImage(image)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Detailed Description */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-white rounded-3xl p-8 md:p-12 shadow-xl"
        >
          <h2 className="text-3xl font-serif font-bold text-forest-green mb-6">
            Szeroki zakres zabudów
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-forest-green mb-3">Zabudowy śmietnikowe</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Eleganckie rozwiązania dla codziennych potrzeb. Projektujemy zabudowy śmietnikowe, które nie tylko 
                organizują przestrzeń, ale także dodają estetyki Twojej posesji. Od prostych konstrukcji po zaawansowane 
                rozwiązania z automatycznym otwieraniem.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-forest-green mb-3">Zabudowy na auta</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Przestronne i funkcjonalne zabudowy na auta, które chronią Twój pojazd przed warunkami atmosferycznymi. 
                Projektujemy je indywidualnie, uwzględniając liczbę pojazdów, dostępną przestrzeń i styl Twojego domu.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Lightbox */}
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.img
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="max-w-full max-h-[90vh] object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Zabudowy;
