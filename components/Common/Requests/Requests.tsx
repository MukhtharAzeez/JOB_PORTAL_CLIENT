import moment from 'moment'
import React, { useState } from 'react'
import PsychologyIcon from '@mui/icons-material/Psychology';
import { acceptSchedule, rejectSchedule } from '../../../api/Company/post';

function Requests({ request }: any) {
    const [accepted, setAccepted] = useState(request.accepted)

    async function accept() {
        await acceptSchedule({ companyRequestId: request._id })
        setAccepted(true)
    }

    async function reject() {
        await rejectSchedule({ companyRequestId: request._id })
        setAccepted(false)
    }

    return (
        <ol className="w-full">
            <li className="border-l-2 border-purple-600">
                <div className="md:flex flex-start ">
                    <div className="block p-6 rounded-lg shadow-lg bg-gray-100 w-full mx-6 my-6">
                        <div className="flex justify-between mb-4">
                            <a href="#!" className="font-medium text-purple-600 hover:text-purple-700 focus:text-purple-800 duration-300 transition ease-in-out text-sm">{request.admin.name}</a>
                            <a href="#!" className="font-medium text-purple-600 hover:text-purple-700 focus:text-purple-800 duration-300 transition ease-in-out text-sm">{moment(request.createdAt).format('LLLL')}</a>
                        </div>
                        <p className="text-purple-600 hover:text-purple-700 focus:text-purple-800 ">{request.job.job}</p>
                        <p className="text-gray-700 mb-6">{request.message}</p>
                        <div className='w-full border-x-2 border-t-2 rounded-sm border-purple-500 h-24 mb-4 px-4 py-2  overflow-y-scroll'>
                            <h4 className="font-bold">{request.applicant.firstName + " " + request.applicant.lastName}</h4>
                            <div className="flex flex-wrap">
                                <div className="w-full lg:w-9/12">
                                    <span className="text-lg leading-relaxed text-blueGray-700 flex flex-wrap  gap-2">
                                        <i className="fas fa-university ml-1 text-lg text-blueGray-400"></i>
                                        {
                                            request.applicant.qualifications.map(function (obj: any, index: number) {
                                                return (
                                                    <>
                                                        <div key={obj} >
                                                            <p className="mt-1 text-sm font-bold">  {obj} {index == request.applicant.qualifications.length - 1 ? '' : '|'}</p>
                                                        </div>
                                                    </>
                                                )
                                            })
                                        }
                                    </span>
                                </div>
                            </div>
                            <div className="flex flex-wrap">
                                <div className="w-full lg:w-9/12">
                                    <span className="text-lg leading-relaxed text-blueGray-700 flex flex-wrap  gap-2">
                                        <PsychologyIcon className="" />
                                        {
                                            request.applicant.skills.map(function (obj: any, index: number) {
                                                return (
                                                    <>
                                                        <div key={obj} >
                                                            <p className="mt-1 text-sm font-bold">  {obj} {index == request.applicant.skills.length - 1 ? '' : '|'}</p>
                                                        </div>
                                                    </>
                                                )
                                            })
                                        }
                                    </span>
                                </div>
                            </div>
                        </div>
                        {
                            accepted == null ? (
                                <>
                                    <button type="button" onClick={accept} className="inline-block px-4 py-1.5 bg-purple-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out" data-mdb-ripple="true">Accept</button>
                                    <button type="button" onClick={reject} className="ml-4 inline-block px-3.5 py-1 border-2 border-purple-600 text-purple-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out" data-mdb-ripple="true">Reject</button></>
                            ) : accepted == true ? (
                                <>
                                    <button type="button" className="inline-block px-4 py-1.5 bg-purple-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out" data-mdb-ripple="true">Accepted</button>
                                    <button type="button" onClick={reject} className="ml-4 inline-block px-3.5 py-1 border-2 border-purple-600 text-purple-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out" data-mdb-ripple="true">Reject</button>
                                </>
                            ) : (
                                <>
                                    <button type="button" onClick={accept} className="inline-block px-4 py-1.5 bg-purple-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out" data-mdb-ripple="true">Accept</button>
                                    <button type="button" className="ml-4 inline-block px-3.5 py-1 border-2 border-purple-600 text-purple-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out" data-mdb-ripple="true">Rejected</button>
                                </>
                            )
                        }
                    </div>
                </div>
            </li>
        </ol>
    )
}

export default Requests
