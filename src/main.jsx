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
import RoomDetails from './Pages/Rooms/RoomDetails.jsx'
import Booked from './Pages/Firebase/Booked/Booked.jsx'
import MyBookings from './Pages/MyBookings/MyBookings.jsx'
import UpdateMyBooking from './Pages/UpdateBooking/UpdateMyBooking.jsx'
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute.jsx'
import ErrorPage from './Pages/ErrorPage/Errorpage.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
     errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/rooms",
        element: <Rooms></Rooms>,
        loader: () => fetch('http://localhost:5000/rooms')
      },
      {
        path :"/rooms/:id",
        element : <RoomDetails></RoomDetails>,
        loader: ({params})=> fetch(`http://localhost:5000/rooms/${params.id}`)


      },
      {
        path :"/rooms/booking/:id",
        element : <Booked></Booked>,
        loader: ({params})=> fetch(`http://localhost:5000/rooms/${params.id}`)


      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path :"/register",
        element: <Register></Register>
      },
      {
        path :"/mybookings",
        element : <PrivateRoute><MyBookings></MyBookings></PrivateRoute>,
         
      },
      {
        path :"/update/:id",
        element : <UpdateMyBooking/>,
      }
    ],
    
  
  }
  
])

ReactDOM.createRoot(document.getElementById('root')).render(
   <AuthProvider> 
    <RouterProvider router={router} />
    </AuthProvider>
 
)
