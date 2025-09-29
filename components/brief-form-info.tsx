import React from 'react';
import './styles.css'; // Import the CSS file

interface InputGroupProps {
  label: string;
  id: string;
  type?: string;
  placeholder?: string;
  iconClass?: string;
  className?: string;
}

// Helper component for the input fields
const InputGroup: React.FC<InputGroupProps> = ({ label, id, type = 'text', placeholder = '', iconClass = '', className = '' }) => (
  <div className={`input-group ${className}`}>
    <label htmlFor={id}>{label}</label>
    <div className="input-with-icon">
      <input
        type={type}
        id={id}
        name={id}
        placeholder={placeholder}
      />
      {iconClass && (
        // Use standard Font Awesome classes for the icons
        <i className={iconClass}></i>
      )}
    </div>
  </div>
);

const WebsiteBriefForm = () => {
  return (
    <div className="app-container">
      {/* --- Header/Navigation Bar --- */}
      <header className="main-header">
        <div className="logo">
          {/* Placeholder for Green Cube Icon */}
          <i className="fas fa-cube logo-icon"></i> The Nexus Digitals
        </div>
        <nav>
          <a href="#">Home</a>
          <a href="#">About Us</a>
          <a href="#">Services</a>
          <a href="#" className="active-link">Projects <i className="fas fa-caret-down"></i></a>
          <a href="#">Contact</a>
        </nav>
        <button className="join-hub-btn">JOIN HUB</button>
      </header>

      {/* --- Form Container --- */}
      <div className="form-container">
        <div className="form-header">
          <p className="client-info">Client Information</p>
          <h1>WEBSITE BRIEF FORM</h1>
        </div>

        <form>
          {/* General Project Details (Red Bar) */}
          <div className="project-details-bar">
            <p>General Project Details</p>
          </div>

          {/* SECTION: Business Specifics (Row 1) */}
          <div className="form-section">
            <div className="section-header">
              <h2>Business Specifics</h2>
              <div className="section-tag">
                <p>Why Choose Us?</p>
                <i className="fas fa-times"></i>
              </div>
            </div>
            <div className="form-row">
              <InputGroup 
                label="Element" 
                id="element" 
                placeholder="What is your business name or brand?"
                iconClass="fas fa-search"
                className="full-width"
              />
            </div>
          </div>

          {/* SECTION: Business Specifics (Row 2 & 3) */}
          <div className="form-section">
            <div className="section-header">
              <h2>Business Specifics</h2>
              <p className="sub-label">User Best:</p>
            </div>
            
            <div className="form-row">
              <InputGroup 
                label="Your Email*" 
                id="userEmail" 
                type="email" 
                placeholder="Your Email*" 
                iconClass="fas fa-ellipsis-v"
                className="full-width"
              />
            </div>

            <div className="form-row two-columns">
              <InputGroup label="Current Website URL" id="currentWebsiteURL" />
              <InputGroup label="Your Goal" id="yourGoal" />
            </div>

            <div className="form-row two-columns">
              <InputGroup label="Website Type" id="websiteType" />
              <InputGroup label="Hour Goal" id="hourGoal" />
            </div>

            <div className="form-row">
              <InputGroup label="General: Leave your Message here" id="message" className="full-width" />
            </div>
          </div>
          
          {/* SECTION: Website Specifics */}
          <div className="form-section">
            <div className="section-header two-columns-header">
              <div className="column-title">
                <h2>Website Specifics</h2>
                <p>Constraint</p>
              </div>
              <div className="column-title">
                <h2>Web Design Manual</h2>
              </div>
            </div>
          </div>

          {/* SECTION: Scope of Work */}
          <div className="form-section">
            <div className="section-header">
              <h2>Scope of Work Planner</h2>
              <p className="sub-text">We either build new or update existing websites</p>
            </div>
            
            <div className="form-row radio-group-row">
              <p className="radio-label">Source Code Provided:</p>
              <div className="radio-options">
                <input type="radio" id="sourceYes" name="sourceCodeProvided" value="Yes" />
                <label htmlFor="sourceYes">Yes</label>
                <input type="radio" id="sourceNo" name="sourceCodeProvided" value="No" />
                <label htmlFor="sourceNo">No</label>
              </div>
            </div>
          </div>

          {/* SECTION: Deb like Rosoapcs */}
          <div className="form-section last-section">
            <div className="section-header">
              <h2>Design like References</h2>
            </div>
            
            <div className="form-row two-columns">
              <InputGroup label="Your Budget" id="yourBudget" />
              <InputGroup label="Its Scope" id="itsScope" />
            </div>
          </div>
          
          {/* Footer Placeholder */}
          <div className="form-footer-placeholder">
            <p>...</p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default WebsiteBriefForm;