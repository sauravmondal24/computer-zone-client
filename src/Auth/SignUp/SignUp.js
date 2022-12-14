import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../../Context/AuthProvider';
import toast from 'react-hot-toast';
import { GoogleAuthProvider } from 'firebase/auth';
import useTitle from '../../Hooks/useTitle';

const SignUp = () => {
	useTitle('Sign Up');
	const { register, handleSubmit } = useForm();
	const [singUpError, setSignUpError] = useState('');
	const { createUser, updateUser, googleProviderLogIn } =
		useContext(AuthContext);
	const googleAuthProvider = new GoogleAuthProvider();
	const navigate = useNavigate();
	const location = useLocation();
	const from = location.state?.from?.pathname || '/';

	const handleSignUp = (data) => {
		setSignUpError('');

		createUser(data.email, data.password, data.role)
			.then((result) => {
				const user = result.user;

				toast.success('User Created Successfully');

				const userInfo = {
					displayName: data.name
				};
				updateUser(userInfo)
					.then(() => {
						saveUser(data.name, data.email, data.role);
					})
					.catch((error) => console.error(error));
			})
			.catch((error) => {
				setSignUpError(error.message);
			});
	};

	const saveUser = (name, email, role) => {
		const user = { name, email, role };

		fetch('https://computer-zone-server-alpha.vercel.app/users', {
			method: 'POST',
			headers: {
				'content-type': 'application/json'
			},
			body: JSON.stringify(user)
		})
			.then((res) => res.json())
			.then((data) => {
				navigate('/');
			});
	};

	const handleGoogleSignUp = () => {
		googleProviderLogIn(googleAuthProvider)
			.then((result) => {
				const user = result.user;

				saveUser(user.displayName, user.email, 'buyer');
				navigate(from, { replace: true });
			})
			.catch((error) => console.error('error', error));
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
						<h2 className="text-lg font-bold">Your Role</h2>

						<label className="text-lg font-bold">
							<input
								{...register('role')}
								type="radio"
								value="seller"
								required
							/>
							Seller
						</label>
						<br />
						<label className="text-lg font-bold">
							<input
								{...register('role')}
								type="radio"
								value="buyer"
								required
							/>
							Buyer
						</label>

						<button className="btn w-full btn-primary mt-3">SignUp</button>
						{singUpError && <p className="text-red-500">{singUpError}</p>}

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
						<button
							onClick={handleGoogleSignUp}
							className="btn w-full btn-outline text-lg btn-primary mt-4"
						>
							<FaGoogle></FaGoogle> GOOGLE
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SignUp;
