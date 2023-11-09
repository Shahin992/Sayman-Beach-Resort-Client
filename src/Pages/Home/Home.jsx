/* eslint-disable react/jsx-key */

import About_Us from "../About/About";
import ContactUs from "../About/ContactUs";
import PageTitle from "../Pagetitle/PageTitle";

import Slider from "./Slider";
import SpecialOffer from "./SpecialOffer";
import Map from "./map";



const Home = () => {
    
    return (

        
        <div>
            <PageTitle title={'Home'}/>
           <div className=" mb-10"> <Slider></Slider></div>
           <About_Us></About_Us>
           <div><Map></Map></div>
           <div><SpecialOffer></SpecialOffer></div>
           <ContactUs></ContactUs>

       
           
        
            
            
          
            
            
        </div>
    );
};

export default Home;