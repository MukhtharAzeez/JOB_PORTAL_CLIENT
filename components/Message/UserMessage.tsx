import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { io, Socket } from "socket.io-client";
import { USER_SIDEBAR_LINKS } from "../../constants/User-sideBar";
import { currentUser } from "../../redux/user/userAuthSlicer";
import SideBarWithoutText from "../Common/companyAdmin-user/SideBarWithoutText";
import ChatScreen from "./ChatScreen";
import LargeScreenSideBar from "./LargeScreenSideBar";

function UserMessage() {
  const [chat , setChat] = useState(null)
  const socket = useRef<Socket>();
  const user = useSelector(currentUser);
  const [onlineUsers, setOnlineUsers] = useState([]);
  const [sentMessage, setSentMessage] = useState(null);
  const [receiveMessages, setReceiveMessages] = useState(null);

  useEffect(() => {
    socket.current = io("http://localhost:8000");
    socket?.current.emit("new-user-add", user.userId);
    socket?.current.on("get-user", (users) => {
      console.log("dsjkdsjldsj",users)
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
    });
  }, []);
  
  return (
    <div className="pt-20  mb-14 fixed w-full">
      <div className="flex  antialiased text-gray-800">
        <div className="flex flex-row h-full w-full overflow-x-hidden">
          <div className="md:mr-14 sm:ml-2 sm:mr-20">
            <SideBarWithoutText links={USER_SIDEBAR_LINKS} />
          </div>
          <LargeScreenSideBar setChat={setChat} onlineUsers={onlineUsers}/>
          {chat ? (
            <ChatScreen chat={chat} setSentMessage={setSentMessage}
              receiveMessages={receiveMessages} />
          ) : ""}
        </div>
      </div>
    </div>
  );
}

export default UserMessage;
