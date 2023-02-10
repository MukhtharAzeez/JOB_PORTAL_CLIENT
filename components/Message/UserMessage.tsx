import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { io, Socket } from "socket.io-client";
import { USER_SIDEBAR_LINKS } from "../../constants/User-sideBar";
import { currentCompanyAdmin } from "../../redux/company-admin/CompanyAdminAuthSlicer";
import { currentUser } from "../../redux/user/userAuthSlicer";
import SideBarWithoutText from "../Common/companyAdmin-user/SideBarWithoutText";
import ChatScreen from "./ChatScreen";
import LargeScreenSideBar from "./LargeScreenSideBar";

function UserMessage() {
  const [chat, setChat] = useState(null)
  const socket = useRef<Socket>();
  const user = useSelector(currentUser);
  const [onlineUsers, setOnlineUsers] = useState([]);
  const [sentMessage, setSentMessage] = useState(null);
  const [receiveMessages, setReceiveMessages] = useState(null);
  const [id, setId] = useState(null)
  const [type, setType]= useState('')
  const { userId } = useSelector(currentUser)
  const { companyAdminId } = useSelector(currentCompanyAdmin)
  useEffect(() => {
    if(userId){
      setId(userId)
      setType('user')
    }else{
      setId(companyAdminId)
      setType('companyAdmin')
    }
    socket.current = io(process.env.NEXT_PUBLIC_SOCKET_DOMAIN);
    socket?.current.emit("new-user-add", user.userId);
  }, [])

  useEffect(() => {
    socket?.current.on("get-user", (users) => {
      setOnlineUsers(users);
    });
  }, [user]);

  useEffect(() => {
    if (sentMessage !== null) {
      socket.current.emit("send-message", sentMessage);
    }
  }, [sentMessage]);

  useEffect(() => {
    socket.current.on("receive-message", (data) => {
      setReceiveMessages(data);
      console.log(data)
    });
  }, []);

  return (
    <div className="pt-20  mb-14 fixed w-full">
      <div className="flex  antialiased text-gray-800">
        <div className="flex flex-row h-full w-full overflow-x-hidden">
          <div className="md:mr-14 sm:ml-2 sm:mr-20">
            <SideBarWithoutText links={USER_SIDEBAR_LINKS} />
          </div>
          <LargeScreenSideBar setChat={setChat} onlineUsers={onlineUsers} id={id} type={type}/>
          {chat ? (
            <ChatScreen chat={chat} setSentMessage={setSentMessage}
              receiveMessages={receiveMessages} />
          ) :
            (
              <div className="w-full min-h-[100vh] p-8">
                <div className='flex w-full items-center justify-center h-[84vh] rounded-lg from-purple-500 via-indigo-500 to-pink-400 bg-gradient-to-br'>
                </div>
              </div>
            )
          }
        </div>
      </div>
    </div>
  );
}

export default UserMessage;
