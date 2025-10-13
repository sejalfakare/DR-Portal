import React from 'react';

function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <div className="card-container">
        <div className="card"><h3>John Doe</h3><p><strong>Age:</strong> 45</p><p><strong>Condition:</strong> Hypertension</p></div>
        <div className="card"><h3>Mary Johnson</h3><p><strong>Age:</strong> 58</p><p><strong>Condition:</strong> Diabetes</p></div>
        <div className="card"><h3>Robert Brown</h3><p><strong>Age:</strong> 33</p><p><strong>Condition:</strong> Asthma</p></div>
      </div>
    </div>
  );
}
export default Dashboard;