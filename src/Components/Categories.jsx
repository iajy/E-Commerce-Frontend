import React from "react";

const Categories = () => {
  return (
    <div className=" flex flex-col gap-y-6 my-10">
      <div className="text-center md:my-10">
        <h2 className="text-2xl font-bold">Categories</h2>
        <p className="text-gray-600">Find what you are looking for</p>
      </div>
      <div className="flex bg-[#C1DCDC]  justify-around items-center  py-5 h-130">
        <div className="hidden md:block">
          <div className="w-65 flex flex-col -my-74">
            {/* amaryllis-1984899_1280.jpg */}
            <img
            src="https://cdn.pixabay.com/photo/2017/01/16/18/45/amaryllis-1984899_1280.jpg"
              alt=""
              className=" rounded-xl"
            />
            <p className="font-bold text-center px-2 ">Natural Plants</p>
          </div>
        </div>

        <div className="md:w-65 w-65  flex flex-col gap-2 items-center">
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
        <div className="hidden md:block">
          <div className="w-65 flex flex-col -my-74">
            {/* ornamental-flowerpot-5429622_1280.jpg */}
            <img
              src="https://cdn.pixabay.com/photo/2021/09/22/12/02/monstera-6646644_1280.jpg"
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
