import React from 'react';
import { useQuery } from '@tanstack/react-query';

const BuyerOrder = () => {
	const { data: buyerOrder = [] } = useQuery({
		queryKey: ['buyerOrder'],
		queryFn: async () => {
			const res = await fetch('http://localhost:5000/buyerOrder');
			const data = await res.json();
			return data;
		}
	});
	return (
		<div>
			<h2 className="text-2xl font-bold py-5">
				Buyer Order {buyerOrder.length}
			</h2>
			<div>
				<div className="overflow-x-auto">
					<table className="table w-full">
						<thead>
							<tr>
								<th></th>
								<th>Product Name</th>
								<th>User Name</th>
								<th>User Email</th>
								<th>Product Price</th>
								<th>Phone Number</th>
								<th>Location</th>
								<th>Action</th>
							</tr>
						</thead>
						<tbody>
							{buyerOrder.map((orders, i) => (
								<tr key={orders._id}>
									<th>{i + 1}</th>
									<td>{orders.productName.slice(0, 20)}</td>
									<td>{orders.displayName}</td>
									<td>{orders.email}</td>
									<td>$ {orders.resale}</td>
									<td>{orders.phoneNumber}</td>
									<td>{orders.meetingLocation}</td>
									<td>
										<button className="btn btn-sm btn-success text-white mx-2">
											Pay
										</button>
										<button className="btn btn-sm btn-error text-white">
											DEL
										</button>
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

export default BuyerOrder;
