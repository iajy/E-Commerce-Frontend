import React, { useState } from "react";
import { CgProfile } from "react-icons/cg";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { IoCartOutline } from "react-icons/io5";
import LoginPage from "./LoginPage";

const NavBar = () => {
  const [login, setLogin] = useState(false);

  const handleLogin = () => {
    setLogin((prev)=>!prev);
  };
  return (
    <header className="fixed  w-full z-50 bg-white flex justify-between items-center py-5 md:px-10 px-5 shadow-lg ">
      <div className="flex items-center gap-15">
        <p className="text-4xl font-extrabold">PlantsLand</p>
        <ul className=" hidden md:flex gap-10">
          <li className="hover:text-[#C1dcdc]">Home</li>
          <li className="hover:text-[#C1dcdc]">Products</li>
          <li className="hover:text-[#C1dcdc]">Contact</li>
        </ul>
      </div>
      <div className="flex items-center gap-8 text-lg">
        <p>
          <IoCartOutline className="hover:text-[#C1dcdc]" />
        </p>
        <p>
          <CgProfile onClick={handleLogin} className="hover:text-[#C1dcdc]" />
        </p>
        <p>|</p>
        <p>
          <HiOutlineMenuAlt3 className="hover:text-[#C1dcdc]" />
        </p>
      </div>
      {login && <LoginPage onExit={handleLogin} />}
    </header>
  );
};

export default NavBar;
