import React from 'react';
import {
	FaMoneyBillAlt,
	FaPhone,
	FaCircleNotch,
	FaShippingFast
} from 'react-icons/fa';
import img1 from '../../../assets/img/img1.jpg';
import img2 from '../../../assets/img/img2.jpg';
import img3 from '../../../assets/img/img3.jpg';
import img4 from '../../../assets/img/computerzone_-New-offer.png';
import img5 from '../../../assets/img/laptop_notebook_sale_web_banner-2.jpg';

const Offer = () => {
	return (
		<div className="py-12 mx-auto max-w-screen-xl">
			<div className="grid lg:grid-cols-3 gap-4">
				<img src={img1} alt="" />
				<img src={img2} alt="" />
				<img src={img3} alt="" />
			</div>
			<div className="grid  md:grid-cols-2 lg:grid-cols-4 gap-4 mt-5  py-12">
				<div className="card  bg-gray-200 text-black-600  ">
					<div className="card-body items-center text-center">
						<FaMoneyBillAlt className="text-5xl text-primary"></FaMoneyBillAlt>
						<h2 className="card-title">Great Value!</h2>
						<p>We get you the best value for your money</p>
					</div>
				</div>
				<div className="card bg-gray-200 text-black-600">
					<div className="card-body items-center text-center">
						<FaPhone className="text-5xl text-primary"></FaPhone>
						<h2 className="card-title">24/7 SUPPORT</h2>
						<p>We’re here to support you around the clock</p>
					</div>
				</div>
				<div className="card bg-gray-200 text-black-600">
					<div className="card-body items-center text-center">
						<FaCircleNotch className="text-5xl text-primary"></FaCircleNotch>
						<h2 className="card-title">Return Policy</h2>
						<p>Policy Our warranty policy will give you peace of mind</p>
					</div>
				</div>
				<div className="card bg-gray-200 text-black-600">
					<div className="card-body items-center text-center">
						<FaShippingFast className="text-5xl text-primary"></FaShippingFast>
						<h2 className="card-title">Free Shipping</h2>
						<p>We often provide free shipping for our products</p>
					</div>
				</div>
			</div>

			<div className="grid lg:grid-cols-2 gap-4 py-12 content-between justify-around">
				<div>
					<img src={img4} alt="" />
				</div>
				<div>
					<img src={img5} alt="" />
				</div>
			</div>
		</div>
	);
};

export default Offer;
