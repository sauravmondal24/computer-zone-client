import { createBrowserRouter } from 'react-router-dom';
import Login from '../../Auth/Login/Login';
import SignUp from '../../Auth/SignUp/SignUp';
import Error from '../../Error/Error';
import DashboardLayout from '../../Layout/DashboardLayout';
import Main from '../../Layout/Main';
import Blog from '../../Pages/Blog/Blog';
import Contact from '../../Pages/Contact/Contact';
import AllBuyer from '../../Pages/Dashboard/AllBuyer/AllBuyer';
import AddAProduct from '../../Pages/Dashboard/AllSeller/AddAProduct/AddAProduct';
import AllSeller from '../../Pages/Dashboard/AllSeller/AllSeller';
import BuyerOrder from '../../Pages/Dashboard/BuyerOrder/BuyerOrder';
import Payment from '../../Pages/Dashboard/Payment/Payment';
import ReportedItems from '../../Pages/Dashboard/ReportedItems/ReportedItems';
import Home from '../../Pages/Home/Home/Home';
import MyProducts from '../../Pages/MyProducts/MyProducts';
import ProductsByCategory from '../../Pages/ProductsByCategory/ProductsByCategory';
import SellerProducts from '../../Pages/SellerProducts/SellerProducts';
import DisplayError from '../../Pages/Shared/DisplayError/DisplayError';
import AdminRoute from '../AdminRoute/AdminRoute';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Main></Main>,
		errorElement: <DisplayError></DisplayError>,
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
			},
			{
				path: '/contact',
				element: <Contact></Contact>
			}
		]
	},

	{
		path: '/dashboard',
		element: <DashboardLayout></DashboardLayout>,
		errorElement: <DisplayError></DisplayError>,
		children: [
			{
				path: '/dashboard/reportedItems',
				element: <ReportedItems></ReportedItems>
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
			},
			{
				path: '/dashboard/payment/:id',
				element: <Payment></Payment>,
				loader: ({ params }) =>
					fetch(
						`https://computer-zone-server-alpha.vercel.app/buyerOrders/${params.id}`
					)
			}
		]
	},

	{
		path: '*',
		element: <Error></Error>
	}
]);

export default router;
