import Head from "next/head";
import useSWR from "swr";
import Link from "next/link";
import { getCurrentUserDetails, sendFriendRequest } from "../../../api/User/Get/user";
import { Modal } from "@mui/material";
import { useContext, useState } from "react";
import { currentUser } from "../../../redux/user/userAuthSlicer";
import { useSelector } from "react-redux";
import { sendMessageToFriend } from "../../../api/User/Post/user";
import { useRouter } from "next/router";
import { currentCompanyAdmin } from "../../../redux/company-admin/CompanyAdminAuthSlicer";
import { AuthorizationContext } from "../../../contexts/AuthorizationContext";

interface Props {
    userId: any;
    user: boolean

}

export function Profile({ userId, user }: Props) {
    const { alertToLogin } = useContext(AuthorizationContext);
    const [open, setOpen] = useState(false);
    const [image, setImage] = useState('');
    const [connected, setConnected] = useState(false)
    const [friends, setFriends] = useState('')
    const { companyAdminId } = useSelector(currentCompanyAdmin)
    const router = useRouter();
    let friend = false
    let curUserId: string = null
    if (user == null) {
        const current = useSelector(currentUser)
        curUserId = current.userId
        if (userId != current.userId) friend = true
    }
    const handleOpen = (image: string) => {
        setImage(image)
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    async function sendConnectionRequest(curUserId: string, userId: string) {
        if (userId == curUserId) return;
        try {
            const res = await sendFriendRequest(curUserId, userId)
            if (res) {
                setFriends(friends + 1)
            } else {
                setFriends(friends + -1)
            }
        } catch (err: any) {
            if (err?.response?.data?.statusCode === 401) {
                alertToLogin()
                return
            }
        }
        setConnected(!connected)
    }
    async function sendMessage(curUserId: string, userId: string) {
        if (companyAdminId) {
            try {
                await sendMessageToFriend(userId, curUserId, 'company')

            } catch (err: any) {
                if (err?.response?.data?.statusCode === 401) {
                    alertToLogin()
                    return
                }
            }
            router.push({
                pathname: "/company-admin/inbox",
                query: {
                    senderId: userId,
                    receiverId: curUserId
                },
            },
                "/user/inbox"
            )
        } else {
            try {
                await sendMessageToFriend(curUserId, userId, 'user')

            } catch (err: any) {
                if (err?.response?.data?.statusCode === 401) {
                    alertToLogin()
                    return
                }
            }
            router.push({
                pathname: "/user/inbox",
                query: {
                    senderId: curUserId,
                    receiverId: userId
                },
            },
                "/user/inbox"
            )
        }
    }

    const fetcher = async () => {
        try {
            try {
                const profile = await getCurrentUserDetails(userId);
                if (user == null) {
                    if (profile.friends.includes(curUserId)) {
                        setConnected(true)
                    }
                }
                setFriends(profile.friends.length)
                return profile;
            } catch (err: any) {
                if (err?.response?.data?.statusCode === 401) {
                    alertToLogin()
                    return
                }
            }
        } catch (err: any) {
            if (err?.response?.data?.statusCode === 401) {
                alertToLogin()
                return
            }
        }

    };
    const { data, error, isLoading } = useSWR("profile", fetcher);

    return (
        <>
            <Head>
                <link
                    rel="stylesheet"
                    href="https://demos.creative-tim.com/notus-js/assets/styles/tailwind.css"
                />
                <link
                    rel="stylesheet"
                    href="https://demos.creative-tim.com/notus-js/assets/vendor/@fortawesome/fontawesome-free/css/all.min.css"
                />
            </Head>

            <div className="relative flex flex-col min-w-0 min-h-[500px] break-words bg-white xs:w-full lg:w-full mb-6 shadow-xl rounded-lg mt-36">
                <div className="rounded-lg shadow-lg min-h-full">
                    <div className="flex flex-wrap">
                        <div className="w-full flex justify-center">
                            <div className="relative">
                                {isLoading || error ? (
                                    <svg
                                        className="animate-pulse shadow-xl rounded-full h-40 align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-150-px text-gray-100 dark:text-gray-300"
                                        aria-hidden="true"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                                            clipRule="evenodd"
                                        ></path>
                                    </svg>
                                ) : (
                                    <img
                                        alt="..."
                                        src={data.image ? data.image : 'https://w7.pngwing.com/pngs/798/436/png-transparent-computer-icons-user-profile-avatar-profile-heroes-black-profile-thumbnail.png'}
                                        className="shadow-xl rounded-full h-40  border-none absolute -m-16 -ml-20 lg:-ml-20 max-w-150-px"
                                    />
                                )}
                            </div>
                        </div>
                        <div className="w-full text-center mt-28 mb-4">
                            {user && (<Link
                                href={{ pathname: "/user/profile/edit" }}
                                className="hover:underline cursor-pointer text-black font-bold"
                            >
                                Update Profile
                            </Link>)}
                            {friend && (<div
                                className=" text-black font-bold flex justify-around"
                            >
                                {connected ?
                                    (<>
                                        <span onClick={() => { sendConnectionRequest(curUserId, userId) }} className="hover:underline cursor-pointer">Connected</span>
                                        <span onClick={() => sendMessage(curUserId, userId)} className="hover:underline cursor-pointer">Message</span>
                                    </>
                                    ) : <span onClick={() => { sendConnectionRequest(curUserId, userId) }} className="hover:underline cursor-pointer">Connect</span>}
                            </div>)}
                            {companyAdminId &&
                                <div
                                    className=" text-black font-bold flex justify-around"
                                >
                                    <span onClick={() => sendMessage(companyAdminId, userId)} className="hover:underline cursor-pointer">Message</span>
                                </div>
                            }
                        </div>
                        <div className="w-full text-center">
                            <div className="flex justify-around">
                                <div className=" text-center">
                                    {isLoading || error ? (
                                        <span className="h-10 animate-pulse bg-gray-100 block rounded-lg dark:bg-gray-200 w-10 ml-2"></span>
                                    ) : (
                                        <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                                            {friends}
                                        </span>
                                    )}
                                    <span className="text-sm text-blueGray-400">Connections</span>
                                </div>
                                <div className="text-center pl-8">
                                    {isLoading || error ? (
                                        <span className="h-10 animate-pulse bg-gray-100 block rounded-lg dark:bg-gray-200 w- ml-2"></span>
                                    ) : (
                                        <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                                            {data.postCount}
                                        </span>
                                    )}
                                    <span className="text-sm text-blueGray-400">Posts</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    {isLoading || error ? (
                        // <SkeletonLoader />
                        <></>
                    ) : (
                        <>
                            <div className="text-center mt-12">
                                <h3 className="text-xl font-semibold leading-normal mb-2 text-blueGray-700">
                                    {data.firstName + " " + data.lastName}
                                </h3>
                                <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold">
                                    {data.email}
                                </div>


                                <div className="text-center mt-5">
                                    <div className="flex flex-wrap justify-center">
                                        <div className="w-full lg:w-9/12 px-4">
                                            <span className="text-lg leading-relaxed text-blueGray-700 flex flex-wrap justify-center gap-2">
                                                <i className="fas fa-university mr-2 text-lg text-blueGray-400"></i>
                                                {
                                                    data.qualifications.map(function (obj: string, index: number) {
                                                        return (
                                                            <div key={obj} >
                                                                <p className="mt-1 text-sm font-bold">  {obj} {index == data.qualifications.length - 1 ? '' : '|'}</p>
                                                            </div>
                                                        )
                                                    })
                                                }
                                            </span>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
                                <div className="flex flex-wrap justify-center">
                                    <div className="w-full lg:w-9/12 px-4">
                                        <span className="mb-4 text-lg leading-relaxed text-blueGray-700 flex flex-wrap justify-center gap-2">
                                            {
                                                data.skills.map(function (obj: string, index: number) {
                                                    return (
                                                        <div key={obj} >
                                                            <p className="mt-1 text-sm font-bold">  {obj} {index == data.skills.length - 1 ? '' : '|'}</p>
                                                        </div>
                                                    )
                                                })
                                            }
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full flex justify-center mb-2">
                                <img src={data.resume} alt="" className=" rounded-lg w-2/4 cursor-pointer" onClick={() => handleOpen(data.resume)} />
                            </div>
                        </>
                    )}
                </div>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="parent-modal-title"
                    aria-describedby="parent-modal-description"
                >
                    <div className="flex flex-col justify-center items-center max-w-lg xs:w-2/4 mx-auto my-2 cursor-pointer">
                        {/* <div style={{
                            backgroundImage: `url(${image})`
                        }} */}
                        <img src={image} className="bg-transparent h-[90vh] w-full rounded-t-lg shadow-md object-fill overflow-y-scroll" />
                        <div className="w-full bg-white rounded-b-lg shadow-lg overflow-hidden">
                            <div className="py-2 text-center font-bold uppercase tracking-wide text-gray-800 hover:text-gray-400" onClick={handleClose}>Close resume</div>
                        </div>
                    </div>
                </Modal>
            </div>
        </>
    );
}