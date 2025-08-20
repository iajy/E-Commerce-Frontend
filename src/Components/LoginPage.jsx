import React, { useState } from "react";
import { IoCloseOutline } from "react-icons/io5";

const LoginPage = ({ onExit }) => {
  const [password, setPassword] = useState("");
  const [vPassword, setVPassword] = useState("");

  const handleVPassword = (e) => {
    setVPassword(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/60 z-50">
      <div className="w-80 absolute flex flex-col gap-4 p-4  bg-white rounded-2xl shadow-lg">
        <div className="flex justify-between ">
          <h1 className="text-2xl font-bold ">SignUp</h1>
          <IoCloseOutline
            onClick={() => onExit(false)}
            className="cursor-pointer text-2xl hover:text-red-600"
          />
        </div>
        <form action="submit" className="flex flex-col gap-4">
          <input
            type="text"
            name="user"
            // id=""
            placeholder="Enter your Name"
            className="border border-[#C1DCDC]  rounded-full focus:outline-blue-600 focus:outline-1 p-2"
          />
          <input
            type="text"
            name="email"
            // id=""
            placeholder="Enter your Email"
            className="border border-[#C1DCDC]  rounded-full focus:outline-blue-600 focus:outline-1 p-2"
          />
          <input
            type="password"
            name="password"
            value={password}
            onChange={handlePassword}
            placeholder="Enter Password"
            className="border border-[#C1DCDC] rounded-full focus:outline-blue-600 focus:outline-1 p-2"
          />
          <input
            type="text"
            name="vPassword"
            value={vPassword}
            // id=""
            onChange={handleVPassword}
            placeholder="Verify Password"
            className={`border ${
              password === vPassword ? "border-green-600" : "border-red-600"
            } rounded-full p-2 focus:outline-none`}
          />
          <button className="bg-blue-600 px-6 py-2 rounded-full text-white font-medium cursor-pointer">
            SignUp
          </button>
          
        </form>
        <div className="flex justify-around"><p>Already have an account ? <a href="" className="text-blue-600">Login</a></p></div>
      </div>
    </div>
  );
};

export default LoginPage;
