import React, { useState, useEffect } from 'react';

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 bg-blue-600 text-white w-12 h-12 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 z-50 ${
        visible ? 'opacity-100 visible' : 'opacity-0 invisible'
      }`}
      aria-label="Back to top"
    >
      <i className="fas fa-arrow-up" />
    </button>
  );
}
