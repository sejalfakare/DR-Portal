import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout.jsx';
import Dashboard from './pages/Dashboard.jsx';
import Appointments from './pages/Appointments.jsx';
import Prescriptions from './pages/Prescriptions.jsx';
import History from './pages/History.jsx';
import Settings from './pages/Settings.jsx';
import DoctorSignup from './pages/DoctorSignup.jsx';

// 1. These imports will now be CORRECT because you renamed your folder
import AdminDashboard from './pages/admin/AdminDashboard.jsx';
import AdminVerification from './pages/admin/AdminVerification.jsx';

function App() {
  return (
    <Router>
      <Routes>
        {/* == Standalone Full-Screen Routes == */}
        <Route path="/DoctorSignup" element={<DoctorSignup />} />
        <Route path="/signup" element={<Navigate to="/DoctorSignup" />} />
        
        {/* == Doctor Routes (with the Sidebar Layout) == */}
        <Route path="/" element={<Layout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/appointments" element={<Appointments />} />
          <Route path="/history" element={<History />} />
          <Route path="/prescriptions" element={<Prescriptions />} />
          <Route path="/settings" element={<Settings />} />
        </Route>

        {/* --- 2. NEW ADMIN ROUTES (all lowercase) --- */}
        <Route path="/admin" element={<Layout />}> 
          <Route path="dashboard" element={<AdminDashboard />} /> 
          <Route path="verification" element={<AdminVerification />} />
          <Route index element={<Navigate to="dashboard" />} /> 
        </Route>
        
      </Routes>
    </Router>
  );
}

export default App;