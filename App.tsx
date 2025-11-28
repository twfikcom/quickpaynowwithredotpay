import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Steps from './components/Steps';
import Features from './components/Features';
import Blog from './components/Blog';
import FAQ from './components/FAQ';
import StickyFooter from './components/StickyFooter';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans text-right" dir="rtl">
      <Navbar />
      <main>
        <Hero />
        <Steps />
        <Features />
        <Blog />
        <FAQ />
      </main>
      <Footer />
      <StickyFooter />
    </div>
  );
}

export default App;