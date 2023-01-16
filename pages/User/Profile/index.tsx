import { Box } from '@mui/material'
import Head from 'next/head'
import React from 'react'
import { useSelector } from 'react-redux'
import RightBar from '../../../components/User/Home/RightBar'
import SideBar from '../../../components/User/Home/SideBar'
import MobileBottom from '../../../components/User/MobileBottom/MobileBottom'
import NavBar from '../../../components/User/NavBar/NavBar'
import Profile from '../../../components/User/Profile/Profile'
import UserProtectRouter from '../../../protectRoutes/protectRoute'
import { currentTheme } from '../../../redux/user/ThemeSlice'




function index() {
    
    const mode = useSelector(currentTheme)
    return (
        <UserProtectRouter>
     
            <Head>
                <title>Portal-Profile</title>
            </Head>
            <Box className="bg-gray-200" color={"text.primary"}>
                <NavBar mode={mode} />
                {/* <Grid container item sx={{ paddingLeft: { xs: 0, sm: 1, lg: 1 } }}>
                    <Grid item sm={3} p={2} justifyContent="space-between" className="ml-5">
                        <SideBar />
                    </Grid>
                    <Grid item sm={4} pt={2}>
                        <Profile />
                    </Grid>
                    <Grid item sm={4} className="md:pl-16 xs:pl-12">
                        <RightBar />
                    </Grid>
                </Grid> */}
                <div className='border '>
                    <div className="flex justify-around md:pr-20">
                        <div className="w-2/12 mt-8 hidden md:block">
                            <SideBar />
                        </div>
                        <div className='lg:w-5/12 sm:w-full xs:w-2/12 md:pl-44 lg:pl-16 mt-5 flex justify-center'>
                            <Profile />
                        </div>
                        <div className=" md:w-2/12 md:pr-10  mt-4">
                            <RightBar />
                        </div>
                    </div>
                </div>
                <MobileBottom />
            </Box>
        </UserProtectRouter>
    )
}

export default index

