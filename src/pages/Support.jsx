import React from 'react';

export default function Support() {
  return (
    <div className="support-page-container">
      <div className="support-content">
        <h1 className="support-header">Support</h1>
        <p className="support-description">
          We're here to help. Fill out the form below and our team will get back to you as soon as possible.
        </p>

        <div className="support-form-container">
          <h2 className="support-form-header">Contact Support</h2>
          <form className="support-form">
            <div className="form-group">
              <label htmlFor="name" className="form-label">Name</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                className="form-input" 
                required 
              />
            </div>
            <div className="form-group">
              <label htmlFor="email" className="form-label">Email</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                className="form-input" 
                required 
              />
            </div>
            <div className="form-group">
              <label htmlFor="subject" className="form-label">Subject</label>
              <input 
                type="text" 
                id="subject" 
                name="subject" 
                className="form-input" 
                required 
              />
            </div>
            <div className="form-group">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea 
                id="message" 
                name="message" 
                rows="4" 
                className="form-textarea" 
                required
              ></textarea>
            </div>
            <button 
              type="submit" 
              className="form-submit-button"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
