import React from 'react'
import useSWR from "swr";
import { getUserChat } from '../../api/User/Get/user';
import AllChats from './AllChats';

function CompanyAdmins({ setChat, onlineUsers ,id}: any) {
    const fetcher = async () => {
        const companyAdmins = await getUserChat(id,'company');
        return companyAdmins;
    };
    const { data, error, isLoading } = useSWR("companyAdmins", fetcher);
    if (isLoading || error) return <div>Loading....</div>
    return (
        <div className="flex flex-col mt-8">
            <div className="flex flex-row items-center justify-between text-xs">
                <span className="hidden sm:block font-bold">Company Representatives</span>
                <span className="block sm:hidden font-bold">Companies</span>
                <span className="flex items-center justify-center bg-gray-300 h-4 w-4 rounded-full">
                    {data.length}
                </span>
            </div>
            <div className="flex flex-col space-y-1 mt-4 -mx-2 h-48 overflow-y-auto">
                {
                    data.map(function (chat: any) {
                        return (
                            <AllChats setChat={setChat} key={chat._id} data={chat} currentUser={id} onlineUsers={onlineUsers} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default CompanyAdmins
