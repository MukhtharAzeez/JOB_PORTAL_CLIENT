import { Box } from "@mui/material";
import Head from "next/head";
import React from "react";
import { useSelector } from "react-redux";
import RightBar from "../../../components/User/Home/RightBar";
import SideBar from "../../../components/Common/companyAdmin-user/SideBar";
import MobileBottom from "../../../components/User/MobileBottom/MobileBottom";
import NavBar from "../../../components/User/NavBar/NavBar";
import Profile from "../../../components/User/Profile/Profile";
import { currentTheme } from "../../../redux/user/ThemeSlice";
import { USER_SIDEBAR_LINKS } from "../../../constants/User-sideBar";

function index() {
  const mode = useSelector(currentTheme);

  let userId
  if (typeof window !== 'undefined') {
    userId=localStorage.getItem('userId');
  }
  
  return (
    <>
      <Head>
        <title>Portal-Profile</title>
      </Head>
      <Box className="bg-gray-200 min-h-[100vh]" color={"text.primary"}>
        <NavBar mode={mode} />
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
    </>
  );
}

export default index;
