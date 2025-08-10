import React from "react";
import { IoMdSearch } from "react-icons/io";
import NavBar from "./NavBar";

const Hero = () => {
  return (
    <div>
      <div className="flex justify-between bg-[#C1DCDC] my-24 mx-30 p-8 rounded-2xl h-120">
        <div>
          <p className="text-5xl font-extrabold">
            Buy your <br />
            dream plants
          </p>
          <div className="flex items-center gap-10 my-2">
            <div>
              <p className="text-3xl">50+</p>
              <p>Plant Species</p>
            </div>
            <hr className="border border-gray-500 h-10" />
            <div>
              <p className="text-3xl">100+</p>
              {/* add plant id count  */}
              <p>Customers</p>
              {/* add customer id count */}
            </div>
          </div>
          <div className=" bg-white px-3 py-2 my-6 rounded-xl w-80">
            <form action="" className="flex ">
              <input
                type="text"
                name=""
                id=""
                placeholder="What are you looking for?"
                className="outline-none w-75"
              />
              <p className="bg-[#C1DCDC] py-2 px-2 rounded-xl">
                <IoMdSearch className="hover:text-blue-900" />
              </p>
            </form>
          </div>
        </div>
        <div className="w-100 my-38">
          <img src="/arrow1-removebg-preview.png" alt="" />
        </div>
        <div className="bg-black h-95 w-98 my-13 rounded-l-full rounded-tr-full flex justify-around items-end">
          <img
            src="/bonsai-6790367_1280-removebg-preview.png"
            alt=""
            className="h-190"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
