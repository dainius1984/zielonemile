import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to top on route change - works on all devices including mobile
    const scrollToTop = () => {
      // Try smooth scroll first, fallback to instant for better mobile support
      if ('scrollBehavior' in document.documentElement.style) {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'instant'
        });
      } else {
        // Fallback for older browsers
        window.scrollTo(0, 0);
      }
      
      // Also try scrolling the document element (for mobile Safari)
      if (document.documentElement) {
        document.documentElement.scrollTop = 0;
      }
      if (document.body) {
        document.body.scrollTop = 0;
      }
    };

    // Small delay to ensure page is rendered
    const timeoutId = setTimeout(scrollToTop, 0);
    
    return () => clearTimeout(timeoutId);
  }, [pathname]);

  return null;
};

export default ScrollToTop;

