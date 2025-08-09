import React from "react";

const BestSelling = () => {
  return (
    <div>
      <div className="h-100 my-20 mx-20 flex justify-between ">
        <div className="flex flex-col gap-3">
          <h2 className="font-bold text-2xl">
            Best Selling <br /> Plants
          </h2>
          <p className="text-sm text-gray-600">
            Easiest way to <br />
            healthy life by buying <br />
            your favorite plants
          </p>
          <button className="p-2 text-sm font-medium bg-[#C1DCDC] rounded-sm">
            See more &rarr;
          </button>
        </div>
        <div className="w-50 flex flex-col gap-3">
          <img
            src="/nature-7595625_1280.jpg"
            alt=""
            className="rounded-2xl shadow-gray-600 shadow-2xl"
          />
          <div>
            <p>Name_</p> {/*   from db  */}
            <p>Prize</p>
          </div>
        </div>
        <div className="w-50 flex flex-col gap-3">
          <img
            src="/pigmyweeds-6947384_1280.jpg"
            alt=""
            className="rounded-2xl shadow-gray-600 shadow-2xl"
          />
          <div>
            <p>Name_</p>
            <p>Prize</p>
          </div>
        </div>
        <div className="w-50 flex flex-col gap-3">
          <img
            src="/plant-4073520_1280.jpg"
            alt=""
            className="rounded-2xl shadow-gray-600 shadow-2xl"
          />
          <div>
            <p>Name_</p>
            <p>Prize</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestSelling;
