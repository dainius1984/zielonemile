import React, { useRef, useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';

const EMAILJS_PUBLIC_KEY = "0f8Jce-Gsw4GbjCQ_";
const EMAILJS_SERVICE_ID = "service_m4uai4d";
const EMAILJS_TEMPLATE_ID = "template_r7rcz39";

emailjs.init(EMAILJS_PUBLIC_KEY);

export const ConsultationModal = ({ open, onClose }) => {
  const videoRef = useRef(null);
  const [form, setForm] = useState({ name: '', email: '', phone: '', countryCode: '+48', message: '' });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [phoneError, setPhoneError] = useState('');

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.5;
    }
  }, [open]);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  if (!open) return null;

  const validatePhone = (phone, countryCode) => {
    if (!phone) return true; // Phone is optional
    if (countryCode === '+48') {
      // Polish phone format: 9 digits (without country code)
      const cleaned = phone.replace(/\s/g, '');
      // Accept formats: 123456789, 123 456 789, 123-456-789
      const phoneRegex = /^[0-9]{9}$/;
      return phoneRegex.test(cleaned);
    }
    return true; // For other countries, basic validation
  };

  const formatPhone = (value) => {
    // Remove all non-digits
    const cleaned = value.replace(/\D/g, '');
    // Format as XXX XXX XXX (9 digits)
    if (cleaned.length <= 3) return cleaned;
    if (cleaned.length <= 6) return `${cleaned.slice(0, 3)} ${cleaned.slice(3)}`;
    return `${cleaned.slice(0, 3)} ${cleaned.slice(3, 6)} ${cleaned.slice(6, 9)}`;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'phone') {
      const formatted = formatPhone(value);
      setForm({ ...form, phone: formatted });
      if (formatted && !validatePhone(formatted, form.countryCode)) {
        setPhoneError('Nieprawidłowy format numeru telefonu. Wprowadź 9 cyfr (np. 608 637 118)');
      } else {
        setPhoneError('');
      }
    } else if (name === 'countryCode') {
      setForm({ ...form, countryCode: value, phone: '' });
      setPhoneError('');
    } else {
      setForm({ ...form, [name]: value });
    }
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setError('Proszę uzupełnić wymagane pola.');
      return;
    }
    
    // Validate phone if provided
    if (form.phone && !validatePhone(form.phone, form.countryCode)) {
      setPhoneError('Nieprawidłowy format numeru telefonu. Wprowadź 9 cyfr (np. 608 637 118)');
      return;
    }
    
    setSubmitting(true);
    setError('');
    setPhoneError('');
    
    try {
      const phoneMessage = form.phone 
        ? `\n\nTelefon: ${form.countryCode} ${form.phone}` 
        : '';
      
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          title: 'Konsultacje',
          name: form.name,
          time: new Date().toLocaleString('pl-PL'),
          message: form.message + phoneMessage,
          email: form.email
        }
      );
      setSubmitted(true);
      setForm({ name: '', email: '', phone: '', countryCode: '+48', message: '' });
      setTimeout(() => {
        setSubmitted(false);
        onClose();
      }, 3000);
    } catch (err) {
      setError('Przepraszamy, wystąpił błąd podczas wysyłania wiadomości. Spróbuj ponownie później.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[9999] flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {/* Video background */}
        <div className="absolute inset-0">
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            className="w-full h-full object-cover blur-md brightness-75"
          >
            <source src="/video/hero.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-forest-green/80 backdrop-blur-[2px]"></div>
        </div>
        {/* Modal content */}
        <motion.div
          className="relative z-[9999] w-full max-w-lg mx-auto p-4 sm:p-8 md:p-10 bg-cream/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-forest-green/20 mr-[10px] sm:mr-auto"
          initial={{ scale: 0.85, opacity: 0, y: 40 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.85, opacity: 0, y: 40 }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        >
          <button
            onClick={onClose}
            className="absolute top-3 md:top-4 right-3 md:right-4 text-forest-green hover:text-mustard-gold text-3xl md:text-4xl font-bold focus:outline-none transition-colors z-10"
            aria-label="Zamknij"
            type="button"
          >
            &times;
          </button>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-forest-green mb-8 text-center tracking-tight pr-10 md:pr-0">
            <span className="block">Umów Bezpłatną</span>
            <span className="block">Konsultację</span>
          </h2>
          {submitted ? (
            <motion.div
              className="bg-mustard-gold/20 border-2 border-mustard-gold text-forest-green p-6 rounded-xl text-center font-semibold shadow"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              Dziękujemy za zgłoszenie! Skontaktujemy się z Tobą najszybciej jak to możliwe.
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col space-y-6">
              {error && <div className="bg-red-500/20 border border-red-500 text-red-700 p-3 rounded-lg text-sm text-center">{error}</div>}
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2 text-forest-green">Imię i nazwisko *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-white border border-forest-green/20 text-forest-green focus:outline-none focus:ring-2 focus:ring-mustard-gold placeholder-gray-400 text-base transition-all"
                  placeholder="Twoje imię i nazwisko"
                  required
                  disabled={submitting}
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2 text-forest-green">E-mail *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-white border border-forest-green/20 text-forest-green focus:outline-none focus:ring-2 focus:ring-mustard-gold placeholder-gray-400 text-base transition-all"
                  placeholder="Twój e-mail"
                  required
                  disabled={submitting}
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-2 text-forest-green">Telefon</label>
                <div className="flex gap-2">
                  <select
                    name="countryCode"
                    value={form.countryCode}
                    onChange={handleChange}
                    disabled={submitting}
                    className="px-3 py-3 rounded-xl bg-white border border-forest-green/20 text-forest-green focus:outline-none focus:ring-2 focus:ring-mustard-gold text-base transition-all"
                  >
                    <option value="+48">+48</option>
                    <option value="+1">+1</option>
                    <option value="+44">+44</option>
                    <option value="+49">+49</option>
                  </select>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    className={`flex-1 px-4 py-3 rounded-xl bg-white border text-forest-green focus:outline-none focus:ring-2 focus:ring-mustard-gold placeholder-gray-400 text-base transition-all ${
                      phoneError ? 'border-red-500' : 'border-forest-green/20'
                    }`}
                    placeholder="608 637 118"
                    disabled={submitting}
                    maxLength={11} // 9 digits + 2 spaces
                  />
                </div>
                {phoneError && (
                  <p className="mt-1 text-sm text-red-600">{phoneError}</p>
                )}
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2 text-forest-green">Wiadomość *</label>
                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-white border border-forest-green/20 text-forest-green focus:outline-none focus:ring-2 focus:ring-mustard-gold placeholder-gray-400 text-base min-h-[100px] transition-all resize-none"
                  placeholder="Napisz swoją wiadomość..."
                  required
                  disabled={submitting}
                />
              </div>
              <button
                type="submit"
                disabled={submitting}
                className={`w-full bg-mustard-gold hover:bg-mustard-gold/90 text-forest-green font-bold py-4 px-6 rounded-xl shadow-lg transition-all duration-200 ease-in-out transform hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-mustard-gold text-lg ${submitting ? 'opacity-70 cursor-wait' : ''}`}
              >
                {submitting ? "Wysyłanie..." : "Wyślij zgłoszenie"}
              </button>
            </form>
          )}
        </motion.div>
        {/* Overlay for closing modal */}
        <motion.div
          className="fixed inset-0 z-0 cursor-pointer"
          onClick={onClose}
          aria-label="Zamknij modal"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>
    </AnimatePresence>
  );
};

