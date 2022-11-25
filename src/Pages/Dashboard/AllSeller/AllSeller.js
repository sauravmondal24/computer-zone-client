import React from 'react';
import { useQuery } from '@tanstack/react-query';

const AllSeller = () => {
	const { data: allseller = [] } = useQuery({
		queryKey: ['allseller'],
		queryFn: async () => {
			const res = await fetch('http://localhost:5000/seller');
			const data = await res.json();
			return data;
		}
	});
	return (
		<div>
			<h2 className="text-2xl">All Seller {allseller.length}</h2>
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
							{allseller.map((seller, i) => (
								<tr key={seller._id}>
									<th>{i + 1}</th>
									<td>{seller.name}</td>
									<td>{seller.email}</td>
									<td>{seller.role}</td>
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

export default AllSeller;
