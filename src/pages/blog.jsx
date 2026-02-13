import Navbar from "../components/navbar";
import Footer from "../components/footer";
import images from "../constant/image";
import { useContext } from "react";
import { BlogContext } from "../context/blogContext";
import { useParams } from "react-router-dom";
import { CgProfile } from "../constant/icons"

export default function Blog() {
  const { blogs } = useContext(BlogContext);
  const { id } = useParams();

  const blog = blogs.find((b) => String(b.id) === String(id));


  return (
    <div className="bg-white">
      <Navbar />

      {/* Banner */}
      <div className="relative">
        <img
          src={images.banner}
          alt=""
          className="w-full h-[280px] object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-white text-5xl font-bold tracking-widest">NEWS</h1>
        </div>
      </div>

      {/* CONTENT */}
      <div className="max-w-7xl mx-auto px-6 py-14">
        {/* breadcrumb */}
        <p className="text-sm text-gray-500 mb-10">
          Home <span className="mx-2">{">"}</span> News{" "}
          <span className="mx-2">{">"}</span> {blog.title}
        </p>

        <div className="flex flex-col lg:flex-row gap-14">
          {/* LEFT */}
          <div className="lg:w-[70%]">
            <img src={blog.image} alt="" className="w-full" />

            <h2 className="text-4xl font-semibold mt-10">{blog.title}</h2>

            <p className="text-sm text-gray-500 mt-3">
              {blog.p1
                .replaceAll("|", " | ")
                .replace("28 Dec, 2017", "28 Dec, 2017")}
            </p>

            <p className="text-gray-600 leading-8 mt-10">{blog.p2}</p>
            <p className="text-gray-600 leading-8 mt-8">{blog.p3}</p>

            {/* TAGS top like image */}
            <div className="flex items-center gap-4 mt-12">
              <p className="text-sm text-gray-600">Tags Cloud</p>
              <div className="flex gap-3">
                <span className="px-4 py-1 rounded-full border text-sm text-gray-600">
                  crafts
                </span>
                <span className="px-4 py-1 rounded-full border text-sm text-gray-600">
                  street style
                </span>
              </div>
            </div>

            
            <h3 className="text-2xl font-bold mt-14">1 COMMENT TO SHOW</h3>

            <div className="flex gap-6 mt-8">
              <div className="w-14 h-14 rounded-full bg-gray-200" />
              <div>
                <p className="text-sm text-gray-800">
                  <span className="font-semibold">test name</span>
                  <span className="text-gray-500"> / Jan 11, 2018 Reply </span>
                </p>
                <p className="text-sm text-gray-600 mt-2">test message</p>
              </div>
            </div>

            {/* LEAVE COMMENT */}
            <h3 className="text-2xl font-bold mt-14">LEAVE A COMMENT</h3>
            <p className="text-sm text-gray-500 mt-3">
              Your email address will not be published. Required fields are
              marked *
            </p>

            <div className="mt-10 space-y-6">
              <textarea
                placeholder="Message"
                className="w-full border border-gray-200 p-5 h-52 outline-none"
              />

              <input
                placeholder="Your Name"
                className="w-[320px] max-w-full border border-gray-200 p-4 outline-none block"
              />

              <input
                placeholder="Email address"
                className="w-[320px] max-w-full border border-gray-200 p-4 outline-none block"
              />

              <button className="bg-black text-white px-10 py-3 rounded-full">
                POST COMMENT
              </button>

              <p className="text-sm text-gray-500">
                Please note, comments must be approved before they are published.
              </p>
            </div>
          </div>

          {/* RIGHT SIDEBAR */}
          <aside className="lg:w-[30%]">
            {/* Search */}
            <div className="flex items-center border border-gray-200 rounded-full px-5 py-3">
              <input
                placeholder="Search all articles..."
                className="flex-1 outline-none text-sm"
              />
              <span className="text-gray-500 text-lg">⌕</span>
            </div>

            {/* Featured Products */}
            <h3 className="text-3xl font-bold mt-12">Featured Products</h3>

            <div className="mt-8 space-y-8">
              {/* 1 */}
              <div className="flex gap-5">
                <img
                  src={blog.imageHelp1}
                  alt=""
                  className="w-[70px] h-[90px] object-cover"
                />
                <div>
                  <p className="text-gray-700">{blog.phelp1}</p>
                  <p className="text-sm text-gray-500 mt-2">{blog.prix}</p>
                </div>
              </div>

              {/* 2 */}
              <div className="flex gap-5">
                <img
                  src={blog.imageHelp2}
                  alt=""
                  className="w-[70px] h-[90px] object-cover"
                />
                <div>
                  <p className="text-gray-700">{blog.phelp2}</p>
                  <p className="text-sm text-gray-500 mt-2">{blog.prix}</p>
                </div>
              </div>

              {/* 3 */}
              <div className="flex gap-5">
                <img
                  src={blog.imageHelp3}
                  alt=""
                  className="w-[70px] h-[90px] object-cover"
                />
                <div>
                  <p className="text-gray-700">{blog.phelp3}</p>
                  <p className="text-sm text-gray-500 mt-2">{blog.prix}</p>
                </div>
              </div>

              {/* 4 */}
              <div className="flex gap-5">
                <img
                  src={blog.imageHelp4}
                  alt=""
                  className="w-[70px] h-[90px] object-cover"
                />
                <div>
                  <p className="text-gray-700">{blog.phelp4}</p>
                  <p className="text-sm text-gray-500 mt-2">{blog.prix}</p>
                </div>
              </div>

              {/* 5 */}
              <div className="flex gap-5">
                <img
                  src={blog.imageHelp5}
                  alt=""
                  className="w-[70px] h-[90px] object-cover"
                />
                <div>
                  <p className="text-gray-700">{blog.phelp5}</p>
                  <p className="text-sm text-gray-500 mt-2">{blog.prix}</p>
                </div>
              </div>
            </div>

            {/* Tags Cloud */}
            <h3 className="text-3xl font-bold mt-16">Tags Cloud</h3>
            <div className="flex gap-3 mt-6">
              <span className="px-4 py-1 rounded-full border text-sm text-gray-600">
                crafts
              </span>
              <span className="px-4 py-1 rounded-full border text-sm text-gray-600">
                street style
              </span>
            </div>
          </aside>
        </div>
      </div>

      <Footer />
    </div>
  );
}
