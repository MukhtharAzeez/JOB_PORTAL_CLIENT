import { Box } from '@mui/material'
import Head from 'next/head'
import React from 'react'
import { useSelector } from 'react-redux'
import SideBar from '../../../../components/Common/companyAdmin-user/SideBar'
import SideBarWithoutText from '../../../../components/Common/companyAdmin-user/SideBarWithoutText'
import CompanyProfile from '../../../../components/Company/Profile/CompanyProfile'
import MobileBottom from '../../../../components/User/MobileBottom/MobileBottom'
import NavBar from '../../../../components/Common/companyAdmin-user/NavBar/NavBar'
import { USER_SIDEBAR_LINKS } from '../../../../constants/User-sideBar'
import UserProtectRouter from '../../../../protectRoutes/protectRoutes'
import { currentTheme } from '../../../../redux/user/ThemeSlice'



function index() {
    const mode = useSelector(currentTheme);

    return (
        <UserProtectRouter>
            <Head>
                <title>Edit-Profile</title>
            </Head>
            <Box className="bg-gray-200 min-h-[100vh]" color={"text.primary"}>
                <NavBar mode={mode} type={'user'}/>
                <div className="flex ">
                    <div className="w-1/12 mt-8 ml-16 hidden lg:block">
                        <SideBar links={USER_SIDEBAR_LINKS} />
                    </div>
                    <div className="w-0 sm:w-1/12  mt-8 ml-5 xs:ml-0 sm:block lg:hidden">
                        <SideBarWithoutText links={USER_SIDEBAR_LINKS} />
                    </div>
                    <div className="w-11/12  sm:w-10/12 md:w-8/12 md:ml-24 sm:ml-10 lg:ml-48 mt-28 w-full">
                        <CompanyProfile/>
                    </div>
                </div>

                <MobileBottom />
            </Box>
        </UserProtectRouter>
    )
}

export default index
