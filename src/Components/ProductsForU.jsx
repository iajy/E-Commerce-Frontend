import axios from "axios";
import React, { useEffect, useState } from "react";
import Loader from "./Loader";

const ProductsForU = () => {
  const [loader, setLoader] = useState(false);
  const [products, setProduct] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get("http://localhost:8080/allplant");
        setLoader(true);
        console.log(res.data);
        setProduct(res.data);
        console.log(products);
      } catch (err) {
        setLoader(false);
        console.log(err);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div className="">
      {loader && <Loader />}
      <h2 className=" text-center font-bold text-3xl p-4">Products For YOU*</h2>
      <div className="grid grid-cols-3 place-items-center gap-10">
        {products.map((plant) => (
          <div key={plant.id} className="w-3/4">
            <img
              src={plant.image?.img1}
              alt={plant.plantName}
              className="rounded-2xl shadow-2xl object-cover w-full h-120 "
            />
            <p className="">
              <span className="text-xl font-semibold">{plant.plantName}</span><br />
              <span className="line-through text-sm">Rs. {plant.prize} </span>
              <span className="text-lg font-semibold">Rs. {Math.round(plant.prize * (plant.offer / 100))} <span className="text-sm text-green-600">({plant.offer}% off)</span></span>
            </p>
          </div>
        ))}
        {/* <div className="w-3/4">
          <img
            src="https://www.rollingnature.com/cdn/shop/products/91OnuvqehtL._SL1500.jpg?v=1580193752"
            alt=""
            className="rounded-2xl"
          />
          <p className="flex flex-col">
            <span className="text-xl">name of the plant</span>
            <span className="font-semibold">prize</span>
            <span className="text-green-600 font-bold">offers if any</span>
          </p>
        </div>
        <div className="w-3/4">
          <img
            src="https://www.rollingnature.com/cdn/shop/products/91OnuvqehtL._SL1500.jpg?v=1580193752"
            alt=""
            className="rounded-2xl"
          />
          <p className="flex flex-col">
            <span className="text-xl">name of the plant</span>
            <span className="font-semibold">prize</span>
            <span className="text-green-600 font-bold">offers if any</span>
          </p>
        </div>
        <div className="w-3/4">
          <img
            src="https://www.rollingnature.com/cdn/shop/products/91OnuvqehtL._SL1500.jpg?v=1580193752"
            alt=""
            className="rounded-2xl"
          />
          <p className="flex flex-col">
            <span className="text-xl">name of the plant</span>
            <span className="font-semibold">prize</span>
            <span className="text-green-600 font-bold">offers if any</span>
          </p>
        </div>
        <div className="w-3/4">
          <img
            src="https://www.rollingnature.com/cdn/shop/products/91OnuvqehtL._SL1500.jpg?v=1580193752"
            alt=""
            className="rounded-2xl"
          />
          <p className="flex flex-col">
            <span className="text-xl">name of the plant</span>
            <span className="font-semibold">prize</span>
            <span className="text-green-600 font-bold ">offers if any</span>
          </p>
        </div>
        <div className="w-3/4">
          <img
            src="https://www.rollingnature.com/cdn/shop/products/91OnuvqehtL._SL1500.jpg?v=1580193752"
            alt=""
            className="rounded-2xl"
          />
          <p className="flex flex-col">
            <span className="text-xl">name of the plant</span>
            <span className="font-semibold">prize</span>
            <span className="text-green-600 font-bold">offers if any</span>
          </p>
        </div>
        <div className="w-3/4">
          <img
            src="https://www.rollingnature.com/cdn/shop/products/91OnuvqehtL._SL1500.jpg?v=1580193752"
            alt=""
            className="rounded-2xl"
          />
          <p className="flex flex-col">
            <span className="text-xl">name of the plant</span>
            <span className="font-semibold">prize</span>
            <span className="text-green-600 font-bold">offers if any</span>
          </p>
        </div> */}
      </div>
    </div>
  );
};

export default ProductsForU;
