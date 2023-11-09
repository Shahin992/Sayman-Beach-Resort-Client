/* eslint-disable react/jsx-key */

import PageTitle from "../Pagetitle/PageTitle";

import Slider from "./Slider";
import SpecialOffer from "./SpecialOffer";
import Map from "./map";



const Home = () => {
    
    return (

        
        <div>
            <PageTitle title={'Home'}/>
           <div className=" mb-10"> <Slider></Slider></div>
           <div><Map></Map></div>
           <div><SpecialOffer></SpecialOffer></div>

       
           
        
            
            
          
            
            
        </div>
    );
};

export default Home;