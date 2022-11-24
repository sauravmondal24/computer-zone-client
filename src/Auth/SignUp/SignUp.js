import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const SignUp = () => {
	const { register, handleSubmit } = useForm();
	const handleSignUp = (data) => {
		console.log(data);
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
						/>
						<input
							{...register('email')}
							placeholder="Enter your email"
							className="w-full border p-3 my-3 rounded"
						/>
						<input
							{...register('password')}
							placeholder="password"
							className="w-full border my-3 p-3 rounded"
						/>

						<button className="btn w-full btn-primary mt-3">SignUp</button>

						<p>
							Already have an account?
							<Link to="/login" className="text-primary">
								Login
							</Link>
						</p>
					</form>
				</div>
			</div>
		</div>
	);
};

export default SignUp;
