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
      <div className="p-4">
        <h2 className=" text-center font-bold text-3xl">Products for YOU</h2>
        <h2 className="text-center">
          Turn your space into a green paradise — shop your favorite plants
          today
        </h2>
      </div>
      <div className="grid grid-cols-3 place-items-center gap-10 bg-[#C1dcdc] p-3">
        {products.map((plant) => (
          <div key={plant.id} className="w-3/4">
            <img
              src={plant.image?.img1}
              alt={plant.plantName}
              className="rounded-2xl shadow-2xl object-cover w-full h-120  " //hover:-translate-y-1
            />
            <p className="">
              <span className="text-xl font-semibold">{plant.plantName}</span>
              <br />
              {plant.offer != 0 && (
                <span className="line-through text-sm">Rs. {plant.prize} </span>
              )}
              <span className="text-lg font-semibold">
                Rs.{" "}
                {plant.prize - Math.round(plant.prize * (plant.offer / 100))}{" "}
                {plant.offer != 0 && (
                  <span className="text-sm text-green-600">
                    ({plant.offer}% off)
                  </span>
                )}
              </span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsForU;
