import React from "react";
import { BsBoxSeam } from "react-icons/bs";
import { PiPottedPlant } from "react-icons/pi";
import { SlCallOut } from "react-icons/sl";

const About = () => {
  return (
    <div>
      <div className="my-20 mx-5 md:mx-30 flex flex-col gap-10">
        <div className="flex flex-col items-center">
          <h2 className="text-2xl font-bold">About Us</h2>
          <p className="text-sm text-gray-600">
            Order now and appreciate the beauty of nature
          </p>
        </div>
        <div className=" gap-y-4 flex justify-between">
          <div className="text-center flex flex-col items-center gap-3">
            <button className="text-2xl bg-[#C1DCDC] rounded-full px-4 py-4">
              <PiPottedPlant />
            </button>
            <h2 className="font-bold">Large Assortment</h2>
            <p className="hidden md:block text-sm text-gray-600">
              we offer many different types of products
              <br className="hidden md:block" /> with fewer variations in each
              category.
            </p>
          </div>
          <div className="text-center flex flex-col items-center gap-3">
            <button className="text-2xl bg-[#C1DCDC] rounded-full px-4 py-4">
              <BsBoxSeam />
            </button>
            <h2 className="font-bold">Fast & Free Shipping</h2>
            <p className="hidden md:block text-sm text-gray-600">
              4-dqays or less delivery time, free shipping{" "}
              <br className="hidden md:block" /> and an expedited delivery
              option.
            </p>
          </div>
          <div className="text-center flex flex-col items-center gap-3">
            <button className="text-2xl bg-[#C1DCDC] rounded-full px-4 py-4">
              <SlCallOut />
            </button>
            <h2 className="font-bold">24/7 Support</h2>
            <p className="hidden md:block text-sm text-gray-600">
              answers to any business related inquiry
              <br className="hidden md:block" /> 24/7 and in real-time.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
