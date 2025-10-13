import React from 'react';
import './Settings.css'; // We will create this CSS file next

function Settings() {
  // This component ONLY returns the content for the main white area.
  // The master sidebar is provided by your Layout.jsx component.
  return (
    <div>
      <h1>Settings</h1>

      <div className="card settings-card">
        <h2>👤 Profile Information</h2>
        <div className="form-group">
          <label htmlFor="fullName">Full Name</label>
          <input type="text" id="fullName" defaultValue="Dr. Jane Smith" />
        </div>
        <div className="form-group">
          <label htmlFor="specialty">Specialization</label>
          <input type="text" id="specialty" defaultValue="Cardiologist" />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone Number</label>
          <input type="text" id="phone" defaultValue="+91 9876543210" />
        </div>
        <button className="btn btn-save">Save Profile</button>
      </div>

      <div className="card settings-card">
        <h2>🏥 Clinic Information</h2>
        <div className="form-group">
          <label htmlFor="clinicName">Clinic Name</label>
          <input type="text" id="clinicName" defaultValue="HeartCare Clinic" />
        </div>
        <div className="form-group">
          <label htmlFor="clinicAddress">Clinic Address</label>
          <textarea id="clinicAddress" defaultValue="123 Health Street, Mumbai, Maharashtra"></textarea>
        </div>
        <button className="btn btn-save">Save Clinic Info</button>
      </div>
      
      <div className="card settings-card">
        <h2>🔐 Security</h2>
        <div className="form-group">
          <label htmlFor="email">Account Email</label>
          <input type="email" id="email" defaultValue="dr.jane@example.com" readOnly />
        </div>
        <div className="form-group">
          <label htmlFor="newPassword">New Password</label>
          <input type="password" id="newPassword" placeholder="Enter new password" />
        </div>
        <button className="btn btn-save">Update Password</button>
      </div>
      
      <div className="card settings-card">
        <h2>🚪 Account Actions</h2>
        <div className="action-buttons">
          <button className="btn btn-logout">Logout</button>
          <button className="btn btn-danger">Delete Account</button>
        </div>
      </div>
    </div>
  );
}

export default Settings;