import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import ConfirmationModal from '../../Shared/ConfirmationModal/ConfirmationModal';

const AllBuyer = () => {
	const [deleteBuyer, setDeleteBuyer] = useState(null);

	const closeModal = () => {
		setDeleteBuyer(null);
	};
	const { data: allbuyer = [], refetch } = useQuery({
		queryKey: ['allbuyer'],
		queryFn: async () => {
			const res = await fetch(
				'https://computer-zone-server-alpha.vercel.app/users/buyer'
			);
			const data = await res.json();
			return data;
		}
	});

	const handleDeleteBuyer = (seller) => {
		fetch(
			`https://computer-zone-server-alpha.vercel.app/users/seller/${seller._id}`,
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
			<h2 className="text-2xl text-bold py-3">All Buyer {allbuyer.length}</h2>
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
										<label
											onClick={() => setDeleteBuyer(buyer)}
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
					{deleteBuyer && (
						<ConfirmationModal
							title={`Are you sure you want to delete this Seller`}
							message={`If you delete this ${deleteBuyer.name}.  It can not be undone`}
							successAction={handleDeleteBuyer}
							orderData={deleteBuyer}
							closeModal={closeModal}
						></ConfirmationModal>
					)}
				</div>
			</div>
		</div>
	);
};

export default AllBuyer;
