import { useRouter } from 'next/router';
import React, { useContext, useState } from 'react'
import { acceptApplicant, rejectApplicant } from '../../../api/Company-Admin/get';
import InfoIcon from '@mui/icons-material/Info';
import { ScheduleInterview } from './scheduleInterview';
import { AuthorizationContext } from '../../../contexts/AuthorizationContext';

interface Job {
    jobId: string
    applicantId: {
        _id: string
        firstName: string
        lastName: string
        image: string
        mobile: string
        country: string
        city: string
        email: string
    }
    accepted: boolean
}

interface Props {
    job: Job
}

export function EachAppliedUsers({ job }: Props) {
    const { alertToLogin } = useContext(AuthorizationContext);
    const router = useRouter();
    const [scheduleInterview, setScheduleInterview] = useState(false)
    const [accepted, setAccepted] = useState(job.accepted)

    async function handleReject() {
        if (accepted == false) return
        try {
            await rejectApplicant(job.jobId, job.applicantId._id)

        } catch (err: any) {
            if (err?.response?.data?.statusCode === 401) {
                alertToLogin()
                return
            }
        }
        setAccepted(false)
    }
    async function handleAccept() {
        if (accepted == true) return
        try {
            await acceptApplicant(job.jobId, job.applicantId._id)
        } catch (err: any) {
            if (err?.response?.data?.statusCode === 401) {
                alertToLogin()
                return
            }
        }
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
                            applicant: job.applicantId._id
                        },
                    },
                        "/company-admin/jobs/jobs-details/applicant-profile"
                    )}>
                    <div className="flex items-center">
                        <img src={job.applicantId.image} alt="user" className="shrink-0 mr-2 sm:mr-3 rounded-full" width="36" height="36" />
                        <div>
                            <div className="text-slate-800">{job.applicantId.firstName + " " + job.applicantId.lastName}</div>
                            <div className="text-center text-gray-400">{job.applicantId.email}</div>
                        </div>
                    </div>
                </div>
            </td>
            <td className="p-2">
                <div className="text-center">{job.applicantId.mobile}</div>
            </td>
            <td className="p-2">
                <div className="text-center">{job.applicantId.country}</div>
            </td>
            <td className="p-2">
                <div className="text-center">{job.applicantId.city}</div>
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
            {
                accepted && <td className="p-2">
                    <div onClick={() => router.push({
                        pathname: "/company-admin/jobs/jobs-details/user-schedules",
                        query: {
                            jobId: job.jobId,
                            applicantId: job.applicantId._id
                        },
                    },
                        "/company-admin/jobs/jobs-details/userSchedules"
                    )} className="text-center cursor-pointer"><InfoIcon /></div>
                </td>
            }
            <ScheduleInterview scheduleInterview={scheduleInterview} setScheduleInterview={setScheduleInterview} jobId={job.jobId} applicantId={job.applicantId._id} accepted={job.accepted} setAccepted={setAccepted} online={true} offline={true} />
        </tr>
    )
}