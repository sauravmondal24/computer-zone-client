import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import MainCategories from './MainCategories';

const CategorySec = () => {
	const { data: MainCategoriesItem = [] } = useQuery({
		queryKey: ['mainCategory'],
		queryFn: async () => {
			const res = await fetch('http://localhost:5000/mainCategory');
			const data = await res.json();
			return data;
		}
	});
	// fetch('http://localhost:5000/mainCategory').then((res) => res.json())

	return (
		<div className="py-12 mt-14 max-w-screen-xl mx-auto">
			<h1 className="text-5xl font-bold text-center">Explore By Category</h1>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 py-12">
				{MainCategoriesItem &&
					MainCategoriesItem.map((MainCategory) => (
						<MainCategories
							key={MainCategory._id}
							MainCategory={MainCategory}
						></MainCategories>
					))}
			</div>
		</div>
	);
};

export default CategorySec;
