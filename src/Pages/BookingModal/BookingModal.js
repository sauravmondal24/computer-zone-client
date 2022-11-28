import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../Context/AuthProvider';

const BookingModal = ({ bookingLaptop, setBookingLaptop }) => {
	const { user } = useContext(AuthContext);
	const { name, resale, image } = bookingLaptop;

	const handelOrderSubmit = (event) => {
		event.preventDefault();
		const productName = bookingLaptop.name;
		const email = user?.email;
		const displayName = user?.displayName;
		const resale = bookingLaptop.resale;

		const form = event.target;
		const phoneNumber = form.phoneNumber.value;
		const meetingLocation = form.meetingLocation.value;

		const result = {
			image,
			productName,
			displayName,
			email,
			resale,
			phoneNumber,
			meetingLocation
		};

		fetch('https://computer-zone-server-alpha.vercel.app/buyerOrders', {
			method: 'POST',
			headers: {
				'content-type': 'application/json'
			},
			body: JSON.stringify(result)
		})
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				toast.success('Item is booked.');
				setBookingLaptop(null);
			});
	};

	return (
		<div>
			<input type="checkbox" id="booking-modal" className="modal-toggle" />
			<div className="modal modal-bottom sm:modal-middle">
				<div className="modal-box">
					<form onSubmit={handelOrderSubmit}>
						<img className="w-1/2 m-auto h-40" src={image} alt="" />
						<input
							name="productName"
							type="text"
							placeholder="Type here"
							className="input input-bordered w-full my-2"
							value={name}
							readOnly
						/>
						<input
							name="userName"
							type="text"
							placeholder="Enter your name"
							className="input input-bordered w-full my-2"
							value={user?.displayName}
							readOnly
						/>
						<input
							type="text"
							placeholder="Type here"
							className="input input-bordered w-full my-2"
							value={user?.email}
							readOnly
						/>
						<input
							type="text"
							placeholder="Type here"
							className="input input-bordered w-full my-2"
							value={resale}
							readOnly
						/>
						<input
							name="phoneNumber"
							type="text"
							placeholder="Enter your phone number"
							className="input input-bordered w-full my-2"
						/>
						<input
							name="meetingLocation"
							type="text"
							placeholder="Enter Meeting location"
							className="input input-bordered w-full my-2"
						/>

						<div className="modal-action">
							<button className="btn btn-success text-white">SUBMIT</button>
							<label htmlFor="booking-modal" className="btn">
								Cancel
							</label>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default BookingModal;
