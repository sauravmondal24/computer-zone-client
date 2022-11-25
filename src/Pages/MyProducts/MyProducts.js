import React from 'react';
import { useQuery } from '@tanstack/react-query';
import MyProductsItem from './MyProductsItem';

const MyProducts = () => {
	const { data: myProducts = [] } = useQuery({
		queryKey: ['myProducts'],
		queryFn: async () => {
			const res = await fetch('http://localhost:5000/myProducts');
			const data = await res.json();
			return data;
		}
	});
	return (
		<div>
			<div className="py-12 max-w-screen-xl mx-auto">
				<h2 className="text-5xl font-bold text-center">
					My products {myProducts.length}
				</h2>
				<div className="divider">O</div>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 py-5">
					{myProducts.map((myProduct) => (
						<MyProductsItem
							key={myProduct._id}
							myProduct={myProduct}
						></MyProductsItem>
					))}
				</div>
			</div>
		</div>
	);
};

export default MyProducts;
