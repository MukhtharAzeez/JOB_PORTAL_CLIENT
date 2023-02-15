import React from "react";
import { useSelector } from "react-redux";
import UserMessage from "../../../components/Message/UserMessage";
import MobileBottom from "../../../components/Common/companyAdmin-user/MobileBottom/MobileBottom";
import NavBar from "../../../components/Common/companyAdmin-user/NavBar/NavBar";
import UserProtectRouter from "../../../protectRoutes/protectRoutes";
import { currentTheme } from "../../../redux/user/ThemeSlice";

function index() {
  const mode = useSelector(currentTheme);
  return (
    <UserProtectRouter>
      <div>
        <NavBar mode={mode} type={'user'}/>
        <UserMessage type={'user'}/>
        <div className="sm:hidden">
          <MobileBottom />
        </div>
      </div>
    </UserProtectRouter>
  );
}

export default index;
