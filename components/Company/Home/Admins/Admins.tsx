import React from 'react';
import useSWR from "swr";
import { Tooltip } from '@mui/material';
import { getAllCompanyAdmins } from '../../../../api/Company/get';
import Link from 'next/link';


function Admins() {

    const fetcher = async () => {
        const companyAdmins = await getAllCompanyAdmins();
        return companyAdmins;
    };
    const { data, error, isLoading } = useSWR("companyAdmins", fetcher);

    if (error) return <div>Error....</div>
    if (isLoading) return <div>Loading....</div>

    return (
        <div className="col-span-full xl:col-span-8 bg-white shadow-lg rounded-sm border border-slate-200">
            <header className="px-5 py-4 border-b border-slate-100">
                <h2 className="font-semibold text-slate-800">All Companies</h2>
            </header>
            <div className="p-3">

                {/* Table */}
                <div className="overflow-x-auto scrollbar-hide">
                    <table className="table-auto w-full">
                        {/* Table header */}
                        <thead className="text-xs uppercase text-slate-400 bg-slate-50 rounded-sm">
                            <tr>
                                <th className="p-2">
                                    <div className="font-semibold text-left">Admin</div>
                                </th>
                                <th className="p-2">
                                    <div className="font-semibold text-center">Position</div>
                                </th>
                                <th className="p-2">
                                    <div className="font-semibold text-center">Total Hiring</div>
                                </th>
                                <th className="p-2">
                                    <div className="font-semibold text-center">Total Rejections</div>
                                </th>
                                <th className="p-2">
                                    <div className="font-semibold text-center">Pending Hiring</div>
                                </th>
                            </tr>
                        </thead>
                        {/* Table body */}
                        <tbody className="text-sm font-medium divide-y divide-slate-100">
                            {
                                data.data.map(function (admin: any) {
                                    return (
                                        <tr key={admin._id}>
                                            <Link href="/Company/CompanyAdmin-Profile">
                                                <td className="p-2">
                                                    <div className="flex items-center">
                                                        <svg className="shrink-0 mr-2 sm:mr-3" width="36" height="36" viewBox="0 0 36 36">
                                                            <circle fill="#24292E" cx="18" cy="18" r="18" />
                                                            <path d="M18 10.2c-4.4 0-8 3.6-8 8 0 3.5 2.3 6.5 5.5 7.6.4.1.5-.2.5-.4V24c-2.2.5-2.7-1-2.7-1-.4-.9-.9-1.2-.9-1.2-.7-.5.1-.5.1-.5.8.1 1.2.8 1.2.8.7 1.3 1.9.9 2.3.7.1-.5.3-.9.5-1.1-1.8-.2-3.6-.9-3.6-4 0-.9.3-1.6.8-2.1-.1-.2-.4-1 .1-2.1 0 0 .7-.2 2.2.8.6-.2 1.3-.3 2-.3s1.4.1 2 .3c1.5-1 2.2-.8 2.2-.8.4 1.1.2 1.9.1 2.1.5.6.8 1.3.8 2.1 0 3.1-1.9 3.7-3.7 3.9.3.4.6.9.6 1.6v2.2c0 .2.1.5.6.4 3.2-1.1 5.5-4.1 5.5-7.6-.1-4.4-3.7-8-8.1-8z" fill="#FFF" />
                                                        </svg>
                                                        <div className="text-slate-800">{admin.name}</div>
                                                    </div>
                                                </td>
                                            </Link>
                                            <td className="p-2">
                                                <div className="text-center">{admin.position}</div>
                                            </td>
                                            <td className="p-2">
                                                <div className="text-center text-sky-500">{admin.totalHiring}</div>
                                            </td>
                                            <td className="p-2">
                                                <div className="text-center">{admin.totalRejections}</div>
                                            </td>
                                            <td className="p-2">
                                                <div className="text-center text-green-500">{admin.pendingHiring}</div>
                                            </td>
                                            <Tooltip title={admin.status ? 'Block Admin' : 'Unblock Admin'} arrow placement='bottom-start'>
                                                <td className="p-2">
                                                    <div className="text-center cursor-pointer">{admin.status ? 'Active' : 'Blocked'}</div>
                                                </td>
                                            </Tooltip>
                                        </tr>
                                    )
                                })
                            }
                            
                        </tbody>
                    </table>

                </div>
            </div>
        </div>
    );
}

export default Admins;
