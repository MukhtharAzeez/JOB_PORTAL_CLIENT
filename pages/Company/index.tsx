import Link from 'next/link';
import React, { useState } from 'react'
import SideBar from '../../components/Common/adminAndCompanySideBar/SideBar';
import Admins from '../../components/Company/Home/Admins/Admins';
import Header from '../../components/Company/Home/Header/Header';


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
                    <div className="px-4 sm:px-6 lg:px-8 pb-8 w-full max-w-9xl mx-auto bg-gray-200">
                        <Link href="/Company/Add-Admin"  className="rounded-t bg-transparent mb-0 px-1 pb-4">
                            <div className="text-center flex justify-end">
                                <button className="bg-[#1e293b] text-gray-400 active:bg-[#1e293b] font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md hover:bg-gray-400 hover:text-black outline-none focus:outline-none mr-1 ease-linear transition-all duration-150" type="button">
                                    Add Admin
                                </button>
                            </div>
                        </Link>
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
