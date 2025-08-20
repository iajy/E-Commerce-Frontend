import React, { useState } from "react";
import { IoCloseOutline } from "react-icons/io5";

const LoginPage = ({ onExit }) => {
  const [password, setPassword] = useState("");
  const [vPassword, setVPassword] = useState("");

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/60 z-50">
      <div className="h-100 w-80 absolute flex flex-col gap-4 p-4  bg-white rounded-2xl shadow-lg">
        <div className="flex justify-between ">
          <h1 className="text-2xl font-bold">Login</h1>
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
            placeholder="Enter Usernme"
            className="border border-[#C1DCDC]  rounded-full p-2"
          />
          <input
            type="password"
            name="password"
            value={password}
            // id=""
            placeholder="Enter Password"
            className="border border-[#C1DCDC]  rounded-full p-2"
          />
          <input
            type="text"
            name="vPassword"
            value={vPassword}
            // id=""
            placeholder="Verify Password"
            className="border border-[#C1DCDC]  rounded-full p-2"
          />
          <button className="bg-blue-600 p-2 rounded-full text-2xl text-white font-medium cursor-pointer">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
