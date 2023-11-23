import React from 'react'
import ReactDOM from 'react-dom/client'
import {RouterProvider} from "react-router-dom";
import './index.css'
import { router } from './Routers/Router';
import AuthProvider from './Provider/AuthProvider';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
       <div className='max-w-screen-2xl mx-auto'>
       <RouterProvider router={router} />
       </div>
    </AuthProvider>
  </React.StrictMode>,
)
