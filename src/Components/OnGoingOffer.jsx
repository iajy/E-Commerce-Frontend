import React from "react";
import { FaAngleRight } from "react-icons/fa";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const OnGoingOffer = () => {

    
  return (
    <div>
      <h1 className="text-3xl font-extrabold p-4">
        Offers on going Plants
      </h1>

      <div className="flex items-center gap-2">
        {/* Horizontal scroll container */}
        <div className="overflow-x-auto scrollbar-hide rounded-2xl w-full">
          <motion.div
            className="flex space-x-4"
            animate={{ x: ["0%", "-100%"] }} 
            transition={{
              duration: 15,
              repeat: Infinity,
              ease:"linear",
            }}
          >
            {/* Card 1 */}
            <div className="bg-[#C1DCDC] min-w-1/2 rounded-2xl relative p-4  cursor-pointer">
              <h3 className="absolute right-1/2 top-1/2 text-xl font-black">
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
            <div className="bg-[#C1DCDC] min-w-1/2 rounded-2xl relative p-4  cursor-pointer">
              <h3 className="absolute right-1/2 top-1/2 text-xl font-black">
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
            <div className="bg-[#C1DCDC] min-w-1/2 rounded-2xl relative p-4  cursor-pointer">
              <h3 className="absolute right-1/2 top-1/2 text-xl font-black">
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
            <div className="bg-[#C1DCDC] min-w-1/2 rounded-2xl relative p-4 cursor-pointer">
              <h3 className="absolute right-1/2 top-1/2 text-xl font-black">
                <h1>plant name</h1>
                <h2 className="text-3xl">30% 0ff</h2>
              </h3>
              <img
                src="https://www.rollingnature.com/cdn/shop/products/91OnuvqehtL._SL1500.jpg?v=1580193752"
                alt=""
                className="w-1/4 rounded-2xl right-2 bottom-2"
              />
            </div>
          </motion.div>
        </div>

        {/* Right arrow icon (optional, static) */}
        <FaAngleRight size={20} />
      </div>
    </div>
  );
};

export default OnGoingOffer;
