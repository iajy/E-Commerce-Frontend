import React from "react";
import toast from "react-hot-toast";
import { IoMdSearch } from "react-icons/io";

const SearchBar = () => {

    const handleSearch = ()=>{
        toast.success("search")
    }
  return (
    <div className="flex justify-center px-4">
      <div className="flex  items-center relative w-3/4">
        <input
          type="text"
          name=""
          id=""
          placeholder="Search Plant"
          className="w-full p-3 border border-[#90c0c0] rounded-2xl focus:outline-[#91c0c0]"
        />
        <IoMdSearch className="absolute right-5 text-gray-600 hover:text-gray-700" size={25} onClick={handleSearch}/>
      </div>
    </div>
  );
};

export default SearchBar;
