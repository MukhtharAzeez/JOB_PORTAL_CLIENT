import React from "react";
import { useSelector } from "react-redux";
import UserMessage from "../../../components/Message/UserMessage";
import MobileBottom from "../../../components/Common/companyAdmin-user/MobileBottom/MobileBottom";
import NavBar from "../../../components/Common/companyAdmin-user/NavBar/NavBar";
import { currentTheme } from "../../../redux/user/ThemeSlice";
import CompanyAdminProtectRoute from "../../../protectRoutes/companyAdminProtectRoute";

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
