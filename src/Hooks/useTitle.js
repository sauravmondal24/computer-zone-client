import { useEffect } from 'react';

const useTitle = (title) => {
	useEffect(() => {
		document.title = `${title} - Computer Zone | 2nd Hand and Used Laptop Price in Bangladesh `;
	}, [title]);
};

export default useTitle;
