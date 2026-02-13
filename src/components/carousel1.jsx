import { useState } from "react";
import images from "../constant/image";
import { FaChevronRight, FaChevronLeft } from "../constant/icons";

function CarouselHome() {

  const slides = [
    {
      id: 1,
      img: images.carousel1,
      subtitle: "Women Collection 2018",
      title: "New Arrivals",
    },
    {
      id: 2,
      img: images.carousel2,
      subtitle: "Summer Collection",
      title: "Trending Now",
    },
    {
      id: 3,
      img: images.carousel3,
      subtitle: "Winter Collection",
      title: "Hot Deals",
    },
  ];

  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <div className="mx-auto">
      <div className="relative overflow-hidden shadow-lg">

        <div className="relative h-[60vh] md:h-[80vh]">

          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-700 ${
                index === current ? "opacity-100" : "opacity-0"
              }`}
            >
              <img
                src={slide.img}
                className="object-cover w-full h-full"
                alt=""
              />

              <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white bg-black/30">
                <h3 className="text-xl md:text-2xl font-semibold">
                  {slide.subtitle}
                </h3>

                <h2 className="text-4xl md:text-6xl font-bold mt-3">
                  {slide.title}
                </h2>

                <button className="mt-6 bg-white  text-black px-10 py-2  rounded-full  ">
                  Shop Now
                </button>
              </div>
            </div>
          ))}

        </div>

  

        <button
          onClick={prevSlide}
          className="flex absolute top-1/2 left-3 -translate-y-1/2 z-40 items-center justify-center w-10 h-10 bg-white/30 rounded-full hover:bg-red-600 transition"
        >
          <FaChevronLeft />
        </button>

        <button
          onClick={nextSlide}
          className="flex absolute top-1/2 right-3 -translate-y-1/2 z-40 items-center justify-center w-10 h-10 bg-white/30 rounded-full hover:bg-red-600 transition"
        >
          <FaChevronRight />
        </button>

      </div>
    </div>
  );
}

export default CarouselHome;