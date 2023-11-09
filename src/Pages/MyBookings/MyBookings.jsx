/* eslint-disable react/jsx-key */
/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Firebase/AuthProvider";
import Lottie from "lottie-react";
import loadingAni from "../../assets/loadingAnimation.json";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import nodata from "../../assets/Nodata.json";
import PageTitle from "../Pagetitle/PageTitle";

const MyBookings = () => {
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return (
      <div className="flex justify-center items-center">
        <Lottie animationData={loadingAni}></Lottie>
      </div>
    );
  }
  const email = user.email;
  const [bookingData, setBookingData] = useState([]);
  useEffect(() => {
    fetch(`https://sayeman-hotel-server.vercel.app/bookings/${email}`)
      .then((response) => response.json())
      .then((data) => {
        setBookingData(data);
      });
  }, []);

  console.log(bookingData);

  const handleDelete = (id) => {
    const bookingToDelete = bookingData?.find((booking) => booking._id === id);

    if (!bookingToDelete) {
      return;
    }

    const currentDate = new Date().toISOString().split("T")[0];

    const bookingDate = bookingToDelete.date;
    console.log(bookingDate, currentDate);

    if (bookingDate >= currentDate) {
      const dateDifference = new Date(bookingDate) - new Date(currentDate);

      if (dateDifference >= 24 * 60 * 60 * 1000) {
        Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!",
        }).then((result) => {
          if (result.isConfirmed) {
            fetch(`https://sayeman-hotel-server.vercel.app/bookings/${id}`, {
              method: "DELETE",
            })
              .then((res) => res.json())
              .then((data) => {
                if (data.deletedCount > 0) {
                  Swal.fire("Deleted!", "Your Booking is Cancled.", "success");
                }
                const remainingData = bookingData.filter(
                  (data) => data._id !== id
                );
                setBookingData(remainingData);
              });
          }
        });
      } else {
        Swal.fire(
          "Cannot delete",
          "You cannot delete this booking as it is less than 1 day.",
          "error"
        );
      }
    } else {
      Swal.fire("Cannot delete", "The booking date is in the past.", "error");
    }
  };

  return (
    <div className="my-10 max-w-7xl mx-auto">
      <PageTitle title={"My Booking"} />
      {bookingData.length === 0 ? (
        <div>
          <div>
            <Lottie className="h-80" animationData={nodata}></Lottie>
            <h3 className="text-3xl md:text-5xl font-bold text-blue-950 text-center mt-3">
              No Data Found
            </h3>
          </div>
        </div>
      ) : (
        <div>
          <h3 className="text-3xl md:text-5xl my-10 font-bold text-blue-950 text-center mt-3">
            My Bookings
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 justify-between gap-10">
            {bookingData.map((booked) => {
              return (
                <div className="card lg:card-side lg:h-[430px] bg-base-100 shadow-xl">
                  <figure className="lg:w-1/2">
                    <img
                      className="h-full w-full"
                      src={booked.image}
                      alt="Album"
                    />
                  </figure>
                  <div className="card-body lg:w-1/2 rounded-r-3xl bg-teal-100">
                    <h2 className="card-title  text-2xl font-extrabold">
                      {booked.title}
                    </h2>
                    <p className="text-2xl font-bold text-red-500 ">
                      Price: ${booked.price}
                    </p>
                    <p className="text-2xl font-bold text-red-500 ">
                      Date:
                      {booked.date}
                    </p>
                    <div className="card-actions flex w-60 flex-col my-1 justify-end">
                      <Link to={`/update/${booked._id}`}>
                        <button className="btn btn-outline w-60 normal-case text-white  btn-success">
                          Update Reservesion
                        </button>
                      </Link>
                      <button
                        onClick={() => handleDelete(booked._id)}
                        className="btn w-60 normal-case text-white  btn-error"
                      >
                        Cancle Reservesion
                      </button>
                      <Link to={`/mybookings/review/${booked._id}`}>
                        <button className="btn btn-outline w-60 normal-case text-white  btn-success">
                          Add Review
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default MyBookings;
