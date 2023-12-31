import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Firebase/AuthProvider";
import {

  Navigate,
  useNavigation,
  useParams,
} from "react-router-dom";
import Lottie from "lottie-react";
import loadingAni from "../../assets/loadingAnimation.json";
import Swal from "sweetalert2";
import PageTitle from "../Pagetitle/PageTitle";

const UpdateMyBooking = () => {
  const { id } = useParams();
  const {user,loading} = useContext(AuthContext)
  const email = user?.email;
  const [bookings, setBookings] = useState([]);
  const [updateBooking, setUpdateBooking] = useState(null);
  useEffect(() => {
    fetch(`https://sayeman-hotel-server.vercel.app/bookings/${email}`, {
      credentials: "include",
    })
      .then((response) => response.json())
      .then((data) => {
        setBookings(data);

        const foundBooking = data.find((item) => item._id == id);
        setUpdateBooking(foundBooking);
        console.log(bookings);
      });
  }, []);

 

  const [date, setDate] = useState([]);
 
  

  if (loading) {
    return (
      <div className="flex justify-center items-center">
        <Lottie animationData={loadingAni}></Lottie>
      </div>
    );
  }

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };
  console.log(date);

  const handleupdate = () => {
    fetch(`https://sayeman-hotel-server.vercel.app/bookings/${id}`, {
      method: "Put",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ date }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire(
            "Good job!",
            "Booking Date Updated Successfully!",
            "success"
          );
         return  <Navigate  to = "/mybookings"></Navigate>
         
         
        }
        
      });
      
  };

  return (
    <div className="p-2">
      <PageTitle title={"Update"} />

      <div className="card lg::w-1/2 my-10 mx-auto bg-base-100 shadow-xl">
        <figure>
          <img className="h-80 w-full" src={updateBooking?.image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            Booking The Room {updateBooking?.title}
          </h2>

          <p className=" text-2xl font-medium">
            Rack Rate:{" "}
            <span className="text-red-600">
              {updateBooking?.price} BDT Per Night
            </span>
          </p>
          <div className="mb-4">
            <label
              for="datePicker"
              class="block text-gray-700 text-sm font-bold mb-2"
            >
              Please select a date:
            </label>
            <input
              type="date"
              required
              onChange={handleDateChange}
              className="border border-gray-300 rounded p-2 w-full"
            />
          </div>
          <div className="card-actions justify-end">
            <button
              onClick={handleupdate}
              className="btn normal-case bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 text-white font-semibold"
            >
              Update Reservation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateMyBooking;
