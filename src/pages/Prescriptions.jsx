import React from 'react';

function Prescriptions() {
  // Just like the History page, this only contains the main content.
  return (
    <div>
      <h1>Manage Prescriptions</h1>
      <div className="card-container">
        <div className="card">
          <h3>Create New Prescription</h3>
          <p>Click here to generate a new prescription for a patient.</p>
        </div>
        <div className="card">
          <h3>Recent Prescriptions</h3>
          <p>View and manage prescriptions issued in the last 7 days.</p>
        </div>
      </div>
    </div>
  );
}

export default Prescriptions;