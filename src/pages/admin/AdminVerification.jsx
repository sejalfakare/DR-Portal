import React, { useState, useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';
import './AdminVerification.css'; // We will create this CSS file

function AdminVerification() {
  // const { user } = useOutletContext(); // We don't need 'user' here, but it's good practice
  const [doctors, setDoctors] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // 1. Function to fetch unverified doctors
  const fetchDoctors = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const token = localStorage.getItem('token');
      const response = await fetch('http://localhost:5000/api/admin/unverified-doctors', {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        const errData = await response.json();
        throw new Error(errData.message || 'Failed to fetch doctors');
      }

      const data = await response.json();
      setDoctors(data);
    } catch (err) {
      setError(err.message);
    }
    setIsLoading(false);
  };

  // 2. Run the fetch function when the component loads
  useEffect(() => {
    fetchDoctors();
  }, []);

  // 3. Function to approve a doctor
  const handleApprove = async (doctorId) => {
    if (!window.confirm('Are you sure you want to approve this doctor?')) {
      return;
    }

    try {
      const token = localStorage.getItem('token');
      const response = await fetch(`http://localhost:5000/api/admin/verify-doctor/${doctorId}`, {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        const errData = await response.json();
        throw new Error(errData.message || 'Failed to approve doctor');
      }

      alert('Doctor approved successfully!');
      // Refresh the list by removing the approved doctor
      setDoctors(prevDoctors => prevDoctors.filter(doc => doc._id !== doctorId));

    } catch (err) {
      alert(`Error: ${err.message}`);
    }
  };

  return (
    <main className="admin-verification-main"> {/* New Class */}
      <header className="dashboard-header"> {/* Matches Dashboard */}
        <h1>Doctor Verification</h1>
        <p className="subtitle">Review and approve new doctor registrations.</p>
      </header>

      <section className="verification-table-container"> {/* New Class */}
        {isLoading && <p>Loading pending doctors...</p>}
        {error && <p className="error-message">Error: {error}</p>}
        
        {!isLoading && !error && (
          <table className="verification-table"> {/* New Class */}
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Mobile</th>
                <th>Reg. Council</th>
                <th>Reg. Number</th>
                <th>Documents</th> {/* New Column */}
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {doctors.length === 0 ? (
                <tr>
                  <td colSpan="7" className="empty-state">No doctors are pending verification.</td>
                </tr>
              ) : (
                doctors.map((doctor) => (
                  <tr key={doctor._id}>
                    <td>{doctor.name}</td>
                    <td>{doctor.email || 'N/A'}</td>
                    <td>{doctor.mobileNumber}</td>
                    <td>{doctor.registeringCouncil || 'N/A'}</td>
                    <td>{doctor.medicalRegNumber || 'N/A'}</td>
                    <td className="document-links"> {/* New Links */}
                      {doctor.medicalLicenseUrl && <a href={doctor.medicalLicenseUrl} target="_blank" rel="noopener noreferrer">License</a>}
                      {doctor.photoIdUrl && <a href={doctor.photoIdUrl} target="_blank" rel="noopener noreferrer">Photo ID</a>}
                    </td>
                    <td>
                      <button 
                        onClick={() => handleApprove(doctor._id)} 
                        className="btn-approve" /* New Class */
                      >
                        Approve
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        )}
      </section>
    </main>
  );
}

export default AdminVerification;