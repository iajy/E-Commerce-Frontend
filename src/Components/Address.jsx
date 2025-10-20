import axios from "axios";
import React, { useEffect, useState } from "react";

const Address = () => {
  const [addressEdit, setAddressEdit] = useState(true);
  const [address, setAddress] = useState([]);

  const id = localStorage.getItem("id");

  useEffect(() => {
    const fetchAddress = async () => {
      try {
        const res = await axios.get(`http://localhost:8080/address/${id}`);
        console.log(res);
        setAddress(res.data);
        if (res.data === null) {
          setAddressEdit(false);
        }
      } catch (err) {
        console.log(err);
      }
    };
    fetchAddress();
  }, []);

  return (
    <div>
      {addressEdit ? (
        <div className="flex flex-col gap-4">
          {address.map((address) => (
            <div className="grid grid-cols-2" id={address.id}>
              <span>Name</span>
              <span>: {address.name}</span>
              <span>Address</span>
              <span>: {address.address},{address.district},{address.state},{address.pincode}</span>
              <span>Phone</span>
              <span>: {address.phnNumber}</span>
              <button
                className="bg-purple-600 p-3 text-white font-medium rounded-sm"
                onClick={() => setAddressEdit(!addressEdit)}
              >
                Edit/Delete
              </button>
            </div>
          ))}
        </div>
      ) : (
        <form action="" className="flex flex-col gap-4 p-2">
          <input
            type="text"
            name=""
            id=""
            placeholder="Name"
            className="border border-[#C1DCDC]  rounded-md focus:outline-blue-600 focus:outline-1 p-2.5"
          />
          <input
            type="number"
            placeholder="Phone"
            className="border border-[#C1DCDC]  rounded-md focus:outline-blue-600 focus:outline-1 p-3"
          />
          <input
            type="text"
            name=""
            id=""
            placeholder="Address"
            className="border border-[#C1DCDC]  rounded-md focus:outline-blue-600 focus:outline-1 p-3"
          />
          <input
            type="text"
            name=""
            id=""
            placeholder="District"
            className="border border-[#C1DCDC]  rounded-md focus:outline-blue-600 focus:outline-1 p-3"
          />
          <input
            type="text"
            name=""
            id=""
            placeholder="State"
            className="border border-[#C1DCDC]  rounded-md focus:outline-blue-600 focus:outline-1 p-3"
          />
          <input
            type="number"
            name=""
            id=""
            placeholder="PINCODE"
            className="border border-[#C1DCDC]  rounded-md focus:outline-blue-600 focus:outline-1 p-3"
          />
          <button className="bg-amber-600 p-2 rounded-xl font-medium">
            Add Address
          </button>
        </form>
      )}
    </div>
  );
};

export default Address;
