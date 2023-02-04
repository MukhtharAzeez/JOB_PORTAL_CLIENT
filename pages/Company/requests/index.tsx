import Link from 'next/link';
import React, { useState } from 'react'
import { Breadcrumbs } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import SideBar from '../../../components/Common/adminAndCompanySideBar/SideBar/SideBar';
import { COMPANY_SIDE_BAR_LINKS } from '../../../constants/Company-sideBar';
import Header from '../../../components/Common/adminAndCompanySideBar/Header/Header';
import CompanyProtectRoute from '../../../protectRoutes/companyProtectRoute';
import EachRequests from '../../../components/Common/Requests/EachRequests';
import { currentCompany } from '../../../redux/company/companyAuthSlicer';
import { useSelector } from 'react-redux';

function index() {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const { companyId } = useSelector(currentCompany)

    return (
        <CompanyProtectRoute>
            <div className="flex h-screen overflow-hidden">
                {/* Sidebar */}
                <SideBar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} links={COMPANY_SIDE_BAR_LINKS} />
                {/* Content area */}
                <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
                    {/*  Site header */}
                    <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
                    <main>
                        <div className="px-4 sm:px-6 lg:px-8 pb-8 w-full max-w-9xl mx-auto bg-gray-200 min-h-[100vh]">
                            <div className="rounded-t bg-transparent mb-0 px-1 pb-4">
                                <Breadcrumbs aria-label="breadcrumb" className="pt-5 text-black">
                                    <Link href="/company" className="text-black">
                                        <HomeIcon />  Home
                                    </Link>
                                    <Link href="/company/admins" className=" text-black">
                                        Requests
                                    </Link>
                                </Breadcrumbs>
                            </div>
                            <div className="w-full">
                                <EachRequests type={'company'} id={companyId}/>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </CompanyProtectRoute>
    )
}

export default index
