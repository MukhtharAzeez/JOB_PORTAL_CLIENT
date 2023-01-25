import { Box } from "@mui/material";
import Head from "next/head";
import React from "react";
import { useSelector } from "react-redux";
import SideBar from "../../../components/Common/companyAdmin-user/SideBar";
import SideBarWithoutText from "../../../components/User/Home/SideBarWithoutText";
import MobileBottom from "../../../components/User/MobileBottom/MobileBottom";
import NavBar from "../../../components/User/NavBar/NavBar";
import EditProfile from "../../../components/User/Profile/EditProfile";
import { USER_SIDEBAR_LINKS } from "../../../constants/User-sideBar";
import { currentTheme } from "../../../redux/user/ThemeSlice";

function Edit() {
  const mode = useSelector(currentTheme);
  return (
    <>
      <Head>
        <title>Portal-Profile</title>
      </Head>
      <Box className="bg-gray-200" color={"text.primary"}>
        <NavBar mode={mode} />
        <div className="border ">
          <div className="flex justify-around md:pr-20">
            <div className="w-1/12 mt-10 ml-24 hidden lg:block">
              <SideBar links={USER_SIDEBAR_LINKS}/>
            </div>
            <div className="w-1/12 mt-10 ml-5 xs:ml-0 sm:block lg:hidden">
              <SideBarWithoutText />
            </div>
            <div className="w-full mt-24 md:ml-24 ">
              <EditProfile />
            </div>
          </div>
        </div>
        <MobileBottom />
      </Box>
    </>
  );
}

export default Edit;
