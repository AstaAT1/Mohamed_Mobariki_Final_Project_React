
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
      <button className="absolute hover:bg-red-500 tracking-wider top-130 left-65 opacity-96  py-3 px-14 bg-white shadow ">DRESSES</button>
    </Link>
    <Link className="overflow-hidden"  to={{pathname:"shop"}}>
     
      <img src={image.shopProduct4} className="hover:scale-110 transition duration-800"  alt="" />
            <button className="absolute hover:bg-red-500 tracking-wider top-98 left-165 opacity-98  py-3 px-14 bg-white shadow ">WATCH</button>
    </Link>

  </div>
    <div className=" flex gap-10 flex-col w-[31%]">
    <Link className="overflow-hidden" to={{pathname:"shop"}} >
     <img src={image.shopProduct2} className="hover:scale-110 transition duration-800" alt="" />

            <button className="absolute hover:bg-red-500 tracking-wider top-223 left-65 opacity-98  py-3 px-14 bg-white shadow ">GLASSES</button>
    </Link>
    <Link className="overflow-hidden"   to={{pathname:"shop"}}>
    <img src={image.shopProduct5} className="hover:scale-110 transition duration-800"  alt="" />

            <button className="absolute hover:bg-red-500 tracking-wider top-223 left-165 opacity-98  py-3 px-14 bg-white shadow ">FOOTERWEAR</button>
    </Link>

  </div>
    <div className=" flex gap-10 flex-col w-[31%]">
    <Link  className="overflow-hidden" to={{pathname:"shop"}}>
      <img src={image.shopProduct3} className="hover:scale-110 transition duration-800" alt="" />
        <button className="absolute hover:bg-red-500 tracking-wider top-130 left-272 opacity-96  py-3 px-14 bg-white shadow ">BAGS</button>
    </Link>
    <Link className="overflow-hidden" to={{pathname:"shop"}}>
       <img src={image.shopProduct6} className="hover:scale-110 transition duration-800"  alt="" />
      <button className="absolute hover:bg-red-500 tracking-wider top-223 left-265 opacity-98  py-3 px-14 bg-white shadow ">ACCESSORIES</button>
    </Link>

  </div>
</div>
   <div className="bg-gray-100 py-16 px-10 lg:px-32">
  <div className="flex flex-col lg:flex-row gap-10">

    {/* LEFT CARD (LOOKBOOK) */}
    <div className="relative flex-1 overflow-hidden">
      <img
        src={image.model}
        alt=""
        className="w-full h-[420px] object-cover"
      />

      {/* overlay text */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center">
        <p className="tracking-widest text-sm">The Beauty</p>
        <h2 className="text-5xl font-bold tracking-wider my-3">
          LOOKBOOK
        </h2>
        <button className=" px-6 py-2 text-sm tracking-wider hover:border-b hover:border-white transition">
          VIEW COLLECTION
        </button>
      </div>
    </div>

    {/* RIGHT CARD (PRODUCT) */}
    <div className="flex-1 bg-white flex flex-col items-center justify-center text-center py-10 px-6">

      <img
        src={image.shopProduct4}
        alt=""
        className="w-[260px] object-contain mb-6"
      />

      <h3 className="text-gray-700 text-lg mb-2">
        Boxy2 T-Shirt with Roll Sleeve
      </h3>

      <p className="text-gray-900 font-semibold text-lg mb-6">$20.00</p>

      {/* COUNTDOWN UI */}
      <div className="flex gap-3">
        {[
          { n: "-2600", l: "days" },
          { n: "-12", l: "hrs" },
          { n: "-57", l: "mins" },
          { n: "-13", l: "secs" },
        ].map((item, i) => (
          <div
            key={i}
            className="border px-5 py-3 text-center text-sm text-gray-700"
          >
            <p className="font-semibold">{item.n}</p>
            <p className="text-xs">{item.l}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
</div>
      <Footer />
    </div>
   

  )
}

export default Home



