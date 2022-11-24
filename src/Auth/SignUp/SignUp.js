import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../../Context/AuthProvider';

const SignUp = () => {
	const { register, handleSubmit } = useForm();

	const { createUser } = useContext(AuthContext);

	const handleSignUp = (data) => {
		console.log(data);

		createUser(data.email, data.password)
			.then((result) => {
				const user = result.user;
				console.log(user);
			})
			.catch((error) => console.error(error));
	};
	return (
		<div>
			<div className="h-[700px] w-96 m-auto flex justify-center items-center">
				<div className="border p-8 border-primary rounded">
					<h1 className="text-4xl font-bold text-center py-5">Sign Up</h1>
					<form onSubmit={handleSubmit(handleSignUp)}>
						<input
							{...register('name')}
							placeholder="Enter your name"
							className="w-full border p-3 my-3 rounded"
							required
						/>
						<input
							{...register('email')}
							placeholder="Enter your email"
							className="w-full border p-3 my-3 rounded"
							required
						/>
						<input
							{...register('password')}
							type="password"
							placeholder="password"
							className="w-full border my-3 p-3 rounded"
							required
						/>

						<label className="text-2xl font-bold">
							<input
								{...register('accountType')}
								type="radio"
								value="seller"
								required
							/>
							Seller
						</label>
						<label className="text-2xl font-bold">
							<input
								{...register('accountType')}
								type="radio"
								value="normal"
								required
							/>
							Normal
						</label>

						<button className="btn w-full btn-primary mt-3">SignUp</button>

						<p>
							Already have an account?
							<Link to="/login" className="text-primary">
								Login
							</Link>
						</p>
					</form>
					<div>
						<div className="divider">OR</div>
					</div>

					<div>
						<button className="btn w-full btn-outline text-lg btn-primary mt-4">
							<FaGoogle></FaGoogle> GOOGLE
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SignUp;
