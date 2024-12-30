import React from 'react';
import { Leaf, Clock, CheckCheck, ArrowRight } from 'lucide-react';

const AboutSection = () => {
  const features = [
    {
      icon: <Leaf className="w-8 h-8" />,
      title: "Eco-Friendly",
      description: "Wykorzystujemy materiały przyjazne środowisku i stosujemy zrównoważone praktyki ogrodnicze"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Terminowość",
      description: "Realizujemy projekty zgodnie z harmonogramem, szanując czas naszych klientów"
    },
    {
      icon: <CheckCheck className="w-8 h-8" />,
      title: "Najwyższa Jakość",
      description: "Dbamy o każdy detal, używając materiałów najwyższej jakości"
    }
  ];

  return (
    <section className="relative bg-gradient-to-b from-[#FAF3E0] to-[#F9E6A9] py-16 px-4 md:px-6 overflow-hidden">
      <div className="relative max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-serif text-4xl font-bold text-emerald-800 mb-6">
              Tworzymy przestrzenie,<br />które inspirują
            </h2>
            <p className="font-sans text-gray-700 text-lg mb-8">
              Od ponad 10 lat specjalizujemy się w tworzeniu tarasów i ogrodów, 
              które spełniają marzenia naszych klientów. Każdy projekt to unikalne
              połączenie funkcjonalności i estetyki.
            </p>
            
            <div className="space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="flex-shrink-0 p-3 bg-emerald-100 rounded-full text-emerald-800">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="font-serif font-semibold text-emerald-800 text-lg mb-2">
                      {feature.title}
                    </h3>
                    <p className="font-sans text-gray-700">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <img
              src="/img/about/1.jpg"
              alt="Nasza Praca"
              className="w-full h-[600px] object-cover rounded-lg shadow-xl"
            />
            <div className="absolute inset-0 rounded-lg shadow-lg bg-gradient-to-t from-black/20 to-transparent" />
          </div>
        </div>

        <div className="text-center mt-12">
          <a
            href="/about"
            className="font-sans inline-flex items-center gap-2 px-8 py-4 bg-yellow-400 
              hover:bg-yellow-500 text-gray-800 rounded-full transition-all 
              duration-300 font-semibold shadow-lg hover:shadow-xl hover:-translate-y-1"
          >
            Dowiedz się więcej
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;