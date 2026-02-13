import { Link } from "react-router-dom";
import React from "react";
import {
  FaTwitter,
  FaFacebookF,
  FaPinterest,
  FaGooglePlusG,
  FaInstagram,
  CgProfile,
  GrShop,
} from "../constant/icons";
import images from "../constant/image";


function Navbar() {
  const { cartCount } = useCart(); // ✅ نجيبو العدد من context

  return (
    <div id="topo">
      <div className=" h-[19vh]">
        <div className="bg-gray-100 text-sm h-[37%] flex justify-between items-center px-11 text-gray-500">
          <div className="flex justify-center text-[17px] items-center gap-4">
            <FaFacebookF />
            <FaTwitter />
            <FaPinterest />
            <FaGooglePlusG className="text-2xl" />
            <FaInstagram />
          </div>
          <h1 className="text-sm">Free shipping for standard order over $100</h1>
          <div className="flex justify-center items-center gap-4">
            <h1>fashe@example.com</h1>
            <h1>wewe</h1>
          </div>
        </div>

        <div className=" h-[63%] flex justify-between items-center px-11 shadow">
          <img src={images.logo} alt="logo" />

          <div className="flex justify-center text-[16.5px] items-center gap-8 text-gray-700">
            <Link to="/home" className="hover:border-b border-red-700">
              Home
            </Link>
            <Link to="/shop" className="hover:border-b border-red-700">
              Shop
            </Link>
            <Link to="path" className="hover:border-b border-red-700">
              Sale
            </Link>
            <Link to="path" className="hover:border-b border-red-700">
              Features
            </Link>
            <Link to="/blog" className="hover:border-b border-red-700">
              Blog
            </Link>
            <Link to="path" className="hover:border-b border-red-700">
              About
            </Link>
            <Link to="path" className="hover:border-b border-red-700">
              Contact
            </Link>
          </div>

          <div className="flex justify-center items-center text-[28px] gap-5">
            <CgProfile className="border-r gap-10 w-15 text-gray-600" />

            {/* ✅ shop icon + badge */}
            <div className="relative">
              <GrShop className="text-gray-600" />

              {cartCount > 0 && (
                <span className="absolute -top-2 -right-3 bg-black text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;