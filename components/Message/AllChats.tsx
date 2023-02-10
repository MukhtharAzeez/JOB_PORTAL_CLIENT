import React, { useEffect, useState } from 'react'
import { getCompanyAdminDetails } from '../../api/Company-Admin/get';
import { getCurrentUserDetails } from '../../api/User/Get/user';

function AllChats({ data, currentUser, setChat, onlineUsers ,type}: any) {
    const [userData, setUserData] = useState(null)
    const [companyAdminData, setCompanyAdminData] = useState(null)

    useEffect(() => {
        const idToFetch = data.members.find((id: string) => id != currentUser);
        console.log(data.type, type)
        if(data.type=='user' && type =='user'){
            const getUserData = async () => {
                const data = await getCurrentUserDetails(idToFetch);
                setUserData(data);
                setCompanyAdminData(null);
            };
            getUserData();
        }
        if (data.type == 'user' && type == 'companyAdmin') {
            const getUserData = async () => {
                const data = await getCurrentUserDetails(idToFetch);
                setUserData(data);
                setCompanyAdminData(null);
            };
            getUserData();
        }
        if(data.type=='company' && type=='companyAdmin'){
            const getCompanyAdminData = async () => {
                const data = await getCurrentUserDetails(idToFetch);
                setUserData(data);
                setCompanyAdminData(null);
            };
            getCompanyAdminData();
        }
        if (data.type == 'company' && type == 'user') {
            const getCompanyAdminData = async () => {
                const data = await getCompanyAdminDetails(idToFetch);
                setCompanyAdminData(data);
                setUserData(null);
            };
            getCompanyAdminData();
        }
    }, []);
    return (
        currentUser && 
        <>
            {
                userData &&
                <div className="relative cursor-pointer hover:bg-gray-200 p-2" onClick={() => setChat(data)}>
                    {
                        userData?.image?.length ? (
                            <div className="flex items-center justify-center w-8 h-8 mx-2 overflow-hidden rounded-full">
                                <img src={userData?.image} />
                            </div>
                        ) : (
                            <div className="flex items-center justify-center mx-2 h-8 w-8 bg-indigo-200 rounded-full">
                                {userData?.firstName}
                            </div>
                        )
                    }
                    {
                        onlineUsers.map((item: any) => (item.userId === userData?._id)) ? (
                            <div className="absolute bottom-2 left-9 w-3 h-3 mr-1 rounded-full bg-green-500 border-2 border-white"></div>
                        ) : (
                            <div className="absolute bottom-2 left-9 w-3 h-3 mr-1 rounded-full bg-red-500 border-2 border-white"></div>
                        )
                    }
                    <div className="hidden sm:block absolute ml-2 top-2 left-10  text-sm font-semibold p-2">{userData?.firstName + " " + userData?.lastName}</div>
                </div>
            }

            {
                companyAdminData &&
                <div className="relative cursor-pointer hover:bg-gray-200 p-2" onClick={() => setChat(data)}>
                    {
                        companyAdminData?.image?.length ? (
                            <div className="flex items-center justify-center w-8 h-8 mx-2 overflow-hidden rounded-full">
                                <img src={companyAdminData?.image} />
                            </div>
                        ) : (
                            <div className="flex items-center justify-center mx-2 h-8 w-8 bg-indigo-200 rounded-full">
                                {companyAdminData?.name[0]}
                            </div>
                        )
                    }
                    {
                        onlineUsers.map((item: any) => (item.userId === userData?._id)) ? (
                            <div className="absolute bottom-2 left-9 w-3 h-3 mr-1 rounded-full bg-green-500 border-2 border-white"></div>
                        ) : (
                            <div className="absolute bottom-2 left-9 w-3 h-3 mr-1 rounded-full bg-red-500 border-2 border-white"></div>
                        )
                    }

                    <div className="hidden sm:block absolute ml-2 top-2 left-10  text-sm font-semibold p-2"> {companyAdminData?.name}</div>
                </div>
            }
        </>
        
    )
}

export default AllChats
