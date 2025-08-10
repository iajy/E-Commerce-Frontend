import React from "react";
import { CgProfile } from "react-icons/cg";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { IoCartOutline } from "react-icons/io5";

const NavBar = () => {
  return (
    <header className="fixed w-full z-50 bg-white flex justify-between items-center py-5 px-10 shadow-lg ">
      <div className="flex items-center gap-15">
        <p className="text-4xl font-extrabold" >Plants Land</p>
        <ul className="flex gap-10">
          <li>Home</li>
          <li>Products</li>
          <li>Contact</li>
        </ul>
      </div>
      <div className="flex items-center gap-8 text-lg">
        <p><IoCartOutline/></p>
        <p><CgProfile/></p>
        <p>|</p>
        <p><HiOutlineMenuAlt3/></p>
      </div>
    </header>
  );
};

export default NavBar;
