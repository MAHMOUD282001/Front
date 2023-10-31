import React from "react";
import Navbar from "./components/Utility/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./components/Utility/Footer";

function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
