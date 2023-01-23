import React, { useState } from 'react'
import SideBar from '../../../../components/Common/adminAndCompanySideBar/SideBar/SideBar';
import CompanyAdminsProfile from '../../../../components/Company/CompanyAdmins/CompanyAdminsProfile';
import Header from '../../../../components/Common/adminAndCompanySideBar/Header/Header';
import { Breadcrumbs } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { COMPANY_SIDE_BAR_LINKS } from '../../../../constants/Company-sideBar';
// import useSWR from "swr";
// import { getCompanyAdminDetails } from '../../../api/Company-Admin/get';


function index() {

    const [sidebarOpen, setSidebarOpen] = useState(false);
    const router = useRouter();
    const adminId = router.query.adminId
    console.log(typeof adminId)
    // const fetcher = async () => {
    //     const profile = await getCompanyAdminDetails(adminId);
    //     return profile;
    // };
    // const { data, error, isLoading } = useSWR("profile", fetcher);
    
    // if(error) return <div>error</div>
    // if(isLoading) return <div>Loading....</div>
    // if(data)
    return (
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
    )
}

export default index
