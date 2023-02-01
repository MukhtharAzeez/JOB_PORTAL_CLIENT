import React from 'react'
import { useSelector } from "react-redux";
import { currentUser } from "../../redux/user/userAuthSlicer";
import useSWR from "swr";
import { getUserChat } from '../../api/User/Get/user';
import AllChats from './AllChats';

function FriendsList({ setChat, onlineUsers }:any) {
    const { userId } = useSelector(currentUser)

    const fetcher = async () => {
        const friends = await getUserChat(userId);
        return friends;
    };
    const { data, error, isLoading } = useSWR("friends", fetcher);
    if (isLoading || error) return <div>Loading....</div>

    return (
        <div className="flex flex-col mt-8">
            <div className="flex flex-row items-center justify-between text-xs">
                <span className="hidden sm:block font-bold">Active Conversations</span>
                <span className="block sm:hidden font-bold">Friends</span>
                <span className="flex items-center justify-center bg-gray-300 h-4 w-4 rounded-full">
                    4
                </span>
            </div>
            <div className="flex flex-col space-y-1 mt-4 -mx-2 h-48 overflow-y-auto">
                {
                    data.map(function (chat: any) {
                        return (
                            <AllChats setChat={setChat} key={chat._id} data={chat} currentUser={userId} onlineUsers={onlineUsers}/>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default FriendsList
