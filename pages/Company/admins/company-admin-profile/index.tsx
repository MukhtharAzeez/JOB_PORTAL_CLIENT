import React, { useState } from 'react'
import SideBar from '../../../../components/Common/adminAndCompanySideBar/SideBar/CompanyAndAdminSideBar';
import CompanyAdminsProfile from '../../../../components/Company/CompanyAdmins/CompanyAdminsProfile';
import Header from '../../../../components/Common/adminAndCompanySideBar/Header/Header';
import { Breadcrumbs } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import Link from 'next/link';
import { COMPANY_SIDE_BAR_LINKS } from '../../../../constants/Company-sideBar';
import CompanyProtectRoute from '../../../../protectRoutes/companyProtectRoute';


function index() {

    const [sidebarOpen, setSidebarOpen] = useState(false);
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
                        <div className="border rounded-lg shadow bg-gray-200">
                            <Breadcrumbs aria-label="breadcrumb" className="p-5 pl-8 text-black">
                                <Link href="/company" className='text-black  no-underline'>
                                    <HomeIcon />  Home
                                </Link>
                                <Link className='text-black  no-underline' href="/company/admins"
                                >
                                    Admins
                                </Link>
                                <Link className='text-black  no-underline' href="/company/admins/company-admin-profile"
                                >
                                    Company admin profile
                                </Link>
                            </Breadcrumbs>
                            <CompanyAdminsProfile />
                        </div>
                    </main>
                </div>
            </div>
        </CompanyProtectRoute>
    )
}

export default index
