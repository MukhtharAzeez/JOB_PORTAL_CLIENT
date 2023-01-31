import React from 'react'
import { getFriendsList } from "../../api/User/Get/user";
import { useSelector } from "react-redux";
import { currentUser } from "../../redux/user/userAuthSlicer";
import useSWR from "swr";

function FriendsList() {
    const { userId } = useSelector(currentUser)
    const fetcher = async () => {
        const friends = await getFriendsList(userId);
        return friends;
    };
    const { data, error, isLoading } = useSWR("friends", fetcher);
    if (isLoading || error) return <div>Loading....</div>
    console.log("fdkakkajkljadfs",data)
    return (
        <div className="flex flex-col mt-8">
            <div className="flex flex-row items-center justify-between text-xs">
                <span className="font-bold">Active Conversations</span>
                <span className="flex items-center justify-center bg-gray-300 h-4 w-4 rounded-full">
                    4
                </span>
            </div>
            <div className="flex flex-col space-y-1 mt-4 -mx-2 h-48 overflow-y-auto">
                {
                    data.map(function (friends: any) {
                        return (
                            <div className="relative cursor-pointer hover:bg-gray-200 p-2" key={friends.friend._id}>
                                {
                                    friends.friend.image.length ? (
                                        <div className="flex items-center justify-center w-8 h-8 mx-2 overflow-hidden rounded-full">
                                            <img src={friends.friend.image} />
                                        </div>
                                    ) : (
                                        <div className="flex items-center justify-center mx-2 h-8 w-8 bg-indigo-200 rounded-full">
                                            {friends.friend.firstName[0]}
                                        </div>
                                    )
                                }
                                <div className={`absolute bottom-2 left-9 w-3 h-3 mr-1 rounded-full bg-green-500 border-2 border-white`}></div>
                                <div className="absolute ml-2 top-2 left-10  text-sm font-semibold p-2">{friends.friend.firstName + " " + friends.friend.lastName}</div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default FriendsList
