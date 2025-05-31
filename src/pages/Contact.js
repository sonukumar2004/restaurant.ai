import React from 'react';
import { FiMapPin, FiPhone, FiMail } from 'react-icons/fi';
const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="contact-container">
      <div className="contact-header">
        <h1>Contact Us</h1>
        <p>We'd love to hear from you!</p>
      </div>

      <div className="contact-content">
        <div className="contact-info">
          <div className="info-card">
            <FiMapPin className="info-icon" />
            <h3>Visit Us</h3>
            <p>123 Gourmet Street<br/>Food Tech Park, Delhi 110001</p>
          </div>
          
          <div className="info-card">
            <FiPhone className="info-icon" />
            <h3>Call Us</h3>
            <p>+91 98765 43210<br/>Mon-Sun: 9AM - 9PM
            </p>
          </div>
          
          <div className="info-card">
            <FiMail className="info-icon" />
            <h3>Email Us</h3>
            <p>contact@restaurantai.com<br/>support@restaurantai.com</p>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <input type="text" placeholder="Name" required />
          </div>
          <div className="form-group">
            <input type="email" placeholder="Email" required />
          </div>
          <div className="form-group">
            <input type="tel" placeholder="Phone" />
          </div>
          <div className="form-group">
            <textarea placeholder="Message" rows="5" required></textarea>
          </div>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
};
export default Contact;