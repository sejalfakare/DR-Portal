import React, { useState, useEffect } from 'react';
import { Outlet, Link, useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode'; 
import './Layout.css'; // Your CSS file

function Layout() {
  const [user, setUser] = useState({ name: 'Loading...', role: null });
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.href = 'http://localhost:5173/login'; 
  };

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      try {
        const decoded = jwtDecode(token);
        setUser({
          name: decoded.user.name, 
          role: decoded.user.role   
        });
      } catch (error) {
        console.error("Invalid token:", error);
        handleLogout(); 
      }
    } else {
      handleLogout(); 
    }
  }, []); 


  return (
    <div className="dashboard-layout">
      
      {/* --- SIDEBAR --- */}
      <aside className="sidebar">
        <div className="sidebar-header">

          {/* === AVATAR FIX === */}
          {/* We now check the role and show the correct image */}
          {user.role === 'doctor' && (
            <img 
              src="/doctor-avatar.png" // From 'public' folder
              alt="Doctor Avatar" 
              className="doctor-avatar" 
            />
          )}
          {user.role === 'admin' && (
            <img 
              src="/admin-avatar.png" // From 'public' folder
              alt="Admin Avatar" 
              className="doctor-avatar" 
            />
          )}
          {/* === END OF FIX === */}
          
          <h3>{user.name}</h3> 
          <p>{user.role === 'admin' ? 'Admin Portal' : 'Doctor Portal'}</p>
        </div>
        
        <nav className="sidebar-nav">
          
          {/* Show this menu ONLY if role is 'doctor' */}
          {user.role === 'doctor' && (
            <>
              <h4>Doctor Menu</h4>
              <ul>
                <li><Link to="/dashboard">Dashboard</Link></li>
                <li><Link to="/appointments">Appointments</Link></li>
                <li><Link to="/prescriptions">Prescriptions</Link></li>
                <li><Link to="/history">History</Link></li>
              </ul>
            </>
          )}

          {/* Show this menu ONLY if role is 'admin' */}
          {user.role === 'admin' && (
            <>
              <h4>Admin Menu</h4>
              <ul>
                <li><Link to="/admin/dashboard">Admin Dashboard</Link></li>
                <li><Link to="/admin/verification">Verify Doctors</Link></li>
              </ul>
            </>
          )}
          
        </nav>
        
        <div className="sidebar-footer">
          {/* Only show the 'Settings' link if the user is a DOCTOR */}
          {user.role === 'doctor' && (
            <Link to="/settings">Settings</Link>
          )}
          
          <button onClick={handleLogout} className="btn-logout">Logout</button>
        </div>
      </aside>
      
      {/* --- MAIN CONTENT AREA --- */}
      <div className="main-content-wrapper">
        <Outlet context={{ user: user }} />
      </div>
    </div>
  );
}

export default Layout;