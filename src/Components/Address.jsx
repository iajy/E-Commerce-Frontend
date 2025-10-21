import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

const Address = () => {
  const [addressEdit, setAddressEdit] = useState(true);
  const [address, setAddress] = useState([]);
  const [addressSave, setAddressSave] = useState({
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
      if (res.data.length === 0) {
        setAddressEdit(false);
      }
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
      await axios.post(`http://localhost:8080/editaddress/${id}`, addressSave);
      toast.success("Address saved successfully!");
      setAddressEdit(true);
      fetchAddress();
    } catch (error) {
      console.log(error);
      toast.error("Failed to save address/maximum address reached");
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
            <div key={addr.id}>
              <table className="border-collapse border-spacing-4">
                <tbody className="text-left">
                  <tr>
                    <td className="p-2">Name</td>
                    <td className="p-2">: {addr.name}</td>
                  </tr>
                  <tr>
                    <td className="p-2">Address</td>
                    <td className="p-2">
                      : {addr.address}, {addr.district}, {addr.state},
                      <br /> {addr.pincode}
                    </td>
                  </tr>
                  <tr>
                    <td className="p-2">Phone</td>
                    <td className="p-2">: {addr.phnNumber}</td>
                  </tr>
                  <tr>
                    <td className="p-3 flex gap-2">
                      <button
                        className="bg-red-600 p-2 text-white font-medium rounded-sm"
                        onClick={() => handleDeleteAddress(addr.id)}
                      >
                        Delete
                      </button>
                    </td>
                    <td>
                      <button
                        className="bg-purple-600 p-2 text-white font-medium rounded-sm"
                        onClick={() => {
                          setAddressSave(addr);
                          setAddressEdit(false);
                        }}
                      >
                        Edit
                      </button>
                      <button
                        className="bg-orange-600 p-2 mx-1 text-white font-medium rounded-sm"
                        onClick={() => {
                          setAddressSave({
                            name: "",
                            phnNumber: "",
                            address: "",
                            district: "",
                            state: "",
                            pincode: "",
                          });
                          setAddressEdit(false);
                        }}
                      >
                        Add new address
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          ))}
        </div>
      ) : (
        <form onSubmit={handleAddress} className="flex flex-col gap-4 p-2">
          <input
            type="text"
            name="name"
            value={addressSave.name}
            onChange={handleChange}
            placeholder="Name"
            className="border border-[#C1DCDC] rounded-md p-2.5"
          />
          <input
            type="number"
            name="phnNumber"
            value={addressSave.phnNumber}
            onChange={handleChange}
            placeholder="Phone"
            className="border border-[#C1DCDC] rounded-md p-2.5"
          />
          <input
            type="text"
            name="address"
            value={addressSave.address}
            onChange={handleChange}
            placeholder="Address"
            className="border border-[#C1DCDC] rounded-md p-2.5"
          />
          <input
            type="text"
            name="district"
            value={addressSave.district}
            onChange={handleChange}
            placeholder="District"
            className="border border-[#C1DCDC] rounded-md p-2.5"
          />
          <input
            type="text"
            name="state"
            value={addressSave.state}
            onChange={handleChange}
            placeholder="State"
            className="border border-[#C1DCDC] rounded-md p-2.5"
          />
          <input
            type="number"
            name="pincode"
            value={addressSave.pincode}
            onChange={handleChange}
            placeholder="PINCODE"
            className="border border-[#C1DCDC] rounded-md p-2.5"
          />
          <button className="bg-amber-600 p-2 rounded-xl font-medium">
            Save Address
          </button>
        </form>
      )}
    </div>
  );
};

export default Address;
