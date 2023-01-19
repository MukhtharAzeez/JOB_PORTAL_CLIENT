import React from 'react'
import NavBar from '../../components/Company/Home/NavBar/NavBar';
import SideBar from '../../components/Company/Home/SideBar/SideBar';
import AdminTable from '../../components/Company/Tables/AdminTable';

function index() {

    return (
        <div className="bg-gray-200">
            <NavBar />
            <div className='flex gap-8'>
                <SideBar/>

                <div className="w-10/12 shadow-lg rounded-lg bg-white mr-8 mt-28 pb-4 flex justify-center">
                    <div >
                        <AdminTable />
                    </div>
                </div>

            </div>

        </div>
    )
}

export default index
