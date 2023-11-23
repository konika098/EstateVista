import {createBrowserRouter} from "react-router-dom";
import Main from "../Layout/Main/Main";
import Error from "../Pages/Error/Error";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";

import PrivateRoute from "../Provider/PrivateRoute";

import Contact from "../Pages/Contact/Contact";
import AllProperties from "../Pages/AllProperties/AllProperties";

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
       

      ]
    },
  ]);