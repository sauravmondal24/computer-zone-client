import { useQuery } from '@tanstack/react-query';
import MainCategories from './MainCategories';

const CategorySec = () => {
	const { data: MainCategoriesItem = [] } = useQuery({
		queryKey: ['mainCategory'],
		queryFn: async () => {
			const res = await fetch(
				'https://computer-zone-server-alpha.vercel.app/mainCategory'
			);
			const data = await res.json();
			return data;
		}
	});

	return (
		<div className="bg-base-200">
			<div className="py-12 mt-14 max-w-screen-xl mx-auto">
				<h1 className="text-5xl font-bold text-center text-blue-800">
					== Category ==
				</h1>
				<div className="divider">O</div>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 py-5">
					{MainCategoriesItem &&
						MainCategoriesItem.map((MainCategory) => (
							<MainCategories
								key={MainCategory._id}
								MainCategory={MainCategory}
							></MainCategories>
						))}
				</div>
			</div>
		</div>
	);
};

export default CategorySec;
