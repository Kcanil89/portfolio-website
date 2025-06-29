import React from 'react';
import { projects } from '../data';
import './Projects.css';

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <h2>My Recent Work</h2>
      <p className="section-subtitle">
        Here are a few projects I've worked on recently. Want to see more? <a href="mailto:kcanil89@gmail.com">Email me</a>.
      </p>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <div className="project-image-container">
              <img src={project.image} alt={project.title} className="project-image" />
            </div>
            <div className="project-content">
              <p className="project-subtitle">{project.subtitle}</p>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-tech">
                {/* --- MODIFIED LOOP HERE --- */}
                {project.tech.map(t => (
                  <div key={t.name} className="tech-tag">
                    <i className={t.icon}></i>
                    <span>{t.name}</span>
                  </div>
                ))}
              </div>
              <div className="project-links">
                {project.liveLink !== "#" && (
                  <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="project-link">
                    <i className="fas fa-external-link-alt"></i> Live Demo
                  </a>
                )}
                {project.githubLink !== "#" && (
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="project-link">
                    <i className="fab fa-github"></i> View Code
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;