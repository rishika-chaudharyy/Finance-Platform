import React from "react";
import CARD from "../../assets/images/card.jpg";
import { LuTrendingUpDown } from "react-icons/lu";

const AuthLayout = ({ children }) => {
  return (
    <div className="flex">
      <div className="w-screen h-screen md:w-[60vw] px-12 pt-8 pb-12">
        <h2 className="text-lg font-medium text-green-500">HisaabKitaab</h2>
        {children}
      </div>

      <div className="hidden md:block w-[40vw] h-screen bg-black bg-auth-bg-img bg-cover bg-no-repeat bg-center overflow-hidden p-8  relative">
        <div className="w-48 h-48 rounded-[40px] bg-green-600 absolute -top-7 -left-5"></div>
        <div className="w-48 h-56 rounded-[40px] border-[20px] border-b-emerald-600 absolute top-[30%] -right-10"></div>
        <div className="w-48 h-48 rounded-[40px] bg-emerald-700 absolute -bottom-7 -left-5"></div>

        <div className="grid grid-cols-1 z-20">
          <StatsInfoCard
            icon={<LuTrendingUpDown />}
            label="Stay on Top of Your Budget"
            value="430,000"
            color="bg-primary"
          />
        </div>

        <img
          src={CARD}
          alt=""
          className="w-64 lg:w-[90%] absolute bottom-10 shadow-lg shadow-green-400/15 rounded-2xl "
        />
      </div>
    </div>
  );
};

export default AuthLayout;

const StatsInfoCard = ({ icon, label, value, color }) => {
  return (
    <div className="flex gap-6 bg-white p-4 rounded-xl shadow-md shadow-green-400/10 border  border-gray-200/10  z-10">
      <div
        className={`w-12 h-12 flex items-center justify-center text-[26px] text-white ${color} rounded-full drop-shadow-xl`}
      >
        {icon}
      </div>

      <div>
        <h6 className="text-xs text-black mb-1">{label}</h6>
        <span className="text-[20px] text-black ">₹{value}</span>
      </div>
    </div>
  );
};
