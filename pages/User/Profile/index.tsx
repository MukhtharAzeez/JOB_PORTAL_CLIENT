import { Box } from "@mui/material";
import Head from "next/head";
import React from "react";
import { useSelector } from "react-redux";
import { currentTheme } from "../../../redux/user/ThemeSlice";
import { USER_SIDEBAR_LINKS } from "../../../constants/User-sideBar";
import UserProtectRouter from "../../../protectRoutes/protectRoutes";
import { currentUser } from "../../../redux/user/userAuthSlicer";
import { MobileBottom, NavBar, RightBar, SideBar, SideBarWithoutText } from "../../../components/Common";
import { Profile } from "../../../components/User";

function index() {
  const mode = useSelector(currentTheme);
  const { userId } = useSelector(currentUser);
  return (
    <UserProtectRouter>
      <Head>
        <title>Portal-Profile</title>
      </Head>
      <Box className="bg-gray-200 min-h-[100vh]" color={"text.primary"}>
        <NavBar mode={mode} type={'user'} />
        <div className="border ">
          <div className="flex justify-around md:pr-20">
            <div className="w-2/12 mt-8 hidden md:block ml-16 lg:ml-0">
              <SideBar links={USER_SIDEBAR_LINKS} href={'/user/profile'} />
            </div>
            <div className="ml-0 md:ml-16 mt-8 w-0 md:hidden">
              <SideBarWithoutText links={USER_SIDEBAR_LINKS} href={'/user/profile'} />
            </div>
            <div className="lg:w-5/12 sm:w-full xs:w-2/12 md:pl-44 lg:pl-16 mt-5 flex justify-center">
              <Profile userId={userId} user={true} />
            </div>
            <div className="w-0 hidden xl:block xl:w-[240px] md:pr-10  mt-28">
              <RightBar />
            </div>
          </div>
        </div>
        <div className="sm:hidden">
          <MobileBottom />
        </div>
      </Box>
    </UserProtectRouter>
  );
}

export default index;
