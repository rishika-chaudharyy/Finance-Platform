import React from "react";

const InfoCard = ({ icon, label, color, value }) => {
  return (
    <div className="flex gap-6 bg-black p-6 rounded-2xl shadow-md shadow-gray-100 border border-gray-200/50 relative z-0">
      <div
        className={`w-14 h-14 flex items-center justify-center text-[26px] text-white ${color} rounded-full drop-shadow-xl relative z-10`}
      >
        {icon}
      </div>

      <div>
        <h5 className="text-sm text-white mb-1">{label}</h5>
        <span className="text-[22px] white-black">₹{value}</span>
      </div>
    </div>
  );
};

export default InfoCard;
