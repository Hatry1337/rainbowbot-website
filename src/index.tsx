import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import './custom.scss';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Root from "./Pages/Root/Root";
import Tos from "./Pages/Tos/Tos";
import Privacy from "./Pages/Privacy/Privacy";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Root/>,
	},
	{
		path: "/tos",
		element: <Tos/>,
	},
	{
		path: "/privacy",
		element: <Privacy/>,
	},
]);

ReactDOM.render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>,
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
