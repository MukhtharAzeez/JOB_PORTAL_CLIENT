import { useRouter } from 'next/router';
import React, { useState } from 'react'
import { acceptApplicant, rejectApplicant } from '../../../api/Company-Admin/get';
import ScheduleInterview from './scheduleInterview';

function EachAppliedUsers({ job }: any) {
    const router = useRouter();
    const [scheduleInterview, setScheduleInterview] = useState(false)
    const [accepted, setAccepted] = useState(job.accepted)

    async function handleReject() {
        if (accepted == false) return
        await rejectApplicant(job._id, job.applicants._id)
        setAccepted(false)
    }
    async function handleAccept() {
        if (accepted == true) return
        await acceptApplicant(job._id, job.applicants._id)
        setScheduleInterview(true)
        setAccepted(true)
    }

    return (
        <tr>
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
                        <img src={job.applicants.image} alt="user" className="shrink-0 mr-2 sm:mr-3 rounded-full" width="36" height="36" />
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
                {accepted == null ? (
                    <><div className='text-green-800 cursor-pointer hover:text-green-600' onClick={handleAccept}>Accept</div>
                        <div className='text-red-800 cursor-pointer hover:text-red-400' onClick={handleReject}>Reject</div></>
                ) : accepted ? (
                    <><div className='text-green-800 cursor-pointer hover:text-green-600' >Accepted</div>
                        <div className='text-red-800 cursor-pointer hover:text-red-400' onClick={handleReject}>Reject</div></>
                ) :
                    (
                        <><div className='text-green-800 cursor-pointer hover:text-green-600' onClick={handleAccept}>Accept</div>
                            <div className='text-red-800 cursor-pointer hover:text-red-400'>Rejected</div></>
                    )
                }
            </td>
            <ScheduleInterview scheduleInterview={scheduleInterview} setScheduleInterview={setScheduleInterview} jobId={job._id} applicantId={job.applicants._id} accepted={job.accepted} setAccepted={setAccepted} />
        </tr>
    )
}

export default EachAppliedUsers
