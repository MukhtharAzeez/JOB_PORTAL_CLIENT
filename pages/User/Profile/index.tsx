import { Box, Grid } from '@mui/material'
import Head from 'next/head'
import React from 'react'
import { useSelector } from 'react-redux'
import RightBar from '../../../components/User/Home/RightBar'
import SideBar from '../../../components/User/Home/SideBar'
import MobileBottom from '../../../components/User/MobileBottom/MobileBottom'
import NavBar from '../../../components/User/NavBar/NavBar'
import Profile from '../../../components/User/Profile/Profile'
import { currentTheme } from '../../../redux/user/ThemeSlice'


function index() {
    const mode = useSelector(currentTheme)
    return (
        <>
            <Head>
                <title>Portal-Profile</title>
            </Head>
            <Box className="bg-gray-200" color={"text.primary"}>
                <NavBar mode={mode} />
                <Grid container item sx={{ paddingLeft: { xs: 0, sm: 1, lg: 1 } }}>
                    <Grid item sm={3} p={2} justifyContent="space-between">
                        <SideBar />
                    </Grid>
                    <Grid item sm={5} pt={2}>
                        <Profile />
                    </Grid>
                    <Grid item sm={4} className="md:pl-16 xs:pl-12">
                        <RightBar />
                    </Grid>
                </Grid>
                <MobileBottom />
            </Box>
        </>
    )
}

export default index
