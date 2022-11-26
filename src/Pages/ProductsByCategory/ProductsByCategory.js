import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import BookingModal from '../BookingModal/BookingModal';
import MyProductsItem from '../MyProducts/MyProductsItem';

const ProductsByCategory = () => {
	const { category } = useParams();
	const [products, setProducts] = useState([]);
	const [bookingLaptop, setBookingLaptop] = useState([]);

	useEffect(() => {
		fetch(`http://localhost:5000/myProducts/${category}`)
			.then((res) => res.json())
			.then((data) => {
				setProducts(data);
			});
	}, [category]);
	return (
		<div>
			<div className="py-12 max-w-screen-xl mx-auto">
				<h2 className="text-5xl font-bold text-center">
					Category Products {products.length}
				</h2>
				<div className="divider">O</div>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-5">
					{products.map((myProduct) => (
						<MyProductsItem
							key={myProduct._id}
							myProduct={myProduct}
							setBookingLaptop={setBookingLaptop}
						></MyProductsItem>
					))}
				</div>
			</div>
			<BookingModal bookingLaptop={bookingLaptop}></BookingModal>
		</div>
	);
};

export default ProductsByCategory;
