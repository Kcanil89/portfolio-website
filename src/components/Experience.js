import React from 'react';
import { experience } from '../data';
import './Experience.css';

const Experience = () => {
  return (
    <section id="experience" className="experience">
      <h2>Professional Experience</h2>
      <div className="timeline">
        {experience.map((job, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-content">
              <h3>{job.role}</h3>
              <p className="company">{job.company}</p>
              <span className="period">{job.period}</span>
              <ul>
                {job.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;