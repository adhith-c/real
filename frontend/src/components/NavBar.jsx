import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { useSelector } from "react-redux";
import { selectCurrentToken } from "../features/auth/authSlice";
import { ImProfile } from "react-icons/im";
import { Link, useNavigate } from "react-router-dom";
import SellModal from "./SellModal";
function NavBar() {
  const [modalIsOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const token = useSelector(selectCurrentToken);
  console.log(token);
  const [nav, setNav] = useState(true);
  const handleNav = () => {
    setNav(!nav);
  };
  const handleNavigate = () => {
    navigate("/profile");
  };
  const NavigateBackHome = () => {
    navigate("/home");
  };
  const handleSaved = () => {
    navigate("/saved");
  };
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  function handleChats() {
    navigate("/chat");
  }
  return (
    <div className="flex justify-between item-center h-16 max-w-[1240px] mx-auto px-4 font-Jost">
      <SellModal
        modalState={modalIsOpen}
        close={closeModal}
      />
      {/* <h1 class="text-3xl font-bold underline">Hello world!</h1> */}
      <h1 className="font-bold text-3xl mt-2 ">BeReal</h1>
      <ul className="hidden md:flex ">
        <li
          className="p-4"
          onClick={NavigateBackHome}>
          Home
        </li>
        <li className="p-4">Property Type</li>
        <li className="p-4">Listing Type</li>

        <li
          className="p-4"
          onClick={handleChats}>
          Chats
        </li>
        <li
          className="p-4  cursor-pointer"
          onClick={handleSaved}>
          Saved
        </li>
        <li className="pt-3">
          <button
            type="button"
            class="text-gray-900 text-sm hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg px-2 py-1 text-center mr-2 mb-1 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800"
            onClick={openModal}>
            SELL/RENT
          </button>
        </li>
        <li className="p-4  cursor-pointer">
          <div
            className="flex flex-row justify-center items-center"
            onClick={handleNavigate}>
            <ImProfile />
            Profile
          </div>
        </li>
      </ul>
      <div
        onClick={handleNav}
        className="block md:hidden mt-4">
        {!nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <div
        className={
          !nav
            ? "fixed left-0 top-0 w-[40%] border-r border-r-gray-300 bg-[#ffff] h-full ease-in-out duration-500"
            : "fixed left-[100%]"
        }>
        <h1 className="font-bold text-3xl w-full m-4">React</h1>
        <ul className="pt-12 uppercase">
          <li className="p-4 border-b border-gray-400">Home</li>
          <li className="p-4 border-b border-gray-400">Property Type</li>
          <li className="p-4 border-b border-gray-400">Listing Type</li>
          <li className="p-4 border-b border-gray-400">Chats</li>
          <li className="p-4">Wishlist</li>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
