import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from './Routers/Routers/Routers';

function App() {
	return (
		<div className="max-w-[1440px] mx-auto">
			<RouterProvider router={router}></RouterProvider>
		</div>
	);
}

export default App;
