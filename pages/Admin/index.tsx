import React, { useState } from 'react'
import { ADMIN_SIDE_BAR_LINKS } from '../../constants/Admin_sideBar';
import { Breadcrumbs, Link } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import { CompanyAndAdminSideBar, Header } from '../../components/Common';
import AdminProtectRoute from '../../protectRoutes/adminProtectRoute'

function index() {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    return (
        <AdminProtectRoute>
        <div className="flex h-screen overflow-hidden">
            {/* Sidebar */}
            <CompanyAndAdminSideBar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} links={ADMIN_SIDE_BAR_LINKS} />
            {/* Content area */}
            <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
                {/*  Site header */}
                <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
                <main>
                    <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto bg-gray-200 min-h-[100vh]">
                        <div className="rounded-t bg-transparent mb-0 px-1 pb-4">
                            <Breadcrumbs aria-label="breadcrumb" className="pt-5 text-black">
                                <Link href="/company" className="text-black no-underline">
                                    <HomeIcon />  Home
                                </Link>
                            </Breadcrumbs>
                        </div>
                        <div className="border rounded-lg shadow">
                            
                        </div>
                    </div>
                </main>
            </div>
        </div>
        </AdminProtectRoute>
    )
}

export default index
