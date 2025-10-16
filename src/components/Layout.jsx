import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import './Layout.css'; // Import the styles for the layout

// Import the doctor's image.
// Ensure you have an image file at 'src/assets/doctor-avatar.png'
import doctorAvatar from '../assets/doctor-avatar.png';

const Layout = () => {
  return (
    <div className="layout-container">
      <div className="sidebar">
        {/* Doctor Profile Section */}
        <div className="sidebar-profile">
          <img src={doctorAvatar} alt="Dr. Jane Smith" />
          <h3>Dr. Jane Smith</h3>
          <p>Cardiologist</p>
        </div>

        {/* Navigation Links */}
        <nav className="sidebar-nav">
          <NavLink to="/dashboard">Dashboard</NavLink>
          <NavLink to="/appointments">Appointments</NavLink>
          <NavLink to="/prescriptions">Prescriptions</NavLink>
          <NavLink to="/history">History</NavLink>
          <NavLink to="/settings">Settings</NavLink>
        </nav>
      </div>

      {/* Main Content Area */}
      <main className="main-content">
        {/* Your page components (Dashboard, Appointments, etc.) will render here */}
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;