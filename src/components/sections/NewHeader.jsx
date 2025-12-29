import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const NewHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;
          setIsScrolled(currentScrollY > 50);

          // Hide navbar when scrolling down, show when scrolling up
          if (currentScrollY > 100) {
            if (currentScrollY > lastScrollY.current && currentScrollY - lastScrollY.current > 5) {
              // Scrolling down (with threshold to prevent jitter)
              setIsVisible(false);
            } else if (currentScrollY < lastScrollY.current && lastScrollY.current - currentScrollY > 5) {
              // Scrolling up (with threshold to prevent jitter)
              setIsVisible(true);
            }
          } else {
            // Always show at top
            setIsVisible(true);
          }

          lastScrollY.current = currentScrollY;
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'O Nas', href: '#about' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Usługi', href: '#services' },
    { label: 'Kontakt', href: '#contact' },
  ];

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ 
        y: isVisible ? 0 : -100,
        opacity: isVisible ? 1 : 0,
      }}
      transition={{ 
        type: "spring",
        stiffness: 300,
        damping: 30,
        mass: 0.8,
        opacity: { 
          duration: 0.4,
          ease: [0.25, 0.1, 0.25, 1] // Smooth ease-in-out
        },
        y: {
          type: "spring",
          stiffness: 300,
          damping: 30,
          mass: 0.8
        }
      }}
      className={`fixed top-0 left-0 right-0 z-50 border-b transition-all duration-500 ${
        isScrolled
          ? 'bg-cream/98 backdrop-blur-xl shadow-xl border-forest-green/10'
          : 'bg-cream/85 backdrop-blur-lg shadow-md border-forest-green/5'
      }`}
      style={{
        willChange: 'transform, opacity',
        transform: 'translateZ(0)', // Force hardware acceleration
        WebkitBackfaceVisibility: 'hidden', // Prevent flickering on mobile
        backfaceVisibility: 'hidden',
      }}
    >
      <motion.nav 
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        animate={{
          opacity: isVisible ? 1 : 0,
          y: isVisible ? 0 : -10
        }}
        transition={{
          duration: 0.4,
          ease: [0.25, 0.1, 0.25, 1],
          delay: isVisible ? 0.1 : 0
        }}
      >
        <div className="flex items-center justify-between h-20 md:h-24">
          {/* Logo */}
          <motion.a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 cursor-pointer group"
          >
            <motion.img
              src="/img/logo/logo.png"
              alt="Zielone Mile Logo"
              className="h-12 md:h-14 w-auto object-contain transition-all duration-300 rounded-lg shadow-sm"
              whileHover={{ rotate: [0, -5, 5, -5, 0], scale: 1.05 }}
              transition={{ duration: 0.5 }}
            />
            <span className="text-xl md:text-2xl font-serif font-bold text-forest-green group-hover:text-mustard-gold transition-colors duration-300 tracking-tight">
              Zielone Mile
            </span>
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-2">
            {navItems.map((item, index) => (
              <motion.a
                key={item.label}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  const element = document.querySelector(item.href);
                  if (element) {
                    const headerOffset = 80;
                    const elementPosition = element.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                    window.scrollTo({
                      top: offsetPosition,
                      behavior: 'smooth'
                    });
                  }
                }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : -20 }}
                transition={{ delay: index * 0.08 + 0.2, duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                whileHover={{ y: -2 }}
                className="relative text-forest-green font-medium transition-all duration-300 group py-3 px-4 rounded-lg"
              >
                <span className="relative z-10 text-sm tracking-wide">{item.label}</span>
                <motion.span
                  className="absolute bottom-1 left-0 right-0 h-0.5 bg-mustard-gold origin-left rounded-full"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                />
                <motion.span
                  className="absolute inset-0 bg-mustard-gold/8 rounded-lg opacity-0 group-hover:opacity-100 -z-10"
                  transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                />
              </motion.a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="md:hidden p-2 text-forest-green hover:text-mustard-gold transition-colors duration-300 rounded-lg hover:bg-cream/50"
            aria-label="Toggle menu"
          >
            <motion.div
              animate={{ rotate: isMobileMenuOpen ? 90 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.div>
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={false}
          animate={{
            height: isMobileMenuOpen ? 'auto' : 0,
            opacity: isMobileMenuOpen ? 1 : 0,
          }}
          transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
          className="md:hidden overflow-hidden"
        >
          <div className="py-4 space-y-2">
            {navItems.map((item, index) => (
              <motion.a
                key={item.label}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  setIsMobileMenuOpen(false);
                  const element = document.querySelector(item.href);
                  if (element) {
                    const headerOffset = 80;
                    const elementPosition = element.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                    window.scrollTo({
                      top: offsetPosition,
                      behavior: 'smooth'
                    });
                  }
                }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ 
                  opacity: isMobileMenuOpen ? 1 : 0,
                  x: isMobileMenuOpen ? 0 : -20
                }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ x: 4 }}
                whileTap={{ scale: 0.98 }}
                className="block text-forest-green font-medium hover:text-mustard-gold 
                  transition-colors duration-300 py-3 px-4 rounded-lg hover:bg-cream/50 
                  border-l-2 border-transparent hover:border-mustard-gold"
              >
                {item.label}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </motion.nav>
    </motion.header>
  );
};

export default NewHeader;

