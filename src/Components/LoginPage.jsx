import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { IoCloseOutline } from "react-icons/io5";
import Loader from "./Loader";

const LoginPage = ({ onExit, onSignUp }) => {
  const [password, setPassword] = useState("");
  const [mail, setMail] = useState("");
  const [passwordView, setPasswordView] = useState(false);
  const [loader, setLoader] = useState(true);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:8080/loginuser",
        { mail, password },
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      console.log(res);
      const data = res.data;
      if (data.token) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("id", res.data.user.id);
        localStorage.setItem("name", res.data.user.name);
        toast.success("loged In");
        onExit();
      } else {
        toast.error(data.message);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleForgotPassword = async (e) => {
    e.preventDefault();
    setLoader(false);
    toast.success("Wait few minutes mail will sent");
    try {
      await axios.post("http://localhost:8080/forgot-password", { mail });
      toast.success("Reset link sent to your email");
    } catch (err) {
      setLoader(true);
      console.log(err);
      toast.error("Email not found");
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
            name="mail"
            required
            // id=""
            placeholder="Enter your Email"
            onChange={(e) => setMail(e.target.value)}
            className="border border-[#C1DCDC]  rounded-full focus:outline-blue-600 focus:outline-1 p-3"
          />

          <div className="relative flex">
            <input
              type={passwordView ? "text" : "password"}
              name="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter Password"
              className="border w-full border-[#C1DCDC] rounded-full focus:outline-blue-600 focus:outline-1 p-3"
            />
            <div className="absolute right-4 top-4">
              {passwordView ? (
                <FaRegEyeSlash onClick={() => setPasswordView(!passwordView)} />
              ) : (
                <FaRegEye onClick={() => setPasswordView(!passwordView)} />
              )}
            </div>
          </div>

          {loader ? (
            <p
              className="text-gray-400 px-2 hover:text-blue-500 cursor-pointer"
              onClick={handleForgotPassword}
            >
              Forgot password ?
            </p>
          ) : (
            <Loader />
          )}

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
