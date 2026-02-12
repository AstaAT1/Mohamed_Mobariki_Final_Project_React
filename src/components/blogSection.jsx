import React from "react";
import { useBlogs } from "../context/blogContext";

export default function BlogSection() {
  const { blogs } = useBlogs();

  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-6 py-14">
        <h2 className="text-center text-4xl font-extrabold tracking-wider mb-12">
          OUR BLOG
        </h2>

        <div className="flex flex-wrap gap-10">
          {blogs.map((b) => (
            <article
              key={b.id}
              className="w-full md:w-[calc(33.333%-26.7px)]"
            >
              {/* image */}
              <div className="overflow-hidden">
                <img
                  src={b.image}
                  alt={b.title}
                  className="w-full h-[280px] object-cover"
                />
              </div>

              {/* title */}
              <h3 className="mt-6 text-xl font-semibold text-gray-900 leading-snug">
                {b.title}
              </h3>

              {/* meta */}
              <p className="mt-2 text-sm text-gray-500">
                {b.p1}
              </p>

              {/* excerpt */}
              <p className="mt-6 text-sm text-gray-500 leading-7">
                {b.p2.length > 140 ? b.p2.slice(0, 140) + "..." : b.p2}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}