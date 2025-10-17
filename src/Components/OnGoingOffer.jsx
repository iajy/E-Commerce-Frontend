import React, { useEffect, useState } from "react";
import { FaAngleRight } from "react-icons/fa";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import axios from "axios";

const OnGoingOffer = () => {
  const [offerPlants, setOfferPlants] = useState([]);

  useEffect(() => {
    const fetchOffer = async () => {
      try {
        const res = await axios.get("http://localhost:8080/plantbytopoffer");
        setOfferPlants(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchOffer();
  }, []);
  return (
    <div>
      <div className="py-4">
        <h1 className="text-3xl font-extrabold ">Offers on going</h1>
        <h1>Fresh Deals Blooming !</h1>
      </div>
      <div className="flex items-center gap-2">
        {/* Horizontal scroll container */}
        <div className="overflow-x-auto scrollbar-hide rounded-2xl w-full">
          <motion.div
            className="flex space-x-4"
            animate={{ x: ["0%", "-100%"] }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {offerPlants.map((plant) => (
              <div
                key={plant.id}
                className="bg-[#C1DCDC] md:min-w-1/2 min-w-5/6 rounded-2xl relative p-4  cursor-pointer"
              >
                <h3 className="absolute md:right-1/4 md:top-1/2  bottom-1 right-0.5 text-right text-xl ">
                  <p>
                    <span className="md:text-2xl font-semibold">{plant.plantName}</span>
                    <br />
                    <span className="md:text-3xl font-bold">{plant.offer}% off</span>
                  </p>
                </h3>
                <img
                src={plant.image?.img1}
                  alt=""
                  className="rounded-2xl right-2 bottom-2 object-cover md:w-1/4 w-3/4 md:h-65 h-50  "
                />
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right arrow icon (optional, static) */}
        <FaAngleRight size={20} />
      </div>
    </div>
  );
};

export default OnGoingOffer;
