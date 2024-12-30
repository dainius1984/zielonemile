import React, { useState, useEffect, useRef } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  
  const navItems = {
    'Home': [],
    'Services': ['Projektowanie Ogrodów', 'Budowa Tarasów', 'Nawadnianie Automatyczne'],
    'Portfolio': ['Przed i Po', 'Ogrodowe Projekty', 'Tarasowe Inspiracje'],
    'Contact': []
  };

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!activeDropdown) return;

      const activeElement = document.querySelector(`[data-dropdown="${activeDropdown}"]`);
      if (!activeElement) return;

      const rect = activeElement.getBoundingClientRect();
      const isInSafeZone = 
        e.clientX >= rect.left - 50 &&
        e.clientX <= rect.right + 50 &&
        e.clientY >= rect.top - 50 &&
        e.clientY <= rect.bottom + 50;

      if (!isInSafeZone) {
        setActiveDropdown(null);
      }
    };

    if (activeDropdown) {
      document.addEventListener('mousemove', handleMouseMove);
    }

    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, [activeDropdown]);

  const handleMouseEnter = (item) => {
    if (window.innerWidth >= 768) {
      setActiveDropdown(item);
    }
  };

  const NavItem = ({ item, items }) => {
    const menuRef = useRef(null);

    return (
      <div className="nav-item relative group">
        <button
          ref={menuRef}
          className="px-4 py-2 text-emerald-800 hover:text-emerald-600 transition-colors duration-300 focus:outline-none"
          onMouseEnter={() => handleMouseEnter(item)}
          onClick={() => setActiveDropdown(activeDropdown === item ? null : item)}
          aria-expanded={activeDropdown === item}
          aria-haspopup="true"
        >
          {item}
          {items.length > 0 && (
            <span className="ml-1 transition-transform duration-200">▾</span>
          )}
        </button>
        
        {items.length > 0 && (
          <div
            data-dropdown={item}
            className={`absolute left-0 mt-2 w-56 bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 origin-top
              ${activeDropdown === item ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0 pointer-events-none'}`}
            style={{ zIndex: 50 }}
          >
            <div className="absolute -top-2 left-6 w-4 h-4 bg-white transform rotate-45"></div>
            {items.map((subItem, index) => (
              <button
                key={index}
                onClick={() => {/* Add navigation logic */}}
                className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-emerald-100 hover:text-emerald-800 transition-colors duration-200
                  border-b border-gray-100 last:border-0"
                role="menuitem"
              >
                {subItem}
              </button>
            ))}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="bg-gradient-to-b from-[#FDF6E3] to-[#EED9C4] shadow-sm">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0">
            <Link to="/">
              <img 
                src="/img/logo/logo.jpg" 
                alt="Logo" 
                className="h-14 object-contain transition-transform hover:scale-105 rounded-lg p-1"
              />
            </Link>
          </div>

          <button
            className="md:hidden p-2 rounded-lg text-emerald-800 hover:bg-emerald-100 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <div className="hidden md:flex space-x-4">
            {Object.entries(navItems).map(([item, subitems]) => (
              <NavItem key={item} item={item} items={subitems} />
            ))}
          </div>
        </div>

        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          } overflow-hidden`}
        >
          <div className="py-2 space-y-1">
            {Object.entries(navItems).map(([item, subitems]) => (
              <div key={item} className="space-y-1">
                <button
                  className="w-full text-left px-4 py-2 text-emerald-800 hover:bg-emerald-100 rounded-lg flex justify-between items-center"
                  onClick={() => setActiveDropdown(activeDropdown === item ? null : item)}
                  aria-expanded={activeDropdown === item}
                >
                  {item}
                  {subitems.length > 0 && (
                    <span className={`transform transition-transform duration-200 ${
                      activeDropdown === item ? 'rotate-180' : ''
                    }`}>▾</span>
                  )}
                </button>
                {subitems.length > 0 && (
                  <div className={`pl-4 space-y-1 transition-all duration-200 ${
                    activeDropdown === item ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                  } overflow-hidden`}>
                    {subitems.map((subitem, index) => (
                      <button
                        key={index}
                        onClick={() => {/* Add navigation logic */}}
                        className="block w-full text-left px-4 py-2 text-emerald-800 hover:bg-emerald-100 rounded-lg"
                      >
                        {subitem}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;