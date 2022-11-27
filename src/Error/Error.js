import React from 'react';
import errorImg from '../assets/img/error.jpg';
import { Link } from 'react-router-dom';
import useTitle from '../Hooks/useTitle';

const Error = () => {
	useTitle('Error');
	return (
		<div>
			<Link to="/">
				<img style={{ height: '100vh', width: '100%' }} src={errorImg} alt="" />
			</Link>
		</div>
	);
};

export default Error;
