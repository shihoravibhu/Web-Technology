import React from "react";
import "./About.css";

function About() {
  return (
    <div className="about-container">
      <h2>About Bhagavad Gita Project</h2>
      <p>
        The <strong>Bhagavad Gita</strong> is one of the most important
        scriptures of Hindu philosophy. This project aims to make the Gita
        easily accessible with modern web technologies, providing chapters,
        translations, and summaries in a clean and user-friendly interface.
      </p>

      <section className="about-section">
        <h3>✨ Features</h3>
        <ul>
          <li>Browse all 18 chapters with ease</li>
          <li>Read verse-by-verse translations</li>
          <li>Clean and modern design</li>
          <li>Accessible from any device</li>
        </ul>
      </section>

      <section className="about-section">
        <h3>📚 Our Goal</h3>
        <p>
          To spread the timeless wisdom of the Bhagavad Gita and help people
          apply its teachings in their daily lives.
        </p>
      </section>

      <section className="about-section">
        <h3>👨‍💻 Developer</h3>
        <p>
          This project is developed with <span>❤️</span> using React &amp;
          modern web tools.
        </p>
      </section>
    </div>
  );
}

export default About;
