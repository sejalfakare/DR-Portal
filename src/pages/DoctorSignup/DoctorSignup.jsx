// src/pages/DoctorSignup/DoctorSignup.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './DoctorSignup.css';

function DoctorSignup() {
  const [step, setStep] = useState(1);
  const navigate = useNavigate();

  const nextStep = (e) => {
    e.preventDefault();
    setStep(step + 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStep(step + 1); // Go to success step
    setTimeout(() => {
      navigate('/dashboard');
    }, 3000);
  };

  return (
    <div className="signup-wrapper">
      <div className="signup-container">
        {step === 1 && (
          <>
            <h1>Join as a Healthcare Professional</h1>
            <p className="subtitle">Step 1 of 3: Create Your Account</p>
            <div className="progress-bar"><div className="progress-bar-fill" style={{ width: '33.33%' }}></div></div>
            <form onSubmit={nextStep}>
              <div className="form-grid">
                <div className="form-group"><label>First Name</label><input type="text" className="form-input" required /></div>
                <div className="form-group"><label>Last Name</label><input type="text" className="form-input" required /></div>
                <div className="form-group full-width"><label>Professional Email</label><input type="email" className="form-input" required /></div>
                <div className="form-group full-width"><label>Mobile Number</label><input type="tel" className="form-input" required /></div>
                <div className="form-group"><label>Create Password</label><input type="password" className="form-input" required /></div>
                <div className="form-group"><label>Confirm Password</label><input type="password" className="form-input" required /></div>
              </div>
              <button type="submit" className="btn btn-primary">Create Account & Verify Email</button>
            </form>
          </>
        )}

        {step === 2 && (
          <>
            <h1>Complete Your Professional Profile</h1>
            <p className="subtitle">Step 2 of 3: Credentials & Practice Info</p>
            <div className="progress-bar"><div className="progress-bar-fill" style={{ width: '66.66%' }}></div></div>
            <form onSubmit={handleSubmit}>
                <fieldset className="form-section">
                    <legend className="section-title">Professional Credentials</legend>
                    <div className="form-grid">
                        <div className="form-group"><label>Title</label><select className="form-select" required><option>Dr.</option><option>Prof.</option></select></div>
                        <div className="form-group"><label>NMC / State Registration No.</label><input type="text" className="form-input" required /></div>
                        <div className="form-group"><label>Registering Council</label><input type="text" className="form-input" placeholder="e.g., Maharashtra Medical Council" required /></div>
                        <div className="form-group"><label>Year of Registration</label><input type="number" className="form-input" placeholder="YYYY" required /></div>
                    </div>
                </fieldset>
                 <fieldset className="form-section">
                    <legend className="section-title">Document Upload</legend>
                    <div className="form-grid">
                        <div className="form-group"><label className="upload-label">📄 Upload Medical License<input type="file" className="file-input" required /></label></div>
                        <div className="form-group"><label className="upload-label">🆔 Upload Government Photo ID<input type="file" className="file-input" required /></label></div>
                    </div>
                </fieldset>
              <div className="checkbox-group"><input type="checkbox" required /><label>I agree to the <a href="#">Terms of Service</a>.</label></div>
              <button type="submit" className="btn btn-primary">Submit for Verification</button>
            </form>
          </>
        )}

        {step === 3 && (
          <>
            <div className="success-icon">✓</div>
            <h1>Profile Submitted Successfully!</h1>
            <p className="subtitle">Our team will review your credentials. Redirecting to your dashboard...</p>
          </>
        )}
      </div>
    </div>
  );
}

export default DoctorSignup;