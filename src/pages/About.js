import React from 'react';

const About = () => {
  return (
    <div className="about-container">
      <div className="about-header">
        <h1>About SavoryAI</h1>
        <p>Redefining Dining Through Artificial Intelligence</p>
      </div>

      <div className="about-content">
        <section className="about-section">
          <h2>Our Story</h2>
          <p>Founded in 2023, SavoryAI combines culinary expertise with cutting-edge AI technology to create personalized dining experiences. Our platform analyzes millions of data points to craft perfect meals for every palate.</p>
        </section>

        <section className="about-section">
          <h2>AI-Powered Features</h2>
          <div className="features-grid">
            {['Personalized Recommendations', 'Dietary Adaptation', 'Flavor Profiling', 'Supply Chain Optimization'].map((feature, index) => (
              <div key={index} className="feature-card">
                <div className="feature-icon">{['🤖', '🥗', '👨🍳', '📈'][index]}</div>
                <h3>{feature}</h3>
              </div>
            ))}
          </div>
        </section>

        <section className="about-section">
          <h2>Meet the Team</h2>
          <div className="team-grid">
            {['Chef Arjun ', 'AI Engineer Priya', 'Nutritionist Rohan', 'CXO Neha'].map((member, index) => (
              <div key={index} className="team-card">
                <div className="avatar" style={{ backgroundImage: `url(https://source.unsplash.com/200x200/?portrait${index})` }}></div>
                <h3>{member}</h3>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;