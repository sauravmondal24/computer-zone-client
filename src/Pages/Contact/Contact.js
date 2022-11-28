import React from 'react';
import useTitle from '../../Hooks/useTitle';
import ContractSection from '../Home/ContractSection/ContractSection';

const Contact = () => {
	useTitle('Contact');
	return (
		<div>
			<ContractSection></ContractSection>
		</div>
	);
};

export default Contact;
