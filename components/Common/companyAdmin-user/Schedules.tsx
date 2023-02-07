import React from 'react'
import { useSelector } from 'react-redux'
import useSWR from "swr";
import { getUserSchedules } from '../../../api/User/Get/user';
import { currentUser } from '../../../redux/user/userAuthSlicer';


function Schedules() {
    const { userId } = useSelector(currentUser)
    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    const fetcher = async () => {
        const getUserSchedule = await getUserSchedules(userId,new Date());
        return getUserSchedule;
    };
    const { data, error, isLoading } = useSWR("getUserSchedule", fetcher);
    if (error) return <div>Error....</div>
    if (isLoading) return <div>Loading....</div>

    return (
        <div className="text-gray-700">
            <div className="flex flex-grow  overflow-auto">
                <div className="flex flex-col flex-grow">
                    <div className="flex items-center mt-4">
                        <div className="flex ml-6">
                            <button>
                                <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                                </svg>
                            </button>
                            <button>
                                <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                        </div>
                        <h2 className="ml-2 text-xl font-bold leading-none">September, 2020</h2>
                    </div>
                    <div className="grid grid-cols-7 mt-4">
                        <div className="pl-1 text-sm">Mon</div>
                        <div className="pl-1 text-sm">Tue</div>
                        <div className="pl-1 text-sm">Wed</div>
                        <div className="pl-1 text-sm">Thu</div>
                        <div className="pl-1 text-sm">Fri</div>
                        <div className="pl-1 text-sm">Sat</div>
                        <div className="pl-1 text-sm">Sun</div>
                    </div>
                    <div className="grid flex-grow w-full h-auto grid-cols-7 grid-rows-5 gap-2 pt-px mt-1 bg-gray-200 scrollbar-hide">

                        <div></div>
                        {
                            data.map((group: any) => {
                                const date = new Date(group._id)
                                return (
                                    <div key={group._id} className="relative flex flex-col bg-white group scrollbar-hide">
                                        <span className="mx-2 my-1 text-xs font-bold leading-none truncate">{monthNames[date.getMonth()]} {date.getDate()}</span>
                                        <div className="flex flex-col px-1 py-1 overflow-auto">
                                            {
                                                group.objects.map((schedule:any)=>{
                                                    const time = new Date(group._id +' '+ schedule.data.time )
                                                    return (
                                                        <button key={schedule.type} className="flex flex-col h-8 flex-shrink-0 px-1 text-xs hover:bg-gray-200 ">
                                                            <span className="font-light leading-none">{time.toLocaleTimeString()}</span>
                                                            <span className=" font-medium leading-none truncate">{schedule.type} Interview</span>
                                                        </button>
                                                    )
                                                })
                                            }
                                        </div>
                                    </div>
                                )
                            })
                        }

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Schedules


