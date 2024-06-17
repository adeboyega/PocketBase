import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { createBrowserRouter, Link, Navigate, RouterProvider } from "react-router-dom";
import Home from './pages/Home.jsx';
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import EditTask from "./pages/EditTask"
import CreateTask from "./pages/CreateTask"
import { isUserValid } from './lib/pocketbase.js';

const router = createBrowserRouter([
	{
	  path: "/",
	  element: isUserValid ? <Navigate to={"/home"} /> : <Navigate to={"/login"}/>,
	},
  {
    path: "/home",
    element: <Home />
  },
  {
    path:"/login",
    element: <Login />,
  },
  {
    path:"/signup",
    element: <Signup />,
  },
  {
    path:`/edittask/:id`,
    element: <EditTask />,
  },
  {
    path:"/create",
    element: <CreateTask />,
  },

  ]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
