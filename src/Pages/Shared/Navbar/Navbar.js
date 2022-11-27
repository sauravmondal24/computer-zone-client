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
					<h1>{user?.displayName}</h1>
					<div>
						<label tabIndex={0} className="btn btn-ghost btn-circle avatar">
							<div className="w-10 rounded-full">
								<img src="https://placeimg.com/80/80/people" alt="" />
							</div>
						</label>
					</div>

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
				</div>
			</div>
		</div>
	);
};

export default Navbar;
