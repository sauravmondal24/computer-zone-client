import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../../assets/img/logo.png';
import { AuthContext } from '../../../Context/AuthProvider';

const Navbar = () => {
	const { user, logOut } = useContext(AuthContext);

	const handleLogOut = () => {
		logOut()
			.then(() => {})
			.catch((error) => console.error(error));
	};

	const menuItems = (
		<React.Fragment>
			<li className="text-lg font-bold">
				<Link to="/">Home</Link>
			</li>
			<li className="text-lg font-bold">
				<Link to="/blog">Blog</Link>
			</li>
			<li className="text-lg font-bold">
				<Link to="/myProduct">All Product</Link>
			</li>
			<li className="text-lg font-bold">
				<Link>Contact</Link>
			</li>
			{user?.uid ? (
				<>
					<li className="text-lg font-bold">
						<Link to="/dashboard">Dashboard</Link>
					</li>
					<li>
						<button className="text-lg font-bold" onClick={handleLogOut}>
							SignOut
						</button>
					</li>
				</>
			) : (
				<li>
					<Link className="text-lg font-bold" to="/login">
						LogIn
					</Link>
				</li>
			)}
		</React.Fragment>
	);
	return (
		<div className="w-100 bg-blue-200 py-4">
			<div className="navbar max-w-screen-xl mx-auto">
				<div className="navbar-start">
					<div className="dropdown">
						<label tabIndex={0} className="btn btn-ghost lg:hidden">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-5 w-5"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M4 6h16M4 12h8m-8 6h16"
								/>
							</svg>
						</label>
						<ul
							tabIndex={1}
							className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
						>
							{menuItems}
						</ul>
					</div>
					<Link to="/" className="">
						<img className="md:w-12 lg:w-40" src={Logo} alt="" />
					</Link>
				</div>
				<div className="navbar-center hidden lg:flex">
					<ul className="menu menu-horizontal p-0">{menuItems}</ul>
				</div>

				<div className="navbar-end ">
					{/* Profile Image  */}
					<div>
						<label tabIndex={0} className="btn btn-ghost btn-circle avatar">
							<div className="w-10 rounded-full">
								<img src="https://placeimg.com/80/80/people" alt="" />
							</div>
						</label>
					</div>

					{/* mobile drawer */}

					<label
						htmlFor="dashboard-drawer"
						tabIndex={2}
						className="btn btn-ghost lg:hidden"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-5 w-5"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M4 6h16M4 12h8m-8 6h16"
							/>
						</svg>
					</label>

					{/* <div className="flex">
						<div className="dropdown dropdown-end">
							<label tabIndex={0} className="btn btn-ghost btn-circle">
								<div className="indicator">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="h-7 w-7"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
										/>
									</svg>
									<span className="badge badge-sm indicator-item">8</span>
								</div>
							</label>
							<div
								tabIndex={0}
								className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow"
							>
								<div className="card-body">
									<span className="font-bold text-lg">8 Items</span>
									<span className="text-info">Subtotal: $999</span>
									<div className="card-actions">
										<button className="btn btn-primary btn-block">
											View cart
										</button>
									</div>
								</div>
							</div>
						</div>
						<div className="dropdown dropdown-end">
							<div>
								<label tabIndex={0} className="btn btn-ghost btn-circle avatar">
									<div className="w-10 rounded-full">
										<img src="https://placeimg.com/80/80/people" alt="" />
									</div>
								</label>
								<ul
									tabIndex={0}
									className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
								>
									<li>
										<Link className="justify-between">
											Profile
											<span className="badge">New</span>
										</Link>
									</li>
								</ul>
							</div>
						</div>
					</div> */}
				</div>
			</div>
		</div>
	);
};

export default Navbar;
