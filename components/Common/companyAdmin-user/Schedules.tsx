import moment from 'moment';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { getUserSchedules } from '../../../api/User/Get/user';
import { currentUser } from '../../../redux/user/userAuthSlicer';


function Schedules() {
    const { userId } = useSelector(currentUser)
    const [data, setData] = useState([])
    const [month, setMonth] = useState(new Date())
    const [isLoading, setIsLoading] = useState(true)
    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    async function fetcher() {
        setIsLoading(true)
        const getUserSchedule = await getUserSchedules(userId, month);
        setData(getUserSchedule)
        setIsLoading(false)
    }

    useEffect(() => {
        fetcher()
    }, [])


    function subtractMonths(date: Date, months: number) {
        date.setMonth(date.getMonth() - months);
        return date;
    }
    function addMonths(date: Date, months: number) {
        date.setMonth(date.getMonth() + months);
        return date;
    }

    async function handlePreviousSchedules() {
        setMonth(subtractMonths(month, 1))
        fetcher()
    }

    async function handleNextSchedules() {
        setMonth(addMonths(month, 1))
        fetcher()
    }

    return (
        <div className="text-gray-700">
            <div className="flex flex-grow  overflow-auto">
                <div className="flex flex-col flex-grow">
                    <div className="flex items-center mt-4">
                        <div className="flex ml-6">
                            <button className="cursor-pointer" onClick={handlePreviousSchedules}>
                                <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                                </svg>
                            </button>
                            <button className="cursor-pointer" onClick={handleNextSchedules}>
                                <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                        </div>
                        <h2 className="ml-2 text-xl font-bold leading-none">{moment(month).format('MMMM YYYY')}</h2>
                    </div>
                    <div className="flex flex-row flex-wrap w-full h-auto gap-2 mt-1 bg-gray-200 pr-2 justify-center pt-4 pb-4">
                        {
                            isLoading ? (
                                <div className="">
                                    <div className="animate-spin rounded-full h-14 w-14 border-t-2 border-b-2 border-gray-900"></div>
                                </div>
                            ) : (
                                data.map((group: any, index: number) => {
                                    const date = new Date(group._id)
                                    return (
                                        <>
                                            <div key={index} className="w-[240px] flex flex-col justify-center items-center border-purple-800 bg-white ml-2 p-4 rounded-md border">
                                                <span className="mx-2 my-1 text-xs font-bold ">{monthNames[date.getMonth()]} {date.getDate()}</span>
                                                <div className="">
                                                    {
                                                        group.objects.map((schedule: any) => {
                                                            const time = new Date(group._id + ' ' + schedule.data.time)
                                                            return (
                                                                <div key={schedule.data.time} className="cursor-pointer text-center px-1 text-xs p-4 hover:bg-purple-100 rounded-md overflow-scroll scrollbar-hide">
                                                                    <span className="font-light leading-none">{time.toLocaleTimeString()}</span>
                                                                    <br />
                                                                    <span className=" font-medium">{schedule.type} Interview</span>
                                                                </div>
                                                            )
                                                        })
                                                    }
                                                </div>
                                            </div>
                                        </>
                                    )
                                })
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Schedules


