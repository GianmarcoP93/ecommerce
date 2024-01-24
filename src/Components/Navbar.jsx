import React, { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { Link } from "react-router-dom";

export const Navbar = ({ setSearchQuery }) => {
  const [isInputFocused, setInputFocused] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const handleSearchChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    setSearchQuery(inputValue);
  };

  return (
    <nav className="bg-gray-800 flex justify-center  ">
      <form
        onSubmit={handleSearchSubmit}
        className="flex items-center justify-between w-full mx-10"
      >
        <Link to="/" className=" p-2 ">
          <img src="/logo.png" alt="logo" className="max-w-28" />
        </Link>

        <div
          className={`flex w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-3xl ${
            isInputFocused
              ? "border-yellow-600 border-[3px] rounded-xl"
              : "border-none"
          }`}
        >
          <input
            type="text"
            className="w-full rounded-l-md pl-3 font-sans focus:outline-none"
            placeholder="Ricerca DreamBuy.it"
            onFocus={() => setInputFocused(true)}
            onBlur={() => setInputFocused(false)}
            value={inputValue}
            onChange={handleSearchChange}
          />
          <button className="bg-yellow-500 hover:bg-yellow-600 p-[10px] rounded-r-md min-w-12 flex justify-center">
            <IoSearch />
          </button>
        </div>

        <div className="text-white font-serif flex gap-12 items-center">
          <div className="cursor-pointer hover:border-b-2 hover:text-yellow-600 hover:border-yellow-600">
            Home
          </div>
          <div className="cursor-not-allowed hover:text-red-700" aria-disabled>
            Resi
          </div>
          <div className="cursor-pointer hover:border-b-2 hover:text-yellow-600 hover:border-yellow-600">
            <FaShoppingCart />
          </div>
        </div>
      </form>
    </nav>
  );
};
