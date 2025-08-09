import React from "react";

const Categories = () => {
  return (
    <div className=" flex flex-col gap-y-6 my-10">
      <div className="text-center">
        <h2 className="text-2xl font-bold">Categories</h2>
        <p className="text-gray-600">Find what you are looking for</p>
      </div>
      <div className="flex bg-[#C1DCDC] justify-between items-center px-20 py-5 h-80">
        <div>
          <img src="" alt="" />
          <p className="font-bold">Natural Plants</p>
        </div>
        <div className="flex flex-col gap-2">
          <img src="" alt="" />
          <p  className="font-bold">Plant Accessories</p>
          <p >Explore the Accessories <br /> here.</p>
          <button className="px-3 py-2 bg-white rounded-sm">Explore &rarr;</button>
        </div>
        <div>
          <img src="" alt="" />
          <p  className="font-bold">Artifical Plants</p>
        </div>
      </div>
    </div>
  );
};

export default Categories;
