import React from "react";

const NavBar = () => {
  return (
    <div className="flex items-center py-5 px-10 justify-between">
      <div className="flex items-center gap-15">
        <p className="text-4xl font-extrabold font-[times new man]" >Plants Land</p>
        <ul className="flex gap-10">
          <li>Home</li>
          <li>Products</li>
          <li>Contact</li>
        </ul>
      </div>
      <div className="flex gap-8">
        <p>I</p>
        <p>C</p>
        <p>O</p>
        <p>N</p>
      </div>
    </div>
  );
};

export default NavBar;
