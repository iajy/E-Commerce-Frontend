import React from "react";

const Categories = () => {
  return (
    <div className=" flex flex-col gap-y-6 my-10">
      <div className="text-center my-10">
        <h2 className="text-2xl font-bold">Categories</h2>
        <p className="text-gray-600">Find what you are looking for</p>
      </div>
      <div className="flex bg-[#C1DCDC] justify-between items-center px-30 py-5 h-130">
        <div>
          <div className="w-65 flex flex-col -my-74">
            <img
              src="amaryllis-1984899_1280.jpg"
              alt=""
              className=" rounded-xl"
            />
            <p className="font-bold text-center px-2 ">Natural Plants</p>
          </div>
        </div>

        <div className="w-65 flex flex-col gap-2 items-center">
          <img
            src="greenhouse-5095328_1280.jpg"
            alt=""
            className="rounded-xl"
          />
          <p className="font-bold">Plant Accessories</p>
          <p>Explore the Accessories here.</p>
          <button className="px-3 py-2 bg-white rounded-sm">
            Explore &rarr;
          </button>
        </div>
        <div>
          <div className="w-65 flex flex-col -my-74">
            <img
              src="ornamental-flowerpot-5429622_1280.jpg"
              alt=""
              className=" rounded-xl"
            />
            <p className="font-bold text-center px-2 ">Artificial Plants</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
