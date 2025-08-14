import React from "react";
import { CgProfile } from "react-icons/cg";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { IoCartOutline } from "react-icons/io5";

const NavBar = () => {
  return (
    <header className="fixed hidden w-full z-50 bg-white md:flex justify-between items-center py-5 px-10 shadow-lg ">
      <div className="flex items-center gap-15">
        <p className="text-4xl font-extrabold" >PlantsLand</p>
        <ul className="flex gap-10">
          <li className="hover:text-[#C1dcdc]">Home</li>
          <li className="hover:text-[#C1dcdc]">Products</li>
          <li className="hover:text-[#C1dcdc]">Contact</li>
        </ul>
      </div>
      <div className="flex items-center gap-8 text-lg">
        <p><IoCartOutline className="hover:text-[#C1dcdc]"/></p>
        <p><CgProfile className="hover:text-[#C1dcdc]"/></p>
        <p>|</p>
        <p><HiOutlineMenuAlt3 className="hover:text-[#C1dcdc]"/></p>
      </div>
    </header>
  );
};

export default NavBar;
