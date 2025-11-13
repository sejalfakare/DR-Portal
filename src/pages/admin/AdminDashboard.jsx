import React from 'react';
import { Link, useOutletContext } from 'react-router-dom';
// You might also want to import icons here later, e.g., from react-icons
// import { FaUserMd, FaUsers, FaPrescriptionBottleAlt } from 'react-icons/fa';

import './AdminDashboard.css';

function AdminDashboard() {
  const { user } = useOutletContext(); // Get the user object from Layout

  // These will eventually come from your API
  const pendingDoctors = 5; // Placeholder
  const totalDoctors = 150; // Placeholder
  const totalPatients = 500; // Placeholder
  const totalPrescriptions = 1200; // Placeholder

  return (
    <main className="admin-dashboard-main"> {/* New main class for page */}
      <header className="dashboard-header">
        <h1>Welcome, {user.name || 'Admin'}</h1>
        <p className="subtitle">Here's a quick overview of your platform.</p>
      </header>
      
      <section className="dashboard-stats-grid">
        
        {/* Card 1: Doctors Pending Verification (Clickable) */}
        <Link to="/admin/verification" className="stat-card accent-pending">
          {/* <FaUserMd className="card-icon" /> */}
          <div className="card-content">
            <span className="card-value">{pendingDoctors}</span>
            <h2 className="card-title">Doctors Pending Verification</h2>
          </div>
          <span className="card-action">Review Now &rarr;</span>
        </Link>

        {/* Card 2: Total Doctors */}
        <div className="stat-card">
          {/* <FaUserMd className="card-icon" /> */}
          <div className="card-content">
            <span className="card-value">{totalDoctors}</span>
            <h2 className="card-title">Total Registered Doctors</h2>
          </div>
        </div>

        {/* Card 3: Total Patients */}
        <div className="stat-card accent-patients">
          {/* <FaUsers className="card-icon" /> */}
          <div className="card-content">
            <span className="card-value">{totalPatients}</span>
            <h2 className="card-title">Total Registered Patients</h2>
          </div>
        </div>

        {/* Card 4: Total Prescriptions */}
        <div className="stat-card accent-prescriptions">
          {/* <FaPrescriptionBottleAlt className="card-icon" /> */}
          <div className="card-content">
            <span className="card-value">{totalPrescriptions}</span>
            <h2 className="card-title">Total Prescriptions Issued</h2>
          </div>
        </div>

      </section>

      {/* You can add more sections here for recent activity, charts, etc. */}
      <section className="dashboard-recent-activity">
        <h2>Recent Activity</h2>
        <div className="activity-placeholder">
          <p>Recent doctor registrations, verifications, or patient sign-ups will appear here.</p>
        </div>
      </section>

    </main>
  );
}

export default AdminDashboard;