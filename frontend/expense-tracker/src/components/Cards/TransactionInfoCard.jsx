import React from "react";
import {
  LuUtensils,
  LuTrendingUp,
  LuTrendingDown,
  LuTrash2,
} from "react-icons/lu";

const TransactionInfoCard = ({
  title,
  icon,
  date,
  amount,
  type,
  hideDeleteBtn,
  onDelete,
}) => {
  const getAmountStyles = () => {
    return type === "income"
      ? "bg-green-100 text-green-500"
      : "bg-red-100 text-red-500";
  };

  const getIconWrapperBg = () => {
    return type === "income" ? "bg-green-500" : "bg-red-500";
  };

  const renderIcon = () => {
    if (typeof icon === "string") {
      if (icon.startsWith("http") || icon.startsWith("/")) {
        return (
          <img
            src={icon}
            alt={title}
            className="w-6 h-6"
            onError={(e) => {
              e.target.onerror = null;
              e.target.style.display = "none";
            }}
          />
        );
      } else {
        return <span className="text-xl">{icon}</span>;
      }
    }
    return <LuUtensils />;
  };

  return (
    <div className="group relative flex items-center gap-4 mt-2 p-3 rounded-lg hover:bg-gray-100/60">
      <div
        className={`w-12 h-12 flex items-center justify-center text-xl text-white rounded-full ${getIconWrapperBg()}`}
      >
        {renderIcon()}
      </div>

      <div className="flex-1 flex items-center justify-between ">
        <div>
          <p className="text-sm text-gray700 font-medium">{title}</p>
          <p className="text-xs text-gray700 font-medium">{date}</p>
        </div>

        <div className="flex items-center gap-2">
          {!hideDeleteBtn && (
            <button
              className="text-white hover:text-red-500 opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
              onClick={onDelete}
            >
              <LuTrash2 size={18} />
            </button>
          )}

          <div
            className={`flex items-center gap-2 px-3 py-1.5 rounded-md ${getAmountStyles()}`}
          >
            <h6 className="text-xs font-medium">
              {type === "income" ? "+" : "-"} ₹{amount}
            </h6>
            {type === "income" ? <LuTrendingUp /> : <LuTrendingDown />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransactionInfoCard;
