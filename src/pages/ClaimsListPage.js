import React, { useEffect, useState } from 'react';
import '../styles/claimslist.css';
import { getAllMedicalClaims } from '../services/api';

function MedicalClaims() {
  const [claims, setClaims] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    async function fetchClaims() {
      try {
        const data = await getAllMedicalClaims();
        setClaims(data);
      } catch (err) {
        setError('Failed to fetch claims');
      }
    }
    fetchClaims();
  }, []);

  return (
    <div className="claims-list-container">
      <h2>Medical Claims</h2>
      {error && <div className="error">{error}</div>}
      <table className="claims-table">
        <thead>
          <tr>
            <th>Claim ID</th>
            <th>Patient</th>
            <th>Status</th>
            <th>Date</th>
            <th>Amount</th>
			<th>Description</th>
          </tr>
        </thead>
        <tbody>
          {claims.map(claim => (
            <tr key={claim.id}>
              <td>{claim.id}</td>
              <td>{claim.user_id}</td>
              <td>{claim.status}</td>
              <td>{claim.claim_date}</td>
              <td>{claim.amount}</td>
              <td>{claim.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default MedicalClaims;