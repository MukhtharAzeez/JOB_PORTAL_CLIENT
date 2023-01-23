import Link from 'next/link';
import React, { useState } from 'react'

import { Breadcrumbs } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import SideBar from '../../../components/Common/adminAndCompanySideBar/SideBar/SideBar';
import { COMPANY_SIDE_BAR_LINKS } from '../../../constants/Company-sideBar';
import Header from '../../../components/Common/adminAndCompanySideBar/Header/Header';
import Admins from '../../../components/Company/Home/Admins/Admins';

function index() {

    const [sidebarOpen, setSidebarOpen] = useState(false);



    return (
        <div className="flex h-screen overflow-hidden">

            {/* Sidebar */}
            <SideBar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} links={COMPANY_SIDE_BAR_LINKS} />

            {/* Content area */}
            <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">

                {/*  Site header */}
                <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
                <main>
                    <div className="px-4 sm:px-6 lg:px-8 pb-8 w-full max-w-9xl mx-auto bg-gray-200">
                        <div className="rounded-t bg-transparent mb-0 px-1 pb-4">
                            <Breadcrumbs aria-label="breadcrumb" className="pt-5 text-black">
                                <Link href="/company">
                                    <HomeIcon />  Home
                                </Link>
                                <Link href="/company/admins">
                                    Admins
                                </Link>
                            </Breadcrumbs>
                            <Link href="/company/admins/add-admin" className="text-center flex justify-end">
                                <button className="bg-[#1e293b] text-gray-400 active:bg-[#1e293b] font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md hover:bg-gray-400 hover:text-black outline-none focus:outline-none mr-1 ease-linear transition-all duration-150" type="button">
                                    Add Admin
                                </button>
                            </Link>
                        </div>
                        <div className="border rounded-lg shadow mx-8">
                            <Admins />
                        </div>
                    </div>
                </main>
            </div>
        </div>
    )
}

export default index