import React from 'react';
import { volunteer } from '../data';
import './Volunteer.css';

const Volunteer = () => {
  return (
    <section id="volunteer" className="volunteer">
      <h2>Community & Volunteering</h2>
      <div className="volunteer-container">
        {volunteer.map((item, index) => (
          <div key={index} className="volunteer-card">
            <h3>{item.role}</h3>
            <h4>{item.organization}</h4>
            <span className="period">{item.period}</span>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Volunteer;