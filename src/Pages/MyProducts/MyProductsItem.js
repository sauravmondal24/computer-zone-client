import React from 'react';

const MyProductsItem = ({ myProduct }) => {
	const { name, image, category, description, price, condition } = myProduct;
	return (
		<div>
			<div className="card bg-base-200 shadow-xl h-[500px] border">
				<figure className=" pt-5">
					<img src={image} alt="Shoes" className="rounded-xl w-full h-70" />
				</figure>
				<div className="card-body px-2 py-2 ">
					<p className="font-bold text-primary">{category}</p>
					<p className="card-title text-sm font-bold text-justify">
						{name.slice(0, 100)}
						{'...'}
					</p>
					<p className="text-justify">{description.slice(0, 100)}</p>
					<div className="flex justify-between items-start content-between">
						<div>
							<h2>
								<span className="font-bold">Price: $</span>
								{price}
							</h2>
						</div>
						<div>
							<span className="font-bold">Condition:</span> {condition}
						</div>
					</div>
					<div className="card-actions pb-4">
						<button className="btn btn-primary btn-sm">Book now</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MyProductsItem;
