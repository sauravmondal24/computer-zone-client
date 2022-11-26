import React from 'react';
import { Link } from 'react-router-dom';

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
					<p>{MainCategory.description}</p>
					<div className="card-actions">
						<Link
							to={`/productsbycategory/${MainCategory.category}`}
							className="btn btn-primary"
						>
							View More
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MainCategories;
