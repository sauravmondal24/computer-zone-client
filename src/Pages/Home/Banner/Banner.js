// import React from 'react';
import { Link } from 'react-router-dom';
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper';
import './Banner.css';
import bannerImg from '../../../assets/img/Cover-Photo-5-8-2022.png';
import bannerImg2 from '../../../assets/img/macbook-air-gold.jpg';
import bannerImg3 from '../../../assets/img/apple2.jpg';

const Banner = () => {
	return (
		<div className="max-w-screen-xl mx-auto">
			<div className="  bg-base-100 h-[90vh]">
				<>
					<Swiper
						spaceBetween={30}
						centeredSlides={true}
						autoplay={{
							delay: 2500,
							disableOnInteraction: false
						}}
						pagination={{
							clickable: true
						}}
						navigation={true}
						modules={[Autoplay, Pagination, Navigation]}
						className="mySwiper"
					>
						<SwiperSlide>
							<div className="grid grid-cols-2 justify-between  items-center">
								<div className="text-start">
									<h1 className="text-6xl font-extrabold  text-orange-500">
										<span className="text-blue-600">Used Laptop for</span>{' '}
										<br />
										wholesale and retail
									</h1>
									<p className="">
										Computer Zone BD is the best used laptop shop in Bangladesh
										and a leading seller of all kinds of IT products.
									</p>
									<button className="btn btn-md my-5 btn-primary">
										ALL PRODUCTS
									</button>
								</div>
								<div>
									<img
										src={bannerImg}
										className="rounded-lg w-100 h-100"
										alt=""
									/>
								</div>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className="grid grid-cols-2 justify-between  items-center">
								<div className="text-start">
									<h1 className="text-6xl font-extrabold  text-orange-500">
										<span className="text-blue-600">All good collection</span>
										<br />
										of MacBook
									</h1>
									<p className="">
										Computer Zone BD is the best used laptop shop in Bangladesh
										and a leading seller of all kinds of IT products.
									</p>
									<button className="btn btn-md my-5 btn-primary">
										ALL PRODUCTS
									</button>
								</div>
								<div>
									<img
										src={bannerImg2}
										className="rounded-lg w-100 h-100"
										alt=""
									/>
								</div>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className="grid grid-cols-2 justify-between  items-center">
								<div className="text-start">
									<h1 className="text-6xl font-extrabold  text-orange-500">
										<span className="text-blue-600">Used Laptop for</span>{' '}
										<br />
										wholesale and retail
									</h1>
									<p className="">
										Computer Zone BD is the best used laptop shop in Bangladesh
										and a leading seller of all kinds of IT products.
									</p>
									<button className="btn btn-md my-5 btn-primary">
										ALL PRODUCTS
									</button>
								</div>
								<div>
									<img
										src={bannerImg3}
										className="rounded-lg w-100 h-100"
										alt=""
									/>
								</div>
							</div>
						</SwiperSlide>
					</Swiper>
				</>
			</div>
		</div>
	);
};

export default Banner;
