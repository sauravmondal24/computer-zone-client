import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import ConfirmationModal from '../../Shared/ConfirmationModal/ConfirmationModal';
import { Link } from 'react-router-dom';

const BuyerOrder = () => {
	const [deleteOrder, setDeleteOrder] = useState(null);

	const closeModal = () => {
		setDeleteOrder(null);
	};
	const { data: buyerOrder = [], refetch } = useQuery({
		queryKey: ['buyerOrder'],
		queryFn: async () => {
			const res = await fetch(
				'https://computer-zone-server-alpha.vercel.app/buyerOrder'
			);
			const data = await res.json();
			return data;
		}
	});

	const handleDeleteOrder = (order) => {
		fetch(
			`https://computer-zone-server-alpha.vercel.app/buyerOrder/${order._id}`,
			{
				method: 'DELETE'
			}
		)
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				refetch();
			});
	};

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
								<th>Image</th>
								<th>Product Name</th>
								<th>User Name</th>
								<th>User Email</th>
								<th>Price</th>
								<th>Phone Number</th>
								<th>Location</th>
								<th>Action</th>
							</tr>
						</thead>
						<tbody>
							{buyerOrder.map((orders, i) => (
								<tr key={orders._id}>
									<th>{i + 1}</th>
									<td>
										<img className="h-10 w-10" src={orders.image} alt="" />
									</td>
									<td>{orders.productName.slice(0, 20)}</td>
									<td>{orders.displayName}</td>
									<td>{orders.email}</td>
									<td>$ {orders.resale}</td>
									<td>{orders.phoneNumber}</td>
									<td>{orders.meetingLocation}</td>
									<td>
										{orders.resale && !orders.paid && (
											<Link
												to={`/dashboard/payment/${orders._id}`}
												className="btn btn-sm btn-primary text-white mx-2"
											>
												Pay
											</Link>
										)}
										{orders.resale && orders.paid && (
											<button className="btn btn-sm btn-outline btn-success disabled mx-2 text-white">
												Paid
											</button>
										)}

										<label
											onClick={() => setDeleteOrder(orders)}
											htmlFor="confirmation-modal"
											className="btn btn-sm btn-error text-white"
										>
											DEL
										</label>
									</td>
								</tr>
							))}
						</tbody>
					</table>
					{deleteOrder && (
						<ConfirmationModal
							title={`Are you sure you want to delete this order`}
							message={`If you delete this ${deleteOrder.productName} It can not be undone`}
							successAction={handleDeleteOrder}
							orderData={deleteOrder}
							closeModal={closeModal}
						></ConfirmationModal>
					)}
				</div>
			</div>
		</div>
	);
};

export default BuyerOrder;
