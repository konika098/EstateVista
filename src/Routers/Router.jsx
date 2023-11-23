import {createBrowserRouter} from "react-router-dom";
import Main from "../Layout/Main/Main";
import Error from "../Pages/Error/Error";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Login from "../Pages/Contact/Login/Login";
import Register from "../Pages/Contact/Register/Register";
import PrivateRoute from "../Provider/PrivateRoute";

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
        path:'/login',
        element:<Login/>
       },
       {
        path:'/register',
        element:<Register/>

       }

      ]
    },
  ]);