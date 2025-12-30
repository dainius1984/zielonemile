import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Facebook, Instagram, Linkedin, Building2, FileText } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', message: '' });
    alert('Dziękujemy za wiadomość! Skontaktujemy się z Tobą wkrótce.');
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
  ];

  return (
    <>
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-forest-green text-cream">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
            Skontaktuj się z nami
          </h2>
          <p className="text-lg text-cream/90 max-w-2xl mx-auto">
            Chcesz stworzyć wymarzony taras lub ogród? Napisz do nas!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Imię i Nazwisko
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-cream/10 border border-cream/30 text-cream placeholder-cream/60 focus:outline-none focus:ring-2 focus:ring-mustard-gold focus:border-transparent transition-all"
                  placeholder="Jan Kowalski"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-cream/10 border border-cream/30 text-cream placeholder-cream/60 focus:outline-none focus:ring-2 focus:ring-mustard-gold focus:border-transparent transition-all"
                  placeholder="jan@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Wiadomość
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg bg-cream/10 border border-cream/30 text-cream placeholder-cream/60 focus:outline-none focus:ring-2 focus:ring-mustard-gold focus:border-transparent transition-all resize-none"
                  placeholder="Opisz swój projekt..."
                />
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full px-8 py-4 bg-mustard-gold text-forest-green font-semibold rounded-full 
                  hover:bg-mustard-gold/90 transition-all duration-300 flex items-center justify-center gap-2 text-lg shadow-lg"
              >
                Wyślij wiadomość
                <Send className="w-5 h-5" />
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-serif font-bold mb-6">Informacje kontaktowe</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-cream/10 rounded-lg">
                    <Building2 className="w-6 h-6 text-mustard-gold" />
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Firma</p>
                    <p className="text-cream/90">
                      ZIELONE MILE ŁUKASZ ROGOZINSKI
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-cream/10 rounded-lg">
                    <MapPin className="w-6 h-6 text-mustard-gold" />
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Adres</p>
                    <p className="text-cream/90">
                      ŻEROMSKIEGO 62/35<br />
                      50-312 WROCŁAW
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-cream/10 rounded-lg">
                    <Phone className="w-6 h-6 text-mustard-gold" />
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Telefon</p>
                    <a href="tel:+48608637118" className="text-cream/90 hover:text-mustard-gold transition-colors">
                      608 637 118
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-cream/10 rounded-lg">
                    <Mail className="w-6 h-6 text-mustard-gold" />
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Email</p>
                    <a href="mailto:zielonemile@vp.pl" className="text-cream/90 hover:text-mustard-gold transition-colors">
                      zielonemile@vp.pl
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-cream/10 rounded-lg">
                    <FileText className="w-6 h-6 text-mustard-gold" />
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Dane firmowe</p>
                    <p className="text-cream/90 text-sm">
                      REGON: 021555931<br />
                      NIP: 894 256 10 27
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h3 className="text-2xl font-serif font-bold mb-6">Śledź nas</h3>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="p-4 bg-cream/10 rounded-lg hover:bg-cream/20 transition-colors"
                      aria-label={social.label}
                    >
                      <Icon className="w-6 h-6 text-mustard-gold" />
                    </motion.a>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>

    {/* Footer with Light Background */}
    <footer className="bg-cream py-12 px-4 sm:px-6 lg:px-8 border-t border-forest-green/10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <motion.a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
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
          </motion.a>
          <p className="text-forest-green/70 text-sm text-center md:text-right font-medium">
            © {new Date().getFullYear()} Zielone Mile. Wszelkie prawa zastrzeżone.
          </p>
        </motion.div>
      </div>
    </footer>
    </>
  );
};

export default Contact;

