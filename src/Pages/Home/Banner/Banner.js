import React from 'react';
import bannerImg from '../../../assets/img/Cover-Photo-5-8-2022.png';

const Banner = () => {
	return (
		<div>
			<div className="hero py-12 bg-base-100">
				<div className="hero-content flex md:flex-row-reverse ">
					<img src={bannerImg} className="w-1/2 rounded-lg " alt="" />

					<div className="w-1/2">
						<h1 className="md:text-7xl font-bold text-blue-500">
							Used Or Brand New Open Box Laptop
						</h1>
						<p className="py-6 md:text-4xl font-bold">For Wholesale & Retail</p>
						<button className="btn btn-lg text-2xl btn-warning font-bold  text-white">
							View Store
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Banner;
