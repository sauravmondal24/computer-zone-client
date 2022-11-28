import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider';
import { FaMapMarkerAlt } from 'react-icons/fa';

const MyProductsItem = ({ myProduct, setBookingLaptop }) => {
	const { user } = useContext(AuthContext);
	const {
		name,
		image,
		category,
		description,
		price,
		condition,
		location,
		resale,
		year
	} = myProduct;
	return (
		<div>
			<div className="card bg-base-200 shadow-xl h-[550px] border">
				<figure className=" pt-5">
					<img src={image} alt="Shoes" className="rounded-xl w-full h-70" />
				</figure>
				<div className="card-body px-7 py-2 ">
					<div className="flex justify-between items-center">
						<h2 className="text-md font-bold">
							Seller's name:
							<span className="text-secondary"> {user?.displayName}</span>
						</h2>
						<h2 className="font-bold text-black-500">
							Category: <span className="text-secondary">{category}</span>
						</h2>
					</div>

					<p className="card-title text-sm font-bold text-justify">
						{name.slice(0, 70)}
						{'...'}
					</p>
					<p className="text-justify">{description.slice(0, 70)}</p>
					<div className="flex justify-between items-center">
						<h2>
							<span className="font-bold">Condition: </span>
							{condition}
						</h2>
						<div className="flex items-center">
							<FaMapMarkerAlt></FaMapMarkerAlt>
							<h2>{location}</h2>
						</div>

						<h2>
							<span className="font-bold">Use: </span> {year} Years
						</h2>
					</div>
					<div className="flex justify-between items-start content-between">
						<div>
							<h2 className="font-bold">
								Original Price: $<del>{price}</del>
							</h2>
						</div>
						<div>
							<span className="font-bold">Resale Price:</span> ${resale}
						</div>
					</div>

					<div className="card-actions pb-4">
						<label
							onClick={() => setBookingLaptop(myProduct)}
							className="btn btn-primary btn-md w-full"
							htmlFor="booking-modal"
						>
							Book now
						</label>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MyProductsItem;
