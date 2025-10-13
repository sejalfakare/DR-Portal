 import React from 'react';

// Sample patient data. In a real application, this would come from a database.
// We've added a 'status' field to each patient.
const allPatientData = [
  { name: "John Doe", age: 45, condition: "Hypertension", status: "Active" },
  { name: "Mary Johnson", age: 58, condition: "Diabetes", status: "Active" },
  { name: "Robert Brown", age: 33, condition: "Asthma", status: "Discharged" },
  { name: "Emily Davis", age: 62, condition: "Arthritis", status: "Active" },
  { name: "Michael Wilson", age: 50, condition: "High Cholesterol", status: "Inactive" },
];

function Dashboard() {
  // 1. Filter the data: Create a new list containing ONLY active patients.
  const activePatients = allPatientData.filter(patient => patient.status === 'Active');

  return (
    <div>
      <h1>Active Patients</h1>
      <div className="card-container">
        {/* 2. Map over the NEW filtered list to display the cards. */}
        {activePatients.map((patient, index) => (
          <div className="card" key={index}>
            <h3>{patient.name}</h3>
            <p><strong>Age:</strong> {patient.age}</p>
            <p><strong>Condition:</strong> {patient.condition}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;