import axios from "axios";
import React, { useEffect, useState } from "react";
import Loader from "./Loader";
import ProductView from "./ProductView";

const ProductsForU = () => {
  const [loader, setLoader] = useState(false);
  const [products, setProduct] = useState([]);
  const [view, setView] = useState(false);
  const [plantId, setPlantId] = useState();

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
    <div className="py-5">
      {loader && <Loader />}
      <div className="p-4 ">
        <h2 className=" text-center font-bold text-3xl">Products for YOU</h2>
        <h2 className="text-center">
          Turn your space into a green paradise — shop your favorite plants
          today
        </h2>
      </div>
      <div className="grid md:grid-cols-3 grid-cols-2 place-items-center gap-10 bg-[#C1dcdc] p-18">
        {products.map((plant) => (
          <div key={plant.id} className="md:w-3/4 w-2/2">
            <img
              src={plant.image?.img1}
              alt={plant.plantName}
              className="rounded-2xl shadow-2xl object-cover w-full md:h-120 h-60 hover:-translate-y-2 transition-transform cursor-pointer"
              onClick={() => {
                setView(!view);
                setPlantId(plant.id);
              }}
            />
            <span className="md:text-xl font-semibold">{plant.plantName}</span>
            <br />
            {plant.offer != 0 && (
              <span className="line-through text-sm">Rs. {plant.prize} </span>
              
            )}
            <span className="text-lg font-semibold">
              Rs. {plant.prize - Math.round(plant.prize * (plant.offer / 100))}{" "}
              {plant.offer != 0 ? (
                <span className="text-sm text-green-600">
                  <br className="md:hidden" />({plant.offer}% off)
                </span>
              ) : (
                <span className="text-sm text-green-600">
                  <br className="md:hidden" />
                  (Flowerpot is free)
                </span>
              )}
            </span>
          </div>
        ))}
      </div>
      {view && (
        <ProductView
          onExit={() => setView(false)}
          products={products}
          plantId={plantId}
        />
      )}
    </div>
  );
};

export default ProductsForU;
