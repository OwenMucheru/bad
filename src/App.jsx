import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Gallery from './components/Gallery';
import Events from './components/Events';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Gallery />
      <Events />
      <Testimonials />
      <Contact />
      <Footer />
      <BackToTop />
    </>
  );
}

export default App;
