/* eslint-disable react/jsx-key */
import { Link, useLoaderData } from "react-router-dom";

const Rooms = () => {
    const roomData = useLoaderData();
    console.log(roomData);
  return (
    
    <div>
        <div className="hero min-h-screen" style={{backgroundImage: 'url(https://seagullhotelbd.com/wp-content/uploads/2023/10/New-web-pic-for-seagull-3-min.png)'}}>
  <div className="hero-content bg-opacity-10"></div>
  <div className="">
  <div className=" flex justify-left items-start flex-col">
      <h1 className="mb-5 pl-2 text-3xl md:text-3xl lg:text-5xl font-bold text-yellow-700">Sayeman Beach Resort</h1>
      <p className="mb-5 pl-2 text-yellow-700 text-lg md:text-2xl lg:text-3xl font-bold">An ode to luxury of unforgettable memories</p>
      <button className="btn text-white font-semibold btn-success">Book Now</button>
    </div>
  </div>
</div>
        <div className="max-w-[1280px] mx-auto">
            <div>
            <h3 className="text-3xl md:text-5xl font-bold text-blue-950 text-center mt-3">Rooms</h3>
            <p className="text-center mt-1 font-semibold text-lg">Sayeman Beach Resort – Best hotel in Cox’s Bazar’s present you the best Sea view living modern and tropical accents. Comfortable bed with luxury linens, elegantly-detailed bathroom furnishings, settle in unwind indulge yourself with the luxury and scenic Sea view from your room.</p>
            </div>
      
      <div className="flex justify-end items-end mt-10">
          <p className="text-2xl font-semibold text-blue-950">Sort by Price: </p>
          <select id="sortSelect">

      <option >Sort Select</option>
      <option >Low to High</option>
      <option >High to Low</option>
    </select>
          
      </div>
    <div className="grid grid-cols-1 lg:grid-cols-2  items-center gap-16 justify-center my-10 ">
    {
      roomData.map(item => {
          return (
            <Link to={`/rooms/${item._id}`}>
               <div className="bg-slate-200 p-4 rounded-2xl">
              <p className="text-2xl font-semibold text-blue-950 text-center mb-5" >{item.title}</p>
             <div  className="group relative block h-64 sm:h-80 lg:h-96">
                <span className="absolute inset-0 border-2 border-dashed border-black"></span>
      
                <div className="relative flex h-full w-full transform items-end border-2 border-black bg-white transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2">
                <img className="h-full w-full" src={item.image} alt="" />
                  <div className="!pt-0 transition-opacity group-hover:absolute group-hover:opacity-0 ">
        
                  </div>
      
                  <div className="absolute opacity-0 transition-opacity group-hover:relative group-hover:opacity-100">
                  <img className="h-full w-full" src={item.image} alt="" />
           
                  </div>
                </div>
              </div>
              <div className="mt-2">
                  <p className="text-center text-2xl font-medium">Rack Rate: <span className="text-red-600">{item.price} BDT Per Night</span></p>
                  <p className="text-xl font-medium">- Room size : {item.room_size}</p>
                  <p className="text-xl font-medium">- {item.amenities[0]}</p>
                  <p className="text-xl font-medium">- {item.amenities[1]}</p>
              </div>
             </div>
             
             </Link>
          )
      })
    }
    </div>
  </div>
    </div>
  );
};

export default Rooms;
