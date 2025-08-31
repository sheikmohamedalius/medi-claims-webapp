import React from 'react';
import '../styles/dashboard.css';

function DashboardPage() {
  // Example summary data
  const summary = [
    { label: 'Total Claims', value: 120 },
    { label: 'Pending', value: 15 },
    { label: 'Approved', value: 90 },
    { label: 'Rejected', value: 15 }
  ];

  // Example claims data
  const claims = [
    { id: 'C001', patient: 'John Doe', status: 'Pending', date: '2025-08-30' },
    { id: 'C002', patient: 'Jane Smith', status: 'Approved', date: '2025-08-29' },
    // ...more claims
  ];

  return (
    <div className="dashboard-container">
      <div className="navbar">
        <div>
          <img src="/logo192.png" alt="Logo" style={{ width: 40, verticalAlign: 'middle' }} />
          <span style={{ marginLeft: 10, fontWeight: 'bold' }}>Medi-Claims</span>
        </div>
        <div>User Name</div>
      </div>
      <div className="summary-cards">
        {summary.map(card => (
          <div className="card" key={card.label}>
            <h3>{card.label}</h3>
            <p style={{ fontSize: '2rem', margin: 0 }}>{card.value}</p>
          </div>
        ))}
      </div>
      <div className="claims-table">
        <h3>Recent Claims</h3>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              <th>Claim ID</th>
              <th>Patient</th>
              <th>Status</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {claims.map(claim => (
              <tr key={claim.id}>
                <td>{claim.id}</td>
                <td>{claim.patient}</td>
                <td>{claim.status}</td>
                <td>{claim.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default DashboardPage;