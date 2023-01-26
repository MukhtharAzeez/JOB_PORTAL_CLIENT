import React from 'react';
import useSWR from "swr";
import { useRouter } from 'next/router';
import { getAppliedUsers } from '../../../api/Company-Admin/get';

function AppliedUsers() {
    const router = useRouter();
    const jobId = router.query.jobId

    const fetcher = async () => {
        const appliedUsers = await getAppliedUsers(jobId);
        console.log(appliedUsers)
        return appliedUsers;
    };
    const { data, error, isLoading } = useSWR("appliedUsers", fetcher);
    if (error) return <div>Error....</div>
    if (isLoading) return <div>Loading....</div>
    return (
        <div className="col-span-full xl:col-span-8 bg-white shadow-lg border border-slate-200 rounded-md mb-5">
            <header className="px-5 py-4 border-b border-slate-100">
                <h2 className="font-semibold text-slate-800">Applicants</h2>
            </header>
            <div className="p-3">
                {/* Table */}
                <div className="overflow-x-auto scrollbar-hide ">
                    <table className="table-auto w-full">
                        {/* Table header */}
                        <thead className="text-xs uppercase text-slate-400 bg-slate-50 rounded-sm">
                            <tr>
                                <th className="p-2">
                                    <div className="font-semibold text-left">User</div>
                                </th>
                                <th className="p-2">
                                    <div className="font-semibold text-center">Mobile</div>
                                </th>
                                <th className="p-2">
                                    <div className="font-semibold text-center">Country</div>
                                </th>
                                <th className="p-2">
                                    <div className="font-semibold text-center">Place</div>
                                </th>
                                <th className="p-2">
                                    <div className="font-semibold text-center">Action</div>
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
                                                <div className="cursor-pointer"
                                                    onClick={() => router.push({
                                                        pathname: "/company-admin/jobs/jobs-details/applicant-profile",
                                                        query: {
                                                            applicant: job.applicants._id
                                                        },
                                                    },
                                                        "/company-admin/jobs/jobs-details/applicant-profile"
                                                    )}>
                                                    <div className="flex items-center">
                                                        <img src={job.applicants.image} alt="user" className="shrink-0 mr-2 sm:mr-3 rounded-full" width="36" height="36"/>
                                                        <div>
                                                            <div className="text-slate-800">{job.applicants.firstName + " " + job.applicants.lastName}</div>
                                                            <div className="text-center text-gray-400">{job.applicants.email}</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="p-2">
                                                <div className="text-center">{job.applicants.mobile}</div>
                                            </td>
                                            <td className="p-2">
                                                <div className="text-center">{job.applicants.country}</div>
                                            </td>
                                            <td className="p-2">
                                                <div className="text-center">{job.applicants.city}</div>
                                            </td>
                                            <td className="p-2 text-center">
                                                <div className='text-green-800 cursor-pointer hover:text-green-600'>Accept</div>
                                                <div className='text-red-800 cursor-pointer hover:text-red-400'>Reject</div>
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

export default AppliedUsers;
