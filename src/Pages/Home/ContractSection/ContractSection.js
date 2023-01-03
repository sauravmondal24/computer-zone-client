import React from 'react';
import contact from '../../../assets/img/contact.jpg';

const ContractSection = () => {
	return (
		<div className="bg-base-200">
			<div className="py-12 mx-auto max-w-screen-xl ">
				<div className="hero  ">
					<div className="hero-content flex-col lg:flex-row-reverse">
						<div
							data-aos="fade-left"
							data-aos-anchor="#example-anchor"
							data-aos-offset="500"
							data-aos-duration="500"
							className="text-center lg:text-left md:w-1/2"
						>
							<img className="w-full h-ful-screen" src={contact} alt="" />
						</div>
						<div
							data-aos="fade-right"
							data-aos-offset="300"
							data-aos-easing="ease-in-sine"
							className="card flex-shrink-0 md:w-1/2 shadow-2xl bg-base-100"
						>
							<div className="card-body font-bold">
								<h2 className="text-3xl font-bold text-center text-blue-800">
									== Contact Us ==
								</h2>
								<div className="form-control">
									<label className="label">
										<span className="label-text">Your Name</span>
									</label>
									<input
										type="text"
										placeholder="Your Full Name ..."
										className="input input-bordered"
									/>
								</div>
								<div className="form-control">
									<label className="label">
										<span className="label-text">Enter your Email</span>
									</label>
									<input
										type="text"
										placeholder="Email ..."
										className="input input-bordered"
									/>
								</div>
								<div className="form-control">
									<label className="label">
										<span className="label-text">Write Your Message</span>
									</label>
									<textarea
										type="text"
										placeholder="Type Here ..."
										className="input input-bordered h-36"
									/>
								</div>
								<div className="form-control mt-6">
									<button className="btn btn-primary">SUBMIT</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ContractSection;
