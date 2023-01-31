import React, { useEffect, useState } from 'react'
import { getCurrentUserDetails } from '../../api/User/Get/user';

function AllChats({ data, currentUser }: any) {
    const [userData, setUserData] = useState(null)

    useEffect(() => {
        const userId = data.members.find((id: string) => id != currentUser);
        const getUserData = async () => {
            const data = await getCurrentUserDetails(userId);
            setUserData(data);
        };
        getUserData();
    }, []);
    return (
        <div className="relative cursor-pointer hover:bg-gray-200 p-2">
            {
                userData?.image.length ? (
                    <div className="flex items-center justify-center w-8 h-8 mx-2 overflow-hidden rounded-full">
                        <img src={userData?.image} />
                    </div>
                ) : (
                    <div className="flex items-center justify-center mx-2 h-8 w-8 bg-indigo-200 rounded-full">
                        {userData?.firstName[0]}
                    </div>
                )
            }
            <div className={`absolute bottom-2 left-9 w-3 h-3 mr-1 rounded-full bg-green-500 border-2 border-white`}></div>
            <div className="absolute ml-2 top-2 left-10  text-sm font-semibold p-2">{userData?.firstName + " " + userData?.lastName}</div>
        </div>

    )
}

export default AllChats
