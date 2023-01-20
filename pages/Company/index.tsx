import React, { useState } from 'react'
import Admins from '../../components/Company/Home/Admins/Admins';
import Header from '../../components/Company/Home/Header/Header';
// import NavBar from '../../components/Company/Home/NavBar/NavBar';
import SideBar from '../../components/Company/Home/SideBar/SideBar';
// import AdminTable from '../../components/Company/Tables/AdminTable';

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
                    <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto bg-gray-200">
                        <div className="border rounded-lg shadow">
                            <Admins/>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    )
}

export default index
