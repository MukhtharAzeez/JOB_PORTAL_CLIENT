import React, { useState } from "react";
import SideBarWithoutText from "../Common/companyAdmin-user/SideBarWithoutText";
import ChatScreen from "./ChatScreen";
import LargeScreenSideBar from "./LargeScreenSideBar";

function UserMessage() {
  const [chat , setChat] = useState([])

  return (
    <div className="pt-20  mb-14 fixed w-full">
      <div className="flex  antialiased text-gray-800">
        <div className="flex flex-row h-full w-full overflow-x-hidden">
          <div className="md:mr-14 sm:ml-2 sm:mr-20">
            <SideBarWithoutText />
          </div>
          <LargeScreenSideBar setChat={setChat}/>
          <ChatScreen chat={chat}/>
        </div>
      </div>
    </div>
  );
}

export default UserMessage;
