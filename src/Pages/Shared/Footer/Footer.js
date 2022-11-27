import React from 'react';
import { Link } from 'react-router-dom';
import {
	FaFacebook,
	FaInstagram,
	FaTwitter,
	FaPinterest
} from 'react-icons/fa';

const Footer = () => {
	return (
		<footer style={{ backgroundColor: '#132146' }}>
			<div className="py-12  text-white text-md max-w-screen-xl mx-auto">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 justify-between">
					<div>
						<h2 className="text-2xl font-bold py-3">ABOUT US</h2>
						<p className="text-lg">
							We are Computer Zone Established on 2014 , We are performing our
							business with Goodwill, Our Main Motive is customer Satisfaction
							,We provide genuine product to our customer,We have different
							kinds of product
						</p>
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 py-5 justify-start md:pr-40">
							<FaFacebook className="text-2xl"></FaFacebook>
							<FaInstagram className="text-2xl"></FaInstagram>
							<FaTwitter className="text-2xl"></FaTwitter>
							<FaPinterest className="text-2xl"></FaPinterest>
						</div>
					</div>
					<div>
						<h2 className="text-2xl font-bold py-3">ACCOUNT</h2>
						<div>
							<ul>
								<li className="py-2">
									<Link className="text-xl">My account</Link>
								</li>
								<li className="py-2">
									<Link className="text-xl">Track your order</Link>
								</li>
								<li className="py-2">
									<Link className="text-xl">Wishlist</Link>
								</li>
								<li className="py-2">
									<Link className="text-xl">Contact</Link>
								</li>
							</ul>
						</div>
					</div>
					<div>
						<h2 className="text-2xl font-bold py-3">MORE INFO </h2>

						<div>
							<ul>
								<li className="py-2">
									<Link className="text-xl">About</Link>
								</li>
								<li className="py-2">
									<Link className="text-xl">Privacy Policy</Link>
								</li>
								<li className="py-2">
									<Link className="text-xl">Refund And Return</Link>
								</li>
								<li className="py-2">
									<Link className="text-xl">Terms and Conditions</Link>
								</li>
							</ul>
						</div>
					</div>
					<div>
						<h2 className="text-2xl font-bold py-3">SIGNUP FOR NEWSLETTTER</h2>
						<div className="form-control">
							<div className="input-group">
								<input
									type="text"
									placeholder="Your Email.."
									className="input input-bordered w-full"
								/>
								<button className="btn btn-square w-20">Signup</button>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="footer footer-center p-4 bg-blue-300 text-base-content">
				<div>
					<p>Copyright © 2022 - All right reserved by Computer Zone Ltd</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
