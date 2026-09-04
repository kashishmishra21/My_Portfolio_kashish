import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import ResumeModal from './components/ResumeModal';
import NotFound from './components/NotFound';

import './styles/main.css';
import './styles/components.css';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);
  const [is404, setIs404] = useState(false);

  useEffect(() => {
    // Check initial hash
    const hash = window.location.hash.replace('#', '');
    if (hash === '404') {
      setIs404(true);
      return;
    }

    const sections = document.querySelectorAll('section[id]');
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-20% 0px -60% 0px',
        threshold: 0
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  if (is404) {
    return (
      <div className="app">
        <Navbar activeSection="" onOpenResumeModal={() => setIsResumeModalOpen(true)} />
        <NotFound onGoHome={() => { window.location.hash = ''; setIs404(false); }} />
        <Footer />
      </div>
    );
  }

  return (
    <div className="app">
      <Navbar
        activeSection={activeSection}
        onOpenResumeModal={() => setIsResumeModalOpen(true)}
      />

      <main>
        <Hero onOpenResumeModal={() => setIsResumeModalOpen(true)} />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Achievements />
        <Contact />
      </main>

      <Footer />
      <BackToTop />

      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
      />
    </div>
  );
}
