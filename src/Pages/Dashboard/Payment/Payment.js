import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);

const Payment = () => {
	const buyerOrder = useLoaderData();
	const { productName, resale } = buyerOrder;
	return (
		<div className="py-10 border p-12  mt-10 bg-gray-200 rounded">
			<h2 className="text-lg font-bold">
				Products Name:
				<span className="font-normal"> {productName}</span>
			</h2>
			<h2 className="text-lg">
				<strong>Product Price:</strong> $ {resale}
			</h2>
			<div className="md:w-96 m-auto card bg-white border py-12 px-5 my-5">
				<Elements stripe={stripePromise}>
					<CheckoutForm buyerOrder={buyerOrder} />
				</Elements>
			</div>
		</div>
	);
};

export default Payment;
