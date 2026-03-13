import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Features from './components/Features';
import Pricing from './components/Pricing';
import Games from './components/Games';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-white w-full flex flex-col min-h-screen font-sans">
      <Navbar />
      <div className="flex flex-col w-full items-start">
        <Hero />
        <Stats />
        <Features />
        <Pricing />
        <Games />
        <CTA />
      </div>
      <Footer />
    </div>
  );
}

export default App;
