import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MessageIcon from "@mui/icons-material/Message";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MoreIcon from "@mui/icons-material/MoreVert";
import HomeTwoToneIcon from "@mui/icons-material/Home";
import SettingsIcon from "@mui/icons-material/Settings";
import WorkIcon from "@mui/icons-material/Work";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { changeTheme } from "../../../redux/user/ThemeSlice";

interface Props {
  mode: String;
}

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "black",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

export default function NavBar({ mode }: Props) {
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] =
    React.useState<null | HTMLElement>(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      {" "}
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <HomeTwoToneIcon />
        </IconButton>
        <p>Home</p>
      </MenuItem>
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <WorkIcon />
        </IconButton>
        <p>Jobs</p>
      </MenuItem>
      <Link href="/User/Inbox" className="pt-3">
        <MenuItem>
          <IconButton
            size="large"
            aria-label="show 4 new mails"
            color="inherit"
          >
            <Badge badgeContent={4} color="error">
              <MessageIcon />
            </Badge>
          </IconButton>
          <p>Messages</p>
        </MenuItem>
      </Link>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={17} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem
        onClick={() => {
          dispatch(changeTheme(mode))
        }}
      >
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          {mode === "light" ? <DarkModeIcon /> : <LightModeIcon />}
        </IconButton>
        {mode === "light" ? <p>Dark Mode</p> : <p>Light Mode</p>}
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <NotificationsIcon />
        </IconButton>
        <p>Settings</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <AppBar
      position="sticky"
      sx={{ backgroundColor: mode == "light" ? "white" : "black", height: 60 }}
    >
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          aria-label="open drawer"
          sx={{ mr: 2, color: mode == "light" ? "black" : "white" }}
        >
          <MenuIcon />
        </IconButton>
        <Typography
          variant="h6"
          noWrap
          component="div"
          sx={{
            display: { xs: "none", sm: "block" },
            color: mode == "light" ? "black" : "white",
          }}
        >
          PORTAL
        </Typography>
        <Search sx={{ color: mode == "light" ? "black" : "white" }}>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ "aria-label": "search" }}
          />
        </Search>

        <Box sx={{ flexGrow: 1 }} />
        <Box sx={{ display: { xs: "none", md: "flex" } }}>
          <IconButton
            size="large"
            aria-label="show 4 new mails"
            color="inherit"
            sx={{ "&:hover": { backgroundColor: "transparent" } }}
          >
            <HomeTwoToneIcon
              sx={{ color: mode == "light" ? "black" : "white" }}
            />
          </IconButton>

          <IconButton
            size="large"
            aria-label="show 17 new notifications"
            color="inherit"
            sx={{ "&:hover": { backgroundColor: "transparent" } }}
          >
            <WorkIcon sx={{ color: mode == "light" ? "black" : "white" }} />
          </IconButton>

          <Link href="/User/Inbox" className="pt-3">
            <IconButton
              size="large"
              aria-label="show 4 new mails"
              color="inherit"
              sx={{ "&:hover": { backgroundColor: "transparent" } }}
            >
              <Badge badgeContent={4} color="error">
                <MessageIcon
                  sx={{ color: mode == "light" ? "black" : "white" }}
                />
              </Badge>
            </IconButton>
          </Link>

          <IconButton
            size="large"
            aria-label="show 17 new notifications"
            color="inherit"
            sx={{ "&:hover": { backgroundColor: "transparent" } }}
          >
            <Badge badgeContent={17} color="error">
              <NotificationsIcon
                sx={{ color: mode == "light" ? "black" : "white" }}
              />
            </Badge>
          </IconButton>

          <IconButton
            size="large"
            aria-label="show 17 new notifications"
            color="inherit"
            onClick={() => {
              dispatch(changeTheme(mode))
            }}
            sx={{ "&:hover": { backgroundColor: "transparent" } }}
          >
            {mode === "light" ? (
              <DarkModeIcon
                sx={{ color: mode == "light" ? "black" : "white" }}
              />
            ) : (
              <LightModeIcon
                sx={{ color: mode == "light" ? "black" : "white" }}
              />
            )}
          </IconButton>
          <IconButton
            size="large"
            aria-label="show 17 new notifications"
            color="inherit"
            sx={{ "&:hover": { backgroundColor: "transparent" } }}
          >
            <SettingsIcon sx={{ color: mode == "light" ? "black" : "white" }} />
          </IconButton>

          <Link href="/User/Profile">
            <Avatar
              sx={{ width: 30, height: 30, marginTop: "10px", margin: "20px" }}
              alt="profile"
              src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            />
          </Link>
        </Box>
        <Box sx={{ display: { xs: "none", sm: "flex", md: "none" } }}>
          <IconButton
            size="large"
            aria-label="show more"
            aria-controls={mobileMenuId}
            aria-haspopup="true"
            onClick={handleMobileMenuOpen}
            color="inherit"
            sx={{ "&:hover": { backgroundColor: "transparent" } }}
          >
            <MoreIcon sx={{ color: mode === "light" ? "black" : "white" }} />
          </IconButton>
        </Box>
        <Box sx={{ display: { xs: "flex", sm: "none" } }}>
          <IconButton
            size="large"
            aria-label="show more"
            aria-controls={mobileMenuId}
            aria-haspopup="true"
            color="inherit"
            onClick={() => {
              dispatch(changeTheme(mode))
            }}
            sx={{ "&:hover": { backgroundColor: "transparent" } }}
          >
            {mode === "light" ? (
              <DarkModeIcon
                sx={{ color: mode == "light" ? "black" : "white" }}
              />
            ) : (
              <LightModeIcon
                sx={{ color: mode == "light" ? "black" : "white" }}
              />
            )}
          </IconButton>
        </Box>
      </Toolbar>
      {renderMobileMenu}
      {renderMenu}
    </AppBar>
  );
}
