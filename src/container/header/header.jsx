import "./header.scss";

import { useState } from "react";
import { NavLink } from "react-router-dom";
import { styled } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import DragHandleIcon from "@mui/icons-material/DragHandle";
import SearchIcon from "@mui/icons-material/Search";
import { CardMedia, Link } from "@mui/material";

import ShopBar from "../../assets/images/shopbar.svg";
import userBar from "../../assets/images/user.svg";
import LogoSite from "../../assets/images/logoSite.png";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  "&:hover": {
    backgroundColor: "white",
    border: "1px solid black",
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
  border: "1px solid darkgray",
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "black",
  "& .MuiInputBase-input": {
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    paddingRight: "6px",
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

export const Header = () => {
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);

  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

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
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <MenuItem>
          <NavLink
            to="/"
            className="header__links"
            style={{ margin: "5px 10px" }}
          >
            Footwear
            <span></span>
          </NavLink>
        </MenuItem>
        <MenuItem>
          <NavLink
            to="/about-us"
            className="header__links"
            style={{ margin: "5px 10px" }}
          >
            About us
            <span></span>
          </NavLink>
        </MenuItem>
        <MenuItem>
          <NavLink
            to="/products"
            className="header__links"
            style={{ margin: "5px 10px" }}
          >
            Products
            <span></span>
          </NavLink>
        </MenuItem>
        <MenuItem>
          <NavLink
            to="/sale"
            className="header__links"
            style={{ margin: "5px 10px" }}
          >
            Sale
            <span></span>
          </NavLink>
        </MenuItem>
      </Box>
    </Menu>
  );

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          position="sticky"
          sx={{ background: "#F5F5F5", boxShadow: "none" }}
        >
          <Toolbar>
            <Link href="/">
              <CardMedia
                image={LogoSite}
                sx={{
                  pl: "12px",
                  height: { xs: "30px", sm: "40px", md: "47px" },
                  width: { xs: "31px", sm: "41px", md: "48px" },
                }}
              />
            </Link>

            <Box sx={{ flexGrow: 1 }} />
            <Box
              sx={{
                maxWidth: "600px",
                width: "100%",
                display: { xs: "none", md: "flex" },
                justifyContent: "space-evenly",
              }}
            >
              <NavLink
                to="/"
                className="header__links"
                style={{ padding: "5px 10px" }}
              >
                Footwear
                <span></span>
              </NavLink>
              <NavLink
                to="/about-us"
                className="header__links"
                style={{ padding: "5px 10px" }}
              >
                About us
                <span></span>
              </NavLink>
              <NavLink
                to="/products"
                className="header__links"
                style={{ padding: "5px 10px" }}
              >
                Products
                <span></span>
              </NavLink>
              <NavLink
                to="/sale"
                className="header__links"
                style={{ padding: "5px 10px" }}
              >
                Sale
                <span></span>
              </NavLink>
            </Box>

            <Box sx={{ flexGrow: 1 }} />
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Search>
                <SearchIconWrapper>
                  <SearchIcon sx={{ color: "black" }} />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Search…"
                  inputProps={{ "aria-label": "search" }}
                />
              </Search>
              <Box sx={{ display: "flex" }}>
                <IconButton
                  size="large"
                  aria-label="show 4 new mails"
                  color="inherit"
                >
                  <CardMedia
                    image={userBar}
                    sx={{ height: "28px", width: "28px" }}
                  />
                  <Badge
                    badgeContent={0}
                    color="error"
                    sx={{ mb: { xs: "-22px", sm: "-25px" }, fontSize: "6px" }}
                  />
                </IconButton>
                <IconButton
                  size="large"
                  aria-label="show 17 new notifications"
                  color="inherit"
                >
                  <CardMedia
                    image={ShopBar}
                    sx={{ height: "28px", width: "28px" }}
                  />
                  <Badge
                    badgeContent={3}
                    color="error"
                    sx={{ mb: { xs: "-22px", sm: "-25px" }, fontSize: "6px" }}
                  />
                </IconButton>
              </Box>
            </Box>
            <Box sx={{ display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="show more"
                aria-controls={mobileMenuId}
                aria-haspopup="true"
                onClick={handleMobileMenuOpen}
                color="black"
              >
                <DragHandleIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </AppBar>
        {renderMobileMenu}
      </Box>
    </>
  );
};
