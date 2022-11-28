import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaGoogle } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import useTitle from '../../Hooks/useTitle';

const Login = () => {
	useTitle('LogIn');
	const { register, handleSubmit } = useForm();
	const [loginError, setLoginError] = useState('');
	const { logIn, googleProviderLogIn } = useContext(AuthContext);
	const location = useLocation();
	const navigate = useNavigate();
	const googleAuthProvider = new GoogleAuthProvider();

	const from = location.state?.from?.pathname || '/';

	const handleLogin = (data) => {
		setLoginError('');
		logIn(data.email, data.password)
			.then((result) => {
				const user = result.user;

				navigate(from, { replace: true });
			})
			.catch((error) => {
				setLoginError(error.message);
			});
	};

	const handleGoogleSignIn = () => {
		googleProviderLogIn(googleAuthProvider)
			.then((result) => {
				const user = result.user;

				navigate(from, { replace: true });
			})
			.catch((error) => console.error('error', error));
	};

	return (
		<div>
			<div className="h-[700px] w-96 m-auto flex justify-center items-center">
				<div className="border py-8 px-4 border-primary rounded shadow shadow-xl">
					<h1 className="text-4xl font-bold text-center py-5">Login</h1>
					<form onSubmit={handleSubmit(handleLogin)}>
						<input
							{...register('email')}
							placeholder="Enter your email"
							className="w-full border p-3 my-3 rounded"
						/>
						<input
							{...register('password')}
							type="password"
							placeholder="password"
							className="w-full border my-3 p-3 rounded"
						/>
						<Link className="text-primary">Forget password</Link>

						<button className="btn w-full btn-primary mt-3">Login</button>
						<p className="text-red-500">{loginError}</p>

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
						<button
							onClick={handleGoogleSignIn}
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

export default Login;
