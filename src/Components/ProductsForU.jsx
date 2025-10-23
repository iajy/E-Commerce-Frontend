import axios from "axios";
import React, { useEffect, useState } from "react";
import Loader from "./Loader";
import ProductView from "./ProductView";

const ProductsForU = () => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [view, setView] = useState(false);
  const [plantId, setPlantId] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true); // show loader before fetching
        const res = await axios.get("http://localhost:8080/allplant");
        setProducts(res.data);
      } catch (err) {
        console.error("Error fetching products:", err);
      } finally {
        setLoading(false); // hide loader after fetching
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="py-5 bg-white">
      {/* Loader */}
      {loading ? (
        <Loader />
      ) : (
        <>
          {/* Header */}
          <div className="p-4 text-center">
            <h2 className="font-bold text-3xl" id="productview">
              Products for YOU
            </h2>
            <p className="text-gray-600">
              Turn your space into a green paradise — shop your favorite plants
              today 🌿
            </p>
          </div>

          {/* Products Grid */}
          <div className="grid md:grid-cols-3 grid-cols-2 place-items-center gap-10 bg-[#C1DCDC] p-8 rounded-xl">
            {products.map((plant) => {
              const discountedPrice =
                plant.prize - Math.round(plant.prize * (plant.offer / 100));

              return (
                <div
                  key={plant.id}
                  className="md:w-3/4 w-full bg-white rounded-2xl shadow-lg p-3 hover:shadow-xl transition-transform transform hover:-translate-y-1"
                >
                  <img
                    src={plant.image?.img1}
                    alt={plant.plantName}
                    className="rounded-xl object-cover w-full md:h-60 h-40 cursor-pointer"
                    onClick={() => {
                      setPlantId(plant.id);
                      setView(true);
                    }}
                  />
                  <div className="mt-2">
                    <h3 className="text-lg font-semibold">{plant.plantName}</h3>
                    {plant.offer !== 0 && (
                      <p className="line-through text-sm text-gray-500">
                        Rs. {plant.prize}
                      </p>
                    )}
                    <p className="text-lg font-semibold">
                      Rs. {discountedPrice}{" "}
                      <span className="text-sm text-green-600">
                        {plant.offer !== 0
                          ? `(${plant.offer}% off)`
                          : "(Flowerpot free)"}
                      </span>
                    </p>
                    <p className="text-sm text-gray-500 mt-1">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </>
      )}

      {/* Product View Modal */}
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
