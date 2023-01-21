import React, { useState } from 'react'
import SideBar from '../../../components/Common/adminAndCompanySideBar/SideBar';
import AddCompanyAdmins from '../../../components/Company/CompanyAdmins/AddCompanyAdmins';
import Header from '../../../components/Common/adminAndCompanySideBar/Header/Header';
import { Breadcrumbs } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';

import Link from 'next/link';
function index() {

    const [sidebarOpen, setSidebarOpen] = useState(false);


    return (
        <div className="flex h-screen overflow-hidden">

            {/* Sidebar */}
            <SideBar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

            {/* Content area */}
            <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">

                {/*  Site header */}
                <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
                <main>
                    {/* <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto bg-gray-200"> */}

                    <div className="border rounded-lg shadow bg-gray-200">
                        <Breadcrumbs aria-label="breadcrumb" className="p-5 pl-8 text-black">
                            <Link href="/company">
                                <HomeIcon />  Home
                            </Link>
                            <Link href="/company/add-admin"
                            >
                                Add Admin
                            </Link>
                        </Breadcrumbs>
                        <AddCompanyAdmins />
                    </div>
                    {/* </div> */}
                </main>
            </div>
        </div>
    )
}

export default index
