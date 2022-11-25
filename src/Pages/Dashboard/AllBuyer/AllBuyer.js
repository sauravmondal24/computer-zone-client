import React from 'react';
import { useQuery } from '@tanstack/react-query';

const AllBuyer = () => {
	const { data: allbuyer = [] } = useQuery({
		queryKey: ['allbuyer'],
		queryFn: async () => {
			const res = await fetch('http://localhost:5000/buyer');
			const data = await res.json();
			return data;
		}
	});
	return (
		<div>
			<h2 className="text-2xl">All Buyer {allbuyer.length}</h2>
			<div>
				<div className="overflow-x-auto">
					<table className="table w-full">
						<thead>
							<tr>
								<th></th>
								<th>Name</th>
								<th>Email</th>
								<th>Role</th>
								<th>Action</th>
							</tr>
						</thead>
						<tbody>
							{allbuyer.map((buyer, i) => (
								<tr key={buyer._id}>
									<th>{i + 1}</th>
									<td>{buyer.name}</td>
									<td>{buyer.email}</td>
									<td>{buyer.role}</td>
									<td>
										<button className="btn btn-sm btn-error">DELETE</button>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
};

export default AllBuyer;
