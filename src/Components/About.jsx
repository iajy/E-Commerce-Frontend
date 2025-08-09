import React from "react";

const About = () => {
  return (
    <div>
      <div className="my-8 mx-10 flex flex-col gap-10">
        <div className="flex flex-col items-center">
          <h2 className="text-2xl font-bold">About Us</h2>
          <p className="text-sm text-gray-600">
            Order now and appreciate the beauty of nature
          </p>
        </div>
        <div className="flex justify-between">
          <div className="flex flex-col items-center">
            <button className="bg-[#C1DCDC] rounded-full px-4 py-3">O</button>
            <h2 className="font-bold">Large Assortment</h2>
            <p className="text-sm text-gray-600">we offer many different types of products <br /> with fewer variations in each category.</p>
          </div>
         <div className="flex flex-col items-center">
            <button className="bg-[#C1DCDC] rounded-full px-4 py-3">O</button>
            <h2 className="font-bold">Large Assortment</h2>
            <p className="text-sm text-gray-600">we offer many different types of products <br /> with fewer variations in each category.</p>
          </div><div className="flex flex-col items-center">
            <button className="bg-[#C1DCDC] rounded-full px-4 py-3">O</button>
            <h2 className="font-bold">Large Assortment</h2>
            <p className="text-sm text-gray-600">we offer many different types of products <br /> with fewer variations in each category.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
