import React from "react";
import { CheckCircle2 } from "lucide-react";
import { pricingOptions } from "../constants";

const Pricing = () => {
  return (
    <div className="mt-20 ">
      <h2 className=" text-center mb-10 text-5xl">Pricing</h2>
      <div
        className=" flex text-center justify-center
      items-center flex-wrap"
      >
        {pricingOptions.map((item, index) => (
          <div
            key={index}
            className=" border-[0.5px] rounded-md
             border-gray-400 mx-2 px-10 py-4 text-left"
          >
            <p className=" text-4xl mb-4">
              {item.title}
              {item.title === "Pro" && (
                <span
                  className="bg-gradient-to-r from-orange-500 to-orange-800
                text-transparent bg-clip-text text-xl"
                >
                  {" "}
                  (Most Popular){" "}
                </span>
              )}
            </p>

            <p className=" text-3xl mb-4">{item.price}</p>
            <ul>
              {item.features.map((feature, index) => (
                <li className="list-none flex" key={index}>
                  <CheckCircle2 className="w-4 h-4" />
                  <p className=" px-2 text-sm mb-4">{feature}</p>
                </li>
              ))}
            </ul>
            <a
              href="#"
              className=" inline-flex justify-center text-center
              w-full h-12 tracking-tight text-xl hover:bg-orange-900
               mt-8 border border-orange-900 transition 
               duration-200 p-5 rounded-lg items-center"
            >
              Subscribe
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
