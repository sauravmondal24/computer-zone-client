import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';

const CheckoutForm = ({ buyerOrder }) => {
	const [cardError, setCardError] = useState('');
	const [success, setSuccess] = useState('');
	const [procession, setProcession] = useState(false);
	const [transactionId, setTransactionId] = useState('');

	const [clientSecret, setClientSecret] = useState('');
	const stripe = useStripe();
	const elements = useElements();
	const { resale, email, displayName, phoneNumber, _id } = buyerOrder;
	const price = parseInt(resale);

	useEffect(() => {
		// Create PaymentIntent as soon as the page loads
		fetch('http://localhost:5000/create-payment-intent', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ price })
		})
			.then((res) => res.json())
			.then((data) => setClientSecret(data.clientSecret));
	}, [price]);

	const handleSubmit = async (event) => {
		event.preventDefault();

		if (!stripe || !elements) {
			return;
		}

		const card = elements.getElement(CardElement);

		if (card == null) {
			return;
		}

		const { error, paymentMethod } = await stripe.createPaymentMethod({
			type: 'card',
			card
		});

		if (error) {
			console.log(error);
			setCardError(error.message);
		} else {
			setCardError('');
		}
		setSuccess('');
		setProcession(true);

		const { paymentIntent, error: confirmError } =
			await stripe.confirmCardPayment(clientSecret, {
				payment_method: {
					card: card,
					billing_details: {
						name: displayName,
						email: email,
						phone: phoneNumber
					}
				}
			});

		if (confirmError) {
			setCardError(confirmError.message);
			return;
		}
		if (paymentIntent.status === 'succeeded') {
			const payment = {
				price,
				transactionId: paymentIntent.id,
				email,
				orderId: _id
			};
			console.log('payment info', payment);
			fetch('http://localhost:5000/payments', {
				method: 'POST',
				headers: {
					'content-type': 'application/json'
				},
				body: JSON.stringify(payment)
			})
				.then((res) => res.json())
				.then((data) => {
					console.log(data);
					if (data.insertedId) {
						setSuccess('Congrats! Your payment is Completed');
						setTransactionId(paymentIntent.id);
					}
				});
		}
		setProcession(false);
	};
	return (
		<>
			<form onSubmit={handleSubmit}>
				<CardElement
					className="border border-primary p-3"
					options={{
						style: {
							base: {
								fontSize: '16px',
								color: '#424770',
								'::placeholder': {
									color: '#aab7c4'
								}
							},
							invalid: {
								color: '#9e2146'
							}
						}
					}}
				/>
				<button
					className="btn btn-sm btn-primary my-4"
					type="submit"
					disabled={!stripe || !clientSecret || procession}
				>
					Pay
				</button>
			</form>
			<p className="text-red-500">{cardError}</p>
			{success && (
				<div>
					<p className="text-green-500 font-bold text-lg">{success}</p>
					<p className=" font-bold">
						Your Transaction Id :
						<span className="text-success">{transactionId}</span>
					</p>
				</div>
			)}
		</>
	);
};

export default CheckoutForm;
