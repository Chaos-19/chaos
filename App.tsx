import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ChatWidget from './components/ChatWidget';
import { Analytics } from '@vercel/analytics/react';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-background text-primary selection:bg-white selection:text-black">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
      <ChatWidget />
      <Analytics />
    </div>
  );
};

export default App;