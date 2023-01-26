import HomeIcon from "@mui/icons-material/Home";
import WorkIcon from "@mui/icons-material/Work";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import NotificationsIcon from "@mui/icons-material/Notifications";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import EventNoteIcon from "@mui/icons-material/EventNote";
import Person2Icon from "@mui/icons-material/Person2";

export const USER_SIDEBAR_LINKS = [
  {
    title: "Home",
    icon: HomeIcon,
    href: "/",
  },
  {
    title: "Schedules",
    icon: EventNoteIcon,
    href: "/user/schedules",
  },
  {
    title: "Applied Jobs",
    icon: WorkIcon,
    href: "/user/applied-jobs",
  },
  {
    title: "Messages",
    icon: ChatBubbleIcon,
    href: "/user/inbox",
  },
  {
    title: "Notifications",
    icon: NotificationsIcon,
    href: "/user/notifications",
  },
  {
    title: "Friend Requests",
    icon: GroupAddIcon,
    href: "/user/requests",
  },
  {
    title: "Profile",
    icon: Person2Icon,
    href: "/user/profile",
  },
];
