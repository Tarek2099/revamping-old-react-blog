import React from "react";
import { Outlet } from "react-router";
import Footer from "../Components/Footer/Footer.jsx";
import Header from "../Components/Header/Header.jsx";

const Layout = () => {
  return (
    <>
      <Header />

      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
