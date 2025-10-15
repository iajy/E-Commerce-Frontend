import React, { useState } from "react";
import { CgProfile } from "react-icons/cg";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { IoCartOutline } from "react-icons/io5";
import SignUpPage from "./SignUpPage";
import LoginPage from "./LoginPage";
import { useNavigate } from "react-router-dom";

const NavBar = () => {

  const navigate = useNavigate();

  const [view, setView] = useState("");


  return (
    <header className="fixed  w-full z-50 bg-white flex justify-between items-center py-5 md:px-10 px-5 shadow-lg ">
      <div className="flex items-center gap-15">
        {/* <p className="text-5xl font-bold">പൂ<span className="text-[#90c0c0]">ന്തോട്ടം</span></p > */}
                <p className="text-5xl font-bold">Plants<span className="text-[#90c0c0]">Land</span></p >
        <ul className=" hidden md:flex gap-10">
          <li className="hover:text-[#C1dcdc] cursor-pointer" onClick={()=> navigate("/")}>Home</li>
          <li className="hover:text-[#C1dcdc] cursor-pointer" onClick={()=>navigate("/products")}>Products</li>
          <li className="hover:text-[#C1dcdc] cursor-pointer">Contact</li>
        </ul>
      </div>
      <div className="flex items-center gap-8 text-lg">
        {/* <button > */}
          <IoCartOutline  onClick={()=>navigate("/mycart")} className="hover:text-[#C1dcdc]" />
        {/* </button> */}
        <p>
          <CgProfile onClick={()=>setView("login")} className="hover:text-[#C1dcdc]" />
        </p>
        <p>|</p>
        <p>
          <HiOutlineMenuAlt3 className="hover:text-[#C1dcdc]" />
        </p>
      </div>
      {view==="login" && <LoginPage onExit={()=>setView("")} onSignUp={()=>setView("signUp")}/>}
      {view==="signUp" && <SignUpPage onExit={()=>setView("")} onLogin={()=>setView("login")}/>}
    </header>
  );
};

export default NavBar;
