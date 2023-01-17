import React from "react";

function SideBarWithoutText() {
  return (
    <div className="fixed w-1/10 mt-20  hidden sm:block">
      <div className="w-full py-4 px-2 text-gray-900 bg-white rounded-lg text-left capitalize font-medium shadow-2xl">
        <img
          src="https://www.freepnglogos.com/uploads/spotify-logo-png/file-spotify-logo-png-4.png"
          alt="alt placeholder"
          className="w-8 h-8 mx-auto mb-5 "
        />
        <span className="flex cursor-pointer px-2 py-1 hover:bg-gray-200 hover:text-gray-700 rounded mb-5">
          <i className="w-8 fas fa-stream p-2  rounded-full"></i>
        </span>
        <span className="cursor-pointer px-2 py-1 hover:bg-gray-200 hover:text-gray-700 rounded flex mb-5">
          <i className="w-8 fas fa-search p-2  rounded-full"></i>
        </span>
        <span className="cursor-pointer px-2 py-1  hover:bg-gray-200 hover:text-gray-700 rounded flex">
          <span className="w-8 mb-5 relative">
            <i className="w-8 fas fa-user p-2  rounded-full"></i>
            <span className="absolute right-0 top-0 -mt-2 -mr-1 text-xs bg-yellow-500 text-black font-medium px-2 rounded-full">
              3
            </span>
          </span>
        </span>
        <span className="cursor-pointer px-2 py-1 hover:bg-gray-200 hover:text-gray-700 rounded flex mb-5">
          <i className="w-8 fas fa-th p-2  rounded-full"></i>
        </span>
        <span className="cursor-pointer px-2 py-1 hover:bg-gray-200 hover:text-gray-700 rounded flex mb-5">
          <i className="w-8 fas fa-calendar-alt p-2  rounded-full"></i>
        </span>
        <span className="cursor-pointer px-2 py-1 hover:bg-gray-200 hover:text-gray-700 rounded flex mb-5">
          <i className="w-8 fas fa-calendar-alt p-2  rounded-full"></i>
        </span>
        <span className="cursor-pointer px-2 py-1 hover:bg-gray-200 hover:text-gray-700 rounded flex mb-5">
          <i className="w-8 fas fa-calendar-alt p-2  rounded-full"></i>
        </span>
        <span className="cursor-pointer px-2 py-1 hover:bg-gray-200 hover:text-gray-700 rounded flex mb-5">
          <i className="w-8 fas fa-calendar-alt p-2  rounded-full"></i>
        </span>
        <span className="cursor-pointer px-2 pt-0 hover:bg-gray-200 hover:text-gray-700 rounded flex mb-5">
          <i className="w-8 fas fa-calendar-alt p-2  rounded-full"></i>
        </span>
      </div>
    </div>
  );
}

export default SideBarWithoutText;
