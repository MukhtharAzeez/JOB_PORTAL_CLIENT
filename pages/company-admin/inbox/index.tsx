import React from "react";
import { useSelector } from "react-redux";
import UserMessage from "../../../components/Message/UserMessage";
import MobileBottom from "../../../components/User/MobileBottom/MobileBottom";
import NavBar from "../../../components/Common/companyAdmin-user/NavBar/NavBar";
import { currentTheme } from "../../../redux/user/ThemeSlice";
import CompanyAdminProtectRoute from "../../../protectRoutes/companyAdminProtectRoute";

function index() {
  const mode = useSelector(currentTheme);
  return (
    <CompanyAdminProtectRoute>
      <div>
        <NavBar mode={mode} type={'user'}/>
        <UserMessage type={'companyAdmin'}/>
        <MobileBottom />
      </div>
    </CompanyAdminProtectRoute>
  );
}

export default index;
