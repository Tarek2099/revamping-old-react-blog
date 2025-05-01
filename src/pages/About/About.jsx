import React from "react";
import "./About.css";

const About = () => (
  <div className="about-container">
    <h1>About My Blog</h1>
    <p className="about-intro">
      Welcome to <span className="brand-name">My Blog</span> — your creative
      corner on the internet! Here, stories come alive, ideas spark, and
      inspiration flows freely. Whether you’re a passionate reader, a curious
      learner, or a fellow creator, you’ll find something to ignite your
      imagination.
    </p>
    <div className="about-highlights">
      <h2>What Makes Us Unique?</h2>
      <ul>
        <li>
          <strong>Fresh Perspectives:</strong> Dive into articles that challenge
          the ordinary and celebrate the extraordinary.
        </li>
        <li>
          <strong>Community Driven:</strong> Join a vibrant community where your
          voice matters. Comment, share, and connect!
        </li>
        <li>
          <strong>Endless Inspiration:</strong> From tech trends to lifestyle
          tips, our diverse topics keep you coming back for more.
        </li>
      </ul>
    </div>
    <div className="about-mission">
      <h2>Our Mission</h2>
      <p>
        We believe in the power of words to change the world. Our mission is to
        empower, educate, and entertain — one post at a time. Whether you’re
        here to learn, share, or simply unwind,{" "}
        <span className="brand-name">My Blog</span> is your digital home.
      </p>
    </div>
    <div className="about-cta">
      <h3>Ready to Explore?</h3>
      <p>
        Start your journey with us. Read, write, and be inspired. <br />
        <span role="img" aria-label="rocket">
          🚀
        </span>{" "}
        Let’s make every day a little more interesting — together!
      </p>
    </div>
  </div>
);

export default About;
