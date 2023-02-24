import React from "react";
import Head from "next/head";
import Box from "@mui/material/Box";
import { createTheme, ThemeProvider } from "@mui/material";
import { useSession } from "next-auth/react";
import { useSelector } from "react-redux";
import { currentTheme } from "../../../../redux/user/ThemeSlice";
import { COMPANY_ADMIN_SIDEBAR_LINKS } from "../../../../constants/Company-admin-sidebar";
import CompanyAdminProtectRoute from "../../../../protectRoutes/companyAdminProtectRoute";
import { MobileBottom, NavBar, RightBar, SideBar, SideBarWithoutText } from "../../../../components/Common";
import { AppliedUsers, EditJob } from "../../../../components/Company-admin";

/**
 * Home Page of the Application
 * @return {JSX.Element}
 */

export default function Index({ req }: { req: any }) {
    const mode = useSelector(currentTheme);
    useSession();
    const theme = createTheme({
        palette: {
            mode: mode == "light" ? "light" : "dark",
        },
    });
    return (
        <CompanyAdminProtectRoute>
            <ThemeProvider theme={theme}>
                <Head>
                    <title>Portal</title>
                    <meta name="description" content="Generated by create next app" />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <link rel="icon" href="/favicon.ico" />
                    {/* <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" /> */}
                </Head>
                <Box color={"text.primary"} className="bg-gray-200 min-h-[100vh]">
                    <NavBar mode={mode} type={'company-admin'}/>
                    <div className="border">
                        <div className="flex justify-around">
                            <div className="sm:w-2/12 mt-12">
                                <div className="hidden md:block">
                                    <SideBar links={COMPANY_ADMIN_SIDEBAR_LINKS} href={'/company-admin/jobs'}/>
                                </div>
                                <div className="ml-6 md:hidden">
                                    <SideBarWithoutText links={COMPANY_ADMIN_SIDEBAR_LINKS} href={'/company-admin/jobs'}/>
                                </div>
                            </div>
                            <div className="md:w-6/12 sm:w-9/12 w-full mt-32 mr-5 lg:ml-16">
                                <EditJob />
                                <AppliedUsers />
                            </div>
                            <div className="w-2/12 mt-32 hidden lg:block mr-20">
                                <RightBar />
                            </div>
                        </div>
                    </div>
                    <div className="sm:hidden">
                        <MobileBottom />
                    </div>
                </Box>
            </ThemeProvider>
        </CompanyAdminProtectRoute>
    );
}
