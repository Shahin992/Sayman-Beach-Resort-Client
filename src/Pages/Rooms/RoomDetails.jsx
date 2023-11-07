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
{/* amenities */}
     


  </div>



   


  </div>

  
</div>
            
        </div>
    );
};

export default RoomDetails;