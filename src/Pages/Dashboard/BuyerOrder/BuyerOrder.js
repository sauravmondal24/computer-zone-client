import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import ConfirmationModal from '../../Shared/ConfirmationModal/ConfirmationModal';

const BuyerOrder = () => {
	const [deleteOrder, setDeleteOrder] = useState(null);
	// const [closeModal, setCloseModal] = useState();

	const closeModal = () => {
		setDeleteOrder(null);
	};
	const { data: buyerOrder = [], refetch } = useQuery({
		queryKey: ['buyerOrder'],
		queryFn: async () => {
			const res = await fetch('http://localhost:5000/buyerOrder');
			const data = await res.json();
			return data;
		}
	});
	const handleDeleteOrder = (order) => {
		fetch(`http://localhost:5000/buyerOrder/${order._id}`, {
			method: 'DELETE'
		})
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
										<label
											onClick={() => setDeleteOrder(orders)}
											htmlFor="confirmation-modal"
											className="btn btn-sm btn-error text-white"
										>
											DEL
										</label>
										{/* <button className="btn btn-sm btn-error text-white"></button> */}
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
