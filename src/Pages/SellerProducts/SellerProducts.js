import React, { useContext } from 'react';
import { useQuery } from '@tanstack/react-query';
import { AuthContext } from '../../Context/AuthProvider';
import SellerProductItem from './SellerProductItem';
// import MyProductsItem from '../MyProducts/MyProductsItem';

const SellerProducts = () => {
	const { user } = useContext(AuthContext);
	const { data: sellerproducts = [] } = useQuery({
		queryKey: ['sellerproducts'],
		queryFn: async () => {
			const res = await fetch(
				`https://computer-zone-server-alpha.vercel.app/myProducts?seller=${user.email}`
			);
			const data = await res.json();
			return data;
		}
	});
	return (
		<div>
			<h2 className="text-2xl font-bold py-8">
				My Products{sellerproducts.length}
			</h2>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-5">
				{sellerproducts.map((sellerproduct) => (
					<SellerProductItem
						key={sellerproduct._id}
						sellerproduct={sellerproduct}
					></SellerProductItem>
				))}
			</div>
		</div>
	);
};

export default SellerProducts;
