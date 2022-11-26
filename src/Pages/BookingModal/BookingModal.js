import React from 'react';

const BookingModal = ({ bookingLaptop }) => {
	return (
		<div>
			{/* The button to open modal */}

			{/* Put this part before </body> tag */}
			<input type="checkbox" id="booking-modal" className="modal-toggle" />
			<div className="modal modal-bottom sm:modal-middle">
				<div className="modal-box">
					<h3 className="font-bold text-lg">{bookingLaptop.name}</h3>
					<p className="py-4">
						You've been selected for a chance to get one year of subscription to
						use Wikipedia for free!
					</p>
					<div className="modal-action">
						<label htmlFor="booking-modal" className="btn">
							Cancel
						</label>
					</div>
				</div>
			</div>
		</div>
	);
};

export default BookingModal;
