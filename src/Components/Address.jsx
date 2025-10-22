import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { SlOptionsVertical } from "react-icons/sl";

const Address = () => {
  const [addressEdit, setAddressEdit] = useState(true);
  const [address, setAddress] = useState([]);
  const [activeMenu, setActiveMenu] = useState(null); //  track which menu is open
  const [edit, setEdit] = useState(false);
  const [addressSave, setAddressSave] = useState({
    id: "",
    name: "",
    phnNumber: "",
    address: "",
    district: "",
    state: "",
    pincode: "",
  });

  const id = localStorage.getItem("id");

  const fetchAddress = async () => {
    try {
      const res = await axios.get(`http://localhost:8080/address/${id}`);
      setAddress(res.data);
      if (res.data.length === 0) setAddressEdit(false);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchAddress();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAddressSave((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleAddress = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`http://localhost:8080/saveaddress/${id}`, addressSave);
      toast.success("Address saved successfully!");
      setAddressSave({
        id: "",
        name: "",
        phnNumber: "",
        address: "",
        district: "",
        state: "",
        pincode: "",
      });
      setAddressEdit(true);
      fetchAddress();
    } catch (error) {
      console.log(error);
      toast.error("Failed to save address or max limit reached");
    }
  };

  const handleEditAddress = async (e) => {
    e.preventDefault();
    try {
      await axios.put(
        `http://localhost:8080/editaddress/${addressSave.id}`,
        addressSave
      );
      toast.success("Address updated successfully!");
      setEdit(false);
      setAddressEdit(true);
      fetchAddress();
    } catch (err) {
      console.log(err);
      toast.error("Failed to update address");
    }
  };

  const handleDeleteAddress = async (addressId) => {
    try {
      await axios.delete(`http://localhost:8080/deleteaddress/${addressId}`);
      setAddress(address.filter((a) => a.id !== addressId));
      toast.success("Address deleted");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      {addressEdit ? (
        <div>
          {address.map((addr) => (
            <div
              key={addr.id}
              className="flex justify-between text-gray-700 border-b border-gray-200 py-2 relative"
            >
              <div>
                <h1 className="text-lg font-semibold">{addr.name}</h1>
                <p>{addr.phnNumber}</p>
                <span>
                  {addr.address}, {addr.district}, {addr.state} - {addr.pincode}
                </span>
              </div>
              <div className="relative">
                <p
                  className="text-black cursor-pointer"
                  onClick={() =>
                    setActiveMenu(activeMenu === addr.id ? null : addr.id)
                  }
                >
                  <SlOptionsVertical size={15} className="my-2" />
                </p>
                {activeMenu === addr.id && (
                  <div className="absolute gap-2 bg-gray-50 shadow-lg right-6 top-6 rounded-md p-2">
                    <button
                      className="block w-full text-left hover:text-blue-600"
                      onClick={() => {
                        setAddressSave(addr);
                        setEdit(true);
                        setAddressEdit(false);
                        setActiveMenu(null);
                      }}
                    >
                      Edit
                    </button>
                    <button
                      className="block w-full text-left border-t border-gray-200 hover:text-red-600"
                      onClick={() => handleDeleteAddress(addr.id)}
                    >
                      Delete
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}

          <button
            className="bg-orange-600 mt-4 px-4 py-2 text-white font-medium rounded-md"
            onClick={() => {
              setAddressSave({
                id: "",
                name: "",
                phnNumber: "",
                address: "",
                district: "",
                state: "",
                pincode: "",
              });
              setAddressEdit(false);
              setEdit(false);
            }}
          >
            Add new address
          </button>
        </div>
      ) : (
        <form className="flex flex-col gap-4 p-2" onSubmit={edit ? handleEditAddress : handleAddress}>
          <input
            type="text"
            name="name"
            value={addressSave.name}
            onChange={handleChange}
            placeholder="Name"
            className="border border-[#C1DCDC] rounded-md p-2.5 focus:outline-blue-500"
          />
          <input
            type="number"
            name="phnNumber"
            value={addressSave.phnNumber}
            onChange={handleChange}
            placeholder="Phone"
            className="border border-[#C1DCDC] rounded-md p-2.5 focus:outline-blue-500"
          />
          <input
            type="text"
            name="address"
            value={addressSave.address}
            onChange={handleChange}
            placeholder="Address"
            className="border border-[#C1DCDC] rounded-md p-2.5 focus:outline-blue-500"
          />
          <input
            type="text"
            name="district"
            value={addressSave.district}
            onChange={handleChange}
            placeholder="District"
            className="border border-[#C1DCDC] rounded-md p-2.5 focus:outline-blue-500"
          />
          <input
            type="text"
            name="state"
            value={addressSave.state}
            onChange={handleChange}
            placeholder="State"
            className="border border-[#C1DCDC] rounded-md p-2.5 focus:outline-blue-500"
          />
          <input
            type="number"
            name="pincode"
            value={addressSave.pincode}
            onChange={handleChange}
            placeholder="PINCODE"
            className="border border-[#C1DCDC] rounded-md p-2.5 focus:outline-blue-500"
          />

          <button
            type="submit"
            className="bg-amber-600 p-2 rounded-xl font-medium text-white"
          >
            {edit ? "Update Address" : "Save Address"}
          </button>
        </form>
      )}
    </div>
  );
};

export default Address;
