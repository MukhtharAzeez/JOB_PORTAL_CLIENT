
import Head from 'next/head';
import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import Link from 'next/link';

interface Props {
  mode: String;
}






function NavBar({ mode }: Props) {
  return (
    <>
      <Head>
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css" rel="stylesheet" />
      </Head>

      <div className="p-4 fixed z-10 w-full top-0 text-gray-900 bg-white shadow-lg ">
        <div className="flex p-2">

          <div className="w-full flex gap-3">
            <span className="px-2 mr-2 border-r border-gray-800">
              Portal
            </span>
            <Link href="/">
              <span className="px-1 cursor-pointer hover:text-gray-700 hidden md:block">
                <HomeIcon />
              </span>
            </Link>

            <div className='flex rounded-l-xl'>
              <div className="relative mx-auto text-gray-100 -my-1 lg:block hidden">
                <input
                  className="border-2 border-gray-100 bg-white h-10 pl-2 pr-8 rounded-lg text-sm focus:outline-none"
                  type="search" name="search" placeholder="Search"/>
                  <button type="submit" className="absolute right-0 top-0 mt-3 mr-2">
                    <svg className="text-gray-600 h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg"
                      version="1.1" id="Cap_1" x="0px" y="0px"
                      viewBox="0 0 56.966 56.966" 
                      xmlSpace="preserve"
                      width="512px" height="512px">
                      <path
                        d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
                    </svg>
                  </button>
              </div>
            </div>

            <span className="px-1 cursor-pointer hover:text-gray-700 hidden md:block">

              <i className="fas fa-th p-2  rounded-full">
              </i>
            </span>
            <span className="px-1 cursor-pointer hover:text-gray-700 hidden md:block">
              <i className="w-8 fas fa-calendar-alt p-2  rounded-full">
              </i>
            </span>
            <span className="px-1 w-8 relative cursor-pointer hover:text-gray-700 hidden md:block">
              <i className="fas fa-bell p-2  rounded-full">
              </i>
              <span
                className="absolute right-0 top-0 -mt-2 -mr-1 text-xs bg-red-500 text-white font-medium px-2 shadow-lg rounded-full">3</span>
            </span>
          </div>

          <Link href='/User/Profile'>
            <span className="w-10 relative float-right mr-3 cursor-pointer hover:text-gray-700">
              <i className="fas fa-user p-2  rounded-full">
              </i>
              <span
                className="absolute right-0 top-0 -mt-1 -mr-1 text-xs bg-yellow-500 text-black font-medium px-2 rounded-full">3</span>
            </span>
          </Link>
        </div>
      </div>
    </>
  )
}

export default NavBar

// import * as React from "react";
// import { styled, alpha } from "@mui/material/styles";
// import AppBar from "@mui/material/AppBar";
// import Box from "@mui/material/Box";
// import Avatar from "@mui/material/Avatar";
// import Toolbar from "@mui/material/Toolbar";
// import IconButton from "@mui/material/IconButton";
// import Typography from "@mui/material/Typography";
// import InputBase from "@mui/material/InputBase";
// import Badge from "@mui/material/Badge";
// import MenuItem from "@mui/material/MenuItem";
// import Menu from "@mui/material/Menu";
// import MenuIcon from "@mui/icons-material/Menu";
// import AccountCircle from "@mui/icons-material/AccountCircle";
// import MessageIcon from "@mui/icons-material/Message";
// import NotificationsIcon from "@mui/icons-material/Notifications";
// import MoreIcon from "@mui/icons-material/MoreVert";
// import HomeTwoToneIcon from "@mui/icons-material/Home";
// import SettingsIcon from "@mui/icons-material/Settings";
// import WorkIcon from "@mui/icons-material/Work";
// import LightModeIcon from "@mui/icons-material/LightMode";
// import DarkModeIcon from "@mui/icons-material/DarkMode";
// import Link from "next/link";
// import { useDispatch } from "react-redux";
// import { changeTheme } from "../../../redux/user/ThemeSlice";

// export default function NavBar({ mode }: Props) {
//   const dispatch = useDispatch();
//   const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
//   const [mobileMoreAnchorEl, setMobileMoreAnchorEl] =
//     React.useState<null | HTMLElement>(null);

//   const isMenuOpen = Boolean(anchorEl);
//   const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

//   const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleMobileMenuClose = () => {
//     setMobileMoreAnchorEl(null);
//   };

//   const handleMenuClose = () => {
//     setAnchorEl(null);
//     handleMobileMenuClose();
//   };

//   const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
//     setMobileMoreAnchorEl(event.currentTarget);
//   };

//   const menuId = "primary-search-account-menu";
//   const renderMenu = (
//     <Menu
//       anchorEl={anchorEl}
//       anchorOrigin={{
//         vertical: "top",
//         horizontal: "right",
//       }}
//       id={menuId}
//       keepMounted
//       transformOrigin={{
//         vertical: "top",
//         horizontal: "right",
//       }}
//       open={isMenuOpen}
//       onClose={handleMenuClose}
//     >
//       <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
//       <MenuItem onClick={handleMenuClose}>My account</MenuItem>
//     </Menu>
//   );

//   const mobileMenuId = "primary-search-account-menu-mobile";
//   const renderMobileMenu = (
//     <Menu
//       anchorEl={mobileMoreAnchorEl}
//       anchorOrigin={{
//         vertical: "top",
//         horizontal: "right",
//       }}
//       id={mobileMenuId}
//       keepMounted
//       transformOrigin={{
//         vertical: "top",
//         horizontal: "right",
//       }}
//       open={isMobileMenuOpen}
//       onClose={handleMobileMenuClose}
//     >
//       {" "}
//       <Link href="/">
//         <MenuItem>
//           <IconButton size="large" aria-label="show 4 new mails" color="inherit">
//             <HomeTwoToneIcon />
//           </IconButton>
//           <p>Home</p>
//         </MenuItem>
//       </Link>
//       <MenuItem>
//         <IconButton size="large" aria-label="show 4 new mails" color="inherit">
//           <WorkIcon />
//         </IconButton>
//         <p>Jobs</p>
//       </MenuItem>
//       <Link href="/User/Inbox" classNameName="pt-3">
//         <MenuItem>
//           <IconButton
//             size="large"
//             aria-label="show 4 new mails"
//             color="inherit"
//           >
//             <Badge badgeContent={4} color="error">
//               <MessageIcon />
//             </Badge>
//           </IconButton>
//           <p>Messages</p>
//         </MenuItem>
//       </Link>
//       <MenuItem>
//         <IconButton
//           size="large"
//           aria-label="show 17 new notifications"
//           color="inherit"
//         >
//           <Badge badgeContent={17} color="error">
//             <NotificationsIcon />
//           </Badge>
//         </IconButton>
//         <p>Notifications</p>
//       </MenuItem>
//       <MenuItem
//         onClick={() => {
//           dispatch(changeTheme(mode))
//         }}
//       >
//         <IconButton
//           size="large"
//           aria-label="show 17 new notifications"
//           color="inherit"
//         >
//           {mode === "light" ? <DarkModeIcon /> : <LightModeIcon />}
//         </IconButton>
//         {mode === "light" ? <p>Dark Mode</p> : <p>Light Mode</p>}
//       </MenuItem>
//       <MenuItem>
//         <IconButton
//           size="large"
//           aria-label="show 17 new notifications"
//           color="inherit"
//         >
//           <NotificationsIcon />
//         </IconButton>
//         <p>Settings</p>
//       </MenuItem>
//       <MenuItem onClick={handleProfileMenuOpen}>
//         <IconButton
//           size="large"
//           aria-label="account of current user"
//           aria-controls="primary-search-account-menu"
//           aria-haspopup="true"
//           color="inherit"
//         >
//           <AccountCircle />
//         </IconButton>
//         <p>Profile</p>
//       </MenuItem>
//     </Menu>
//   );

//   return (
//     <AppBar
//       position="sticky"
//       sx={{ backgroundColor: mode == "light" ? "white" : "black", height: 60 }}
//     >
//       <Toolbar>
//         <IconButton
//           size="large"
//           edge="start"
//           aria-label="open drawer"
//           sx={{ mr: 2, color: mode == "light" ? "black" : "white" }}
//         >
//           <MenuIcon />
//         </IconButton>
//         <Typography
//           variant="h6"
//           noWrap
//           component="div"
//           sx={{
//             display: { xs: "none", sm: "block" },
//             color: mode == "light" ? "black" : "white",
//           }}
//         >
//           PORTAL
//         </Typography>
//         {/* <Search sx={{ color: mode == "light" ? "black" : "white"}}>
//           <SearchIconWrapper>
//             <SearchIcon />
//           </SearchIconWrapper>
//           <StyledInputBase
//             placeholder="Search…"
//             inputProps={{ "aria-label": "search" }}

//           />
//         </Search> */}
//         <form method="GET" classNameName='ml-4'>
//           <div classNameName="relative text-gray-600 focus-within:text-gray-400">
//             <span classNameName="absolute inset-y-0 left-0 flex items-center pl-2">
//               <button type="submit" classNameName="p-1 focus:outline-none focus:shadow-outline">
//                 <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" classNameName="w-6 h-6"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
//               </button>
//             </span>
//             <input type="search" name="q" classNameName="py-2 text-sm text-white bg-gray-900 rounded-md pl-10 focus:outline-none focus:bg-white focus:text-gray-900" placeholder="Search..." autoComplete="off"/>
//           </div>
//         </form>

//         <Box sx={{ flexGrow: 1 }} />
//         <Box sx={{ display: { xs: "none", md: "flex" } }}>
//           <Link href="/" classNameName="mt-3">
//             <IconButton
//               size="large"
//               aria-label="show 4 new mails"
//               color="inherit"
//               sx={{ "&:hover": { backgroundColor: "transparent" } }}
//             >
//               <HomeTwoToneIcon
//                 sx={{ color: mode == "light" ? "black" : "white" }}
//               />
//             </IconButton>
//           </Link>
//           <IconButton
//             size="large"
//             aria-label="show 17 new notifications"
//             color="inherit"
//             sx={{ "&:hover": { backgroundColor: "transparent" } }}
//           >
//             <WorkIcon sx={{ color: mode == "light" ? "black" : "white" }} />
//           </IconButton>

//           <Link href="/User/Inbox" classNameName="pt-3">
//             <IconButton
//               size="large"
//               aria-label="show 4 new mails"
//               color="inherit"
//               sx={{ "&:hover": { backgroundColor: "transparent" } }}
//             >
//               <Badge badgeContent={4} color="error">
//                 <MessageIcon
//                   sx={{ color: mode == "light" ? "black" : "white" }}
//                 />
//               </Badge>
//             </IconButton>
//           </Link>

//           <IconButton
//             size="large"
//             aria-label="show 17 new notifications"
//             color="inherit"
//             sx={{ "&:hover": { backgroundColor: "transparent" } }}
//           >
//             <Badge badgeContent={17} color="error">
//               <NotificationsIcon
//                 sx={{ color: mode == "light" ? "black" : "white" }}
//               />
//             </Badge>
//           </IconButton>

//           <IconButton
//             size="large"
//             aria-label="show 17 new notifications"
//             color="inherit"
//             onClick={() => {
//               dispatch(changeTheme(mode))
//             }}
//             classNameName="outline-0 rounded-none"
//             sx={{ "&:hover": { backgroundColor: "transparent" } }}
//           >
//             {mode === "light" ? (
//               <DarkModeIcon 
//                 sx={{ color: mode == "light" ? "black" : "white" }}
//               />
//             ) : (
//               <LightModeIcon
//                 sx={{ color: mode == "light" ? "black" : "white" }}
//               />
//             )}
//           </IconButton>
//           <IconButton
//             size="large"
//             aria-label="show 17 new notifications"
//             color="inherit"
//             sx={{ "&:hover": { backgroundColor: "transparent" } }}
//           >
//             <SettingsIcon sx={{ color: mode == "light" ? "black" : "white" }} />
//           </IconButton>

//           <Link href="/User/Profile">
//             <Avatar
//               sx={{ width: 30, height: 30, marginTop: "10px", margin: "20px" }}
//               alt="profile"
//               src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
//             />
//           </Link>
//         </Box>
//         <Box sx={{ display: { xs: "none", sm: "flex", md: "none" } }}>
//           <IconButton
//             size="large"
//             aria-label="show more"
//             aria-controls={mobileMenuId}
//             aria-haspopup="true"
//             onClick={handleMobileMenuOpen}
//             color="inherit"
//             sx={{ "&:hover": { backgroundColor: "transparent" } }}
//           >
//             <MoreIcon sx={{ color: mode === "light" ? "black" : "white" }} />
//           </IconButton>
//         </Box>
//         <Box sx={{ display: { xs: "flex", sm: "none" } }}>
//           <IconButton
//             size="large"
//             aria-label="show more"
//             aria-controls={mobileMenuId}
//             aria-haspopup="true"
//             color="inherit"
//             onClick={() => {
//               dispatch(changeTheme(mode))
//             }}
//             sx={{ "&:hover": { backgroundColor: "transparent" } }}
//           >
//             {mode === "light" ? (
//               <DarkModeIcon
//                 sx={{ color: mode == "light" ? "black" : "white" }}
//               />
//             ) : (
//               <LightModeIcon
//                 sx={{ color: mode == "light" ? "black" : "white" }}
//               />
//             )}
//           </IconButton>
//         </Box>
//       </Toolbar>
//       {renderMobileMenu}
//       {renderMenu}
//     </AppBar>
//   );
// }