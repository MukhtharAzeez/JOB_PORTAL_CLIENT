import * as React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import ChatTwoToneIcon from "@mui/icons-material/ChatTwoTone";
import HomeTwoToneIcon from "@mui/icons-material/Home";
import WorkIcon from "@mui/icons-material/Work";
import Link from "next/link";

export default function MobileBottom() {
  const [value, setValue] = React.useState("Home");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <BottomNavigation
      sx={{
        position: "fixed",
        left: 0,
        bottom: 0,
        right: 0,
        display: { xs: "flex", sm: "none" },
      }}
      value={value}
      onChange={handleChange}
    >
      <BottomNavigationAction
        label="Home"
        value="home"
        icon={<HomeTwoToneIcon />}
      />
      <BottomNavigationAction label="Jobs" value="Jobs" icon={<WorkIcon />} />
      <Link href="/User/Inbox">
        <BottomNavigationAction
          label="Messages"
          value="Messages"
          icon={<ChatTwoToneIcon />}
        />
      </Link>
      <BottomNavigationAction
        label="profile"
        value="profile"
        icon={
          <img
            width="20"
            src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          />
        }
      />
      <BottomNavigationAction
        label="Messages"
        value="Messages"
        icon={<ChatTwoToneIcon />}
        sx={{ display: "none" }}
      />
    </BottomNavigation>
  );
}
