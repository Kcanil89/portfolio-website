import React from 'react';
import { testimonials } from '../data';
import './Testimonials.css';

const Testimonials = () => {
  return (
    <section id="testimonials" className="testimonials">
      <h2>What Others Say</h2>
      <div className="testimonial-container">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-card">
            <p className="quote">"{testimonial.quote}"</p>
            <div className="author">
              <span className="name">{testimonial.name}</span>
              <span className="title">{testimonial.title}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;