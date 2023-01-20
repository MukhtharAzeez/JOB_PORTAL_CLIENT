import React, { useState } from 'react'
import SideBar from '../../../components/Common/adminAndCompanySideBar/SideBar';
import AddCompanyAdmins from '../../../components/Company/AddCompanyAdmins/AddCompanyAdmins';
import Header from '../../../components/Company/Home/Header/Header';


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
                            <AddCompanyAdmins/>
                        </div>
                    {/* </div> */}
                </main>
            </div>
        </div>
    )
}

export default index
