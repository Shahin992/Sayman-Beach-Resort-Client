import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const SpecialOffer = () => {
 
  const [offer, setOffer] = useState([]);
  useEffect(() => {
    fetch("https://sayeman-hotel-server.vercel.app/offers")
      .then((res) => res.json())
      .then((data) => setOffer(data));
  }, []);







  return (
    <div className="flex flex-col justify-center items-center p-5 gap-10">
      <h3 className="text-3xl md:text-5xl font-bold text-blue-950">
        Special Offer
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2">
        {offer.map((item) => {
          return (
            <>
              <div className="flex flex-col justify-center items-center mb-10">
                <h3 className="text-2xl font-semibold text-blue-950  mb-2-5">
                  {item.package_name}
                </h3>
                <p className="text-xl font-medium mb-5">{item.title}</p>
                <img className="w-[95%]" src={item.image} alt="" />
                <button
              
              className="btn normal-case bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 text-white font-semibold"
            >
              Booked Now
            </button>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default SpecialOffer;
