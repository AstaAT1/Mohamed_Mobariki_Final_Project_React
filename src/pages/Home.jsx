import {useState , useEffect } from "react";
import { Link } from "react-router-dom";
import React from 'react'
import Navbar from "../components/navbar";
import Footer from "../components/footer"
import image from "../constant/image"
import {IoIosArrowForward , IoIosArrowBack } from "../constant/icons"




function Home() {

 
  return (
  
 <div>
      <Navbar />
<div></div>
<div className="flex justify-between px-43">
  <div className=" flex gap-10 flex-col w-[31%]">
    <Link to={{pathname:"shop"}}  className="overflow-hidden">
      <img src={image.shopProduct1} className="hover:scale-110 transition duration-800" alt="" />
      <Link className="absolute hover:bg-red-500 tracking-wider top-130 left-65 opacity-96  py-3 px-14 bg-white shadow ">DRESSES</Link>
    </Link>
    <div className="overflow-hidden">
      <img src={image.shopProduct4} className="hover:scale-110 transition duration-800"  alt="" />
            <Link className="absolute hover:bg-red-500 tracking-wider top-98 left-165 opacity-98  py-3 px-14 bg-white shadow ">WATCH</Link>
    </div>

  </div>
    <div className=" flex gap-10 flex-col w-[31%]">
    <div className="overflow-hidden">
      <img src={image.shopProduct2} className="hover:scale-110 transition duration-800" alt="" />

            <Link className="absolute hover:bg-red-500 tracking-wider top-223 left-65 opacity-98  py-3 px-14 bg-white shadow ">GLASSES</Link>
    </div>
    <div className="overflow-hidden">
      <img src={image.shopProduct5} className="hover:scale-110 transition duration-800"  alt="" />

            <Link className="absolute hover:bg-red-500 tracking-wider top-223 left-165 opacity-98  py-3 px-14 bg-white shadow ">FOOTERWEAR</Link>
    </div>

  </div>
    <div className=" flex gap-10 flex-col w-[31%]">
    <div  className="overflow-hidden">
      <img src={image.shopProduct3} className="hover:scale-110 transition duration-800" alt="" />
        <Link className="absolute hover:bg-red-500 tracking-wider top-130 left-272 opacity-96  py-3 px-14 bg-white shadow ">BAGS</Link>
    </div>
    <div className="overflow-hidden">
      <img src={image.shopProduct6} className="hover:scale-110 transition duration-800"  alt="" />
      <Link className="absolute hover:bg-red-500 tracking-wider top-223 left-265 opacity-98  py-3 px-14 bg-white shadow ">ACCESSORIES</Link>
    </div>

  </div>
</div>
      <Footer />
    </div>
   

  )
}

export default Home



