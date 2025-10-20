import React, { useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import axios from "axios";
import toast from "react-hot-toast";

const ProductView = ({ onExit, products, plantId }) => {
  const plant = products.find((p) => p.id === plantId);

  const id = localStorage.getItem("id");
  const pId = plant.id;

  const [cart, _] = useState({
    user: { id: id },
    plant: { id: pId },
  });
  const handleCart = async () => {
    try {
      const res = await axios.post("http://localhost:8080/addtocart", cart);
      toast.success("Added to Cart");
      console.log(res);
    } catch (err) {
      toast.error("Something went wrong");
      console.error(err);
    }
  };

  return (
    <div className="fixed inset-0 flex  justify-end bg-black/60 z-50">
      <motion.div
        initial={{ x: 30, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        // exit={{x:30,opacity:0}}
        transition={{ duration: 0.4 }}
        className="w-full max-w-1/2 h-full p-6  bg-white rounded-l-2xl shadow-lg"
      >
        <div className="flex justify-between ">
          <h1 className="text-2xl font-bold py-4">Plant Details</h1>
          <IoCloseOutline
            onClick={onExit}
            className="cursor-pointer text-2xl hover:text-red-600"
          />
        </div>
        <div className="grid grid-cols-2 gap-x-3 h-full">
          <div key={plant.id} className="flex flex-col gap-4">
            <img
              src={plant.image?.img1}
              alt={plant.plantName}
              className="rounded-2xl shadow-2xl object-cover w-full md:h-110 h-60 hover:scale-150 transition-transform cursor-pointer"
            />
            <div className="flex gap-3">
              <button
                className="p-3 text-md font-semibold bg-orange-500 text-white rounded-md cursor-pointer"
                onClick={handleCart}
              >
                ADD to Cart
              </button>
              <button className="p-3 text-md font-semibold bg-blue-800 text-white rounded-md cursor-pointer">
                Buy Now
              </button>
            </div>
          </div>
          <div className="flex flex-col overflow-y-auto scrollbar-hide">
            <span>{plant.plantName}</span>
            <span>
              <button className="bg-green-600 px-1 rounded text-white">
                4.3 &#9734;
              </button>{" "}
              Ratings & Reviews
            </span>
            {plant.offer !== 0 && (
              <span className="text-green-600">
                Rs. {Math.round(plant.prize * (plant.offer / 100))} extra off
              </span>
            )}
            <span className="text-lg font-semibold">
              Rs. {plant.prize - Math.round(plant.prize * (plant.offer / 100))}{" "}
              {plant.offer != 0 ? (
                <span className="text-sm text-green-600">
                  <span className="line-through text-sm text-black">
                    Rs. {plant.prize}{" "}
                  </span>
                  <br className="md:hidden" />({plant.offer}% off)
                </span>
              ) : (
                <span className="text-sm text-green-600">
                  <br className="md:hidden" />
                  (Flowerpot is free)
                </span>
              )}
            </span>
            <span>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta
              repellat sit qui maxime voluptas unde minima. Expedita esse, sit
              accusamus pariatur veniam quae beatae exercitationem inventore non
              obcaecati a ea.
            </span>
            <br />
            <h1 className="text-2xl font-semibold">Specification</h1>
            <span className="text-xl">In the Box</span>
            <div className="grid grid-cols-2 gap-3 text-gray-600">
              <span>In pack</span>
              <span>1</span>
              <span>Sales package</span>
              <span>1 plant</span>
              <span>Flowerpot</span>
              <span>{plant.offer === 0 ? <>Yes</> : <>No</>}</span>
            </div>
            <br />
            <span className="text-xl">General</span>
            <div className="grid grid-cols-2 gap-3 text-gray-600">
              <span>Name</span>
              <span>{plant.plantName}</span>
              <span>Type</span>
              <span>{plant.typePlant?.name}</span>
              <span>Flowerpot</span>
              <span>{plant.offer === 0 ? <>Yes</> : <>No</>}</span>
            </div>
            <br />
            <span className="text-2xl">Feedback</span>
            <div className="grid grid-cols-2 py-3 border px-2 border-gray-300">
              <div className="">
                <span className="flex flex-col">
                  4.3 &#9734; <br />
                  Ratings & Reviews
                </span>
                <button className="text-white bg-purple-500 px-2 py-1 rounded-sm my-2 cursor-pointer">
                  Rate product
                </button>
              </div>
              <div>
                <div className="flex w-full items-center">
                  <label htmlFor="" className="">
                    5&#9734;
                  </label>
                  <span className="border border-b-4 rounded-sm w-80 border-green-700"></span>
                  <span className="border border-b-4 border-gray-400 rounded-r-sm w-20"></span>
                  566
                </div>
                <div className="flex w-full items-center">
                  <label htmlFor="" className="">
                    4&#9734;
                  </label>
                  <span className="border border-b-4 rounded-sm w-50 border-green-700"></span>
                  <span className="border border-b-4 border-gray-400 rounded-r-sm w-50"></span>
                  67
                </div>
                <div className="flex w-full items-center">
                  <label htmlFor="" className="">
                    3&#9734;
                  </label>
                  <span className="border border-b-4 rounded-sm w-24 border-green-700"></span>
                  <span className="border border-b-4 border-gray-400 rounded-r-sm w-76"></span>
                  24
                </div>
                <div className="flex w-full items-center">
                  <label htmlFor="" className="">
                    2&#9734;
                  </label>
                  <span className="border border-b-4 rounded-sm w-6 border-orange-400"></span>
                  <span className="border border-b-4 border-gray-400 rounded-r-sm w-94"></span>
                  6
                </div>
                <div className="flex w-full items-center">
                  <label htmlFor="" className="">
                    1&#9734;
                  </label>
                  <span className="border border-b-4 rounded-sm w-4 border-red-700"></span>
                  <span className="border border-b-4 border-gray-400 rounded-r-sm w-96"></span>
                  4
                </div>
              </div>
            </div>
            {/* <Address /> */}
            <br />
            <br />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProductView;
