import React, { useContext } from 'react';
import useSWR from "swr";
import { useSelector } from 'react-redux';
import { currentCompanyAdmin } from '../../../redux/company-admin/CompanyAdminAuthSlicer';
import { getAllCompanyPost } from '../../../api/Company-Admin/get';
import { useRouter } from 'next/router';
import Loader from '../../Common/skeleton/Loader';
import { AuthorizationContext } from '../../../contexts/AuthorizationContext';

interface Job {
    _id: string
    job: string
    adminId: {
        _id: string
        name: string
        position: string
    }
    jobQualification: string
    benefits: string
}

export function AllJobPosts() {
    const { alertToLogin } = useContext(AuthorizationContext);
    const router = useRouter();
    const { companyId } = useSelector(currentCompanyAdmin)
    const fetcher = async () => {
        try {
            const allCompanyPosts = await getAllCompanyPost(companyId);
            return allCompanyPosts;
        } catch (err: any) {
            if (err?.response?.data?.statusCode === 401) {
                alertToLogin()
                return
            }
        }
    };
    const { data, error, isLoading } = useSWR("allCompanyPosts", fetcher);
    if (error) return <div>Error....</div>
    if (isLoading) return <div><Loader /></div>
    return (
        <div className="col-span-full xl:col-span-8 bg-white shadow-lg border border-slate-200 rounded-md">
            <header className="px-5 py-4 border-b border-slate-100">
                <h2 className="font-semibold text-slate-800">Company All Jobs</h2>
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
                                data.map(function (job: Job) {
                                    return (
                                        <tr key={job._id}>
                                            <td className="p-2">
                                                <div className="cursor-pointer"
                                                    onClick={() => router.push({
                                                        pathname: "/company-admin/jobs/jobs-details",
                                                        query: {
                                                            jobId: job._id
                                                        },
                                                    },
                                                        "/company-admin/jobs/jobs-details"
                                                    )}>
                                                    <div className="flex items-center">
                                                        <div className="text-slate-800 truncate w-36">{job.job}</div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="p-2 ">
                                                <div className="text-center truncate w-36">{job.adminId.name}</div>
                                            </td>
                                            <td className="p-2 ">
                                                <div className="text-center text-sky-500 truncate w-36">{job.adminId.position}</div>
                                            </td>
                                            <td className="p-2 ">
                                                <div className="text-center  truncate w-36">{job.jobQualification}</div>
                                            </td>
                                            <td className="p-2">
                                                <div className="text-center text-green-500 truncate w-36">{job.benefits}</div>
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