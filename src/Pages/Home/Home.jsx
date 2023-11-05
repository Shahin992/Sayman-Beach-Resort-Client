/* eslint-disable react/jsx-key */
import { useEffect, useState } from "react";
import Slider from "./Slider";



const Home = () => {
    const [todo,setTodo] = useState([])
    useEffect(() =>{
        fetch('/Things.json')
      .then(res => res.json())
      .then(data => setTodo(data))
    },[])
    console.log(todo);
    return (
        <div>
           <div className=" mb-10"> <Slider></Slider></div>

       

        
            
            
          
            
            
        </div>
    );
};

export default Home;