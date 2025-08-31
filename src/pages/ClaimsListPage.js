import React from 'react';
import '../styles/claimslist.css';

function ClaimsListPage() {
	// Example claims data
	const claims = [
		{ id: 'C001', patient: 'John Doe', status: 'Pending', date: '2025-08-30', amount: '$1200' },
		{ id: 'C002', patient: 'Jane Smith', status: 'Approved', date: '2025-08-29', amount: '$800' },
		{ id: 'C003', patient: 'Alice Brown', status: 'Rejected', date: '2025-08-28', amount: '$500' },
		// ...more claims
	];

	return (
		<div className="claims-list-container">
			<h2>Claims List</h2>
			<table className="claims-table">
				<thead>
					<tr>
						<th>Claim ID</th>
						<th>Patient</th>
						<th>Status</th>
						<th>Date</th>
						<th>Amount</th>
					</tr>
				</thead>
				<tbody>
					{claims.map(claim => (
						<tr key={claim.id}>
							<td>{claim.id}</td>
							<td>{claim.patient}</td>
							<td>{claim.status}</td>
							<td>{claim.date}</td>
							<td>{claim.amount}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}

export default ClaimsListPage;
