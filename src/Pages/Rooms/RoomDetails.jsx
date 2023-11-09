/* eslint-disable react/jsx-key */
import { Link, useLoaderData } from "react-router-dom";
import { TbCurrencyTaka } from "react-icons/tb";
import { FaLocationArrow } from "react-icons/fa6";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import PageTitle from "../Pagetitle/PageTitle";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Firebase/AuthProvider";

const StarRating = ({ rating }) => {
  const filledStars = Array.from({ length: Math.floor(rating) }, (_, index) => (
    <svg
      key={index}
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5 text-yellow-500 fill-current"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path d="M10 1L12.3 6.4H18l-4.4 3.6L15.7 15 10 12.7 4.3 15l1.1-5.9L2 6.4h5.7L10 1z" />
    </svg>
  ));

  return <div className="flex items-center">{filledStars}</div>;
};

const RoomDetails = () => {
  const roomdata = useLoaderData();
  const { user } = useContext(AuthContext);
  const {
    _id,
    image,
    title,
    description,
    price,
    amenities,
    images,
    total_review,
  } = roomdata;
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch(`https://sayeman-hotel-server.vercel.app/reviews/${title}`)
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  console.log(reviews);

  return (
    <div>
      <PageTitle title={"Room Detail"} />
      <div className=" hero min-h-screen">
        <div className="  flex-col  w-full">
          <img className=" w-full h-[500px]" src={image} alt="" />
          <div className=" card-body shadow-lg rounded-lg mb-5">
            <h3 className="text-3xl font-bold text-blue-950 my-2">{title}</h3>

            <p className="flex text-3xl">
              {" "}
              <TbCurrencyTaka></TbCurrencyTaka> Price: {price} BDT Per Night
            </p>
          </div>
          <div className="text-center  lg:text-left max-w-[1280px] mx-auto">
            <div className=" pl-0 lg:pl-40 my-8">
              <p className="text-xl font-medium">{description}</p>
            </div>

            <div>
              <div className="hidden lg:block">
                <Swiper
                  modules={[Navigation, Pagination, Autoplay]}
                  navigation
                  pagination={{ clickable: true }}
                  scrollbar={{ draggable: true }}
                  autoplay={{ delay: 3000, disableOnInteraction: false }}
                  onSwiper={(swiper) => console.log(swiper)}
                  onSlideChange={() => console.log("slide change")}
                >
                  {images.map((image) => (
                    <SwiperSlide>
                      <img src={image} alt="" />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
            <div className="p-2">
              <h3 className="text-3xl md:text-5xl font-bold text-blue-950 text-center my-8">
                Room Amenities
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-between gap-10  border-b-4">
                {amenities.map((item) => (
                  <p className="flex text-3xl mb-2 ">
                    {" "}
                    <FaLocationArrow className="mr-10 text-3xl"></FaLocationArrow>
                    {item}
                  </p>
                ))}
              </div>

              <div>
                <h3 className="text-3xl md:text-5xl font-bold text-blue-950  my-8">
                  Reviews:
                </h3>

                {reviews.length == 0 ? (
                  <h3 className="text-3xl md:text-5xl font-bold text-blue-950 text-center">
                    {" "}
                    No One Review Yet
                  </h3>
                ) : (
                  <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 ">
                    {reviews.map((item) => (
                      <div>
                        <div className="card-body bg-slate-100 shadow-md items-center ">
                          <div className=" flex gap-5">
                            <figure>
                              <img
                                className="w-16 h-16 rounded-full"
                                src={item.photoURL}
                                alt=""
                              />
                            </figure>
                            <div className="">
                              <div className="flex gap-3 items-center">
                                <h2 className="card-title mb-3 text-xl font-medium">
                                  {item.displayName}
                                </h2>
                                <p>
                                  <small>Post on: {item.formattedDate}</small>
                                </p>
                              </div>
                              <div>
                                Ratings:
                                <StarRating rating={item.rating} />
                              </div>
                              <h3 className="text-xl">{item.comment}</h3>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          <div>
            <div
              className="hero h-40 mt-10"
              style={{ backgroundImage: `url(${image})` }}
            >
              <div className="hero-overlay bg-blue-950 bg-opacity-90"></div>
              <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                  {user ? (
                    <Link to={`/rooms/booking/${_id}`}>
                      <button className="btn bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 text-white font-semibold  normal-case">
                        Book Now
                      </button>
                    </Link>
                  ) : (
                    <Link to={"/login"}>
                      <button className="btn bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 text-white font-semibold  normal-case">
                        Book Now
                      </button>
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomDetails;
