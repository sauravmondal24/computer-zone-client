import React from 'react';

const MainCategories = ({ MainCategory }) => {
	return (
		<div>
			<div className="card bg-base-100 shadow-xl">
				<figure className="px-10 pt-10">
					<img
						src={MainCategory.image}
						alt="Shoes"
						className="rounded-xl h-60"
					/>
				</figure>
				<div className="card-body items-center text-center">
					<h2 className="card-title">{MainCategory.name}</h2>
					<p>If a dog chews shoes whose shoes does he choose?</p>
					<div className="card-actions">
						<button className="btn btn-primary">View More</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MainCategories;
