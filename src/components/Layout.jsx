import React, { useState, useEffect } from 'react';
import { Outlet, Link, useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode'; // 1. Import the decoder
import './Layout.css'; // 2. Import your CSS
import doctorAvatar from "../assets/doctor-avatar.png"; // 3. Import your avatar

function Layout() {
  const [user, setUser] = useState({ name: 'Loading...', role: null });
  const navigate = useNavigate();

  // 4. This is the SINGLE correct logout function
  const handleLogout = () => {
    localStorage.removeItem('token');
    // Redirect to the main homepage/login page
    window.location.href = 'http://localhost:5173/login'; // Redirect to Patient portal login
  };

  // 5. This is the SINGLE correct useEffect hook
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      try {
        const decoded = jwtDecode(token);
        // This looks inside the 'user' object from your token
        setUser({
          name: decoded.user.name, 
          role: decoded.user.role   
        });
      } catch (error) {
        console.error("Invalid token:", error);
        handleLogout(); // Handle bad token
      }
    } else {
      handleLogout(); // No token found, log out
    }
  }, []); // Empty array, runs once on load


  return (
    <div className="dashboard-layout">
      
      {/* --- SIDEBAR --- */}
      <aside className="sidebar">
        <div className="sidebar-header">
          <img 
            src={doctorAvatar} // 6. Using your real avatar
            alt="Avatar" 
            className="doctor-avatar" 
          />
          
          <h3>{user.name}</h3> {/* 7. Personalized name! */}
          <p>{user.role === 'admin' ? 'Admin Portal' : 'Doctor Portal'}</p>
        </div>
        
        <nav className="sidebar-nav">

          {/* === 8. THE LOGIC FIX === */}
          
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
          {/* Admins will not see any settings link */}
          
          <button onClick={handleLogout} className="btn-logout">Logout</button>
        </div>
      </aside>
      
      {/* --- MAIN CONTENT AREA --- */}
      <div className="main-content-wrapper">
        {/* 9. This passes the 'user' object to all child pages */}
        <Outlet context={{ user: user }} />
      </div>
    </div> // <-- 10. This was the missing closing div
  );
}

export default Layout;