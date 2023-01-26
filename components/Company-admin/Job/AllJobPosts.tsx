import React from 'react';
import useSWR from "swr";
import Link from 'next/link';
import { useSelector } from 'react-redux';
import { currentCompanyAdmin } from '../../../redux/company-admin/CompanyAdminAuthSlicer';
import { getAllCompanyPost } from '../../../api/Company-Admin/get';


function AllJobPosts() {

    const { companyId } = useSelector(currentCompanyAdmin)

    const fetcher = async () => {
        const allCompanyPosts = await getAllCompanyPost(companyId);
        console.log(allCompanyPosts)
        return allCompanyPosts;
    };
    const { data, error, isLoading } = useSWR("allCompanyPosts", fetcher);
    if (error) return <div>Error....</div>
    if (isLoading) return <div>Loading....</div>
    return (
        <div className="col-span-full xl:col-span-8 bg-white shadow-lg border border-slate-200 rounded-md">
            <header className="px-5 py-4 border-b border-slate-100">
                <h2 className="font-semibold text-slate-800">All Admins</h2>
            </header>
            <div className="p-3">

                {/* Table */}
                <div className="overflow-x-auto scrollbar-hide ">
                    <table className="table-auto w-full">
                        {/* Table header */}
                        <thead className="text-xs uppercase text-slate-400 bg-slate-50 rounded-sm">
                            <tr>
                                <th className="p-2">
                                    <div className="font-semibold text-left">Job</div>
                                </th>
                                <th className="p-2">
                                    <div className="font-semibold text-center">Admin</div>
                                </th>
                                <th className="p-2">
                                    <div className="font-semibold text-center">Admin Position</div>
                                </th>
                                <th className="p-2">
                                    <div className="font-semibold text-center">Job Qualification</div>
                                </th>
                                <th className="p-2">
                                    <div className="font-semibold text-center">Job Benefits</div>
                                </th>
                            </tr>
                        </thead>
                        {/* Table body */}
                        <tbody className="text-sm font-medium divide-y divide-slate-100">
                            {
                                data.map(function (job: any) {
                                    return (
                                        <tr key={job._id}>
                                            <td className="p-2">
                                                <Link href={{ pathname: "/company/admins/company-admin-profile", query: { jobId: job._id } }}>
                                                    <div className="flex items-center">
                                                        <div className="text-slate-800">{job.job}</div>
                                                    </div>
                                                </Link>
                                            </td>
                                            <td className="p-2">
                                                <div className="text-center">{job.adminId.name}</div>
                                            </td>
                                            <td className="p-2">
                                                <div className="text-center text-sky-500">{job.adminId.position}</div>
                                            </td>
                                            <td className="p-2">
                                                <div className="text-center">{job.jobQualification}</div>
                                            </td>
                                            <td className="p-2">
                                                <div className="text-center text-green-500">{job.benefits}</div>
                                            </td>
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

export default AllJobPosts;
