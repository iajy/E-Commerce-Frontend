import React from "react";

const Hero = () => {
  return (
    <div>
      <div className="flex justify-between bg-[#C1DCDC] my-4 mx-10 p-8 rounded-2xl h-dvh/2">
        <div>
          <p className="text-3xl font-extrabold">
            Buy your <br />
            dream plants
          </p>
          <div className="flex items-center gap-10 my-2">
            <div>
              <p className="text-2xl">50+</p>
              <p>Plant Species</p>
            </div>
            <hr className="border border-gray-500 h-10" />
            <div>
              <p className="text-2xl">100+</p>
              {/* add plant id count  */}
              <p>Customers</p>
              {/* add customer id count */}
            </div>
          </div>
          <div className=" bg-white px-3 py-2 my-6 rounded-xl w-80">
            <form action="" className="flex justify-between">
              <input
                type="text"
                name=""
                id=""
                placeholder="What are you looking for?"
                
                className="outline-none"
              />
              <p className="bg-[#C1DCDC] py-1 px-2 rounded-xl">O</p>
            </form>
          </div>
        </div>
        <div className="bg-black h-70 w-70 rounded-l-full rounded-tr-full"></div>
      </div>
    </div>
  );
};

export default Hero;
