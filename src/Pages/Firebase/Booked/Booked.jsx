import { useContext, useEffect, useState } from "react";
import { Navigate, useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider";
import Lottie from "lottie-react";
import loadingAni from "../../../assets/loadingAnimation.json"
import Swal from "sweetalert2";

const Booked = () => {
    
    const [date,setdate] = useState(null)
    const {user,loading} =useContext(AuthContext)
    const navigate = useNavigate();
   
    if (loading) {
        return <div className="flex justify-center items-center"><Lottie animationData={loadingAni}></Lottie></div>
    }

    const userEmail = user.email
    const handleDateChange = (e) =>{
        setdate(e.target.value)
       

    }

    const handleBooked = () => {
        
        if (!date) {
            Swal.fire("Please select a date", "", "error");
            return;
          }
        const bookeddata = {userEmail,date,title,image,price};
        console.log(bookeddata);

      
        
        fetch("http://localhost:5000/bookings", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(bookeddata),
          })
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
              if (data.insertedId) {
                Swal.fire(
                  "Good job!",
                  "Room Booked Successfully",
                  "success"
                );
              }
            })
      
            .catch((error) => {
              console.log(error);
              
                if (error.status == 400) {
                 
                  Swal.fire("Error", "Duplicate booking. A booking with the same date and title already exists.", "error");
                } else {
                 
                  Swal.fire("sorry", "Someone Booking the room.", "error");
                }
              }
            );
        
        setdate(null)

        navigate('/rooms')
        

       

        
    }


    const roomData = useLoaderData();
    const {image,price,title} =roomData
    return (
        <div>

<div className="card w-1/2 mx-auto bg-base-100 shadow-xl">
  <figure><img className="h-80 w-full" src={image} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Booking The Room {title}</h2>
    
    <p className=" text-2xl font-medium">Rack Rate: <span className="text-red-600">{price} BDT Per Night</span></p>
    <div className="mb-4">
        <label for="datePicker" class="block text-gray-700 text-sm font-bold mb-2">
          Please select a date:
        </label>
        <input type="date"
        required
       onChange={handleDateChange}
        
        className="border border-gray-300 rounded p-2 w-full" />
    
      </div>
    <div className="card-actions justify-end">
      <button onClick={handleBooked} className="btn normal-case bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 text-white font-semibold">Booked Now</button>
    </div>
  </div>
</div>
         
  

           
        


    
      </div>

            

    );
};

export default Booked;