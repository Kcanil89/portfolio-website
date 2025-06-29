import React from 'react';

// Components
import MatrixBackground from './components/MatrixBackground';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills'; 
import Projects from './components/Projects';
import Experience from './components/Experience';
import Testimonials from './components/Testimonials';
import Blog from './components/Blog';
import Volunteer from './components/Volunteer';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <MatrixBackground />
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Testimonials />
        <Blog />
        <Volunteer />
      </main>
      <Contact />
    </div>
  );
}

export default App;