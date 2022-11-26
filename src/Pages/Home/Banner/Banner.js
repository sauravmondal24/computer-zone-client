import React from 'react';
import { Link } from 'react-router-dom';
import bannerImg from '../../../assets/img/Cover-Photo-5-8-2022.png';

const Banner = () => {
	return (
		<div>
			<div className="hero py-12 bg-base-100">
				<div className="hero-content flex-col md:flex-row-reverse   ">
					<img src={bannerImg} className="md:w-1/2 rounded-lg " alt="" />

					<div className="md:w-1/2">
						<h1 className="lg:text-6xl md:text-4xl font-bold text-blue-500">
							Used Or Brand New Open Box Laptop
						</h1>
						<p className="py-6 md:text-4xl font-bold">For Wholesale & Retail</p>
						<Link
							to="/myProduct"
							className="btn btn-lg text-2xl btn-warning font-bold  text-white"
						>
							ALL PRODUCT
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Banner;
