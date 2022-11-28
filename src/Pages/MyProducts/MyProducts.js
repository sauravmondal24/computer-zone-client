import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import MyProductsItem from './MyProductsItem';
import BookingModal from '../BookingModal/BookingModal';
import useTitle from '../../Hooks/useTitle';

const MyProducts = () => {
	useTitle('All Product');
	const [bookingLaptop, setBookingLaptop] = useState([]);
	const { data: myProducts = [] } = useQuery({
		queryKey: ['myProducts'],
		queryFn: async () => {
			const res = await fetch(
				'https://computer-zone-server-alpha.vercel.app/myProducts'
			);
			const data = await res.json();
			return data;
		}
	});
	return (
		<div className="bg-base-200">
			<div className="py-12 max-w-screen-xl mx-auto">
				<h2 className="text-5xl font-bold text-center">
					My products {myProducts.length}
				</h2>
				<div className="divider">O</div>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-5">
					{myProducts &&
						myProducts.map((myProduct) => (
							<MyProductsItem
								key={myProduct._id}
								myProduct={myProduct}
								setBookingLaptop={setBookingLaptop}
							></MyProductsItem>
						))}
				</div>
			</div>
			{bookingLaptop && (
				<BookingModal
					bookingLaptop={bookingLaptop}
					setBookingLaptop={setBookingLaptop}
				></BookingModal>
			)}
		</div>
	);
};

export default MyProducts;
