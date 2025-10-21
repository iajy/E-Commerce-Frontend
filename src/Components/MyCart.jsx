import React, { useEffect, useState } from "react";
import axios from "axios";
import { GoPlus } from "react-icons/go";
import { LuMinus } from "react-icons/lu";
import Address from "./Address";

const MyCart = () => {
  const id = localStorage.getItem("id");
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    fetchCart();
  }, [id]);

  const fetchCart = async () => {
    try {
      const res = await axios.get(
        `http://localhost:8080/getcartbyuserid/${id}`
      );
      console.log(res.data);
      setCartItems(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const handleCount = async (cartId, value) => {
    try {
      const res = await axios.post(
        `http://localhost:8080/itemcountadd/${cartId}/${value}`
      );
      setCartItems((prev) =>
        prev.map((item) =>
          item.id === cartId ? { ...item, count: res.data.count } : item
        )
      );
    } catch (err) {
      console.log(err);
    }
  };

  const handleCartDelete = async (cartId) => {
    try {
      const res = await axios.delete(
        `http://localhost:8080/deletecart/${cartId}`
      );
      console.log(res);
      fetchCart();
    } catch (err) {
      console.log(err);
    }
  };

  const itemsCount = cartItems.reduce((sum, item) => sum + item.count, 0);
  const discount = cartItems.reduce(
    (sum, item) => sum + (item.plant.prize * item.plant.offer) / 100,
    0
  );
  const totalPrize = cartItems.reduce((sum, item) => sum + item.plant.prize, 0);

  return (
    <div className="py-26 mx-10">
      <div className="grid grid-cols-[3fr_1fr] gap-6">
        <div className="grid grid-cols-2 bg-[#C1dcdc] shadow-md p-6 rounded-2xl ">
          <div>
            <h1 className="text-2xl font-semibold mb-6">My Cart</h1>
            {cartItems.length === 0 ? (
              <p>No items in your cart.</p>
            ) : (
              cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between border-b border-gray-300 py-4"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex flex-col gap-3">
                      <img
                        src={item.plant.image?.img1}
                        alt={item.plant.plantName}
                        className="w-40 h-60 object-cover rounded-xl"
                      />
                      <div className="flex gap-1">
                        <button className="flex items-center justify-center border rounded-xl border-gray-100 p-3 gap-3">
                          {item.count > 1 && (
                            <LuMinus
                              className="mx-2 cursor-pointer"
                              onClick={() => handleCount(item.id, -1)}
                            />
                          )}
                          {item.count}
                          <GoPlus
                            className="mx-2 cursor-pointer"
                            onClick={() => handleCount(item.id, 1)}
                          />
                        </button>
                        <button
                          className="text-xl hover:text-red-600 px-3 rounded-lg border border-gray-100 hover:border-red-600 "
                          onClick={() => handleCartDelete(item.id)}
                        >
                          Remove
                        </button>
                      </div>
                    </div>

                    <div>
                      <h2 className="font-semibold text-lg">
                        {item.plant.plantName}
                      </h2>
                      <p className="text-gray-600">
                        ₹{" "}
                        {item.plant.offer > 0
                          ? `${
                              item.plant.prize -
                              Math.round(
                                item.plant.prize * (item.plant.offer / 100)
                              )
                            }`
                          : item.plant.prize}
                      </p>
                      <p className="text-sm text-green-600">
                        {item.plant.offer > 0
                          ? `${item.plant.offer}% off`
                          : "No offer"}
                      </p>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
          {cartItems.length !== 0 && (
            <div className="flex flex-col mx-10">
              <h1 className="text-2xl font-semibold mb-6">Price Details</h1>
              <table className="text-lg">
                <tbody className="">
                  <tr>
                    <td>Prize({itemsCount} items)</td>
                    <td>
                      &#8377;
                      {totalPrize * itemsCount}
                    </td>
                  </tr>
                  <tr>
                    <td>Discount</td>
                    <td className="text-green-600">
                      -&#8377;
                      {discount * itemsCount}
                    </td>
                  </tr>
                  <tr>
                    <td>Total Amount</td>
                    <td>
                      &#8377;
                      {totalPrize * itemsCount - discount * itemsCount}
                    </td>
                  </tr>
                </tbody>
              </table>
              <span className="text-green-600">
                You will save {discount * itemsCount} on this order
              </span>
            </div>
          )}
        </div>
        <div className="bg-white shadow-md p-6 rounded-2xl">
          <h1 className="text-2xl font-semibold">Address</h1>
          <p>Your plant will reach you in these address..</p>
          <Address />
        </div>
      </div>
    </div>
  );
};

export default MyCart;
