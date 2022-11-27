import React, { useContext } from 'react';
import Footer from '../Pages/Shared/Footer/Footer';
import Navbar from '../Pages/Shared/Navbar/Navbar';
import { Outlet, Link } from 'react-router-dom';
import useAdmin from '../Hooks/useAdmin';

import { AuthContext } from '../Context/AuthProvider';
import useSeller from '../Hooks/useSeller';
import useTitle from '../Hooks/useTitle';

const DashboardLayout = () => {
	useTitle('Dashboard');
	const { user } = useContext(AuthContext);
	const [isAdmin] = useAdmin(user?.email);
	const [isSeller] = useSeller(user?.email);

	return (
		<div>
			<Navbar></Navbar>
			<div>
				<div className="drawer drawer-mobile">
					<input
						id="dashboard-drawer"
						type="checkbox"
						className="drawer-toggle"
					/>
					<div className="drawer-content">
						<Outlet></Outlet>
					</div>
					<div className="drawer-side">
						<label
							htmlFor="dashboard-drawer"
							className="drawer-overlay"
						></label>
						<ul className="menu p-4 w-80 bg-base-100 text-base-content">
							<li>
								<Link className="font-bold text-lg" to="/dashboard">
									Dashboard
								</Link>
							</li>

							<li>
								<Link className="font-bold text-lg" to="/dashboard/buyerOrder">
									Buyer Order
								</Link>
							</li>

							{isAdmin && (
								<>
									<li>
										<Link className="font-bold text-lg" to="/dashboard/seller">
											All Seller
										</Link>
									</li>

									<li>
										<Link className="font-bold text-lg" to="/dashboard/buyer">
											All Buyer
										</Link>
									</li>
								</>
							)}

							{isSeller && (
								<>
									<li>
										<Link
											className="font-bold text-lg"
											to="/dashboard/addProduct"
										>
											Add A Product
										</Link>
									</li>
									<li>
										<Link
											className="font-bold text-lg"
											to="/dashboard/sellerproducts"
										>
											My Products
										</Link>
									</li>
								</>
							)}
						</ul>
					</div>
				</div>
			</div>
			<Footer></Footer>
		</div>
	);
};

export default DashboardLayout;
