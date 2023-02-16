import React from "react";
import { useSelector } from "react-redux";
import UserMessage from "../../../components/Message/UserMessage";
import { currentTheme } from "../../../redux/user/ThemeSlice";
import CompanyAdminProtectRoute from "../../../protectRoutes/companyAdminProtectRoute";
import { MobileBottom, NavBar } from "../../../components/Common";

function index() {
  const mode = useSelector(currentTheme);
  return (
    <CompanyAdminProtectRoute>
      <div>
        <NavBar mode={mode} type={'company-admin'}/>
        <UserMessage type={'companyAdmin'}/>
        <div className="sm:hidden">
          <MobileBottom />
        </div>
      </div>
    </CompanyAdminProtectRoute>
  );
}

export default index;
