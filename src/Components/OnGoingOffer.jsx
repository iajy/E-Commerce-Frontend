import React from "react";
import { FaAngleRight } from "react-icons/fa";

const OnGoingOffer = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold bg-gradient-to-t from-yellow-400 to-orange-600 bg-clip-text text-transparent p-4">
        Offers on going Plants
      </h1>

      <div className="flex items-center gap-2">
        {/* Horizontal scroll container */}
        <div className="overflow-x-auto scrollbar-hide rounded-2xl w-full">
          <div className="flex space-x-4 ">
            {/* Card 1 */}
            <div className="bg-amber-700 min-w-1/2 rounded-2xl relative p-4  cursor-pointer">
              <h3 className="absolute right-1/2 top-1/2 text-xl font-black text-white">
                <h1>plant name</h1>
                <h2 className="text-3xl">50% 0ff</h2>
              </h3>
              <img
                src="https://www.rollingnature.com/cdn/shop/products/91OnuvqehtL._SL1500.jpg?v=1580193752"
                alt=""
                className="w-1/4 rounded-2xl right-2 bottom-2"
              />
            </div>

            {/* Card 2 */}
            <div className="bg-amber-700 min-w-1/2 rounded-2xl relative p-4  cursor-pointer">
              <h3 className="absolute right-1/2 top-1/2 text-xl font-black text-white">
                <h1>plant name</h1>
                <h2 className="text-3xl">40% 0ff</h2>
              </h3>
              <img
                src="https://www.rollingnature.com/cdn/shop/products/91OnuvqehtL._SL1500.jpg?v=1580193752"
                alt=""
                className="w-1/4 rounded-2xl right-2 bottom-2"
              />
            </div>

            {/* Card 3 */}
            <div className="bg-amber-700 min-w-1/2 rounded-2xl relative p-4  cursor-pointer">
              <h3 className="absolute right-1/2 top-1/2 text-xl font-black text-white">
                <h1>plant name</h1>
                <h2 className="text-3xl">35% 0ff</h2>
              </h3>
              <img
                src="https://www.rollingnature.com/cdn/shop/products/91OnuvqehtL._SL1500.jpg?v=1580193752"
                alt=""
                className="w-1/4 rounded-2xl right-2 bottom-2"
              />
            </div>

            {/* Card 4 */}
            <div className="bg-amber-700 min-w-1/2 rounded-2xl relative p-4 cursor-pointer">
              <h3 className="absolute right-1/2 top-1/2 text-xl font-black text-white">
                <h1>plant name</h1>
                <h2 className="text-3xl">30% 0ff</h2>
              </h3>
              <img
                src="https://www.rollingnature.com/cdn/shop/products/91OnuvqehtL._SL1500.jpg?v=1580193752"
                alt=""
                className="w-1/4 rounded-2xl right-2 bottom-2"
              />
            </div>
          </div>
        </div>

        {/* Right arrow icon (optional, static) */}
        <FaAngleRight size={25} />
      </div>
    </div>
  );
};

export default OnGoingOffer;
