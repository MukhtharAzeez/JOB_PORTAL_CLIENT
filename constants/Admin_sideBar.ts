import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import BusinessIcon from '@mui/icons-material/Business';

export const ADMIN_SIDE_BAR_LINKS = [
  {
    title: "Home",
    icon: HomeOutlinedIcon,
    href: "/admin",
  },
  {
    title: "Companies",
    icon: BusinessIcon,
    href: "/admin/company",
  },
  {
    title: "Users",
    icon: PeopleOutlineIcon,
    href: "/admin/users",
  },
  {
    title: "Notifications",
    icon: NotificationsNoneOutlinedIcon,
    href: "/admin/notifications",
  },
  {
    title: "Messages",
    icon: ChatBubbleOutlineOutlinedIcon,
    href: "/admin/messages",
  },
  {
    title: "Profile",
    icon: AccountCircleOutlinedIcon,
    href: "/admin/profile",
  },
];
