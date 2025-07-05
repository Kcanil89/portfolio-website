import React from 'react';
import { blogPosts } from '../data';
import './Blog.css';

const Blog = () => {
  return (
    <section id="blog" className="blog">
      <h2>My Adventures/Blogs</h2>
      <p className="section-subtitle">
        When I'm not coding, I'm usually seeking the next adrenaline rush. Here are a few of my favorite moments.
      </p>
      <div className="blog-grid">
        {blogPosts.map((post, index) => (
          <div key={index} className="blog-card">
            <div className="video-container">
              <iframe
                src={`https://www.youtube.com/embed/${post.youtubeVideoId}`}
                title={post.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="blog-content">
              <h3>{post.title}</h3>
              <p>{post.description}</p>
              <div className="blog-tags">
                {post.tags.map(tag => <span key={tag}>{tag}</span>)}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blog;