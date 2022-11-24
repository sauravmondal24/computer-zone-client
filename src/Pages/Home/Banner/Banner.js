import React from 'react';
import bannerImg from '../../../assets/img/Cover-Photo-5-8-2022.png';

const Banner = () => {
	return (
		<div>
			<div className="hero min-h-screen bg-base-100">
				<div className="hero-content flex lg:flex-row-reverse ">
					<div className="flex-1 w-1/2">
						<img src={bannerImg} className=" rounded-lg " alt="" />
					</div>
					<div className="flex-1 w-1/2">
						<h1 className="text-6xl font-bold text-blue-500">
							Used Or Brand New Open Box Laptop
						</h1>
						<p className="py-6 text-2xl font-bold">For Wholesale & Retail</p>
						<button className="btn btn-warning font-bold text-white">
							View Store
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Banner;
