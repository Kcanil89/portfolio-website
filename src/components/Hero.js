import React from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import './Hero.css';

const Hero = () => {
  const [text] = useTypewriter({
    words: ['Full-Stack Developer', 'PHP & Laravel Developer', 'React Enthusiast', 'WordPress Specialist'],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <span className="intro-text">Hello, I'm</span>
          <h1>Anil Khattri</h1>
          <p className="tagline">
            A <span>{text}</span>
            <Cursor cursorColor='#30A8F2' />
          </p>
          <p className="hero-description">
            I craft high-performance web applications, transforming complex problems into elegant, user-friendly solutions.
          </p>
          {/* --- BUTTONS CONTAINER --- */}
          <div className="hero-buttons">
            <a href="#projects" className="cta-button">Explore My Work</a>
            {/* --- NEW BUTTON ADDED HERE --- */}
            <a href="/Anil-Khattri-CV.pdf" download className="cta-button-outline">
              <i className="fas fa-download"></i> Download CV
            </a>
          </div>
        </div>
        <div className="hero-image-container">
          <img src="/images/hero-profile.jpg" alt="Anil Khattri" className="hero-image" />
        </div>
      </div>
    </section>
  );
};

export default Hero;