import { Navigation, Pagination, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Slider = () => {
    return (
        <div>
             <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, A11y,Autoplay]}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide>    
        <div className="hero min-h-screen" style={{backgroundImage: 'url(https://seagullhotelbd.com/wp-content/uploads/2023/10/New-web-pic-for-seagull-7-min.png)'}}>
  <div className="hero-content bg-opacity-10"></div>
  <div className="">
  <div className=" flex justify-left items-start flex-col">
      <h1 className="mb-5 pl-2 text-3xl md:text-3xl lg:text-5xl font-bold text-cyan-500">Sayeman Beach Resort</h1>
      <p className="mb-5 pl-2 text-black text-lg md:text-2xl lg:text-3xl font-bold">An ode to luxury of unforgettable memories</p>
      <button className="btn text-white font-semibold btn-success">Book Now</button>
    </div>
  </div>
</div>
</SwiperSlide>
      <SwiperSlide>
      <div className="hero min-h-screen" style={{backgroundImage: 'url(https://i.ibb.co/WFxnBsQ/pexels-nastyasensei-376531.jpg)'}}>
  <div className="bg-opacity-10"></div>
  <div className="">
    <div className=" flex justify-left items-start flex-col">
      <h1 className="mb-5 pl-2 text-3xl md:text-3xl lg:text-5xl font-bold text-cyan-500">Sayeman Beach Resort</h1>
      <p className="mb-5 pl-2 text-black text-lg md:text-2xl lg:text-3xl font-bold">An ode to luxury of unforgettable memories</p>
      <button className="btn text-white font-semibold btn-success">Book Now</button>
    </div>
  </div>
</div>
    </SwiperSlide>
      <SwiperSlide>
        <div className="hero min-h-screen" style={{backgroundImage: 'url(https://i.ibb.co/N2JQzKs/pexels-pixabay-279746.jpg)'}}>
  <div className="bg-opacity-10"></div>
  <div className="">
  <div className=" flex justify-left items-start flex-col">
      <h1 className="mb-5 pl-2 text-3xl md:text-3xl lg:text-5xl font-bold text-cyan-500">Sayeman Beach Resort</h1>
      <p className="mb-5 pl-2 text-black text-lg md:text-2xl lg:text-3xl font-bold">An ode to luxury of unforgettable memories</p>
      <button className="btn text-white font-semibold btn-success">Book Now</button>
    </div>
  </div>
</div>
</SwiperSlide>
      <SwiperSlide>
      <div className="hero min-h-screen" style={{backgroundImage: 'url( https://i.ibb.co/Xyt4VLT/pexels-files-1648776-1.jpg)'}}>
  <div className="bg-opacity-10"></div>
  <div className="">
  <div className=" flex justify-left items-start flex-col">
      <h1 className="mb-5 pl-2 text-3xl md:text-3xl lg:text-5xl font-bold text-cyan-500">Sayeman Beach Resort</h1>
      <p className="mb-5 pl-2 text-black text-lg md:text-2xl lg:text-3xl font-bold">An ode to luxury of unforgettable memories</p>
      <button className="btn text-white font-semibold btn-success">Book Now</button>
    </div>
  </div>
</div>
     
      </SwiperSlide>
      
    </Swiper>
            
        </div>
    );
};

export default Slider;