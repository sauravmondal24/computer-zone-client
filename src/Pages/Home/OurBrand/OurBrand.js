import React from 'react';
import microsoft from '../../../assets/brand/Microsoft-Logo-40y-1.jpg';
import dell from '../../../assets/brand/dell-technologies-logo-40y-1.jpg';
import hp from '../../../assets/brand/MicrosoftTeams-image-1.jpg';

const OurBrand = () => {
	return (
		<div className="py-12 rounded shadow-sm px-12 border max-w-screen-xl mx-auto">
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 justify-between m-auto">
				<div>
					<img src={microsoft} alt="" />
				</div>
				<div>
					<img src={dell} alt="" />
				</div>
				<div>
					<img src={hp} alt="" />
				</div>
				<div>
					<img src={dell} alt="" />
				</div>
			</div>
		</div>
	);
};

export default OurBrand;
