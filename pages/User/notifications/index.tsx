// import React from 'react'

// function index() {
//     return (
//         <div className="flex flex-col space-y-4 min-w-screen h-screen animated fadeIn faster  fixed  left-0 top-0 justify-center items-center inset-0 z-50 outline-none focus:outline-none bg-gray-900">
//             <div className="flex flex-col p-8 bg-white shadow-md hover:shadow-lg rounded-2xl">
//                 <div className="flex items-center justify-between">
//                     <div className="flex items-center">
//                         <svg xmlns="http://www.w3.org/2000/svg"
//                             className="w-16 h-16 rounded-2xl p-3 border border-blue-100 text-blue-400 bg-blue-50" fill="none"
//                             viewBox="0 0 24 24" stroke="currentColor">
//                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
//                                 d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
//                         </svg>
//                         <div className="flex flex-col ml-3">
//                             <div className="font-medium leading-none">Delete Your Account ?</div>
//                             <p className="text-sm text-gray-600 leading-none mt-1">By deleting your account you will lose your all data
//                             </p>
//                         </div>
//                     </div>
//                     <button className="flex-no-shrink bg-red-500 px-5 ml-4 py-2 text-sm shadow-sm hover:shadow-lg font-medium tracking-wider border-2 border-red-500 text-white rounded-full">Delete</button>
//                 </div>
//             </div>
//         </div>

//     )
// }

// export default index


import { Box } from "@mui/material";
import Head from "next/head";
import React from "react";
import { useSelector } from "react-redux";
import RightBar from "../../../components/User/Home/RightBar";
import SideBar from "../../../components/Common/companyAdmin-user/SideBar";
import MobileBottom from "../../../components/User/MobileBottom/MobileBottom";
import NavBar from "../../../components/User/NavBar/NavBar";
import { currentTheme } from "../../../redux/user/ThemeSlice";
import { USER_SIDEBAR_LINKS } from "../../../constants/User-sideBar";
import Notifications from "../../../components/Common/notifications/Notifications";

function index() {
    const mode = useSelector(currentTheme);

    let userId
    if (typeof window !== 'undefined') {
        userId = localStorage.getItem('userId');
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
                        <div className="lg:w-7/12 sm:w-full xs:w-2/12 md:pl-44 lg:pl-16 mt-28 flex justify-center">
                            <Notifications />
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
