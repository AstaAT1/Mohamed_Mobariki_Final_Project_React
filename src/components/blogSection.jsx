import React, { useContext } from "react";
import { BlogContext } from "../context/blogContext";
import { Link } from "react-router-dom";

export default function BlogSection() {
  const { blogs } = useContext(BlogContext);

  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-6 py-14">
        <h2 className="text-center text-4xl font-extrabold tracking-wider mb-12">
          OUR BLOG
        </h2>

        <div className="flex flex-wrap gap-10">
          {blogs.map((b) => (
            <Link to={`/blog/${b.id}`} key={b.id} className="w-full md:w-[30%]">
              <img
                src={b.image}
                alt=""
                className="w-full h-[280px] object-cover"
              />

              <h3 className="mt-6 text-xl font-semibold">{b.title}</h3>
              <p className="text-sm text-gray-500 mt-2">{b.p1}</p>
              <p className="text-sm text-gray-500 mt-4">
                {b.p2.slice(0, 120)}...
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
