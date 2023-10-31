import React, { useEffect } from "react";
import { useContext } from "react";
import { useState } from "react";
import { sidebarContext } from "../../../context/SidebarContext";
import { useLocation, useNavigate } from "react-router-dom";
import { useTheme } from "@material-ui/core";

function NavbarLogic() {
  let [searchedWord, setSearchedWord] = useState(
    localStorage.getItem("searchedWord")
  );

  let theme = useTheme();

  const { open, handleDrawerOpen } = useContext(sidebarContext);

  let [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));


  const location = useLocation();

  let navigate = useNavigate();

  const [anchorElUser, setAnchorElUser] = useState(null);

  //UseEffect To Handle User Name in Navbar
  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("user")));
  }, [localStorage.getItem("user")]);
  

  //OnChange Navbar Search Input
  let handleChangeSearchedWord = (e) => {
    localStorage.setItem("searchedWord", e.target.value);
    setSearchedWord(localStorage.getItem("searchedWord"));
    navigate("/products");
  };

  //Handle Navbar Dropdown Menu

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleProfilePage = (role) => {
    handleCloseUserMenu();
    if (role === "admin") {
      navigate("/admin/allProducts");
    } else {
      navigate("/user/profile");
    }
  };

  //Handle Logout
  const handleLogout = () => {
    handleCloseUserMenu();
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    navigate("/");
    // window.location.reload();
  };

  return [
    theme,
    user,
    open,
    handleDrawerOpen,
    location,
    searchedWord,
    handleChangeSearchedWord,
    anchorElUser,
    handleOpenUserMenu,
    handleProfilePage,
    handleLogout,
    handleCloseUserMenu,
  ];
}

export default NavbarLogic;
