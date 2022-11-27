import { createBrowserRouter } from 'react-router-dom';
import Login from '../../Auth/Login/Login';
import SignUp from '../../Auth/SignUp/SignUp';
import DashboardLayout from '../../Layout/DashboardLayout';
import Main from '../../Layout/Main';
import Blog from '../../Pages/Blog/Blog';
import AllBuyer from '../../Pages/Dashboard/AllBuyer/AllBuyer';
import AddAProduct from '../../Pages/Dashboard/AllSeller/AddAProduct/AddAProduct';
import AllSeller from '../../Pages/Dashboard/AllSeller/AllSeller';
import BuyerOrder from '../../Pages/Dashboard/BuyerOrder/BuyerOrder';
import Dashboard from '../../Pages/Dashboard/Dashboard/Dashboard';
import Home from '../../Pages/Home/Home/Home';
import MyProducts from '../../Pages/MyProducts/MyProducts';
import ProductsByCategory from '../../Pages/ProductsByCategory/ProductsByCategory';
import SellerProducts from '../../Pages/SellerProducts/SellerProducts';
import AdminRoute from '../AdminRoute/AdminRoute';
// import PrivateRoute from '../PrivateRoute/PrivateRoute';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Main></Main>,
		children: [
			{
				path: '/',
				element: <Home></Home>
			},
			{
				path: '/myProduct',
				element: <MyProducts></MyProducts>
			},
			{
				path: '/login',
				element: <Login></Login>
			},
			{
				path: '/signup',
				element: <SignUp></SignUp>
			},
			{
				path: '/productsbycategory/:category',
				element: <ProductsByCategory></ProductsByCategory>
			},
			{
				path: '/blog',
				element: <Blog></Blog>
			}
		]
	},

	{
		path: '/dashboard',
		element: <DashboardLayout></DashboardLayout>,
		children: [
			{
				path: '/dashboard',
				element: <Dashboard></Dashboard>
			},
			{
				path: '/dashboard/seller',
				element: (
					<AdminRoute>
						<AllSeller></AllSeller>
					</AdminRoute>
				)
			},
			{
				path: '/dashboard/addProduct',
				element: <AddAProduct></AddAProduct>
			},

			{
				path: '/dashboard/buyer',
				element: (
					<AdminRoute>
						<AllBuyer></AllBuyer>
					</AdminRoute>
				)
			},
			{
				path: '/dashboard/sellerproducts',
				element: <SellerProducts></SellerProducts>
			},
			{
				path: '/dashboard/buyerOrder',
				element: <BuyerOrder></BuyerOrder>
			}
		]
	}
]);

export default router;
