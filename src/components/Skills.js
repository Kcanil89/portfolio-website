import React from 'react';
import './Skills.css';

// Add or remove skills as needed
const skillsData = [
  { name: 'PHP', icon: 'fab fa-php' },
  { name: 'Laravel', icon: 'fab fa-laravel' },
  { name: 'WordPress', icon: 'fab fa-wordpress' },
  { name: 'React', icon: 'fab fa-react' },
  { name: 'JavaScript', icon: 'fab fa-js-square' },
  { name: 'HTML5', icon: 'fab fa-html5' },
  { name: 'CSS3', icon: 'fab fa-css3-alt' },
  { name: 'MySQL', icon: 'fas fa-database' },
  { name: 'Git', icon: 'fab fa-git-alt' },
  { name: 'AWS', icon: 'fab fa-aws' },
];

const Skills = () => {
  return (
    <section id="skills" className="skills">
      <h2>My Technical Toolkit</h2>
      <div className="skills-grid">
        {skillsData.map(skill => (
          <div className="skill-card" key={skill.name}>
            <i className={skill.icon}></i>
            <span>{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;