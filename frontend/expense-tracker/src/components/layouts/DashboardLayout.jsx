import React, { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import Navbar from "./Navbar";
import SideMenu from "./SideMenu";

const DashboardLayout = ({ children, activeMenu }) => {
  const { user } = useContext(UserContext);

  return (
    <div>
      {user && (
        <>
          <Navbar activeMenu={activeMenu} />

          <div className="flex relative z-0">
            <div className="max-[1080px]:hidden">
              <SideMenu activeMenu={activeMenu} />
            </div>

            <div className="grow mx-5 relative z-0">{children}</div>
          </div>
        </>
      )}
    </div>
  );
};

export default DashboardLayout;
