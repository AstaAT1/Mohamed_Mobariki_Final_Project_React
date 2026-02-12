import { Link } from "react-router-dom";
import React from 'react'
import { FaTwitter, FaFacebookF, FaPinterest,FaArrowUpLong ,  FaGooglePlusG, FaInstagram,MdKeyboardDoubleArrowUp ,  CgProfile, GrShop } from "../constant/icons"

function Footer() {
    return (
        <div  className="bg-gray-100 scroll-smooth px-10 py-18 flex flex-col gap-35 text-gray-500">
            <div className="flex justify-around gap-4 ">
                <div className="flex gap-10  flex-col"> <h1 className="font-bold text-sm text-black ">GET IN TOUCH</h1>
                    <p className="w-100 text-sm ">Any questions? Let us know in store at 8th floor, 379 Hudson St, New York, NY 10018 or call us on (+1) 96 716 6879</p>
                    <div className="flex  text-[17px]  gap-4">
                        <FaFacebookF />
                        <FaTwitter />
                        <FaPinterest />
                        <FaGooglePlusG className="text-2xl" />
                        <FaInstagram />
                    </div>
                </div>
                <div className="flex gap-10  flex-col">
                    <h1 className="font-bold text-sm text-black ">CATEGORIES</h1>
                    <div className="text-sm gap-4 flex flex-col">
                        <p>Men</p>
                        <p>Women</p>
                        <p>Dresses</p>
                        <p>Sunglasses</p>

                    </div>

                </div>
                  <div className="flex gap-10  flex-col">
                    <h1 className="font-bold text-sm text-black ">CATEGORIES</h1>
                    <div className="text-sm gap-4 flex flex-col">
                        <p>Men</p>
                        <p>Women</p>
                        <p>Dresses</p>
                        <p>Sunglasses</p>

                    </div>

                </div>
                  <div className="flex gap-10  flex-col">
                    <h1 className="font-bold text-sm text-black ">CATEGORIES</h1>
                    <div className="text-sm gap-4 flex flex-col">
                        <p>Men</p>
                        <p>Women</p>
                        <p>Dresses</p>
                        <p>Sunglasses</p>

                    </div>

                </div>
                <div className="flex gap-10  flex-col">
                    <h1 className="font-bold text-sm text-black ">NEWSLETTER</h1>
                    <input type="text" placeholder="Entre Email"  className="text-sm"/>
                    <button className="bg-black text-amber-50 rounded-full py-3 ">SUBSCRIBE</button>
                </div>
   

            </div>
            <div className="flex justify-center items-center">
               <h1><span className="text-sm text-gray-400">Copyright © 2022</span> Shopify Theme Developed by MassTechnologist <span className="text-sm text-gray-400">All rights reserved.</span> </h1>
            </div>
         <a href="#topo" className="fixed right-10 bottom-10 w-[40px] h-[40px] rounded bg-amber-700 text-amber-50 flex items-center justify-center scroll-smooth shadow">
        <MdKeyboardDoubleArrowUp className="text-xl"/>
            </a>
        </div>
    )
}
export default Footer