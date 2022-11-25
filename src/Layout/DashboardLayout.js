import React, { useContext } from 'react';
import Footer from '../Pages/Shared/Footer/Footer';
import Navbar from '../Pages/Shared/Navbar/Navbar';
import { Outlet, Link } from 'react-router-dom';
import useAdmin from '../Hooks/useAdmin';
import { AuthContext } from '../Context/AuthProvider';

const DashboardLayout = () => {
	const { user } = useContext(AuthContext);
	const [isAdmin] = useAdmin(user?.email);

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
							{/* <!-- Sidebar content here --> */}
							<li>
								<Link to="/dashboard">Dashboard</Link>
							</li>

							{isAdmin && (
								<>
									<li>
										<Link to="/dashboard/seller">All Seller</Link>
									</li>

									<li>
										<Link to="/dashboard/buyer">All Buyer</Link>
									</li>
									<li>
										<Link to="/dashboard/addProduct">Add A Product</Link>
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