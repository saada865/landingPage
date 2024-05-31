import React from "react";
import { testimonials } from "../constants";

const Testimonials = () => {
  return (
    <div className=" mt-20">
      <div className=" text-center justify-center items-center">
        <div className=" text-6xl mb-2">What people are saying</div>
        <div className="flex flex-wrap  justify-center">
          {testimonials.map((item, index) => (
            <div
              className=" flex flex-col
             bg-black m-2 lg:w-1/4 sm:w-1/2 p-5 text-sm text-left"
              key={index}
            >
              {item.text}
              <div className="flex mt-5">
                <img
                  className=" h-10 w-10 mr-4 rounded-full"
                  src={item.image}
                  alt="img1"
                />
                <div className=" flex flex-col mt-2 text-left">
                  <p className="text-sm">{item.user}</p>
                  <p className=" text-xs text-neutral-500"> {item.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
