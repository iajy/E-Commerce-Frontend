import React, { useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import axios from "axios";
import toast from "react-hot-toast";
import Loader from "./Loader";

const SignUpPage = ({ onExit, onLogin }) => {
  const [user, setUser] = useState({
    name: "",
    mail: "",
    password: "",
  });

  const [vPassword, setVPassword] = useState("");
  const [loader, setLoader] = useState(false);

  const handleVPassword = (e) => {
    setVPassword(e.target.value);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setUser((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      setLoader(true);
      const res = await axios.post("http://localhost:8080/saveuser", user);
      // if (res.status === 200) {
      toast.success("Logged In");
      console.log(res);
      onExit();
      // }
    } catch (error) {
      setLoader(false);
      toast.error("Mail already in Use");
      console.log(error);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/60 z-50">
      <div className="w-full max-w-xl absolute flex flex-col gap-4 p-4  bg-white rounded-2xl shadow-lg">
        <div className="flex justify-between ">
          <h1 className="text-2xl font-bold ">SignUp</h1>
          <IoCloseOutline
            onClick={onExit}
            className="cursor-pointer text-2xl hover:text-red-600"
          />
        </div>
        <form onSubmit={handleSignUp} className="flex flex-col gap-4">
          <input
            type="text"
            name="name"
            value={user.name}
            onChange={handleChange}
            required
            // id=""
            placeholder="Enter your Name"
            className="border border-[#C1DCDC]  rounded-full focus:outline-blue-600 focus:outline-1 p-3"
          />
          <input
            type="text"
            name="mail"
            value={user.mail}
            onChange={handleChange}
            required
            // id=""
            placeholder="Enter your Email"
            className="border border-[#C1DCDC]  rounded-full focus:outline-blue-600 focus:outline-1 p-3"
          />
          <input
            type="password"
            name="password"
            required
            value={user.password}
            onChange={handleChange}
            placeholder="Enter Password"
            className="border border-[#C1DCDC] rounded-full focus:outline-blue-600 focus:outline-1 p-3"
          />
          {user.password === vPassword || vPassword === null ? (
            <p className="absolute"></p>
          ) : (
            <p className="absolute bottom-45 left-5 text-sm text-red-600 ">
              Password Mismatch..!
            </p>
          )}
          <input
            type="text"
            name="vPassword"
            value={vPassword}
            required
            // id=""
            onChange={handleVPassword}
            placeholder="Verify Password"
            className={`border my-2 ${
              user.password === vPassword || user.password === null
                ? "border-green-600"
                : "border-red-600"
            } rounded-full p-3 focus:outline-none`}
          />
          <button className="flex justify-center items-center gap-2 bg-blue-600 px-6 py-3 rounded-full text-white font-medium cursor-pointer">
            SignUp{loader && <Loader className=""/>}
          </button>
        </form>
        <div className="flex justify-around">
          <p>
            Already have an account ?{" "}
            <a onClick={onLogin} className="text-blue-600 cursor-pointer">
              Login
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
