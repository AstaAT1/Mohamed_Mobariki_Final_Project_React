import React from 'react'
import { Link } from "react-router-dom";
import Navbar from "../components/navbar";
import Footer from "../components/footer"
import image from "../constant/image"
import BlogSection from '../components/blogSection';
import {IoIosArrowForward , IoIosArrowBack } from "../constant/icons"
import { useContext } from 'react';
import { CartContext } from '../context/cartContext';
import CarouselHome from '../components/carousel1';



function Home() {


const { addToCart } = useContext(CartContext);
 
  return (
  
<div className="flex flex-col gap-20">
 
  <div className="w-full flex-none">
     <Navbar />
    <CarouselHome />
  </div>

<div className="flex justify-between px-43">
  <div className=" flex gap-10 flex-col w-[31%]">
    <Link to="/shop"  className="overflow-hidden">
      <img src={image.shopProduct1} onClick={addToCart} className="hover:scale-110 transition duration-800" alt="" />
      <button className="absolute hover:bg-red-500 tracking-wider top-285 left-65 opacity-96  py-3 px-14 bg-white shadow ">DRESSES</button>
    </Link>
    <Link className="overflow-hidden"  to="/shop">
     
      <img src={image.shopProduct4} className="hover:scale-110 transition duration-800"  alt="" />
            <button className="absolute hover:bg-red-500 tracking-wider top-255 left-170 opacity-98  py-3 px-14 bg-white shadow ">WATCH</button>
    </Link>

  </div>
    <div className=" flex gap-10 flex-col w-[31%]">
    <Link className="overflow-hidden" to="/shop" >
     <img src={image.shopProduct2} className="hover:scale-110 transition duration-800" alt="" />

            <button className="absolute hover:bg-red-500 tracking-wider top-385 left-65 opacity-98  py-3 px-14 bg-white shadow ">GLASSES</button>
    </Link>
    <Link className="overflow-hidden"   to="/shop">
    <img src={image.shopProduct5} className="hover:scale-110 transition duration-800"  alt="" />

            <button className="absolute hover:bg-red-500 tracking-wider top-385 left-165 opacity-98  py-3 px-14 bg-white shadow ">FOOTERWEAR</button>
    </Link>

  </div>
    <div className=" flex gap-10 flex-col w-[31%]">
    <Link  className="overflow-hidden" to="/shop">
      <img src={image.shopProduct3} className="hover:scale-110 transition duration-800" alt="" />
        <button className="absolute hover:bg-red-500 tracking-wider top-285 left-272 opacity-96  py-3 px-14 bg-white shadow ">BAGS</button>
    </Link>
    <Link className="overflow-hidden" to="/shop">
       <img src={image.shopProduct6} className="hover:scale-110 transition duration-800"  alt="" />
      <button className="absolute hover:bg-red-500 tracking-wider top-385 left-265 opacity-98  py-3 px-14 bg-white shadow ">ACCESSORIES</button>
    </Link>

  </div>
</div>

{/* model section */}
 
<div className="bg-gray-100 py-16 px-10 lg:px-32">
  <div className="flex flex-col lg:flex-row gap-10">

    {/* LEFT CARD  */}
    <div className="relative flex-1 overflow-hidden group">
      <img src={image.model} alt="" className="w-full h-[420px] object-cover group-hover:scale-110 transition duration-500 "/>

  
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center">
        <p className="tracking-widest text-sm">The Beauty</p>
        <h2 className="text-5xl font-bold tracking-wider my-3">
          LOOKBOOK
        </h2>
        <button className="hover:border-b  hover:border-white px-6 py-2 text-sm transition">
          VIEW COLLECTION
        </button>
      </div>
    </div>

    {/* RIGHT CARD */}
    <div className="flex-1 bg-white flex flex-col items-center justify-center text-center overflow-hidden  ">

      <img
        src={image.model1}
        alt=""
        className=" h-100  hover:scale-130 transition duration-500"
      />

      <h3 className="text-gray-700 text-lg absolute top-500">
        Boxy2 T-Shirt with Roll Sleeve
      </h3>

      <p className="text-gray-900 font-semibold text-lg absolute top-508  mb-6">$20.00</p>

   <div className="flex gap-3 absolute top-518">

  <div className="border p-1 border-gray-300  flex justify-center items-center flex-col text-sm text-gray-700">
    <p className="text-xl">-2600</p>
    <p className="text-xs">days</p>
  </div>

  <div className="border border-gray-300  p-3 text-center flex justify-center items-center flex-col text-sm text-gray-700">
    <p className="text-xl">-13</p>
    <p className="text-xs">hrs</p>
  </div>

  <div className="border p-4 border-gray-300  text-center flex justify-center items-center flex-col text-sm text-gray-700">
    <p className="text-xl">-32</p>
    <p className="text-xs">mins</p>
  </div>

  <div className="border p-4 border-gray-300 text-center flex justify-center items-center flex-col text-sm text-gray-700">
    <p className="text-xl">-20</p>
    <p className="text-xs">secs</p>
  </div>

</div>
    </div>
  </div>
</div>
{/* Blog Section */}
<BlogSection/>



      <Footer />
    </div>
   

  )
}

export default Home



