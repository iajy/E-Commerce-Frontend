import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";
import axios from "axios";

const MyCart = () => {
  const id = localStorage.getItem("id");
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const res = await axios.get(`http://localhost:8080/getcartbyuserid/${id}`);
        console.log(res.data);
        setCartItems(res.data); 
      } catch (err) {
        console.error(err);
      }
    };
    fetchCart();
  }, [id]);

  return (
    <div className="py-26 mx-10">
      <div className="grid grid-cols-[3fr_1fr] gap-6">
        <div className="bg-white shadow-md p-6 rounded-2xl">
          <h1 className="text-2xl font-semibold mb-6">My Cart</h1>

          {cartItems.length === 0 ? (
            <p>No items in your cart.</p>
          ) : (
            cartItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between border-b py-4"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={item.plant.image?.img1}
                    alt={item.plant.plantName}
                    className="w-20 h-20 object-cover rounded-xl"
                  />
                  <div>
                    <h2 className="font-semibold text-lg">{item.plant.plantName}</h2>
                    <p className="text-gray-600">₹ {item.plant.offer > 0
                        ? `${item.plant.prize - Math.round(item.plant.prize * (item.plant.offer / 100))}`
                        : item.plant.prize}</p>
                    <p className="text-sm text-green-600">
                      {item.plant.offer > 0
                        ? `${item.plant.offer}% off`
                        : "No offer"}
                    </p>
                  </div>
                  <div>
                    
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Address Section */}
        <div className="bg-white shadow-md p-6 rounded-2xl">
          <h1 className="text-2xl font-semibold mb-6">Address</h1>
          <p>Saved address or form goes here...</p>
        </div>
      </div>
    </div>
  );
};

export default MyCart;
