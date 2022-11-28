import React from 'react';

const SellerProductItem = ({ sellerproduct }) => {
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
	} = sellerproduct;
	return (
		<div>
			<div className="card bg-base-200 shadow-xl h-[550px] border">
				<figure className=" pt-5">
					<img src={image} alt="Shoes" className="rounded-xl w-full h-70" />
				</figure>
				<div className="card-body px-7 py-2 ">
					<div className="flex justify-between items-center">
						<p className="font-bold text-primary">{category}</p>
						<h2>
							<span className="font-bold">Condition: </span>
							{condition}
						</h2>
						<h2>
							<span className="font-bold">Use: </span> {year} Years
						</h2>
					</div>

					<p className="card-title text-sm font-bold text-justify">
						{name.slice(0, 70)}
						{'...'}
					</p>
					<p className="text-justify">{description.slice(0, 50)}</p>
					<div className="flex justify-between items-start content-between">
						<div>
							<h2 className="font-bold">
								Original Price: $<del>{price}</del>
							</h2>
						</div>

						<div>
							<span className="font-bold">Resale Price:</span> {resale}
						</div>
					</div>
					<div className="card-actions pb-4">
						<button className="btn btn-primary btn-md w-full ">Book now</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SellerProductItem;
