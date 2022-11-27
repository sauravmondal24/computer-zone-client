import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import ConfirmationModal from '../../Shared/ConfirmationModal/ConfirmationModal';

const AllSeller = () => {
	const [deleteSeller, setDeleteSeller] = useState(null);

	const closeModal = () => {
		setDeleteSeller(null);
	};

	const { data: allseller = [], refetch } = useQuery({
		queryKey: ['allseller'],
		queryFn: async () => {
			const res = await fetch('http://localhost:5000/users/seller');
			const data = await res.json();
			return data;
		}
	});

	const handleDeleteSeller = (seller) => {
		fetch(`http://localhost:5000/users/seller/${seller._id}`, {
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
										<label
											onClick={() => setDeleteSeller(seller)}
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
					{deleteSeller && (
						<ConfirmationModal
							title={`Are you sure you want to delete this Seller`}
							message={`If you delete this ${deleteSeller.name}.  It can not be undone`}
							successAction={handleDeleteSeller}
							orderData={deleteSeller}
							closeModal={closeModal}
						></ConfirmationModal>
					)}
				</div>
			</div>
		</div>
	);
};

export default AllSeller;
