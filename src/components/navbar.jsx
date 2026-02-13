import { Link } from "react-router-dom";
import React from 'react'
import {FaTwitter , FaFacebookF , FaPinterest , FaGooglePlusG ,FaInstagram ,  CgProfile , GrShop} from "../constant/icons"
import images from "../constant/image"
import { useContext } from "react"
import { CartContext } from "../context/cartContext";





function Navbar() {
  const { count } = useContext(CartContext);
  const { show } = useContext(CartContext);


  return (
    <>
     {show && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white p-10 rounded shadow text-center">
            <h3 className="text-lg font-semibold">Product added to cart !</h3>
          </div>
        </div>
      )}
    <div id="topo">
      <div className=" h-[19vh]">
    <div className="bg-gray-100 text-sm h-[37%] flex justify-between items-center px-11 text-gray-500  ">
      <div className="flex justify-center text-[17px] items-center gap-4">
      <FaFacebookF/>
    <FaTwitter/>
    <FaPinterest/>
    <FaGooglePlusG className="text-2xl"/>
    <FaInstagram/>
      </div>
      <h1 className="text-sm">Free shipping for standard order over $100</h1>
      <div className="flex justify-center items-center gap-4">
        <h1 className="">
fashe@example.com

</h1>
<h1>wewe</h1>
      </div>

    </div>
    <div className=" h-[63%] flex justify-between items-center px-11 shadow">

      <img src={images.logo} alt="logo" />
      <div className="flex justify-center text-[16.5px] items-center gap-8 text-gray-700">
    <Link to= "/home"  className="hover:border-b border-red-700">Home</Link>
    <Link to="/shop" className="hover:border-b border-red-700">Shop</Link>
    <Link to="path" className="hover:border-b border-red-700">Sale</Link>
    <Link to="path" className="hover:border-b border-red-700">Features</Link>
    <Link to="/blog" className="hover:border-b border-red-700">Blog</Link>
    <Link to="path" className="hover:border-b border-red-700">About</Link>
    <Link to="path" className="hover:border-b border-red-700">Contact</Link>

      </div>
      <div className="flex justify-center items-center text-[28px] gap-5 ">
 <Link to="/Login">
    <CgProfile className="border-r gap-10 w-15 text-gray-600 cursor-pointer" />
  </Link>
    <div className="relative">
  <GrShop className="text-gray-600" />

  {count > 0 && (
    <span className="absolute -top-2 -right-2 bg-black text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
      {count}
    </span>
  )}
</div>
      </div>

    </div>
      </div>
    </div>
</>
  )
}

export default Navbar