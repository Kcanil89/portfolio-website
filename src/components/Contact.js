import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <footer id="contact" className="contact">
      <h2>Let's Bake Something Together</h2>
      <p>I'm currently available for freelance work and open to new opportunities.</p>
      <a href="mailto:kcanil89@gmail.com" className="email-link">kcanil89@gmail.com</a>
      <div className="social-links">
        {/* Replace # with your actual profile URLs */}
        <a href="https://www.linkedin.com/in/kcanil89/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="https://github.com/Kcanil89" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="https://profiles.wordpress.org/kcanil89/" target="_blank" rel="noopener noreferrer">WordPress</a>
      </div>
      <p className="copyright">© 2025 Anil Khattri. All Rights Reserved.</p>
    </footer>
  );
};

export default Contact;