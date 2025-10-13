import React from 'react';

function Appointments() {
  // Notice there is NO sidebar code here.
  // This component ONLY returns the content for the main white area.
  return (
    <div>
      <h1>Upcoming Appointments</h1>
      <div className="card-container">
        <div className="card">
          <h3>John Doe</h3>
          <p><strong>Date:</strong> 2025-10-08</p>
          <p><strong>Time:</strong> 10:00 AM</p>
          <p><strong>Reason:</strong> Blood Pressure Check</p>
        </div>
        <div className="card">
          <h3>Mary Johnson</h3>
          <p><strong>Date:</strong> 2025-10-08</p>
          <p><strong>Time:</strong> 11:30 AM</p>
          <p><strong>Reason:</strong> Diabetes Consultation</p>
        </div>
        {/* Add other appointment cards as needed */}
      </div>
    </div>
  );
}

export default Appointments;