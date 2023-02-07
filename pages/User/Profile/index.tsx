import { Box } from "@mui/material";
import Head from "next/head";
import React from "react";
import { useSelector } from "react-redux";
import RightBar from "../../../components/User/Home/RightBar";
import SideBar from "../../../components/Common/companyAdmin-user/SideBar";
import MobileBottom from "../../../components/User/MobileBottom/MobileBottom";
import NavBar from "../../../components/Common/companyAdmin-user/NavBar/NavBar";
import Profile from "../../../components/User/Profile/Profile";
import { currentTheme } from "../../../redux/user/ThemeSlice";
import { USER_SIDEBAR_LINKS } from "../../../constants/User-sideBar";
import UserProtectRouter from "../../../protectRoutes/protectRoutes";
import { currentUser } from "../../../redux/user/userAuthSlicer";

function index() {
  const mode = useSelector(currentTheme);

  const {userId} = useSelector(currentUser);
  
  return (
    <UserProtectRouter>
      <Head>
        <title>Portal-Profile</title>
      </Head>
      <Box className="bg-gray-200 min-h-[100vh]" color={"text.primary"}>
        <NavBar mode={mode} type={'user'}/>
        <div className="border ">
          <div className="flex justify-around md:pr-20">
            <div className="w-2/12 mt-8 hidden md:block">
              <SideBar links={USER_SIDEBAR_LINKS} />
            </div>
            <div className="lg:w-5/12 sm:w-full xs:w-2/12 md:pl-44 lg:pl-16 mt-5 flex justify-center">
              <Profile userId={userId} user={true}/>
            </div>
            <div className=" md:w-2/12 md:pr-10  mt-4">
              <RightBar />
            </div>
          </div>
        </div>
        <MobileBottom />
      </Box>
    </UserProtectRouter>
  );
}

export default index;
