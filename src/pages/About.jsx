import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Leaf, Award, Heart, Wrench, Palette } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: <Shield className="w-10 h-10" />,
      title: 'Solidne',
      description: 'Najwyższej jakości materiały i konstrukcje zapewniające trwałość przez lata. Każdy projekt wykonujemy z dbałością o każdy detal.'
    },
    {
      icon: <Leaf className="w-10 h-10" />,
      title: 'Ekologiczne',
      description: 'Przyjazne środowisku materiały i zrównoważone rozwiązania. Wykorzystujemy certyfikowane drewno FSC i ekologiczne materiały.'
    },
    {
      icon: <Award className="w-10 h-10" />,
      title: 'Profesjonalne',
      description: 'Doświadczenie i precyzja w każdym detalu - od projektu po finalną realizację. Zapewniamy kompleksową obsługę na każdym etapie.'
    },
    {
      icon: <Heart className="w-10 h-10" />,
      title: 'Z Pasją',
      description: 'Każdy projekt tworzymy z miłością do natury i dbałością o każdy szczegół. Nasza pasja przekłada się na wyjątkowe realizacje.'
    },
    {
      icon: <Wrench className="w-10 h-10" />,
      title: 'Funkcjonalne',
      description: 'Rozwiązania dopasowane do Twoich potrzeb - od małych przestrzeni po rozległe projekty. Funkcjonalność zawsze idzie w parze z estetyką.'
    },
    {
      icon: <Palette className="w-10 h-10" />,
      title: 'Stylowe',
      description: 'Eleganckie projekty, które nie tylko spełniają swoje zadanie, ale także dodają charakteru Twojej posesji. Estetyka na najwyższym poziomie.'
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-cream">
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
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
            Poznaj naszą historię, wartości i zespół profesjonalistów
          </p>
        </motion.div>

        {/* Nasza Historia */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-white rounded-3xl overflow-hidden shadow-xl mb-16"
        >
          <div className="grid md:grid-cols-2 gap-0">
            {/* Content Section */}
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-forest-green mb-6">
                Nasza Historia
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed text-lg">
                <p>
                  Od ponad 15 lat działamy na Dolnym Śląsku, specjalizując się w kompleksowych usługach ogrodniczych i budowlanych. 
                  Tworzymy tarasy, ogrody, place zabaw oraz zabudowy - każdy projekt to unikalne połączenie funkcjonalności i estetyki.
                </p>
                <p>
                  Nasza pasja do natury i dbałość o każdy detal sprawiają, że tworzymy przestrzenie, które nie tylko zachwycają, 
                  ale także stają się miejscem relaksu i odpoczynku dla całej rodziny. Każda realizacja to efekt współpracy z klientem, 
                  indywidualnego podejścia i wieloletniego doświadczenia.
                </p>
                <p>
                  Dzięki naszemu zaangażowaniu i profesjonalizmowi, staliśmy się uznanym partnerem dla setek zadowolonych klientów 
                  na terenie Dolnego Śląska. Każdy projekt traktujemy indywidualnie, dopasowując rozwiązania do potrzeb i stylu życia naszych klientów.
                </p>
              </div>
            </div>

            {/* Image Section */}
            <motion.div
              className="relative h-64 md:h-full min-h-[400px] overflow-hidden order-first md:order-last"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4 }}
            >
              <img
                src="/img/about/story.png"
                alt="Nasza Historia"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-l from-forest-green/40 via-transparent to-transparent" />
              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-mustard-gold/20 rounded-full blur-3xl -translate-y-16 translate-x-16" />
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-mustard-gold/10 rounded-full blur-3xl translate-y-20 -translate-x-20" />
            </motion.div>
          </div>
        </motion.div>

        {/* Nasze Wartości */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-forest-green mb-8 text-center">
            Nasze Wartości
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="bg-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="text-mustard-gold mb-4">
                  {value.icon}
                </div>
                <h3 className="text-2xl font-serif font-bold text-forest-green mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Nasz Zespół */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-white rounded-3xl overflow-hidden shadow-2xl"
        >
          <div className="grid md:grid-cols-2 gap-0">
            {/* Image Section */}
            <motion.div
              className="relative h-64 md:h-full min-h-[400px] overflow-hidden"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4 }}
            >
              <img
                src="/img/about/Us.png"
                alt="Nasz Zespół"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-forest-green/40 via-transparent to-transparent" />
            </motion.div>

            {/* Content Section */}
            <div className="bg-gradient-to-br from-forest-green to-forest-green/90 p-8 md:p-12 text-white flex flex-col justify-center">
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
                Nasz Zespół
              </h2>
              <div className="space-y-4 text-lg leading-relaxed text-white/95">
                <p>
                  Nasz zespół stanowią najlepsi fachowcy z wieloletnim doświadczeniem, którzy gwarantują solidne wykonanie każdego projektu. 
                  Każdy członek zespołu to specjalista w swojej dziedzinie - od projektantów ogrodów, przez doświadczonych budowlańców, 
                  aż po ekspertów od tarasów i zabudów.
                </p>
                <p>
                  Łączymy pasję z profesjonalizmem, tworząc przestrzenie, które zachwycają. Nasze wieloletnie doświadczenie na rynku dolnośląskim 
                  pozwala nam oferować rozwiązania sprawdzone i dopracowane w każdym detalu. Każdy projekt realizujemy z najwyższą starannością, 
                  dbając o jakość materiałów i precyzję wykonania.
                </p>
                <p>
                  Gwarantujemy kompleksową obsługę - od pierwszego kontaktu, przez projektowanie, aż po finalną realizację i serwis. 
                  Nasz zespół jest zawsze gotowy, aby odpowiedzieć na Twoje pytania i pomóc w realizacji Twoich marzeń o idealnej przestrzeni wokół domu.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

