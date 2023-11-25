import {createBrowserRouter} from "react-router-dom";
import Main from "../Layout/Main/Main";
import Error from "../Pages/Error/Error";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";

import PrivateRoute from "../Provider/PrivateRoute";

import Contact from "../Pages/Contact/Contact";
import AllProperties from "../Pages/AllProperties/AllProperties";

import ManageUser from "../Pages/Dashboard/Admin/ManageUser";
import Dashboard from "../Pages/Dashboard/Dashboard";
import AdminProfile from "../Pages/Dashboard/Admin/AdminProfile";
import ManageReview from "../Pages/Dashboard/Admin/ManageReview";
import ManageProperties from "../Pages/Dashboard/Admin/ManageProperties";



  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      errorElement:<Error/>,
      children:[
       {
        path:"/",
        element:<Home/>
       },
       {
        path:'/about',
        element:<PrivateRoute><About/></PrivateRoute>
       },
       {
        path:'/contact',
        element:<Contact/>
       },
       {
        path:'/all',
        element:<AllProperties/>

       },
       {
        path:'/dashboard',
        element:<Dashboard/>,
        
          
        
       },
       {
        path:'/ManageUsers',
        element:<ManageUser/>
      },
      {
        path:'/adminProfile',
        element:<AdminProfile/>
      },
      {
        path:'/ManageReview',
        element:<ManageReview/>
      },
      {
        path:"/ManageProperties",
        element:<ManageProperties/>
      }
       

      ]
    },
  ]);