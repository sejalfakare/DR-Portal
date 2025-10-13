import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import './Layout.css';

function Layout() {
  return (
    <div className="layout-container">
      <aside className="sidebar">
        <div className="profile">
          <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Doctor Avatar" />
          <h2>Dr. Jane Smith</h2>
          <p>Cardiologist</p>
        </div>
        <nav className="nav-menu">
          <NavLink to="/dashboard">Dashboard</NavLink>
          <NavLink to="/appointments">Appointments</NavLink>
          <NavLink to="/prescriptions">Prescriptions</NavLink>
          <NavLink to="/history">History</NavLink>
          <NavLink to="/settings">Settings</NavLink>
        </nav>
      </aside>
      <main className="main-content">
        {/* Your page components will be rendered here */}
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;