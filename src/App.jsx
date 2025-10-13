import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// Import the master Layout for your dashboard
import Layout from './components/Layout.jsx';

// --- CORRECTED IMPORT PATHS ---

// These pages are directly inside the 'pages' folder
import Dashboard from './pages/Dashboard.jsx';
import Appointments from './pages/Appointments.jsx';
import Prescriptions from './pages/Prescriptions.jsx';
import History from './pages/History.jsx';
import Settings from './pages/Settings.jsx';

// This page is inside its own 'DoctorSignup' folder, so the path is different
import DoctorSignup from './pages/DoctorSignup/DoctorSignup.jsx';

function App() {
  return (
    <Router>
      <Routes>
        {/* Route for the signup page (it has no sidebar) */}
        <Route path="/signup/doctor" element={<DoctorSignup />} />
        
        {/* All dashboard pages are now children of the Layout component */}
        <Route element={<Layout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/appointments" element={<Appointments />} />
          <Route path="/prescriptions" element={<Prescriptions />} />
          <Route path="/history" element={<History />} />
          <Route path="/settings" element={<Settings />} />
        </Route>

        {/* This makes the dashboard your default homepage */}
        <Route path="/" element={<Navigate to="/dashboard" />} />
      </Routes>
    </Router>
  );
}

export default App;