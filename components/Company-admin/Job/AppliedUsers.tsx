import React from 'react';
import useSWR from "swr";
import { useRouter } from 'next/router';
import { getAppliedUsers } from '../../../api/Company-Admin/get';
import EachAppliedUsers from './EachAppliedUsers';

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
                                        <EachAppliedUsers key={job._id} job={job}/>
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
