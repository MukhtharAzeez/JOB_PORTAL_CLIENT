import { ListItemIcon } from "@mui/material";
import Link from "next/link";
import React from "react";

function SideBarWithoutText({links}:any) {
  return (
    <div className="fixed w-1/10 mt-20 xs:w-0 hidden sm:block">
      <div className="w-full py-4 px-2 text-gray-900 bg-white rounded-lg text-left capitalize font-medium shadow-2xl">
        <img
          src="https://www.freepnglogos.com/uploads/spotify-logo-png/file-spotify-logo-png-4.png"
          alt="alt placeholder"
          className="w-8 h-8 mx-auto mb-5 "
        />
        {
          links.map(function (link: any) {
            const Icon = link.icon
            return (
              <Link key={link.title} href={link.href}>
                <span className="cursor-pointer pL-2 pt-0 hover:bg-gray-200 hover:text-gray-700 rounded flex mb-5">
                  <ListItemIcon className='pl-2 w-2'>
                    <Icon className="text-black mt-2" />
                  </ListItemIcon>
                </span>
              </Link>
            )
          })
        }  
      </div>
    </div>
  );
}

export default SideBarWithoutText;
