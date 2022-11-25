import React, { useContext } from 'react';
import { useQuery } from '@tanstack/react-query';
import { AuthContext } from '../../Context/AuthProvider';

const SellerProducts = () => {
	const { user } = useContext(AuthContext);
	const { data: sellerproducts = [] } = useQuery({
		queryKey: ['sellerproducts'],
		queryFn: async () => {
			const res = await fetch(
				`http://localhost:5000/myProducts?seller=${user.email}`
			);
			const data = await res.json();
			return data;
		}
	});
	return (
		<div>
			<h2>{sellerproducts.length}</h2>
		</div>
	);
};

export default SellerProducts;
