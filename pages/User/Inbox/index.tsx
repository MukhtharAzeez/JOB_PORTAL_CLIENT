import React from "react";
import { useSelector } from "react-redux";
import { MobileBottom, NavBar } from "../../../components/Common";
import UserMessage from "../../../components/Message/UserMessage";
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
