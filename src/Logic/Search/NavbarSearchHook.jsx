import React, { useEffect } from "react";
import { useContext } from "react";
import { useState } from "react";
import { menuContext } from "../../context/MenuContext";
import { sidebarContext } from "../../context/SidebarContext";
import { useTheme } from "@emotion/react";
import { useLocation, useNavigate } from "react-router-dom";
import ProductsPageHook from "../Product/ProductsPageHook";

function NavbarSearchHook() {
  let [searchedWord, setSearchedWord] = useState("");
  let theme = useTheme();

  let { menuState, setMenuState } = useContext(menuContext);
  const { open, handleDrawerOpen } = useContext(sidebarContext);

  const location = useLocation();

  let navigate = useNavigate();

  let [, , , , , getProducts] = ProductsPageHook();

  let onChangeSearchedWord = (e) => {
    localStorage.setItem("searchedWord", e.target.value);
    setSearchedWord(e.target.value);
    navigate("/products");
  };

  useEffect(() => {
    getProducts();
  }, [searchedWord]);

  const [anchorElUser, setAnchorElUser] = useState(null);

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

  const handleLogout = () => {
    handleCloseUserMenu();
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    navigate("/");
  };

  return [
    theme,
    menuState,
    setMenuState,
    open,
    handleDrawerOpen,
    location,
    searchedWord,
    onChangeSearchedWord,
    anchorElUser,
    handleOpenUserMenu,
    handleProfilePage,
    handleLogout,
    handleCloseUserMenu,
  ];
}

export default NavbarSearchHook;
