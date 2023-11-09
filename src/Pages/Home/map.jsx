/* eslint-disable react/jsx-key */
import { useEffect, useState } from "react";

const Map = () => {
  const [todo, setTodo] = useState([]);
  useEffect(() => {
    fetch("https://sayeman-hotel-server.vercel.app/things")
      .then((res) => res.json())
      .then((data) => setTodo(data));
  }, []);
  console.log(todo);
  return (
    <div className="p-4 w-full">
      <div className="flex flex-col md:flex-row max-w-[1200px] mx-auto gap-20 justify-between my-10">
        <div className="md:w-1/2 w-full">
          <div style={{ width: "100%" }}>
            <iframe
              width="100%"
              height="500"
              frameBorder="0"
              scrolling="no"
              marginHeight="0"
              marginWidth="0"
              src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Sayaman%20Beach%20Resort%20Marine%20Drive,%20Road,%20Cox's%20Bazar%204700+(Sayeman%20Beach%20Resort)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            >
              <a href="https://www.maps.ie/population/">Population mapping</a>
            </iframe>
          </div>
        </div>
        <div className="md:w-1/2 w-full">
          <h3 className="text-4xl font-semibold mb-8 text-red-600">
            Things to do
          </h3>
          <p className="md:w-[60%] w-full text-lg font-medium">
            Stay at Sayaman and enjoy the following activities at our private
            beach:
          </p>
          <div>
            {todo.map((item) => {
              return (
                <div className="flex md:w-1/2 w-full items-center justify-between border-b-2">
                  <h1 className="mb-2 text-xl">{item.name}</h1>
                  <img className="my-3" src={item.image} alt="" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Map;
