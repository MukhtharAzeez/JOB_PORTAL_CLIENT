import moment from 'moment'
import React, { useState } from 'react'
import PsychologyIcon from '@mui/icons-material/Psychology';
import { acceptSchedule, rejectSchedule } from '../../../api/Company/post';
import { userAcceptSchedule, userRejectSchedule } from '../../../api/User/Get/user';

function Requests({ request, type }: any) {
    const [accepted, setAccepted] = useState(request.accepted)
    async function accept() {
        await acceptSchedule({ companyRequestId: request._id })
        setAccepted(true)
    }

    async function reject() {
        await rejectSchedule({ companyRequestId: request._id })
        setAccepted(false)
    }

    async function acceptByUser() {
        await userAcceptSchedule(request._id)
        setAccepted(true)
    }
    async function rejectByUser() {
        await userRejectSchedule(request._id)
        setAccepted(false)
    }

    async function requestToChangeTime() {
        
    }

    return (
        <ol className="w-full">
            <li className="border-l-2 border-purple-600">
                <div className="md:flex flex-start ">
                    <div className="block p-6 rounded-lg shadow-lg bg-gray-100 w-full mx-6 my-6">
                        <div className="flex justify-between mb-4">
                            {
                                type != 'user' ? (
                                    <a href="#!" className="font-medium text-purple-600 hover:text-purple-700 focus:text-purple-800 duration-300 transition ease-in-out text-sm">{request.admin.name}</a>
                                ) : (
                                    <a href="#!" className="font-medium text-purple-600 hover:text-purple-700 focus:text-purple-800 duration-300 transition ease-in-out text-sm">{request.company.company}</a>
                                )
                            }
                            <a href="#!" className="font-medium text-purple-600 hover:text-purple-700 focus:text-purple-800 duration-300 transition ease-in-out text-sm">{moment(request.createdAt).format('LLLL')}</a>
                        </div>
                        <p className="text-purple-600 hover:text-purple-700 focus:text-purple-800 ">{request.job.job}</p>
                        {type == 'company' ? <p className="text-gray-700 mb-6">{request.message}</p> : type == 'user' ? <p className="text-gray-700 mb-6">{request.message}</p> : ''}
                        {type == 'companyAdmin' && !request.companyApproved && <p className="text-red-500 mb-6">Company rejected your request for <span className='text-gray-800 italic text-sm font-semibold'>{request.message}</span></p>}
                        {type == 'companyAdmin' && request.companyApproved && request.userAccepted && <p className="text-green-700 mb-6">Company Approved your request for <span className='text-gray-800 italic text-sm font-semibold'>{request.message}</span>  And User Also Accepted this !</p>}
                        {type == 'companyAdmin' && request.companyApproved && !request.userAccepted && <p className="text-red-800 mb-6">Company Approved your request for <span className='text-gray-800 italic text-sm font-semibold'>{request.message}</span>  But User Rejected your Offer !</p>}
                        {
                            type != 'user' && <div className='w-full border-x-2 border-t-2 rounded-sm border-purple-500 h-24 mb-4 px-4 py-2  overflow-y-scroll text-black'>
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
                        }
                        {
                            type == 'company' && (
                                accepted == null ? (
                                    <>
                                        <button type="button" onClick={accept} className="inline-block px-4 py-1.5 bg-purple-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-purple-800 hover:shadow-lg focus:bg-purple-800 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out" data-mdb-ripple="true">Accept</button>
                                        <button type="button" onClick={reject} className="ml-4 inline-block px-3.5 py-1 border-2 border-purple-600 text-purple-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out" data-mdb-ripple="true">Reject</button></>
                                ) : accepted == true ? (
                                    <>
                                        <button type="button" className="inline-block px-4 py-1.5 bg-purple-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-purple-800 hover:shadow-lg focus:bg-purple-800 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out" data-mdb-ripple="true">Accepted</button>
                                        <button type="button" onClick={reject} className="ml-4 inline-block px-3.5 py-1 border-2 border-purple-600 text-purple-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out" data-mdb-ripple="true">Reject</button>
                                    </>
                                ) : (
                                    <>
                                        <button type="button" onClick={accept} className="inline-block px-4 py-1.5 bg-purple-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-purple-800 hover:shadow-lg focus:bg-purple-800 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out" data-mdb-ripple="true">Accept</button>
                                        <button type="button" className="ml-4 inline-block px-3.5 py-1 border-2 border-purple-600 text-purple-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out" data-mdb-ripple="true">Rejected</button>
                                    </>
                                )
                            )
                        }
                        {/* If the type is user */}
                        {
                            type == 'user' && <div className='w-full border-x-2 border-t-2 rounded-sm border-purple-500 h-24 mb-4 px-4 py-2  overflow-y-scroll text-black'>
                                <div className="flex flex-wrap">
                                    <p className='font-bold '>About Job: <span className="italic font-thin">{request.job.jobDescription}</span></p>
                                </div>
                                <div className="flex flex-wrap">
                                    <p className='font-bold '>Benefits: <span className="italic font-thin">{request.job.benefits}</span></p>
                                </div>
                            </div>
                        }
                        {
                            type == 'user' && (
                                accepted == null ? (
                                    <>
                                        <button type="button" onClick={acceptByUser} className="inline-block px-4 py-1.5 bg-purple-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-purple-800 hover:shadow-lg focus:bg-purple-800 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out" data-mdb-ripple="true">Accept</button>
                                        <button type="button" onClick={rejectByUser} className="ml-4 inline-block px-3.5 py-1 border-2 border-purple-600 text-purple-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out" data-mdb-ripple="true">Reject</button></>

                                ) : accepted == true ? (
                                    <>
                                        <button type="button" className="inline-block px-4 py-1.5 bg-purple-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-purple-800 hover:shadow-lg focus:bg-purple-800 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out" data-mdb-ripple="true">Accepted</button>
                                        <button type="button" onClick={rejectByUser} className="ml-4 inline-block px-3.5 py-1 border-2 border-purple-600 text-purple-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out" data-mdb-ripple="true">Reject</button>
                                    </>
                                ) : (
                                    <>
                                        <button type="button" onClick={acceptByUser} className="inline-block px-4 py-1.5 bg-purple-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-purple-800 hover:shadow-lg focus:bg-purple-800 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out" data-mdb-ripple="true">Accept</button>
                                        <button type="button" className="ml-4 inline-block px-3.5 py-1 border-2 border-purple-600 text-purple-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out" data-mdb-ripple="true">Rejected</button>
                                    </>
                                )
                            )
                        }
                        {
                            request.type != "hire" && type == 'user' &&
                            < button type="button" onClick={requestToChangeTime} className="ml-4 inline-block px-3.5 py-1 border-2 bg-purple-600 border-purple-600 text-white font-medium text-xs leading-tight uppercase rounded hover:bg-purple-800 focus:outline-none focus:ring-0 transition duration-150 ease-in-out" data-mdb-ripple="true">Request to Change the time</button>
                        }
                    </div>
                </div>
            </li>
        </ol>
    )
}

export default Requests
