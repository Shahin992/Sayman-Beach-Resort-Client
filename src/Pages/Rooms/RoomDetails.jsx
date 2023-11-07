import { useLoaderData } from "react-router-dom";
import { TbCurrencyTaka } from "react-icons/tb";
import { FaLocationArrow } from "react-icons/fa6";
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';




const RoomDetails = () => {
    const roomdata = useLoaderData();
    const {image,title,description,price,amenities,images} = roomdata


        

    return (


        <div>
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
    <div className="grid grid-cols-3 justify-between gap-10">
    {
      amenities.map(item =>(
         <p className="flex text-3xl mb-2"> <FaLocationArrow className="mr-10 text-3xl"></FaLocationArrow>{item}</p>

      ))
     }
    </div>
     </div> 
     


  </div>

  <div>
<div className="hero h-40 mt-10" style={{backgroundImage: `url(${image})`}}>
<div className="hero-overlay bg-blue-950 bg-opacity-90"></div>
<div className="hero-content text-center text-neutral-content">
  <div className="max-w-md">
    <button className="btn bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 text-white font-semibold  normal-case">Book Now</button>
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