import React from 'react'
import Card from './Card'
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import { useState } from 'react';
const Testimonials = (props) => {
    const {reviews}=props;
    
    const [index,setIndex] = useState(0);
    const LeftHandler=()=>{
        if(index-1<0){
            setIndex(reviews.length-1);
            
        }
        else{
            setIndex(index-1);
            
        }
    }
    const RightHandler=()=>{
        if(index+1>=reviews.length){
            setIndex(0);
           
        }
        else{
            setIndex(index+1);
           
        }

    }
    const SurpriseHandler=()=>{
        const randomIndex=Math.floor(Math.random()*reviews.length);
        setIndex(randomIndex);
        
    }
    return (
      <div className="w-[85vw] md:w-[700px] bg-white mt-10 p-10 transition-all duration-200 hover:shadow-xl rounded-lg">
        <Card review={reviews[index]} />
        <div className="flex text-3xl mt-5 gap-3 text-violet-400 font-bold justify-center">
          <button onClick={LeftHandler} className="cursor-pointer hover:text-violet-500">
            <FaChevronLeft />
          </button>
          <button onClick={RightHandler} className="cursor-pointer hover:text-violet-500">
            <FaChevronRight />
          </button>
        </div>
        <div>
          <button onClick={SurpriseHandler} className="bg-violet-400 hover:bg-violet-500 transition-all duration-200 cursor-pointer px-10 py-2 rounded-md font-bold text-white text-lg mt-5">
            Surprise Me
          </button>
        </div>
      </div>
    );
}

export default Testimonials
