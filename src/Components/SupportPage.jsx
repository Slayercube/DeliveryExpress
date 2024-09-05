// src/SupportPage.jsx
import React, { useState } from 'react';
import './SupportPage.css';

const SupportPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    issue: '',
    description: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data submitted:', formData);
    setSubmitted(true);
  };

  return (
    <div className="support-page">
      <h1>Support Page</h1>
      <p>If you are experiencing issues, please fill out the form below, and our support team will get back to you.</p>

      {submitted ? (
        <div className="thank-you-message">
          <h2>Thank you for your submission!</h2>
          <p>We have received your request and will contact you soon.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="support-form">
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="issue">Issue:</label>
            <select
              id="issue"
              name="issue"
              value={formData.issue}
              onChange={handleChange}
              required
            >
              <option value="" disabled>Select an issue</option>
              <option value="billing">Billing</option>
              <option value="technical">Technical Support</option>
              <option value="general">General Inquiry</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="description">Description:</label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="submit-button">Submit</button>
        </form>
      )}
    </div>
  );
};

export default SupportPage;
