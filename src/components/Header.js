import React, { useState } from 'react';
import './Header.css';

const Header = () => {
  // State to manage the mobile menu's visibility
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to close the menu, which we'll use on link clicks
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">Anil Khattri</div>

        {/* --- The Mobile Hamburger Menu Button --- */}
        {/* This button is only visible on mobile via CSS */}
        <button
          className="hamburger-menu"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <i className="fas fa-times"></i> // "X" icon when menu is open
          ) : (
            <i className="fas fa-bars"></i> // "Hamburger" icon when menu is closed
          )}
        </button>

        {/* --- The Navigation --- */}
        {/* We add a conditional class 'nav-open' when the menu is active */}
        <nav className={isMenuOpen ? 'nav-open' : ''}>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#projects" onClick={closeMenu}>Projects</a>
          <a href="#experience" onClick={closeMenu}>Experience</a>
          <a href="#blog" onClick={closeMenu}>Adventures</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;