/* eslint-disable react/jsx-key */
import { useLoaderData } from "react-router-dom";

const Rooms = () => {
    const roomData = useLoaderData();
    console.log(roomData);
  return (
    <div>
      <div className="grid grid-cols-2 items-center gap-16 justify-center my-10 px-10">
      {
        roomData.map(item => {
            return (
                <div className="bg-slate-200 p-4 rounded-2xl">
                <p className="text-2xl font-semibold text-blue-950 text-center mb-5" >{item.title}</p>
               <a href="" className="group relative block h-64 sm:h-80 lg:h-96">
                  <span className="absolute inset-0 border-2 border-dashed border-black"></span>
        
                  <div className="relative flex h-full w-full transform items-end border-2 border-black bg-white transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2">
                  <img className="h-full w-full" src={item.image} alt="" />
                    <div className="!pt-0 transition-opacity group-hover:absolute group-hover:opacity-0 ">
          
                    </div>
        
                    <div className="absolute opacity-0 transition-opacity group-hover:relative group-hover:opacity-100">
                    <img className="h-full w-full" src="https://sayemanresort.com/wp-content/uploads/2019/10/Panorama-Ocean-Sutie.jpg" alt="" />
             
                    </div>
                  </div>
                </a>
                <div className="mt-2">
                    <p className="text-center text-2xl font-medium">Rack Rate: {item.price} BDT</p>
                    <p className="text-xl font-medium">- Room size : {item.room_size}</p>
                    <p className="text-xl font-medium">- {item.amenities[0]}</p>
                    <p className="text-xl font-medium">- {item.amenities[1]}</p>
                </div>
               </div>
            )
        })
      }
      </div>
    </div>
  );
};

export default Rooms;
