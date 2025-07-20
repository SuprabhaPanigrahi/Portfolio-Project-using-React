import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Education from './components/Education/Education';
import Projects from './components/Projects/Projects';
import Experience from './components/Experience/Experience'
import Contact from './components/Contacts/Contacts';
import Footer from './components/Footer/Footer';
import AnimatedBackground from './components/AnimatedBackground';
import Cursor from './components/Cursor/Cursor';
import './App.css';

function App() {
  const [activeSection, setActiveSection] = useState('Home');
  const [darkMode] = useState(true); // Locked to dark mode for premium look

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'skills', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section === 'home' ? 'Home' : section.charAt(0).toUpperCase() + section.slice(1));
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="app dark">
      <Cursor />
      <AnimatedBackground />
      <Header activeSection={activeSection} setActiveSection={setActiveSection} />
      
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;