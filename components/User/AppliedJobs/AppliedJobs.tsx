import { Pagination } from '@mui/material';
import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { getAllAppliedJobs, getCountAppliedJobs } from '../../../api/User/Get/user';
import { currentUser } from '../../../redux/user/userAuthSlicer';


function AppliedJobs() {
    const {userId} = useSelector(currentUser)
    const [appliedJobs, setAppliedJobs] = useState([])
    const [count, setCount] = useState<number>(1)

    async function fetchData(skip: number) {
        const appliedJobs = await getAllAppliedJobs(userId,skip, 10);
        console.log(appliedJobs)
        setAppliedJobs(appliedJobs)
    }

    async function fetcher(skip: number) {
        if (skip == 0) {
            const data = await getCountAppliedJobs()

            let int = data / 10
            int = Math.ceil(int)
            console.log(int)
            setCount(int)
        }
        fetchData(skip);
    }

    useEffect(() => {
        fetcher(0);
    }, []);

    async function handleChange(event: any, value: number) {
        fetcher(value - 1);
    };

    return (
        <div className="col-span-full xl:col-span-8 bg-white shadow-lg rounded-lg border border-slate-200">
            <header className="px-5 py-4 border-b border-slate-100">
                <h2 className="font-semibold text-slate-800">All Jobs</h2>
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
                                    <div className="font-semibold text-center">Job</div>
                                </th>
                                <th className="p-2">
                                    <div className="font-semibold text-center">Benefits</div>
                                </th>
                                <th className="p-2">
                                    <div className="font-semibold text-center">Applied On</div>
                                </th>
                                <th className="p-2">
                                    <div className="font-semibold text-center">Status</div>
                                </th>
                            </tr>
                        </thead>
                        {/* Table body */}
                        <tbody className="text-sm font-medium divide-y divide-slate-100">
                            {
                                appliedJobs.map(function (jobs: any) {
                                    console.log(jobs.createdAt)
                                    return (
                                        <tr key={jobs._id}>
                                            <td className="p-2">
                                                {/* <Link href={{ pathname: url, query: { companyId: company._id } }}> */}
                                                    <div className="flex items-center w-14 h-14">
                                                        <img src={jobs?.jobId?.image} alt="" className='rounded-lg mr-2'/>
                                                        <div className="text-slate-800">{jobs?.companyId?.company}</div>
                                                    </div>
                                                {/* </Link> */}
                                            </td>
                                            <td className="p-2">
                                                <div className="text-center text-slate-800">{jobs?.jobId?.job}</div>
                                            </td>
                                            <td className="p-2">
                                                <div className="text-center text-sky-500"></div>
                                            </td>
                                            <td className="p-2">
                                                <div className="text-center text-slate-800">{moment(jobs?.createdAt).format('D MMM YYYY')}</div>
                                            </td>
                                            <td className="p-2">
                                                <div className={`text-center ${jobs?.accepted ? 'text-green-800' : 'text-red-800'}`}>{jobs.accepted ? 'Accepted' : jobs.accepted == null? 'Not accepted Yet': 'Rejected'}</div>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="bg-gray-800 flex justify-center ">
                <Pagination className="p-4" count={count} onChange={handleChange} variant="outlined" shape="rounded" />
            </div>
        </div>
    );
}

export default AppliedJobs;



