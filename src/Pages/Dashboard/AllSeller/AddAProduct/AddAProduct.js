import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { AuthContext } from '../../../../Context/AuthProvider';

const AddAProduct = () => {
	const { register, handleSubmit } = useForm();
	const { user } = useContext(AuthContext);

	const handleAddProduct = (data) => {
		const product = {
			...data,
			seller: user?.email
		};

		fetch('https://computer-zone-server-alpha.vercel.app/addProduct', {
			method: 'POST',
			headers: {
				'content-type': 'application/json'
			},
			body: JSON.stringify(product)
		})
			.then((res) => res.json())
			.then((data) => {
				toast.success('Product Upload Successful');
			});
	};

	return (
		<div>
			<div>
				<div className="md:h-[900px] w-9/12  m-auto flex justify-center items-center">
					<div className="border p-8 border-primary rounded text-black-700">
						<h1 className="text-4xl font-bold text-center py-5">
							Add A Product
						</h1>
						<form onSubmit={handleSubmit(handleAddProduct)}>
							<input
								{...register('name')}
								placeholder="Product name"
								className="w-full border p-3 my-3 rounded"
								required
							/>
							<input
								{...register('price')}
								placeholder="Original price"
								className="w-1/2 border p-3 my-3 rounded"
								required
							/>
							<input
								{...register('resale')}
								placeholder="Resale price"
								className="w-1/2 border p-3 my-3 rounded"
								required
							/>
							<h2 className="text-lg font-bold">Product category</h2>
							<label className="text-lg px-3">
								<input
									{...register('category')}
									type="radio"
									value="apple"
									required
									className="w-7"
								/>
								Apple
							</label>
							<label className="text-lg px-3">
								<input
									{...register('category')}
									type="radio"
									value="hp"
									required
									className="w-7"
								/>
								HP
							</label>
							<label className="text-lg px-3">
								<input
									{...register('category')}
									type="radio"
									value="dell"
									required
									className="w-7"
								/>
								Dell
							</label>

							<input
								{...register('image')}
								type="text"
								placeholder="Product Image URL"
								className="w-full border my-3 p-3 rounded"
								required
							/>
							<h2 className="text-lg font-bold">Condition type</h2>
							<label className="text-lg px-3">
								<input
									{...register('condition')}
									type="radio"
									value="excellent"
									required
									className="w-7"
								/>
								Excellent
							</label>
							<label className="text-lg px-3">
								<input
									{...register('condition')}
									type="radio"
									value="good"
									required
									className="w-7"
								/>
								Good
							</label>
							<label className="text-lg px-3">
								<input
									{...register('condition')}
									type="radio"
									value="fair"
									required
									className="w-7"
								/>
								Fair
							</label>

							<textarea
								{...register('description')}
								type="text"
								placeholder="Product Description"
								className="w-full border my-3 p-3 rounded"
								required
							/>
							<input
								{...register('year')}
								type="text"
								placeholder="Year of purchase"
								className="w-full border my-3 p-3 rounded"
								required
							/>
							<input
								{...register('mobile')}
								type="text"
								placeholder="Your Mobile Number"
								className="w-full border my-3 p-3 rounded"
								required
							/>
							<input
								{...register('location')}
								type="text"
								placeholder="Your location (Chittagong, Dhaka, etc.)"
								className="w-full border my-3 p-3 rounded"
								required
							/>

							<button className="btn w-full btn-primary mt-3">SUBMIT</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AddAProduct;
