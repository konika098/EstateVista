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
import AgentProfile from "../Pages/Dashboard/Agent/AgentProfile";
import MyAddProperties from "../Pages/Dashboard/Agent/MyAddProperties";
import MySoldProperties from "../Pages/Dashboard/Agent/MySoldProperties";
import RequestedProperties from "../Pages/Dashboard/Agent/RequestedProperties";
import MyProfile from "../Pages/Dashboard/User/MyProfile";
import MyReviews from "../Pages/Dashboard/User/MyReviews";
import Property from "../Pages/Dashboard/User/Property";
import Wishlist from "../Pages/Dashboard/User/Wishlist";
import AddProperties from "../Pages/Dashboard/Agent/AddProperties";
import ManageAdvertisement from "../Pages/Dashboard/Admin/ManageAdvertisement";
import AddAdvertisement from "../Pages/Dashboard/Agent/AddAdvertisement";
import AllPropertiesCards from "../Pages/AllProperties/AllPropertiesCards";
import Offer from "../Pages/Dashboard/User/Offer";
import Review from "../Pages/AllProperties/Review";




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
        path:'/contact',
        element:<Contact/>
       },
      
      //  {
      //   path:'/detailsData',
      //   element:<Data/>,
      //   loader:(params)=>fetch(`http://localhost:5000/details/${params.id}`)
      //  },
       {
        path:'/all',
        element:<AllProperties/>,
        loader:()=>fetch(`http://localhost:5000/AllProperties`)

       },
       {
        path:'/AllProperties/:id',
        element:<AllPropertiesCards/>,
        loader:({params})=>fetch(`http://localhost:5000/AllProperties/${params.id}`)

       },
       {
        path:"/review",
        element:<Review/>,
        loader:()=>fetch('http://localhost:5000/NewPostProperties')
      },
      
       

      ]
    },
    {
      
        path:'/dashboard',
        element:<PrivateRoute><Dashboard/></PrivateRoute>,
        children:[
          {
            path:'/dashboard/ManageUsers',
            element:<ManageUser/>
          },
          {
            path:'/dashboard/adminProfile',
            element:<AdminProfile/>
          },
          {
            path:'/dashboard/ManageReview',
            element:<ManageReview/>
          },
          {
            path:'/dashboard/ManageAdvertisement',
            element:<ManageAdvertisement/>,
            loader:()=>fetch('http://localhost:5000/newAdvertisement')
          },
          {
            path:"/dashboard/ManageProperties",
            element:<ManageProperties/>,
            loader:()=>fetch('http://localhost:5000/NewPostProperties')
          },
         
          {
            path:'/dashboard/agentProfile',
            element:<AgentProfile/>
          },
          {
            path:"/dashboard/addProperties",
            element:<AddProperties/>
          },
          {
            path:"/dashboard/offer/:id",
            element:<Offer/>,
            loader:({params})=>fetch(`http://localhost:5000/wishList/${params.id}`)
          },
         
         
          {
            path:"/dashboard/myProperties",
            element:<MyAddProperties/>
          },
          {
            path:"/dashboard/addAdvertisement",
            element:<AddAdvertisement/>
          },
          {
            path:"/dashboard/soldProperties",
            element:<MySoldProperties/>
          },
          {
            path:"/dashboard/request",
            element:<RequestedProperties/>
          },
          {
            path:"/dashboard/myProfile",
            element:<MyProfile/>
          },
          {
            path:"/dashboard/myReview",
            element:<MyReviews/>
          },
          {
            path:"/dashboard/property",
            element:<Property/>
          },
          {
            path:"/dashboard/wishlist",
            element:<Wishlist/>
          },
          
           

        ]
        
          
        
       
      
    }
  ]);