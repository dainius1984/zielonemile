import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-cream py-12 px-4 sm:px-6 lg:px-8 border-t border-forest-green/10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <Link
            to="/"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="cursor-pointer"
            >
              <img
                src="/img/logo/logo.png"
                alt="Zielone Mile Logo"
                className="h-20 md:h-24 w-auto object-contain transition-all duration-300"
                style={{
                  filter: 'drop-shadow(0 4px 12px rgba(27, 67, 50, 0.4))',
                }}
              />
            </motion.div>
          </Link>
          <p className="text-forest-green/70 text-sm text-center md:text-right font-medium">
            © {new Date().getFullYear()} Zielone Mile. Wszelkie prawa zastrzeżone. |{' '}
            <a 
              href="https://www.stalowewitryny.pl" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-forest-green/70 hover:text-mustard-gold transition-colors duration-300 underline decoration-forest-green/30 hover:decoration-mustard-gold"
            >
              Projekt i realizacja: stalowewitryny.pl
            </a>
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;

