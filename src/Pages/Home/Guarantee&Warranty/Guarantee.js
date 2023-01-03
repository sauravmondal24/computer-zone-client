import React from 'react';
import Laptops from '../../../assets/guarantee/laptop.png';
import MacBook from '../../../assets/guarantee/MacBook.png';
import BrandPC from '../../../assets/guarantee/Brand PC.png';
import UsedProducts from '../../../assets/guarantee/Used Products.png';
import AllProducts from '../../../assets/guarantee/All Products.png';
import AllProductss from '../../../assets/guarantee/All Productss.png';

const Guarantee = () => {
	const guaranteeInfo = [
		{
			id: 1,
			image: Laptops,
			title: 'Laptops'
		},
		{
			id: 2,
			image: MacBook,
			title: 'MacBook'
		},
		{
			id: 3,
			image: BrandPC,
			title: 'Brand PC'
		},
		{
			id: 4,
			image: UsedProducts,
			title: 'Used Products'
		},
		{
			id: 5,
			image: AllProducts,
			title: 'All Products'
		},
		{
			id: 6,
			image: AllProductss,
			title: 'All Products'
		}
	];
	return (
		<div className="py-12 max-w-screen-xl mx-auto">
			<h1
				data-aos="fade-up"
				className="md:text-5xl font-bold text-center text-blue-800"
			>
				== Guarantee & Warranty ==
			</h1>
			<div className="divider">O</div>
			<div className="grid md:grid-cols-6 justify-between items-center">
				{guaranteeInfo.map((guaranteeItem) => (
					<>
						<div className="justify-between">
							<img src={guaranteeItem.image} alt="" />
							<h1 className="text-center text-2xl font-bold py-5">
								{guaranteeItem.title}
							</h1>
						</div>
					</>
				))}
			</div>
		</div>
	);
};

export default Guarantee;
