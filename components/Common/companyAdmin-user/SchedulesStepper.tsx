import React, { useEffect, useState } from 'react'
import ScheduleInterview from '../../Company-admin/Job/scheduleInterview'
// interface Props {
//     jobId: string,
//     applicantId: string
// }

function SchedulesStepper({ data }: any) {
    const [moveToNextAction, setMoveToNextAction] = useState(false)
    const [applicantHired, setApplicantHired] = useState(false)
    const [scheduleInterview, setScheduleInterview] = useState(false)
    const [online, setOnline] = useState(true)
    const [offline, setOffline] = useState(true)
    const [accepted, setAccepted] = useState(true)

    useEffect(() => {
        if (data?.online?.scheduledAt < data?.offline?.scheduledAt || !data?.offline) {
            if (data?.offline?.companyApproved && data?.offline?.userAccepted && data?.offline?.completed) {
                setMoveToNextAction(true)
                setOffline(false)
            }
        }
        if (data?.online && !data?.offline) {
            if (data?.online?.companyApproved && data?.online?.userAccepted && data?.online?.completed) {
                setMoveToNextAction(true)
                setOnline(false)
            }
        }
        if (!data?.online && data?.offline) {
            if (data?.offline?.companyApproved && data?.offline?.userAccepted && data?.offline?.completed) {
                setMoveToNextAction(true)
                setOffline(false)
            }
        }
        if (data?.online && data?.offline && data?.online?.scheduledAt < data?.offline?.scheduledAt) {
            if (data?.offline?.companyApproved && data?.offline?.userAccepted && data?.offline?.completed) {
                setMoveToNextAction(true)
                setOnline(false)
                setOffline(false)
            } else {
                setMoveToNextAction(false)
            }
        } else if (data?.online && data?.offline && data?.online?.scheduledAt > data?.offline?.scheduledAt) {
            if (data?.offline?.companyApproved && data?.offline?.userAccepted && data?.offline?.completed) {
                setMoveToNextAction(true)
                setOnline(false)
                setOffline(false)
            } else {
                setMoveToNextAction(false)
            }
        }
        if (data?.online?.scheduledAt > data?.offline?.scheduledAt || !data?.online) {
            if (data?.online?.companyApproved && data?.online?.userAccepted && data?.online?.completed) {
                setMoveToNextAction(true)
                setOffline(false)
            } else {
                setMoveToNextAction(false)
            }
        }
        if (data?.hired) {
            setMoveToNextAction(false)
        }
        if(data?.hired?.hire && data?.hired?.companyApproved && data?.hired?.userAccepted){
            setApplicantHired(true)
        }

    }, [])
    return (
        <div className="bg-white border rounded-md p-5 px-10">
            <section className="max-w-5xl mx-auto py-10">
                <div>
                    {
                        data?.online?.scheduledAt < data?.offline?.scheduledAt || !data?.offline?.scheduledAt ? (
                            <>
                                <div className="flex flex-row">
                                    <div className="hidden md:flex flex-col items-center">
                                        <div className="w-32 py-5 border border-gray-300 rounded mr-4 uppercase flex flex-col items-center justify-center">
                                            <div className="text-xl font-black text-gray-500">Action-1</div>
                                            <div className="text-gray-500 text-sm text-center">Online Interview</div>
                                        </div>
                                        <div className="h-full border-l-4 border-transparent">
                                            <div className={`border-l-4 mr-4 h-full ${data?.offline || data?.hired ? 'border-purple-800' : 'border-gray-300'}  border-dashed`}></div>
                                        </div>
                                    </div>
                                    <div className="flex-auto border rounded  border-gray-300">
                                        <div className="flex md:flex-row flex-col items-center">
                                            <div className="flex-auto">
                                                <div className="md:hidden text-sm font-normal uppercase pt-3 pl-3 text-gray-500"><span className="font-black">Action-1</span> - Online Interview</div>
                                                <div className="p-3 text-3xl text-gray-800 font uppercase">Online Interview</div>
                                                <div className="px-3 pb-1">Scheduled an online interview on {data.online.date} at {data.online.time}</div>
                                                <div className="px-3 pb-1 flex ">Company Approved : {data.online.companyApproved ? <p className="text-green-500">True</p> : <p className="text-red-500">False</p>}</div>
                                                <div className="px-3 pb-1 flex">Applicant Accepted : {data.online.userAccepted ? <p className="text-green-500">True</p> : <p className="text-red-500">False</p>}</div>
                                                <div className="px-3 pb-1 flex">Completed : {data.online.completed ? <p className="text-green-500">True</p> : <p className="text-red-500">False</p>}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-start flex-row">
                                    <div className="border-t-4 border-r-4 border-transparent">
                                        <div className={`w-16 ml-16 h-16 border-l-4 ${data?.offline || data?.hired ? 'border-purple-800' : 'border-gray-300'} border-dashed border-b-4 rounded-bl-full`}></div>
                                    </div>
                                    <div className="border-t-4 border-transparent flex-auto">
                                        <div className={`h-16 border-b-4 ${data?.offline || data?.hired ? 'border-purple-800' : 'border-gray-300'} border-dashed`}></div>
                                    </div>
                                    <div className={`w-16 mt-16 mr-16 h-16 border-r-4 ${data?.offline || data?.hired ? 'border-purple-800' : 'border-gray-300'} border-dashed border-t-4 rounded-tr-full`}></div>
                                </div>
                                {
                                    data.offline &&
                                    <>
                                        <div className="flex flex-row-reverse">
                                            <div className="hidden md:flex flex-col items-center">
                                                <div className="w-32 py-5 border border-gray-300 rounded ml-4 uppercase flex flex-col items-center justify-center">
                                                    <div className="text-xl font-black text-gray-500">Action-2</div>
                                                    <div className="text-gray-500 text-sm text-center">Offline Interview</div>
                                                </div>
                                                <div className="h-full border-r-4 border-transparent">
                                                    <div className={`border-l-4 ml-4 h-full ${data?.hired ? 'border-purple-800' : 'border-gray-300'}  border-dashed`}></div>
                                                </div>
                                            </div>
                                            <div className="flex-auto border rounded  border-gray-300">
                                                <div className="flex md:flex-row flex-col items-center">
                                                    <div className="flex-auto">
                                                        <div className="md:hidden text-sm font-normal uppercase pt-3 pl-3 text-gray-500"><span className="font-black">Action-2</span> - Offline Interview</div>
                                                        <div className="p-3 text-3xl text-gray-800 font uppercase">Offline Interview</div>
                                                        <div className="px-3 pb-1">Scheduled an offline interview on {data.offline.date} {data.offline.time} at {data.offline.place}</div>
                                                        <div className="px-3 pb-1 flex ">Company Approved : {data.offline.companyApproved ? <p className="text-green-500">True</p> : <p className="text-red-500">False</p>}</div>
                                                        <div className="px-3 pb-1 flex">Applicant Accepted : {data.offline.userAccepted ? <p className="text-green-500">True</p> : <p className="text-red-500">False</p>}</div>
                                                        <div className="px-3 pb-1 flex">Completed : {data.offline.completed ? <p className="text-green-500">True</p> : <p className="text-red-500">False</p>}</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                }
                            </>
                        ) : (
                            <>
                                <div className="flex flex-row">
                                    <div className="hidden md:flex flex-col items-center">
                                        <div className="w-32 py-5 border border-gray-300 rounded mr-4 uppercase flex flex-col items-center justify-center">
                                            <div className="text-xl font-black text-gray-500">Action-1</div>
                                            <div className="text-gray-500 text-sm text-center">Offline Interview</div>
                                        </div>
                                        <div className="h-full border-l-4 border-transparent">
                                                <div className={`border-l-4 mr-4 h-full ${data?.online || data?.hired ? 'border-purple-800' : 'border-gray-300'}  border-dashed`}></div>
                                        </div>
                                    </div>
                                    <div className="flex-auto border rounded  border-gray-300">
                                        <div className="flex md:flex-row flex-col items-center">
                                            <div className="flex-auto">
                                                <div className="md:hidden text-sm font-normal uppercase pt-3 pl-3 text-gray-500"><span className="font-black">Action-1</span> - Offline Interview</div>
                                                <div className="p-3 text-3xl text-gray-800 font uppercase">Offline Interview</div>
                                                <div className="px-3 pb-1">Scheduled an offline interview on {data.offline.date} {data.offline.time} at {data.offline.place}</div>
                                                <div className="px-3 pb-1 flex ">Company Approved : {data.offline.companyApproved ? <p className="text-green-500">True</p> : <p className="text-red-500">False</p>}</div>
                                                <div className="px-3 pb-1 flex">Applicant Accepted : {data.offline.userAccepted ? <p className="text-green-500">True</p> : <p className="text-red-500">False</p>}</div>
                                                <div className="px-3 pb-1 flex">Completed : {data.offline.completed ? <p className="text-green-500">True</p> : <p className="text-red-500">False</p>}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-start flex-row">
                                    <div className="border-t-4 border-r-4 border-transparent">
                                            <div className={`w-16 ml-16 h-16 border-l-4 ${data?.online || data?.hired ? 'border-purple-800' : 'border-gray-300'}  border-dashed border-b-4 rounded-bl-full`}></div>
                                    </div>
                                    <div className="border-t-4 border-transparent flex-auto">
                                            <div className={`h-16 border-b-4 ${data?.online || data?.hired ? 'border-purple-800' : 'border-gray-300'}  border-dashed`}></div>
                                    </div>
                                        <div className={`w-16 mt-16 mr-16 h-16 border-r-4 ${data?.online || data?.hired ? 'border-purple-800' : 'border-gray-300'}  border-dashed border-t-4 rounded-tr-full`}></div>
                                </div>
                                {
                                    data?.online &&
                                    <>
                                        <div className="flex flex-row-reverse">
                                            <div className="hidden md:flex flex-col items-center">
                                                <div className="w-32 py-5 border border-gray-300 rounded ml-4 uppercase flex flex-col items-center justify-center">
                                                    <div className="text-xl font-black text-gray-500">Action-2</div>
                                                    <div className="text-gray-500 text-sm text-center">Online Interview</div>
                                                </div>
                                                <div className="h-full border-r-4 border-transparent">
                                                        <div className={`border-l-4 ml-4 h-full ${data?.hired ? 'border-purple-800' : 'border-gray-300'}  border-dashed`}></div>
                                                </div>
                                            </div>
                                            <div className="flex-auto border rounded  border-gray-300">
                                                <div className="flex md:flex-row flex-col items-center">
                                                    <div className="flex-auto">
                                                        <div className="md:hidden text-sm font-normal uppercase pt-3 pl-3 text-gray-500"><span className="font-black">Action-2</span> - Online Interview</div>
                                                        <div className="p-3 text-3xl text-gray-800 font uppercase">Online Interview</div>
                                                        <div className="px-3 pb-1">Scheduled an online interview on {data.online.date} at {data.online.time}</div>
                                                        <div className="px-3 pb-1 flex ">Company Approved : {data.online.companyApproved ? <p className="text-green-500">True</p> : <p className="text-red-500">False</p>}</div>
                                                        <div className="px-3 pb-1 flex">Applicant Accepted : {data.online.userAccepted ? <p className="text-green-500">True</p> : <p className="text-red-500">False</p>}</div>
                                                        <div className="px-3 pb-1 flex">Completed : {data.online.completed ? <p className="text-green-500">True</p> : <p className="text-red-500">False</p>}</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                }
                            </>

                        )
                    }
                    {
                        data?.online && data?.offline && <div className="flex items-start flex-row-reverse">
                            <div className="border-t-4 border-l-4 border-transparent">
                                <div className={`w-16 mr-16 h-16 border-r-4 ${data?.hired ? 'border-purple-800' : 'border-gray-300'}  border-dashed border-b-4 rounded-br-full`}></div>
                            </div>
                            <div className="border-t-4 border-transparent flex-auto">
                                <div className={`h-16 border-b-4 ${data?.hired ? 'border-purple-800' : 'border-gray-300'} border-dashed`}></div>
                            </div>
                            <div className={`w-16 mt-16 ml-16 h-16 border-l-4 ${data?.hired ? 'border-purple-800' : 'border-gray-300'} border-dashed border-t-4 rounded-tl-full`}></div>
                        </div>
                    }
                    {
                        data?.hired &&
                        <div className="flex flex-row">
                            <div className="hidden md:flex flex-col items-center">
                                <div className="w-32 py-5 border border-gray-300 rounded mr-4 uppercase flex flex-col items-center justify-center">
                                    <div className="text-xl font-black text-gray-500 text-center">Final Action</div>
                                    <div className="text-gray-500 text-sm text-center">Hire Applicant</div>
                                </div>
                            </div>
                            <div className="flex-auto border rounded  border-gray-300">
                                <div className="flex md:flex-row flex-col items-center">
                                    <div className="flex-auto">
                                        <div className="md:hidden text-sm font-normal uppercase pt-3 pl-3 text-gray-500"><span className="font-black">Final Action</span> - Hiring</div>
                                        <div className="p-3 text-3xl text-gray-800 font uppercase">Hire Applicant </div>
                                            <div className="px-3 pb-1">Hire the applicant <span className="text-purple-800">{data.applicantId.firstName + " " + data.applicantId.lastName}</span> as {data.jobId.job}</div>
                                        <div className="px-3 pb-1 flex ">Company Approved : {data.hired.companyApproved ? <p className="text-green-500">True</p> : <p className="text-red-500">False</p>}</div>
                                        <div className="px-3 pb-1 flex">Applicant Accepted : {data.hired.userAccepted ? <p className="text-green-500">True</p> : <p className="text-red-500">False</p>}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    }
                </div>
            </section>
            {
                moveToNextAction && <div className="w-full flex justify-end">
                    <div className='bg-purple-800 px-4 py-2 text-gray-100 rounded-md cursor-pointer' onClick={() => setScheduleInterview(true)}>
                        Move To Next Action
                    </div>
                </div>
            }
            {
                applicantHired && <div className="w-full flex justify-end">
                    <div className='bg-purple-800 px-4 py-2 text-gray-100 rounded-md cursor-pointer'>
                        You Hired this applicant {data.applicantId.firstName+" "+data.applicantId.lastName} as {data.jobId.job}
                    </div>
                </div>
            }
            <ScheduleInterview scheduleInterview={scheduleInterview} setScheduleInterview={setScheduleInterview} jobId={data.jobId._id} applicantId={data.applicantId._id} accepted={accepted} setAccepted={setAccepted} online={online} offline={offline} />
        </div>
    )
}

export default SchedulesStepper
