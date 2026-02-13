import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import image from "../constant/image";

function Shop() {
  
const products = Array.from({ length: 8 }, (_, i) => ({
  id: i + 1,
  title: `Boxy T-Shirt with Roll Sleeve`,
  img: image[`p${i + 1}`],

  sale: i + 1 == 5,

  oldPrice: i + 1 == 5 ? "$30.00" : null,
  price: i + 1 == 5 ? "$20.00" : "$30.00",
}))
  return (
    <div className="bg-white">
      <Navbar />

      <div className="relative">
        <img src={image.shop1} alt="" className="w-full h-[280px] object-cover" />
        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center">
          <h1 className="text-white text-5xl font-bold tracking-widest">
            FEATURED
          </h1>
         
        </div>
      </div>

      <section className="max-w-7xl mx-auto px-4 py-14">
        <div className="flex flex-col lg:flex-row gap-10">

          <aside className="w-full lg:w-[260px] space-y-10 text-sm">
         
            <div>
              <h2 className="font-bold mb-4 text-lg">Categories</h2>
              <ul className="space-y-2 text-gray-600">
                <li className="cursor-pointer">Best Seller (8 items)</li>
                <li className="cursor-pointer">Featured (8 items)</li>
                <li className="cursor-pointer">Men (8 items)</li>
                <li className="cursor-pointer">Women (8 items)</li>
              </ul>
            </div>

            {/* Color */}
            <div>
              <h2 className="font-bold mb-3 text-lg">color</h2>
              <div className="space-y-2 text-gray-600">
                {["black", "gray", "red"].map((c) => (
                  <label key={c} className="flex items-center gap-2">
                    <input type="checkbox" />
                    <span className="capitalize">{c}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Price */}
            <div>
              <h2 className="font-bold mb-3 text-lg">price</h2>
              <div className="space-y-2 text-gray-600">
                {["0-20", "20-40", "40-60"].map((p) => (
                  <label key={p} className="flex items-center gap-2">
                    <input type="checkbox" />
                    <span>{p}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Size */}
            <div>
              <h2 className="font-bold mb-3 text-lg">size</h2>
              <div className="space-y-2 text-gray-600">
                {["L", "M", "S", "XL"].map((s) => (
                  <label key={s} className="flex items-center gap-2">
                    <input type="checkbox" />
                    <span>{s}</span>
                  </label>
                ))}
              </div>
            </div>

         
            <div>
              <input
                placeholder="Search..."
                className="border border-gray-200 w-full p-3 rounded outline-none"
              />
            </div>
          </aside>

       
          <main className="flex-1">
          
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8 text-sm">
              <div className="flex gap-3">
                <select className="border border-gray-200 p-2 rounded bg-white">
                  <option>Alphabetically, A-Z</option>
                </select>

                <select className="border border-gray-200 p-2 rounded bg-white">
                  <option>8</option>
                </select>
              </div>

              <p className="text-gray-500">Showing 1 to 8 of 8 items</p>
            </div>

        
            <div className="flex flex-wrap gap-8">
              {products.map((p) => (
                <div
                  key={p.id}
                  className="w-full sm:w-[calc(50%-16px)] lg:w-[calc(33.333%-22px)]"
                >
                  <div className="relative bg-gray-100 overflow-hidden">
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
                  </div>

                  <h3 className="mt-4 text-sm font-medium text-gray-800">
                    {p.title}
                  </h3>
                 <div className="mt-1 text-sm">
  {p.sale ? (
    <div className="flex gap-2 items-center">
      <span className="line-through text-gray-400">
        {p.oldPrice}
      </span>
      <span className="text-red-500 font-semibold">
        {p.price}
      </span>
    </div>
  ) : (
    <span className="text-gray-600">{p.price}</span>
  )}
</div>
                </div>
              ))}
            </div>

           
            <div className="flex gap-3 mt-12">
              <button className="w-10 h-10 rounded-full border bg-black text-white">
                1
              </button>
              <button className="w-10 h-10 rounded-full border">2</button>
              <button className="w-10 h-10 rounded-full border">&gt;</button>
            </div>
          </main>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default Shop;

