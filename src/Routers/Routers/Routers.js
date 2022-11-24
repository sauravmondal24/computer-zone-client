import { createBrowserRouter } from 'react-router-dom';
import Login from '../../Auth/Login/Login';
import Home from '../../Pages/Home/Home/Home';
import Main from '../../Router/Main';

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
			}
		]
	}
]);

export default router;
