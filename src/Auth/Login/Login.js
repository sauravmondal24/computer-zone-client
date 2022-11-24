import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Login = () => {
	const { register, handleSubmit } = useForm();
	// const [data, setData] = useState('');

	const handleLogin = (data) => {
		console.log(data);
	};

	return (
		<div>
			<div className="h-[700px] w-96 m-auto flex justify-center items-center">
				<div className="border p-8 border-primary rounded">
					<h1 className="text-4xl font-bold text-center py-5">Login</h1>
					<form onSubmit={handleSubmit(handleLogin)}>
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
						<Link className="text-primary">Forget password</Link>

						<button className="btn w-full btn-primary mt-3">Login</button>

						<p>
							Don't have an account?
							<Link to="/signup" className="text-primary">
								Sign Up
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

export default Login;
