import React, { useState, useEffect } from 'react';
import { Link, useOutletContext } from 'react-router-dom';
import './AdminDashboard.css'; // Your existing CSS

function AdminDashboard() {
  const { user } = useOutletContext(); // Get the user object from Layout
  
  // 1. State to hold your real data
  const [stats, setStats] = useState(null);
  const [error, setError] = useState(null);

  // 2. This hook runs once when the component loads
  useEffect(() => {
    const fetchStats = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await fetch('http://localhost:5000/api/admin/stats', {
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          const errData = await response.json();
          throw new Error(errData.message || 'Failed to fetch stats');
        }

        const data = await response.json();
        setStats(data); // 3. Save the real data in state
      } catch (err) {
        setError(err.message);
      }
    };

    fetchStats();
  }, []); // Empty array means this runs once on mount

  // 4. Show a loading message while fetching
  if (!stats && !error) {
    return (
      <main className="admin-dashboard-main">
        <header className="dashboard-header">
          <h1>Welcome, {user.name || 'Admin'}</h1>
          <p className="subtitle">Loading platform statistics...</p>
        </header>
      </main>
    );
  }

  // 5. Show an error if fetching failed
  if (error) {
    return (
      <main className="admin-dashboard-main">
        <header className="dashboard-header">
          <h1>Welcome, {user.name || 'Admin'}</h1>
          <p className="subtitle" style={{ color: 'red' }}>
            Could not load dashboard stats: {error}
          </p>
        </header>
      </main>
    );
  }

  // --- 6. This is the main dashboard, now with REAL data ---
  return (
    <main className="admin-dashboard-main">
      <header className="dashboard-header">
        <h1>Welcome, {user.name || 'Admin'}</h1>
        <p className="subtitle">Here's a quick overview of your platform.</p>
      </header>
      
      <section className="dashboard-stats-grid">
        
        {/* Card 1: Doctors Pending Verification */}
        <Link to="/admin/verification" className="stat-card accent-pending">
          <div className="card-content">
            <span className="card-value">{stats.pendingDoctors}</span>
            <h2 className="card-title">Doctors Pending Verification</h2>
          </div>
          <span className="card-action">Review Now &rarr;</span>
        </Link>

        {/* Card 2: Total Doctors */}
        <div className="stat-card">
          <div className="card-content">
            <span className="card-value">{stats.totalDoctors}</span>
            <h2 className="card-title">Total Registered Doctors</h2>
          </div>
        </div>

        {/* Card 3: Total Patients */}
        <div className="stat-card accent-patients">
          <div className="card-content">
            <span className="card-value">{stats.totalPatients}</span>
            <h2 className="card-title">Total Registered Patients</h2>
          </div>
        </div>

        {/* Card 4: Total Prescriptions */}
        <div className="stat-card accent-prescriptions">
          <div className="card-content">
            <span className="card-value">{stats.totalPrescriptions}</span>
            <h2 className="card-title">Total Prescriptions Issued</h2>
          </div>
        </div>

      </section>

      {/* You can add more sections here */}
      <section className="dashboard-recent-activity">
        <h2>Recent Activity</h2>
        <div className="activity-placeholder">
          <p>Recent doctor registrations will appear here.</p>
        </div>
      </section>

    </main>
  );
}

export default AdminDashboard;