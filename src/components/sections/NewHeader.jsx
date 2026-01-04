import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const NewHeader = () => {
  const location = useLocation();
  const navigate = useNavigate();
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
    { label: 'Strona Główna', href: '/', exact: true },
    { label: 'O Nas', href: '/o-nas', exact: true },
    { label: 'Portfolio', href: '/portfolio', exact: false }, // false means it matches sub-pages too
    { label: 'Usługi', href: '/uslugi', exact: false }, // false means it matches sub-pages too
    { label: 'Kontakt', href: '/#contact', exact: true },
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
          <Link
            to="/"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center cursor-pointer"
            >
              <img
                src="/img/logo/logo.png"
                alt="Zielone Mile Logo"
                className="h-[4.4rem] md:h-[5.5rem] w-auto object-contain transition-all duration-300"
                style={{
                  filter: 'drop-shadow(0 4px 8px rgba(27, 67, 50, 0.3))',
                }}
              />
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-2">
            {navItems.map((item, index) => {
              // Dynamic active state checking
              let isActive = false;
              if (item.href === '/') {
                // Home page - only active when exactly on home
                isActive = location.pathname === '/' && !location.hash;
              } else if (item.href === '/#contact') {
                // Contact - active when hash is #contact
                isActive = location.hash === '#contact';
              } else if (item.exact) {
                // Exact match for pages like /o-nas
                isActive = location.pathname === item.href;
              } else {
                // Match for pages with sub-pages (portfolio, uslugi)
                isActive = location.pathname.startsWith(item.href);
              }
              
              return (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : -20 }}
                  transition={{ delay: index * 0.08 + 0.2, duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                >
                  {item.href.startsWith('/#') ? (
                    <a
                      href={item.href}
                      onClick={(e) => {
                        e.preventDefault();
                        if (location.pathname !== '/') {
                          // Navigate to home first, then scroll to contact
                          navigate('/');
                          setTimeout(() => {
                            const element = document.getElementById('contact');
                            if (element) {
                              const headerOffset = 80;
                              const elementPosition = element.getBoundingClientRect().top;
                              const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                              window.scrollTo({
                                top: offsetPosition,
                                behavior: 'smooth'
                              });
                            }
                          }, 100);
                        } else {
                          // Already on home page, just scroll
                          const element = document.getElementById('contact');
                          if (element) {
                            const headerOffset = 80;
                            const elementPosition = element.getBoundingClientRect().top;
                            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                            window.scrollTo({
                              top: offsetPosition,
                              behavior: 'smooth'
                            });
                          }
                        }
                      }}
                      className={`relative text-forest-green font-medium transition-all duration-300 group py-3 px-4 rounded-lg ${
                        isActive ? 'text-mustard-gold' : ''
                      }`}
                    >
                      <span className="relative z-10 text-sm tracking-wide">{item.label}</span>
                      <motion.span
                        className="absolute bottom-1 left-0 right-0 h-0.5 bg-mustard-gold origin-left rounded-full"
                        animate={{ scaleX: isActive ? 1 : 0 }}
                        whileHover={{ scaleX: 1 }}
                        transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                      />
                      <motion.span
                        className="absolute inset-0 bg-mustard-gold/8 rounded-lg opacity-0 group-hover:opacity-100 -z-10"
                        transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                      />
                    </a>
                  ) : (
                    <Link
                      to={item.href}
                      className={`relative text-forest-green font-medium transition-all duration-300 group py-3 px-4 rounded-lg ${
                        isActive ? 'text-mustard-gold' : ''
                      }`}
                    >
                      <span className="relative z-10 text-sm tracking-wide">{item.label}</span>
                      <motion.span
                        className="absolute bottom-1 left-0 right-0 h-0.5 bg-mustard-gold origin-left rounded-full"
                        animate={{ scaleX: isActive ? 1 : 0 }}
                        whileHover={{ scaleX: 1 }}
                        transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                      />
                      <motion.span
                        className="absolute inset-0 bg-mustard-gold/8 rounded-lg opacity-0 group-hover:opacity-100 -z-10"
                        transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                      />
                    </Link>
                  )}
                </motion.div>
              );
            })}
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
            {navItems.map((item, index) => {
              // Dynamic active state checking (same as desktop)
              let isActive = false;
              if (item.href === '/') {
                isActive = location.pathname === '/' && !location.hash;
              } else if (item.href === '/#contact') {
                isActive = location.hash === '#contact';
              } else if (item.exact) {
                isActive = location.pathname === item.href;
              } else {
                isActive = location.pathname.startsWith(item.href);
              }
              
              return item.href.startsWith('/#') ? (
                <motion.a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    setIsMobileMenuOpen(false);
                    if (location.pathname !== '/') {
                      // Navigate to home first, then scroll to contact
                      navigate('/');
                      setTimeout(() => {
                        const element = document.getElementById('contact');
                        if (element) {
                          const headerOffset = 80;
                          const elementPosition = element.getBoundingClientRect().top;
                          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                          window.scrollTo({
                            top: offsetPosition,
                            behavior: 'smooth'
                          });
                        }
                      }, 100);
                    } else {
                      // Already on home page, just scroll
                      const element = document.getElementById('contact');
                      if (element) {
                        const headerOffset = 80;
                        const elementPosition = element.getBoundingClientRect().top;
                        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                        window.scrollTo({
                          top: offsetPosition,
                          behavior: 'smooth'
                        });
                      }
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
                  className={`block font-medium transition-colors duration-300 py-3 px-4 rounded-lg hover:bg-cream/50 
                    border-l-2 border-transparent hover:border-mustard-gold ${
                      isActive ? 'text-mustard-gold border-mustard-gold' : 'text-forest-green hover:text-mustard-gold'
                    }`}
                >
                  {item.label}
                </motion.a>
              ) : (
                <Link
                  key={item.label}
                  to={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ 
                      opacity: isMobileMenuOpen ? 1 : 0,
                      x: isMobileMenuOpen ? 0 : -20
                    }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={{ x: 4 }}
                    whileTap={{ scale: 0.98 }}
                    className={`block font-medium transition-colors duration-300 py-3 px-4 rounded-lg hover:bg-cream/50 
                      border-l-2 border-transparent hover:border-mustard-gold ${
                        isActive ? 'text-mustard-gold border-mustard-gold' : 'text-forest-green hover:text-mustard-gold'
                      }`}
                  >
                    {item.label}
                  </motion.div>
                </Link>
              );
            })}
          </div>
        </motion.div>
      </motion.nav>
    </motion.header>
  );
};

export default NewHeader;

