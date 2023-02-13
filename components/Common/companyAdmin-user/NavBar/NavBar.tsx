import Head from "next/head";
import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import Link from "next/link";
import EventNoteIcon from "@mui/icons-material/EventNote";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Person2Icon from "@mui/icons-material/Person2";

interface Props {
  mode: String;
  type: String;
}

function NavBar({ mode ,type}: Props) {
  return (
    <>
      <Head>
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css"
          rel="stylesheet"
        />
      </Head>

      <div className="p-4 fixed z-10 w-full top-0 text-gray-900 bg-white shadow-lg ">
        <div className="flex p-2">
          <div className="w-full flex gap-3">
            <span className="px-2 mr-2 border-r border-gray-800">Portal</span>

            <Link href={type=='user' ? '/' : `/${type}`}>
              <span className="px-1 cursor-pointer hover:text-gray-700 hidden md:block">
                <HomeIcon />
              </span>
            </Link>

            <div className="flex rounded-l-xl">
              <div className="relative  text-gray-100 -my-1 ">
                <input
                  className="border-2 border-gray-100 bg-white h-10 pl-2  rounded-lg text-sm focus:outline-none text-black"
                  type="search"
                  name="search"
                  placeholder="Search"
                />
                <button
                  type="submit"
                  className="absolute right-0 top-0 mt-3 mr-2"
                >
                  <svg
                    className="text-gray-600 h-4 w-4 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    id="Cap_1"
                    x="0px"
                    y="0px"
                    viewBox="0 0 56.966 56.966"
                    xmlSpace="preserve"
                    width="512px"
                    height="512px"
                  >
                    <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
                  </svg>
                </button>
              </div>
            </div>

            <Link href={`/${type}/schedules`}>
              <span className="px-1 w-8 relative cursor-pointer hover:text-gray-700 hidden md:block">
                <EventNoteIcon />
              </span>
            </Link>
            <Link href={`/${type}/inbox`}>
              <span className="px-1 w-8 relative cursor-pointer hover:text-gray-700 hidden md:block">
                <ChatBubbleIcon className="w-8" />
              </span>
            </Link>

            <Link href={`/${type}/notifications`}>
              <span className="px-1 w-8 relative cursor-pointer hover:text-gray-700 hidden md:block">
                <NotificationsIcon />
                <span className="absolute right-0 top-0 -mt-1 -mr-4 text-xs bg-red-400 text-black font-medium px-2 rounded-full">
                  3
                </span>
              </span>
            </Link>
          </div>

          <Link href={`/${type}/profile`}>
            <span className="w-10 relative float-right mr-3 cursor-pointer hover:text-gray-700">
              <Person2Icon />
            </span>
          </Link>
        </div>
      </div>
    </>
  );
}

export default NavBar;
