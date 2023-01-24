import React, { useState } from 'react'
import SideBar from '../../../../components/Common/adminAndCompanySideBar/SideBar/SideBar';
import Header from '../../../../components/Common/adminAndCompanySideBar/Header/Header';
import { Breadcrumbs } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import Link from 'next/link';
import { ADMIN_SIDE_BAR_LINKS } from '../../../../constants/Admin_sideBar';
import CompanyDetails from '../../../../components/Admin/Companies/CompanyDetails';


function index() {

    const [sidebarOpen, setSidebarOpen] = useState(false);
    return (
        <div className="flex h-screen overflow-hidden">
            {/* Sidebar */}
            <SideBar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} links={ADMIN_SIDE_BAR_LINKS} />
            {/* Content area */}
            <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
                {/*  Site header */}
                <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
                <main>
                    <div className="border rounded-lg shadow bg-gray-200">
                        <Breadcrumbs aria-label="breadcrumb" className="p-5 pl-8 text-black">
                            <Link href="/admin" className='text-black  no-underline'>
                                <HomeIcon />  Home
                            </Link>
                            <Link className='text-black  no-underline' href="/admin/company"
                            >
                                companies
                            </Link>
                            <Link className='text-black  no-underline' href="/admin/company/company-details"
                            >
                                Company Details
                            </Link>
                        </Breadcrumbs>
                        <CompanyDetails />
                    </div>
                </main>
            </div>
        </div>
    )
}

export default index
