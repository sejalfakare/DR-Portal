import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// Import your layout component
import Layout from './components/Layout.jsx';

// Import all your page components
import Dashboard from './pages/Dashboard.jsx';
import Appointments from './pages/Appointments.jsx';
import Prescriptions from './pages/Prescriptions.jsx';
import History from './pages/History.jsx';
import Settings from './pages/Settings.jsx';
import DoctorSignup from './pages/DoctorSignup.jsx';

function App() {
  return (
    <Router>
      <Routes>
        {/* == Standalone Full-Screen Route == */}
        {/* This route does NOT have the sidebar */}
        <Route path="/DoctorSignup" element={<DoctorSignup />} />
        
        {/* == Routes with the Sidebar Layout == */}
        {/* This parent route renders the Layout. */}
        {/* All child routes will be displayed inside it. */}
        <Route element={<Layout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/appointments" element={<Appointments />} />
          <Route path="/history" element={<History />} />
          <Route path="/prescriptions" element={<Prescriptions />} />
          <Route path="/settings" element={<Settings />} />
        </Route>

        {/* This redirects the user from the base URL "/" to the dashboard */}
        <Route path="/" element={<Navigate to="/dashboard" />} />
      </Routes>
    </Router>
  );
}

export default App;