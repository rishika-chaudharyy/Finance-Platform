import React, { useContext, useState } from "react";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import SideMenu from "./SideMenu";
import { UserContext } from "../../context/UserContext";

const Navbar = ({ activeMenu }) => {
  const [openSideMenu, setOpenSideMenu] = useState(false);
  const { user } = useContext(UserContext);

  return (
    <div className="flex gap-5 bg-black border border-b border-gray-200/50 backdrop-blur-[2px] py-4 px-7 top-0 z-30 relative">
      <button
        className="block lg:hidden text-white"
        onClick={() => {
          setOpenSideMenu(!openSideMenu);
        }}
      >
        {openSideMenu ? (
          <HiOutlineX className="text-2xl" />
        ) : (
          <HiOutlineMenu className="text-2xl" />
        )}
      </button>

      <h2 className="text-lg font-medium text-white">HisaabKitaab</h2>

      {user && openSideMenu && (
        <div className="fixed top-[61px] left-0 z-[60] w-64 h-[calc(100vh-61px)] bg-black overflow-y-auto">
          <SideMenu activeMenu={activeMenu} />
        </div>
      )}
    </div>
  );
};

export default Navbar;
