import React from 'react';
import useTitle from '../../../Hooks/useTitle';
import Banner from '../Banner/Banner';
import CategorySec from '../CategorySec/CategorySec';
import ContractSection from '../ContractSection/ContractSection';
import Offer from '../Offer/Offer';
import OurBrand from '../OurBrand/OurBrand';

const Home = () => {
	useTitle('Home');
	return (
		<div>
			<Banner></Banner>
			<OurBrand></OurBrand>
			<CategorySec></CategorySec>
			<Offer></Offer>
			<ContractSection></ContractSection>
		</div>
	);
};

export default Home;
