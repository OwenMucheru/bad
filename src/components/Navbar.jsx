import React, { useState, useEffect } from 'react';

const navLinks = ['home', 'about', 'projects', 'gallery', 'events', 'contact'];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`bg-white sticky top-0 z-50 transition-shadow duration-300 ${scrolled ? 'shadow-md' : ''}`}>
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <img src="rac/logo.png" alt="Rotaract Logo" className="h-24 w-32 object-contain" />
        </div>

        {/* Desktop links */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map(link => (
            <a
              key={link}
              href={`#${link}`}
              className="text-gray-700 hover:text-blue-600 font-medium capitalize transition-colors duration-200"
            >
              {link}
            </a>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={() => setMenuOpen(prev => !prev)}
          aria-label="Toggle menu"
        >
          <i className={`fas ${menuOpen ? 'fa-times' : 'fa-bars'} text-2xl`} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white py-2 px-4 shadow-lg">
          {navLinks.map(link => (
            <a
              key={link}
              href={`#${link}`}
              className="block py-2 text-gray-700 hover:text-blue-600 capitalize"
              onClick={() => setMenuOpen(false)}
            >
              {link}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
