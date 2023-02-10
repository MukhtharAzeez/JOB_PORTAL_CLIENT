import React, { useEffect, useState } from 'react'
import { getUserChat } from '../../api/User/Get/user';
import AllChats from './AllChats';

function CompanyAdmins({ setChat, onlineUsers, id ,type}: any) {
    const [data, setData] = useState([])
    const fetcher = async () => {
        const friends = await getUserChat(id, 'company');
        setData(friends)
    };
    useEffect(() => {
        fetcher();
    }, [])
    return (
        <div className="flex flex-col mt-8">
            <div className="flex flex-row items-center justify-between text-xs">
                <span className="hidden sm:block font-bold">{type == 'user' ? 'Company Representatives' : 'Applicants'}</span>
                <span className="block sm:hidden font-bold">{type == 'user' ? 'Company' : 'Applicants'}</span>
                <span className="flex items-center justify-center bg-gray-300 h-4 w-4 rounded-full">
                    {data.length}
                </span>
            </div>
            <div className="flex flex-col space-y-1 mt-4 -mx-2 overflow-y-scroll">
                {
                    data.map(function (chat: any) {
                        return (
                            <AllChats setChat={setChat} key={chat._id} data={chat} currentUser={id} onlineUsers={onlineUsers} type={type}/>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default CompanyAdmins
