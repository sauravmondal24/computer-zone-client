import { createBrowserRouter } from 'react-router-dom';
import Login from '../../Auth/Login/Login';
import SignUp from '../../Auth/SignUp/SignUp';
import Blog from '../../Pages/Blog/Blog';
import Dashboard from '../../Pages/Dashboard/Dashboard/Dashboard';
import Home from '../../Pages/Home/Home/Home';
import Main from '../../Router/Main';
import PrivateRoute from '../PrivateRoute/PrivateRoute';

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
				path: '/login',
				element: <Login></Login>
			},
			{
				path: '/signup',
				element: <SignUp></SignUp>
			},
			{
				path: '/',
				element: <Blog></Blog>
			}
		]
	},
	{
		path: '/dashboard',
		element: (
			<PrivateRoute>
				<Dashboard></Dashboard>
			</PrivateRoute>
		)
	}
]);

export default router;
