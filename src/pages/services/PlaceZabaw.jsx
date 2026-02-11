import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Shield, Leaf, Heart, ArrowRight, Image as ImageIcon } from 'lucide-react';

const PlaceZabaw = () => {
  // Portfolio images for plac-zabaw category
  const portfolioImages = [
    { id: 1, src: '/img/plac zabaw/nowoczesny plac zabaw.jpg', alt: 'Nowoczesny Plac Zabaw' },
    { id: 2, src: '/img/plac zabaw/20220423_142644.jpg', alt: 'Plac Zabaw' },
    { id: 3, src: '/img/plac zabaw/20220423_142703.jpg', alt: 'Plac Zabaw' },
  ];

  const [selectedImage, setSelectedImage] = useState(null);

  const features = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Bezpieczne',
      description: 'Certyfikowane urządzenia i materiały spełniające najwyższe standardy bezpieczeństwa dla dzieci'
    },
    {
      icon: <Leaf className="w-8 h-8" />,
      title: 'Ekologiczne',
      description: 'Wyłącznie przyjazne środowisku materiały - drewno certyfikowane FSC i bezpieczne powierzchnie'
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Rozwojowe',
      description: 'Projektowane z myślą o rozwoju dzieci - wspierają aktywność fizyczną i kreatywność'
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
            Place Zabaw
          </h1>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Tworzymy bezpieczne i ekologiczne place zabaw, gdzie dzieci mogą rozwijać się poprzez zabawę. 
            Wykorzystujemy wyłącznie certyfikowane, przyjazne środowisku materiały, zapewniając najwyższe standardy bezpieczeństwa dla najmłodszych.
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
              to="/portfolio#plac-zabaw"
              className="inline-flex items-center gap-2 px-6 py-3 bg-mustard-gold text-forest-green font-semibold rounded-full hover:bg-mustard-gold/90 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <ImageIcon className="w-5 h-5" />
              Zobacz więcej
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {portfolioImages.map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="relative overflow-hidden rounded-xl cursor-pointer group h-64 md:h-80"
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
            Bezpieczeństwo i rozwój w jednym
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-forest-green mb-3">Certyfikowane materiały</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Wszystkie urządzenia i materiały posiadają odpowiednie certyfikaty bezpieczeństwa. 
                Używamy wyłącznie drewna certyfikowanego FSC oraz bezpiecznych powierzchni amortyzujących upadki.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-forest-green mb-3">Projektowanie z myślą o dzieciach</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Każdy plac zabaw projektujemy tak, aby wspierał rozwój fizyczny i kreatywny dzieci. 
                Różnorodne urządzenia zachęcają do aktywności, wspinaczki, zjeżdżania i zabawy w grupie.
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

export default PlaceZabaw;
