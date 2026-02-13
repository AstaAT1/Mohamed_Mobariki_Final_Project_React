import React, { useState, useContext } from "react";
import image from "../constant/image";
import { FaChevronLeft, FaChevronRight } from "../constant/icons";
import { CartContext } from "../context/cartContext";

export default function FeaturedProductsCarousel() {
  const { addToCart } = useContext(CartContext);

  const [current, setCurrent] = useState(0);

  // نفس products ديال Shop
  const products = Array.from({ length: 8 }, (_, i) => ({
    id: i + 1,
    title:
      i === 0
        ? "Boxy T-Shirt with Roll Sleeve Detail"
        : `Boxy${i} T-Shirt with Roll Sleeve`,
    img: image[`p${i + 1}`],
    sale: i + 1 === 5,
    oldPrice: i + 1 === 5 ? "$30.00" : null,
    price: i + 1 === 5 ? "$20.00" : "$30.00",
  }));

  // تقسيم 4-4 بلا useMemo
  const pages = [];
  for (let i = 0; i < products.length; i += 4) {
    pages.push(products.slice(i, i + 4));
  }

  const next = () =>
    setCurrent(current === pages.length - 1 ? 0 : current + 1);

  const prev = () =>
    setCurrent(current === 0 ? pages.length - 1 : current - 1);

  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-center text-4xl font-bold mb-12">
          FEATURED PRODUCTS
        </h2>

        <div className="relative">

          {/* slides */}
          {pages.map((group, index) => (
            <div
              key={index}
              className={` ${
                index === current ? "opacity-100" : "opacity-0 absolute inset-0"
              }`}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {group.map((p) => (
                  <div key={p.id}>
                    <div className="relative bg-gray-100 overflow-hidden group">
                      {p.sale && (
                        <span className="absolute top-3 left-3 bg-red-500 text-white text-xs px-3 py-1 rounded-full z-10">
                          Sale
                        </span>
                      )}

                      <img
                        src={p.img}
                        alt=""
                        className="w-full h-[380px] object-cover"
                      />

                      <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition" />

                      <button
                        onClick={addToCart}
                        className="absolute left-1/2 -translate-x-1/2 bottom-9
                                   bg-black text-white rounded-full py-2 w-[180px]
                                   opacity-0 group-hover:opacity-100 transition"
                      >
                        ADD TO CART
                      </button>
                    </div>

                    <h3 className="mt-4 text-sm font-medium">{p.title}</h3>

                    <p className="text-sm text-gray-600">
                      {p.sale ? (
                        <>
                          <span className="line-through mr-2">
                            {p.oldPrice}
                          </span>
                          <span className="text-red-500">{p.price}</span>
                        </>
                      ) : (
                        p.price
                      )}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* arrows */}
          <button
            onClick={prev}
            className="relative right-25 bottom-70  text-3xl text-gray-400 opacity-35  w-10 h-10 rounded-full flex items-center justify-center"
          >
            <FaChevronLeft />
          </button>

          <button
            onClick={next}
            className="relative left-325 bottom-70   text-3xl text-gray-400 opacity-35  w-10 h-10 rounded-full flex items-center justify-center"
          >
            <FaChevronRight />
          </button>
        </div>
      </div>
    </div>
  )
}
