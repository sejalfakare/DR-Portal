import React from 'react';

function History() {
  // This component now only returns the main content for the page.
  // The sidebar is provided by the Layout component in App.jsx.
  return (
    <div>
      <h1>Patient History Log</h1>
      <div className="card-container">
        <div className="card">
          <h3>Patient: John Doe</h3>
          <p><strong>Date:</strong> 05-Oct-2025</p>
          <p><strong>Action:</strong> Prescription Updated</p>
          <p><strong>Details:</strong> Amlodipine 5mg changed to once daily.</p>
        </div>
        <div className="card">
          <h3>Patient: Mary Johnson</h3>
          <p><strong>Date:</strong> 03-Oct-2025</p>
          <p><strong>Action:</strong> Follow-up Visit</p>
          <p><strong>Details:</strong> Blood sugar levels stable. Continue Metformin.</p>
        </div>
        <div className="card">
          <h3>Patient: Robert Brown</h3>
          <p><strong>Date:</strong> 02-Oct-2025</p>
          <p><strong>Action:</strong> Appointment Completed</p>
          <p><strong>Details:</strong> Asthma follow-up. Inhaler technique reviewed.</p>
        </div>
      </div>
    </div>
  );
}

export default History;