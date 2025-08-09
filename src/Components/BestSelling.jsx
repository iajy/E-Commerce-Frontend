import React from "react";

const BestSelling = () => {
  return (
    <div>
      <div className="my-8 mx-10 flex justify-between">
        <div className="flex flex-col gap-2">
          <h2 className="font-bold text-xl">
            Best Selling <br /> Plants
          </h2>
          <p className="text-sm text-gray-600">
            Easiest way to <br />
            healthy life by buying <br />
            your favorite plants
          </p>
          <button className="p-2 text-sm font-medium bg-[#C1DCDC] rounded-sm">See more &rarr; </button>
        </div>
        <div>
          <img src="" alt="" />
          <p>Name_</p>
          <p>Prize</p>
        </div>
        <div>
          <img src="" alt="" />
          <p>Name_</p>
          <p>Prize</p>
        </div>
        <div>
          <img src="" alt="" />
          <p>Name_</p>
          <p>Prize</p>
        </div>
      </div>
    </div>
  );
};

export default BestSelling;
