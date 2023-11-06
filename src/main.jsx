import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Root from './Root/Root.jsx'
import Home from './Pages/Home/Home.jsx'
import Rooms from './Pages/Rooms/Rooms.jsx'
import Login from './Pages/Login/Login.jsx'
import Register from './Pages/Register/Register.jsx'
import AuthProvider from './Pages/Firebase/AuthProvider.jsx'
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    // errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/rooms",
        element: <Rooms></Rooms>,
        loader: () => fetch('/Rooms.json')
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path :"/register",
        element: <Register></Register>
      }
    ],
    
  
  }
  
])

ReactDOM.createRoot(document.getElementById('root')).render(
   <AuthProvider> 
    <RouterProvider router={router} />
    </AuthProvider>
 
)
