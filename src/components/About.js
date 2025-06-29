import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <h2>About Me</h2>
      <div className="about-grid">
        <div className="about-image-container">
          <img src="/images/about-me-photo.jpg" alt="Anil Khattri at work" />
        </div>
        <div className="about-text">
          <h3>Passionate Problem Solver & Code Artisan</h3>
          <p>
            With over 6 years in the web development industry, I've cultivated a deep passion for building software that is both functional and elegant. My journey has taken me from leading development teams and architecting government software to diving deep into machine learning and full-stack applications.
          </p>
          <p>
            I thrive on challenges and am driven by the process of turning a complex idea into a tangible, high-performance product. Whether it's optimizing a database, refactoring legacy code, or mentoring junior developers, I bring a commitment to quality and a user-centric mindset to every project.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;