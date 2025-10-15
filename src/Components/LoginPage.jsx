import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { IoCloseOutline } from "react-icons/io5";

const LoginPage = ({ onExit, onSignUp }) => {
  const [password, setPassword] = useState("");
  const [email,setEmail] =useState("");

  
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8080/loginuser", {email,password});
      toast.success("loged In");
      console.log(res);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/60 z-50">
      <div className="w-full max-w-xl absolute flex flex-col gap-4 p-8  bg-white rounded-2xl shadow-lg">
        <div className="flex justify-between ">
          <h1
            className="text-2xl font-bold 
          "
          >
            Login
          </h1>
          <IoCloseOutline
            onClick={onExit}
            className="cursor-pointer text-2xl hover:text-red-600"
          />
        </div>
        <form onSubmit={handleLogin} className="flex flex-col gap-4">
          <input
            type="text"
            name="email"
            required
            // id=""
            placeholder="Enter your Email"
            onChange={(e) => setEmail(e.target.value)}
            className="border border-[#C1DCDC]  rounded-full focus:outline-blue-600 focus:outline-1 p-3"
          />
          <input
            type="password"
            name="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter Password"
            className="border border-[#C1DCDC] rounded-full focus:outline-blue-600 focus:outline-1 p-3"
          />

          <button className="bg-blue-600 px-6 py-3 rounded-full text-white font-medium cursor-pointer">
            Login
          </button>
        </form>
        <div className="flex justify-around">
          <p>
            Don't have an account ?
            <a onClick={onSignUp} className="text-blue-600 cursor-pointer">
              SignUp
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
