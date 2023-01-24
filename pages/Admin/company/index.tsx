import React, { useState } from "react";
import Companies from "../../../components/Admin/Companies/Companies";
import Header from "../../../components/Common/adminAndCompanySideBar/Header/Header";
import SideBar from "../../../components/Common/adminAndCompanySideBar/SideBar/SideBar";
import { ADMIN_SIDE_BAR_LINKS } from "../../../constants/Admin_sideBar";


function index() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <SideBar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        links={ADMIN_SIDE_BAR_LINKS}
      />

      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        {/*  Site header */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <main>
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto bg-gray-200">
            <div className="border rounded-lg shadow">
              <Companies />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default index;
