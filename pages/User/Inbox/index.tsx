import React from "react";
import { useSelector } from "react-redux";
import UserMessage from "../../../components/Message/UserMessage";
import MobileBottom from "../../../components/User/MobileBottom/MobileBottom";
import NavBar from "../../../components/User/NavBar/NavBar";
import { currentTheme } from "../../../redux/user/ThemeSlice";

function index() {
  const mode = useSelector(currentTheme);
  return (
    <div>
      <NavBar mode={mode} />
      <UserMessage/>
      <MobileBottom />
    </div>
  );
}

export default index;
