import React, { useEffect } from 'react'
import {ChevronLeft , ChevronRight} from "react-feather"
import { Carousel } from "@material-tailwind/react";
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const ImageCarousel = ({children : slides  ,autoSlide = false , autoSlideInterval=1000 }) => {

    const [curr , setCurr] = useState(0)

    const prev = () => {
           if(curr==0){
            setCurr(slides.length-1)
           }else{
            setCurr (  (curr) =>( curr =curr-1))
           }
           
    }

    const next = () => {
        if(curr==slides.length-1){
            setCurr(0)
        }else{
            setCurr (  (curr) =>( curr = curr+1))
        }
        
    }


    useEffect (()=>{
        if(!autoSlide) return
        const slideInterval = setInterval(next , autoSlideInterval)
        return  ()=> clearInterval(slideInterval)
    } , [])




  return (
    <div className='  overflow-hidden relative    w-[900px]    bg-orange-200 border  rounded-md '>

        <div className='flex transition-transform  ease-out duration-500 object-cover ' style={{transform : `translateX(-${curr * 100}%)`}}  >{slides}</div>
        <div className='absolute inset-0 flex items-center justify-between p-4'>
            <botton onClick = {prev}  className="p-1 rounded-full shadow bg-white text-gray-800 hover:bg-white"  >
                <ChevronLeft size={40}/>
            </botton>

            <botton  onClick = {next} className="p-1 rounded-full shadow bg-white text-gray-800 hover:bg-white" >
                <ChevronRight size={40}/>
            </botton>
        </div>



        <div className='absolute bottom-4 right-0 left-0  '>

            <div className='flex items-center justify-center gap-2  '>

                {slides.map((_ , i) => (
                    <div className={`transition-all w-3 h-3 bg-white rounded-full ${curr == i ? "p-2":"bg-opacity-50"}  `}  key={uuidv4()} />
                ) )}

            </div>

        </div>
         
    </div>
  )
}

export default ImageCarousel




 

