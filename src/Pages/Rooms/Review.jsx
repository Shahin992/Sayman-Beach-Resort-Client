
import  { useContext, useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { AuthContext } from "../Firebase/AuthProvider";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";

const Review = () => {
    const { id } = useParams();
const [bookings, setBookings] = useState([]);
  const [updateBooking, setUpdateBooking] = useState(null);
    const {user} = useContext(AuthContext)
    const photoURL = user?.photoURL
    const displayName = user?.displayName
    const email = user?.email
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState(0);

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handleRatingChange = (value) => {
    setRating(value);
  };

  const handleSubmitReview = () => {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, '0');
    const day = String(currentDate.getDate()).padStart(2, '0');
    const formattedDate = `${day}-${month}-${year}`;

    const title = updateBooking.title
 
    const reviewData = {title,comment,rating,formattedDate,displayName,photoURL,}
    console.log(reviewData);

    fetch('http://localhost:5000/reviews',{
        method : 'POST',
        headers : 
            {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(reviewData),
    }
   
    )
   
    .then((response) => response.json())
      .then((data) => 
      {
        if (data.insertedId) {
            Swal.fire("Thanks For Your Review", "", "success");
          }
      })
    
  };


  useEffect(() => {
    fetch(`https://sayeman-hotel-server.vercel.app/bookings/${email}`, {
      credentials: "include",
    })
      .then((response) => response.json())
      .then((data) => {
        setBookings(data);

        const foundBooking = data.find((item) => item._id == id);
        setUpdateBooking(foundBooking);
      });
  }, []);

  return (
    <div className="max-w-7xl mx-auto  " >

      <div className="mb-4 text-center">
      <h2 className="text-2xl font-bold mb-2">Your Review</h2>
        <p className="text-gray-600 mb-2">Share your experience with us!</p>
        <textarea
          placeholder="Write your review here..."
          value={comment}
          onChange={handleCommentChange}
          className="border border-gray-300 rounded p-2 w-2/3 mx-auto"
          rows="4"
        ></textarea>
      </div>

      <div className=" flex justify-center gap-x-40 ">
      <div className="mb-4">
        <p className="text-xl">Rating:</p>
        <div className="flex items-center">
          {[1, 2, 3, 4, 5].map((value) => (
            <FaStar
              key={value}
              onClick={() => handleRatingChange(value)}
              className={`cursor-pointer text-3xl ${
                value <= rating ? "text-yellow-500" : "text-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
      <button
        onClick={handleSubmitReview}
        className="btn bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 text-white font-semibold  normal-case"
      >
        Submit Review
      </button>
      </div>

    </div>
  );
};

export default Review;
