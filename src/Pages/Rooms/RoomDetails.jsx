import { Link, useLoaderData } from "react-router-dom";
import { TbCurrencyTaka } from "react-icons/tb";
import { FaLocationArrow } from "react-icons/fa6";
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import Swal from "sweetalert2";
import PageTitle from "../Pagetitle/PageTitle";





const RoomDetails = () => {
  const roomdata = useLoaderData();
    const {_id,image,title,description,price,amenities,images} = roomdata
  


 

 
 

     

    return (


        <div>
          <PageTitle title={'Room Detail'}/>
            <div className="hero min-h-screen">
  <div className="  flex-col w-full">
  <img className=" w-full h-[500px]" src={image} alt="" />
  <div className=" card-body shadow-lg rounded-lg mb-5">
        <h3 className="text-3xl font-bold text-blue-950 my-2">{title}</h3>
        
        <p className="flex text-3xl"> <TbCurrencyTaka ></TbCurrencyTaka> Price: {price} BDT Per Night</p>
        
      </div>
      <div className="text-center w-full lg:text-left max-w-[1280px] mx-auto">
    
      
      
    <div className=" lg:pl-40 my-8">
     <p className="text-xl font-medium">{description}</p> 
     </div>

     <div>
     
      <div>
    <Swiper
      modules={[Navigation, Pagination, Autoplay]} 
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      autoplay={{ delay: 3000, disableOnInteraction: false }} 
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      {
          images.map(image=>(
              <SwiperSlide>
                  <img  className="w-full" src={image} alt="" />
              </SwiperSlide>
          ))
      }
    </Swiper>
  </div>

     
    
     </div>
     <div>
     <h3 className="text-3xl md:text-5xl font-bold text-blue-950 text-center my-8">Room Amenities</h3>
    <div className="grid grid-cols-3 justify-between gap-10  border-b-4">
    {
      amenities.map(item =>(
         <p className="flex text-3xl mb-2 "> <FaLocationArrow className="mr-10 text-3xl"></FaLocationArrow>{item}</p>

      ))
     }
    </div>
    {/* <div>
    <h3 className="text-3xl md:text-5xl font-bold text-blue-950  my-8">Reviews:</h3>
   { total_review ?
 <div className="grid grid-cols-3">
 <div className="card-body bg-slate-100 shadow-md items-center ">
 
 <div className="flex gap-5">
     <figure><img className="w-16 h-16 rounded-full" src="https://static.tcimg.net/authors/c1722665982a5bd0/matt-digiulio.jpg" alt="" /></figure>
     <div className="">
     <div className="flex gap-3 items-center">
     <h2 className="card-title mb-3 text-2xl font-medium">John Doe</h2>
 <p><small>Post Date: 11-05-22</small></p>
     </div>
     <h3 className="text-xl">Spacious room, clean, and well-maintained.</h3> 
   
     </div>
     
 </div>
</div>
 </div> : <h3 className="text-3xl md:text-5xl font-bold text-blue-950 text-center"> No One Review Yet</h3>
   }

    </div> */}
     </div> 
     


  </div>

  <div>
<div className="hero h-40 mt-10" style={{backgroundImage: `url(${image})`}}>
<div className="hero-overlay bg-blue-950 bg-opacity-90"></div>
<div className="hero-content text-center text-neutral-content">
  <div className="max-w-md">
  <Link to={`/rooms/booking/${_id}`}>
  <button  className="btn bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 text-white font-semibold  normal-case">Book Now</button>
    </Link>
    
   
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