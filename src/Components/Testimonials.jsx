import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Heading from "./Heading/Heading";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import customer1 from "../assets/customer1.jpg";
import customer2 from "../assets/customer2.jpg";
import customer3 from "../assets/customer3.jpg";
import customer4 from "../assets/customer4.jpg";
import customer5 from "../assets/customer5.jpg";
import "swiper/css";
import "swiper/css/navigation";
import { FaStar } from "react-icons/fa";

const Testimonials = () => {
  return (
    <section className="container mx-auto mb-18">
      <Heading highlight={"Customers"} heading={"Saying"} />

      <div class="flex gap-x-3 justify-end py-4">
        <button
          class="page-prev px-2 py-2 text-2xl rounded-lg 
               bg-zinc-200
               hover:bg-gradient-to-r hover:from-orange-400 hover:to-orange-500 hover:text-white cursor-pointer"
        >
          <MdKeyboardArrowLeft />
        </button>

        <button
          class="page-next px-2 py-2 text-2xl rounded-lg 
               bg-zinc-200 
               hover:bg-gradient-to-r hover:from-orange-400 hover:to-orange-500 hover:text-white cursor-pointer"
        >
          <MdKeyboardArrowRight />
        </button>
      </div>

      <Swiper
        navigation={{
          nextEl: ".page-next",
          prevEl: ".page-prev",
        }}
        loop={true}
        breakpoints={{
          640: { slidesPerView: 1, spaceBetween: 20 },
          768: { slidesPerView: 2, spaceBetween: 20 },
          1024: { slidesPerView: 3, spaceBetween: 20 },
        }}
        modules={[Navigation]}
        className="mySwiper"
      >
        {slideItems.map((items) => {
          return (
            <SwiperSlide className="bg-zinc-200 rounded-lg p-6">
              <div className="flex items-center gap-x-3">
                <img src={items.img} class="inline-block relative object-cover object-center rounded-full w-16 h-16 border border-slate-800 p-0.5" />

                <div>
                  <h4 className="text-xl font-bold">{items.name}</h4>
                  <p className="text-zinc-600">{items.profession}</p>
                  <span className="flex text-yellow-600 mt-2">
                    {Array.from({ length: items.rating }, (_, index) => (
                      <FaStar />
                    ))}
                  </span>
                </div>
              </div>
              <div className="mt-8 text-zinc-600 text-md min-h-[18vh]">
                <p>{items.description}</p>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;

const slideItems = [
  {
    id: 1,
    name: "Olivia Bennett",
    profession: "Food Lover",
    description: "The recipes here never disappoint. Every dish I’ve tried tastes amazing and the instructions are so easy to follow. I love how each post includes helpful tips, serving ideas.",
    rating: 3,
    img: customer1,
  },
  {
    id: 2,
    name: "Marcus Lee",
    profession: "Fitness Enthusiast",
    description: "As someone who focuses on nutrition, I’m always searching for healthy meals that actually taste good. This blog delivers both. The balance between flavor and clean ingredients is perfect.",
    rating: 5,
    img: customer2,
  },
  {
    id: 3,
    name: "Sofia Alvarez",
    profession: "Working Mom",
    description: "This blog completely changed how I plan meals for my family. The recipes are quick, reliable, and don’t require fancy ingredients. My kids have become fans of the pasta and smoothie sections.",
    rating: 4,
    img: customer3,
  },
  {
    id: 4,
    name: "Ethan Brooks",
    profession: "Travel Blogger",
    description: "I’ve traveled to many countries and tasted countless dishes, but what I love about this blog is how it captures the heart of global flavors. The step-by-step guides are clear, and easy to understand.",
    rating: 2,
    img: customer4,
  },
  {
    id: 5,
    name: "Layla Hassan",
    profession: "Vegan Cook",
    description: "Finding creative vegan recipes can be tough, but this blog makes it exciting. Every post offers new flavor combinations and practical cooking advice. I’ve tried several dishes, and simple to make.",
    rating: 3,
    img: customer5,
  },
];
