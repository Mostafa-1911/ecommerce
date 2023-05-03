import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

import './index.css';

import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './Components/Home/Home';
import Layout from './Components/Layout/Layout'
import Login from './Components/Login/Login'
import Cart from './Components/Cart/Cart'
import Register from './Components/Register/Register'
import Products from './Components/Products/Products'
import NotFound from './Components/NotFound/NotFound'

const routes = createBrowserRouter([
  {path:"",element: <Layout />,children: [
    {index:true,element: <Home />},
    {path:"login",element: <Login />},
    {path:"register",element: <Register />},
    {path:"cart",element: <Cart />},
    {path:"products",element: <Products />},



    {path:"*",element: <NotFound />}
  ]}
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <RouterProvider router={routes}></RouterProvider>
);

