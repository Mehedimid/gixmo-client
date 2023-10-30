import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from './Components/ErrorPage.jsx';
import Home from './pages/Home.jsx';
import MyCart from './pages/MyCart.jsx';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import AddProduct from './pages/AddProduct.jsx';
import AuthProvider from './AuthProvider.jsx';
import PrivateRoute from './Private route/PrivateRoute.jsx';
import BrandProduct from './Components/BrandProduct.jsx';
import Details from './Components/Details.jsx';
import Update from './Components/Update.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element:<App></App>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/addproduct',
        element:<PrivateRoute><AddProduct></AddProduct></PrivateRoute>
      },
      {
        path:'/mycart',
        loader:()=>fetch('http://localhost:5000/cart'),
        element:<PrivateRoute><MyCart></MyCart></PrivateRoute>
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/register',
        element:<Register></Register>
      },
      {
        path:'/brandproduct',
        element:<BrandProduct></BrandProduct>,
        loader:()=>fetch('http://localhost:5000/products')
      },
      {
        path:'/details/:id',
        loader:({params})=>fetch(`http://localhost:5000/products/${params.id}`),
        element:<PrivateRoute><Details></Details></PrivateRoute>
      },
      {
        path:`/products/:id`,
        loader: ({params}) => fetch(`http://localhost:5000/products/${params.id}`),
        element:<PrivateRoute><Update></Update></PrivateRoute>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <AuthProvider><RouterProvider router={router} /></AuthProvider>
  </React.StrictMode>,
)
