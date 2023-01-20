import { Tooltip } from '@mui/material';
import React from 'react';
import useSWR from "swr";
import { approveCompany, getAllCompanies } from '../../../api/Admin/get';


function Companies() {

    async function handleApprove(companyId: string) {
        await approveCompany(companyId)
    }

    const fetcher = async () => {
        const companies = await getAllCompanies();
        return companies;
    };
    const { data, error, isLoading } = useSWR("companies", fetcher);

    if (error) return <div>Error....</div>
    if (isLoading) return <div>Loading....</div>

    return (
        <div className="col-span-full xl:col-span-8 bg-white shadow-lg rounded-lg border border-slate-200">
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
                                    <div className="font-semibold text-left">Company</div>
                                </th>
                                <th className="p-2">
                                    <div className="font-semibold text-center">Established</div>
                                </th>
                                <th className="p-2">
                                    <div className="font-semibold text-center">Email</div>
                                </th>
                                <th className="p-2">
                                    <div className="font-semibold text-center">Type</div>
                                </th>
                                <th className="p-2">
                                    <div className="font-semibold text-center">Pan Card No.</div>
                                </th>
                                <th className="p-2">
                                    <div className="font-semibold text-center">Status</div>
                                </th>
                            </tr>
                        </thead>
                        {/* Table body */}
                        <tbody className="text-sm font-medium divide-y divide-slate-100">
                            {
                                data.data.map(function (company: any) {
                                    return (
                                        <tr key={company._id}>
                                            <td className="p-2">
                                                <div className="flex items-center">
                                                    <svg className="shrink-0 mr-2 sm:mr-3" width="36" height="36" viewBox="0 0 36 36">
                                                        <circle fill="#24292E" cx="18" cy="18" r="18" />
                                                        <path d="M18 10.2c-4.4 0-8 3.6-8 8 0 3.5 2.3 6.5 5.5 7.6.4.1.5-.2.5-.4V24c-2.2.5-2.7-1-2.7-1-.4-.9-.9-1.2-.9-1.2-.7-.5.1-.5.1-.5.8.1 1.2.8 1.2.8.7 1.3 1.9.9 2.3.7.1-.5.3-.9.5-1.1-1.8-.2-3.6-.9-3.6-4 0-.9.3-1.6.8-2.1-.1-.2-.4-1 .1-2.1 0 0 .7-.2 2.2.8.6-.2 1.3-.3 2-.3s1.4.1 2 .3c1.5-1 2.2-.8 2.2-.8.4 1.1.2 1.9.1 2.1.5.6.8 1.3.8 2.1 0 3.1-1.9 3.7-3.7 3.9.3.4.6.9.6 1.6v2.2c0 .2.1.5.6.4 3.2-1.1 5.5-4.1 5.5-7.6-.1-4.4-3.7-8-8.1-8z" fill="#FFF" />
                                                    </svg>
                                                    <div className="text-slate-800">{company.company}</div>
                                                </div>
                                            </td>
                                            <td className="p-2">
                                                <div className="text-center">{company.establishedOn}</div>
                                            </td>
                                            <td className="p-2">
                                                <div className="text-center text-sky-500">{company.email}</div>
                                            </td>
                                            <td className="p-2">
                                                <div className="text-center">{company.type}</div>
                                            </td>
                                            <td className="p-2">
                                                <div className="text-center text-green-500">{company.panCardNumber}</div>
                                            </td>
                                            <Tooltip title={company.approved ? 'Cancel Approvement' : 'Approve this company'} arrow placement='bottom-start'>
                                                <td className="p-2" onClick={() => handleApprove(company._id)}>
                                                    <div className="text-center cursor-pointer">{company.approved ? 'Approved' : 'Not Approved'}</div>
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

export default Companies;



